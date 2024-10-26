import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    formNo: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        fontSize: 6,
        marginTop: -15,
    },
    permitTitle: {
        justifyContent: "center",
        alignItems: "center",
    },
    permitTitleText: {
        fontSize: 8,
    },
    permitTitleText1: {
        fontSize: 8,
        fontWeight: 'bold',
    },
    permitTitleText2: {
        fontSize: 8,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    permitTitleText3: {
        fontSize: 8,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    noApplication: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 6,
        marginBottom: 10,
    },
    numberContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%', 
        marginBottom: 10, 
    },
    numberText: {
        fontSize: 6,
        textAlign: 'left',
        width: '30%',
        marginRight: 53,
        marginBottom: 2,
    },
    numberText1: {
        fontSize: 6,
        textAlign: 'left',
        width: '30%',
        marginRight: 7,
        left: 5,
        marginBottom: 2,
    },
    numberText2: {
        fontSize: 6,
        textAlign: 'left',
        width: '30%',
        marginBottom: 2,
    },
    boxStyleContainer: {
        marginTop: -10,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 2,
    },
    boxStyleContainer2: {
        marginTop: -10,
        justifyContent: 'center',
        width: '100%',
        marginBottom: 2,
    },
    boxContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '30%',
    },
    boxContainer1: {
        flexDirection: 'row',
        justifyContent: 'center',  
        alignItems: 'center',
        marginHorizontal: 30,
        width: '30%',
    },
    boxContainer2: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: '30%',
    },
    dateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 2,
        marginTop: 13,
    },
    dateText: {
        width: '50%',
        alignItems: 'flex-start',
    },
    dateText1: {
        width: '50%',
        alignItems: 'flex-end',
    },
    dateLabel: {
        fontSize: 6,
        textAlign: 'center',
        borderTop: '1px solid black',
        paddingVertical: 2,
        paddingHorizontal: 30,
    },
    printText: {
        fontSize: 6,
        textAlign: 'left',
        alignItems: 'flex-start',
    },
    container: {
        marginTop: 2,
        width: '100%',
        padding: 10,
        border: '1px solid black',
        borderBottom: 'none',
        flexDirection: 'column',
        marginBottom: -5,
        fontSize: 6,
    },
    container2: {
        marginTop: -1,
        width: '100%',
        padding: 10,
        border: '1px solid black',
        borderBottom: 'none',
        flexDirection: 'column',
        marginBottom: -5,
        fontSize: 6,
    },
    container3: {
        textAlign: 'left',
        marginTop: -1,
        width: '100%',
        padding: 10,
        border: '1px solid black',
        borderBottom: 'none',
        flexDirection: 'column',
        marginBottom: -5,
        fontSize: 6,
    },
    container4: {
        textAlign: 'left',
        marginTop: -1,
        width: '100%',
        padding: 10,
        border: '1px solid black',
        borderBottom: 'none',
        flexDirection: 'column',
        fontSize: 6,
        marginBottom: -18,
    },
    container5: {
        textAlign: 'left',
        marginTop: -1,
        width: '100%',
        padding: 10,
        border: '1px solid black',
        flexDirection: 'column',
        borderBottom: 'none',
        fontSize: 6,
        marginBottom: -18,
    },
    title: {
        textAlign: 'center',
        fontSize: 10,
        fontWeight: 'bold',
        marginBottom: 3,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
    },
    rowBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
        paddingHorizontal: 45,
    },
    rowBox2: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 6,
        paddingHorizontal: 45,
    },
    rowBox3: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 6,
    },
    columnBox: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: 6,
    },
    rowOption: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 2, 
        marginLeft: 10, 
    },
    rowOption2: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 2, 
        marginLeft: -120, 
    },
    scopeOfWorkRow: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Space between the two columns
        width: '100%',
    },
    scopeColumn: {
        flexDirection: 'column',
        width: '40%', // Adjust width for each column
    },
    scopeColumn2: {
        flexDirection: 'column',
        width: '20%', // Adjust width for each column
    },
    scopeColumn3: {
        flexDirection: 'column',
        width: '20%', // Adjust width for each column
    },
    scopeColumn4: {
        flexDirection: 'column',
        width: '50%', // Adjust width for each column
    },
    scopeColumn5: {
        flexDirection: 'column',
        width: '25%', // Adjust width for each column
    },
    
    label: {
        width: '50%',
        fontSize: 6,
    },
    label2: {
        width: '50%',
        fontSize: 6,
        paddingHorizontal: 45,
    },
    label3: {
        width: '50%',
        fontSize: 6,
        paddingHorizontal: 40,
    },
    box2label: {
        width: '50%',
        fontSize: 6,
    },
    box2label2: {
        width: '50%',
        fontSize: 6,
        paddingHorizontal: 45,
    },
    box3label: {
        width: '30%',
        fontSize: 6,
    },
    box3label2: {
        width: '50%',
        fontSize: 6,
        paddingHorizontal: 13,
    },
    box4label: {
        width: '100%',
        fontSize: 6,
        marginBottom: 2,
        marginTop: 4,
        fontWeight: 'bold',
    },
    box4label2: {
        width: '100%',
        fontSize: 6,
    },
    box: {
        width: 15,
        height: 20,
        border: '1px solid black',
    },
    boxColumn: {
        width: 6,
        height: 8,
        border: '1px solid black',
        marginHorizontal: 8,
    },
    boxColumn2: {
        width: 6,
        height: 8,
        border: '1px solid black',
        marginHorizontal: 8,
    },
    line: {
        width: 2,
        marginTop: 0,
        padding: -10,
        backgroundColor: 'black',
        height: '185%',
    },
    line2: {
        width: 2,
        marginTop: 0,
        padding: -10,
        backgroundColor: 'black',
        height: '185%',
        marginLeft: 128,
    },
    boxLabelLine: {
        width: 92,
        backgroundColor: 'black',
        marginTop: 8,
        height: 1,
        marginLeft: -185,
    },
    boxLabelLine2: {
        width: 89,
        backgroundColor: 'black',
        marginTop: 8,
        height: 1,
        marginLeft: -182,
    },
    boxLabelLine3: {
        width: 107,
        backgroundColor: 'black',
        marginTop: 8,
        height: 1,
        marginLeft: -200,
    },
    boxLabelLine4: {
        width: 107,
        backgroundColor: 'black',
        marginTop: 8,
        height: 1,
        marginLeft: -200,
    },
    boxLabel2Line: {
        width: 197,
        backgroundColor: 'black',
        marginTop: 8,
        height: 1,
        marginLeft: -180,
    },
    boxLabel2Line2: {
        width: 165,
        backgroundColor: 'black',
        marginTop: 8,
        height: 1,
        marginLeft: -185,
    },
    boxLabel2Line3: {
        width: 103,
        backgroundColor: 'black',
        marginTop: 8,
        height: 1,
        marginLeft: -110,
    },
    boxLabel2Line4: {
        width: 178,
        backgroundColor: 'black',
        marginTop: 8,
        height: 1,
        marginLeft: -140,
    },
    multiCellBox: {
        flexDirection: 'row',
    },
    cell: {
        border: '1px solid black',
        width: '8.3%', // Dividing 100% by 12 cells gives ~8.3%
        minWidth: '8.3%', // Adjust width as needed
        minHeight: 20, // Adjust height as needed
        height: 20, // Adjust height as needed
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;
