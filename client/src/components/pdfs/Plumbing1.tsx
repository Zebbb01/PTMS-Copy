import { useState } from 'react';
import { Document, PDFViewer, Page, StyleSheet, View, pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import { PermitBodyBox1 } from './plumbing1/box/box1'; // Adjust the path as necessary
import { PermitBodyBox2 } from './plumbing1/box/box2';
import { PermitBodyBox3 } from './plumbing1/box/box3';
import { PermitBodyBox4 } from './plumbing1/box/box4';
import { PermitBodyBox5 } from './plumbing1/box/box5';
import { PermitBodyBox6 } from './plumbing1/box/box6';
import { PermitBodyBox7 } from './plumbing1/box/box7';
import { PermitBodyBox8 } from './plumbing1/box/box8';
import { PermitBodyBox9 } from './plumbing1/box/box9';
import { PermitBodyBox10 } from './plumbing1/box/box10';

function PlumbingPermit() {
    // Define sample data for testing
    const [formData, setFormData] = useState({
        firstName: 'John',
        lastName: 'Doe',
        middleInitial: 'A',
        taxAccountNo: '123456789',
        addressNo: '100',
        street: 'Main St',
        barangay: 'Barangay 1',
        city: 'Cityville',
        zipCode: '12345',
        telNo: '555-1234',
        ownedByEnterprise: 'Yes',
        formOfOwnership: 'Sole Proprietorship',
        location: 'Cityville, Lot 123',
        tctNo: 'TCT-1234',
        scopeOfWork: 'Residential Construction',
        characterOccupancy: 'Single Family',
    });

    // Render the document
    const doc = (
        <Document>
            <MyPDFDocument formData={formData} />
        </Document>
    );

    const downloadPDF = async () => {
        const blob = await pdf(doc).toBlob();
        saveAs(blob, 'plumbing_permit.pdf');
    };

    return (
        <>
            <div className="fixed top-0 w-full h-full bg-gray-800 opacity-75"></div>
            <div className="flex justify-center w-full h-full fixed top-0">
                <div className="flex flex-col mt-3 items-center h-[95%] py-4 w-[55%] bg-white rounded-md">
                    <h1 className='font-bold text-3xl mb-3'>Plumbing Permit PDF</h1>
                    <div className="max-w-screen-sm w-full h-full overflow-auto custom-scrollbar-small">
                        <PDFViewer className='w-full h-full' showToolbar={false}>
                            {doc}
                        </PDFViewer>
                    </div>
                    <div className="flex flex-col items-center w-full gap-4 mt-5">
                        <button 
                            onClick={downloadPDF} 
                            className="w-[85%] bg-orange-500 hover:opacity-75 text-white font-bold py-2 px-4 rounded w-1/2"
                        >
                            Download PDF
                        </button>
                        <button 
                            // onClick={() => setFormData({ /* Reset your state here */ })}
                            className='w-[85%] bg-black hover:opacity-75 text-white font-bold py-2 px-4 rounded w-1/2'
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

// Define the actual PDF document layout here
function MyPDFDocument({ formData }: { formData: any }) {
    return (
        <Page size="A4" style={styles.page}>
            <View style={styles.body1}>
                <PermitBodyBox1 permitInfo={formData} />
                <PermitBodyBox2 permitInfo={formData} />
                <PermitBodyBox3 permitInfo={formData} />
                <View style={styles.box4}>
                    <PermitBodyBox4 permitInfo={formData} />
                </View>
                <View style={styles.box5}>
                    <PermitBodyBox5 permitInfo={formData} />
                </View>
                <View style={styles.box6}>
                    <PermitBodyBox6 permitInfo={formData} />
                </View>
                <View style={styles.body2}>
                    <PermitBodyBox7 permitInfo={formData} />
                    <PermitBodyBox8 permitInfo={formData} />
                    <PermitBodyBox9 permitInfo={formData} />
                    <PermitBodyBox10 permitInfo={formData} />
                </View>
            </View>
        </Page>
    );
}


// Define styles for the PDF layout
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    body1: {
        width: '100%',
        marginTop: 60,
        paddingHorizontal: 20,
    },
    body2: {
        width: '100%',
        marginTop: 40,
    },
    box4: {
        marginTop: 11,
        top: -121,
        bottom: 0,
        left: 290,
        width: '100%',
        position: 'relative',
    },
        box5: {
        width: '100%',
        marginTop: -118,
    },
    box6: {
        top: -89,
        bottom: 0,
        left: 290,
        width: '100%',
        position: 'relative',
    },
});


export default PlumbingPermit;
