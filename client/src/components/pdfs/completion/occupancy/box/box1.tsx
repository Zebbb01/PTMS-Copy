import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/box1'; // Import the styles

// Define the permit layout component
export function PermitBodyBox1({ permitInfo }: { permitInfo: any }) {
    // Dummy static data
    const defaultData = {
        labelData: 'John A. Doe',
        cellData: '123412341234',
        cellData2: '24682468',
        cellData3: '123123123123',
        checkboxData: 'Y',
    };

    const data = { ...defaultData, ...permitInfo };
    return (
        <>
        <View style={styles.containerTitle}>
            <Text style={styles.title}>Republic of the Philippines</Text>
            <Text style={styles.title}>Region XI</Text>
            <Text style={styles.title}>OFFICE OF THE BUILDING OFFICIAL</Text>
            <Text style={styles.title}>Province of Davao</Text>
            <Text style={styles.title}>City of Panabo</Text>
            <Text style={styles.title}>-oOo-</Text>

            <Text style={styles.titleMain}>CERTIFICATE OF COMPLETION</Text>
            
            
        </View>

        <View style={styles.containerForm}>
            <View style={styles.row}>
                <Text style={styles.label}>This is certified that the sanitary/plumbing installation of </Text>
                <Text style={styles.underlineData}>{data.labelData || ' '}</Text>
                <Text style={styles.label}>building of</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.underlineData}>{data.labelData || ' '}</Text>
                <Text style={styles.label}>covered by Building Permit No</Text>
                <Text style={styles.underlineData}>{data.labelData || ' '}</Text>
                <Text style={styles.label}>has been completed in</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>accordance with the approved plans and specifications and the provisions of the National Building Code (P.D. </Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>1096).</Text>
            </View>
        </View>

        <View style={styles.containerForm}>
            <View style={styles.row}>
                <Text style={styles.label}>That the actual cost of installation is </Text>
                <Text style={styles.underlineData}>{data.labelData || ' '}</Text>
                <Text style={styles.label}>, that the installation is ready for final</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>inspection, for the issuance of the certificate of final inspection</Text>
            </View>
        </View>
        

        <View style={styles.containerFormDone}>
            <View style={styles.row}>
                <Text style={styles.label}>Done this </Text>
                <Text style={styles.underlineData}>{data.labelData || ' '}</Text>
                <Text style={styles.label}> day of </Text>
                <Text style={styles.underlineData}>{data.labelData || ' '}</Text>
                <Text style={styles.label}>20</Text>
                <Text style={styles.underlineData}>{data.labelData || ' '}.</Text>
            </View>
        </View>
        

        <Text style={styles.titleMainSecond}>INSTALLATION IS UNDER CONTRACT:</Text>
        
        <View style={styles.containerSecondForm}>
            <View style={styles.columnSecond}>
                <Text style={styles.underlineDataSecond}>{data.labelData || ' '}.</Text>
                <Text style={styles.label}>Sanitary Engineer/Master Plumber</Text>
                <Text style={styles.label}>Signed and Sealed Plans</Text>
            </View>
            <View style={styles.columnSecond}>
                <Text style={styles.underlineDataSecond}>{data.labelData || ' '}.</Text>
                <Text style={styles.label}>Sanitary Engineer/Master Plumber</Text>
                <Text style={styles.label}>In-Charge of Installation</Text>
            </View>
        </View>
        

        <View style={styles.containerSecondForm}>
            <View style={styles.columnSecond2}>
                <View style={styles.row}>
                    <Text style={styles.label}>P.R.C. Reg. No. </Text>
                    <Text style={styles.underlineDataSecond2}>{data.labelData || ' '}.</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>P.T.R. No. </Text>
                    <Text style={styles.underlineDataSecond2}>{data.labelData || ' '}.</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Date Issued </Text>
                    <Text style={styles.underlineDataSecond2}>{data.labelData || ' '}.</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Address </Text>
                    <Text style={styles.underlineDataSecond2}>{data.labelData || ' '}.</Text>
                </View>
            </View>
            <View style={styles.columnSecond2}>
                <View style={styles.row}>
                    <Text style={styles.label}>P.R.C. Reg. No. </Text>
                    <Text style={styles.underlineDataSecond2}>{data.labelData || ' '}.</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>P.T.R. No. </Text>
                    <Text style={styles.underlineDataSecond2}>{data.labelData || ' '}.</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Date Issued </Text>
                    <Text style={styles.underlineDataSecond2}>{data.labelData || ' '}.</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Address </Text>
                    <Text style={styles.underlineDataSecond2}>{data.labelData || ' '}.</Text>
                </View>
            </View>
        </View>   

            <View style={styles.containerSecondForm}>
                <View style={styles.columnSecond}>
                    <Text style={styles.underlineDataSecond}>{data.labelData || ' '}.</Text>
                    <Text style={styles.label}>Contractor (If any, under Contract)</Text>
                </View>
                <View style={styles.columnSecond}>
                    <Text style={styles.underlineDataSecond}>{data.labelData || ' '}.</Text>
                    <Text style={styles.label}>Owner/Applicant</Text>
                </View>
            </View>

        <View style={styles.containerFormDone2}>
            <View style={styles.row}>
                <Text style={styles.label}>LICENSE NO. </Text>
                <Text style={styles.underlineData}>{data.labelData || ' '}</Text>
                <Text style={styles.label}> TIN </Text>
                <Text style={styles.underlineData}>{data.labelData || ' '}</Text>
                <Text style={styles.label}> Date Submitted </Text>
                <Text style={styles.underlineData}>{data.labelData || ' '}.</Text>
            </View>
        </View>

        <View style={styles.containerDate}>
            <Text style={styles.underlineDate}>{data.labelData || ' '}</Text>
            <Text style={styles.labelDate}> Date </Text>
        </View>

        <Text style={styles.titleMain}>CERTIFICATE OF FINAL INSPECTION</Text>
        
        <View style={styles.containerFinal}>
            <Text style={styles.underlineFinal}>{data.labelData || ' '}</Text>
            <Text style={styles.label}> Name of Applicant </Text>
        </View>
        <View style={styles.containerFinal}>
            <Text style={styles.underlineFinal}>{data.labelData || ' '}</Text>
            <Text style={styles.label}> Building Permit Number </Text>
        </View>
        <View style={styles.containerFinal}>
            <Text style={styles.underlineFinal}>{data.labelData || ' '}</Text>
            <Text style={styles.label}> Location of Construction </Text>
        </View>
        <View style={styles.containerFinal}>
            <Text style={styles.underlineFinal}>{data.labelData || ' '}</Text>
            <Text style={styles.label}> Date of Completion </Text>
        </View>
        <View style={styles.containerFinal}>
            <Text style={styles.underlineFinal}>{data.labelData || ' '}</Text>
            <Text style={styles.label}> Use/Type of Construction </Text>
        </View>
        <View style={styles.containerFinal}>
            <Text style={styles.underlineFinal}>{data.labelData || ' '}</Text>
            <Text style={styles.label}> Cost As-Built </Text>
        </View>
        
        <View style={styles.containerForm}>
            <View style={styles.row}>
                <Text style={styles.label}>The plumbing installation of the above described building has been found to be in order and therefore the</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>certificate of occupancy is hereby recommended for approval.</Text>
            </View>
        </View>
        <View style={styles.containerDate}>
            <Text style={styles.underline}>ENGR. BERNARDO C. RABANOZ, JR.</Text>
            <Text style={styles.labelDate}> Chief, Sanitary/Plumbing Section </Text>
        </View>
        </>
    );
}
