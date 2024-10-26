import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    formNo: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        fontSize: 7,
        marginTop: -1,
    },
    container: {
        width: '100%',
        padding: 2,
        border: '1px solid black',
        textAlign: 'left',
        fontSize: 7,
        marginBottom: -5,
    },
    printText: {
        fontSize: 6,
        textAlign: 'left',
        alignItems: 'flex-start',
    },
    boxStyleContainer2: {
        marginTop: -10,
        justifyContent: 'center',
        width: '100%',
        marginBottom: 2,
    },
    container3: {
        textAlign: 'left',
        marginTop: -1,
        width: '100%',
        padding: 10,
        border: '1px solid black',
        borderTop: 'none',
        flexDirection: 'column',
        fontSize: 7,
    },
    columnBox: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: 6,
    },
    rowOption: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 1,
        marginLeft: 10,
    },
    rowOptionLast: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: -13,
        marginTop: 3,
        marginLeft: -10,
    },
    scopeOfWorkRow: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Space between the two columns
        width: '100%',
    },
    scopeColumn: {
        flexDirection: 'column',
        width: '100%', // Adjust width for each column
    },
    titlelabel: {
        width: 8, // Adjust width as necessary for alignment
        marginLeft: -8,
        fontSize: 7,
        marginBottom: 2,
        marginTop: 4,
        fontWeight: 'bold',
        textAlign: 'center', // Center-align text
    },
    titlelabel2: {
        width: '2%', // Adjust width as necessary for alignment
        marginLeft: 67,
        fontSize: 7,
        marginBottom: 2,
        marginTop: 4,
        fontWeight: 'bold',
        textAlign: 'center', // Center-align text
    },
    titlelabelSplit1: {
        width: '30%', // Adjust width for alignment with box
        fontSize: 7,
        marginBottom: 2,
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: -43,  // Align the line properly with the first box
    },
    titlelabelSplit2: {
        width: '20%', // Adjust width for alignment with box
        fontSize: 7,
        marginBottom: 2,
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: -77,  // Align the line properly with the first box
    },
    titlelabelSplit3: {
        width: '10%', // Adjust width for alignment with box
        fontSize: 7,
        marginBottom: 2,
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: -16,  // Align the line properly with the first box
    },
    titlelabel3: {
        width: '20%', // Adjust width for alignment
        fontSize: 7,
        marginBottom: 2,
        marginTop: 4,
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: -22,  // Align the line properly with the first box
    },
    titlelabel4: {
        width: '30%', // Adjust width for alignment
        fontSize: 7,
        marginBottom: 2,
        marginTop: 4,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    box4label: {
        width: '100%',
        fontSize: 7,
        marginBottom: 2,
        marginTop: 8,
        marginLeft: -4,
        fontWeight: 'bold',
    },
    boxlabel2: {
        width: '36%',
        fontSize: 7,
        marginLeft: 6,
    },
    box2label2: {
        width: '36%',
        fontSize: 7,
        marginLeft: 6,
    },
    box2label3: {
        width: '15%',
        fontSize: 7,
        marginLeft: 6,
    },
    boxOtherLabel: {
        width: '25%',
        fontSize: 10,
        marginLeft: 6,
    },
    boxlLabelLast: {
        width: '23%',
        fontSize: 7,
        marginLeft: 6,
    },
    total: {
        width: '20%',
        fontSize: 10,
        marginLeft: 6,
    },
    total2: {
        width: '20%',
        fontSize: 10,
        marginLeft: 6,
    },
    boxColumn: {
        width: "4%",
        height: 10,
        border: '2px solid black',
        marginLeft: 16,
    },
    boxColumn2: {
        width: "4%",
        height: 10,
        border: '2px solid black',
        marginLeft: 28,
    },
    boxColumn3: {
        width: "4%",
        height: 10,
        border: '2px solid black',
        marginLeft: 20,
    },
    box2Column: {
        width: "4%",
        height: 10,
        border: '2px solid black',
        marginLeft: 15,
    },
    box2Column2: {
        width: "4%",
        height: 10,
        border: '2px solid black',
        marginLeft: 38,
    },
    box2Column3: {
        width: "4%",
        height: 10,
        border: '2px solid black',
        marginLeft: 30,
    },

    boxOther: {
        width: "4%",
        height: 12,
        border: '2px solid black',
        marginLeft: -14,
    },    
    boxColumnLast: {
        width: "3%",
        height: 11,
        border: '2px solid black',
        marginLeft: 20,
    },
    boxLabelLine: {
        width: 40,
        backgroundColor: 'black',
        marginTop: 10,  // Ensure it's aligned with the box
        height: 1,
        marginLeft: -14,  // Align the line properly with the first box
    },
    box2LabelLine: {
        width: 40,
        backgroundColor: 'black',
        marginTop: 10,  // Ensure it's aligned with the box
        height: 1,
        marginLeft: -14,  // Align the line properly with the first box
    },
    boxLabelLine2: {
        width: 90,
        backgroundColor: 'black',
        marginTop: 10,  // Ensure it's aligned with the box
        height: 1,
        marginLeft: -14,  // Align the line properly with the first box
    },
    boxLabelLine3: {
        width: 90,
        backgroundColor: 'black',
        marginTop: 10,  // Ensure it's aligned with the box
        height: 1,
        marginLeft: 123,  // Align the line properly with the first box
    },
    boxOtherLine: {
        width: 75,
        backgroundColor: 'black',
        marginTop: 10,  // Ensure it's aligned with the box
        height: 1,
        marginLeft: -14,  // Align the line properly with the first box
    },
    box2label2line2: {
        width: 110,
        backgroundColor: 'black',
        marginTop: 10,  // Ensure it's aligned with the box
        height: 1,
       
    },
});

export default styles;
