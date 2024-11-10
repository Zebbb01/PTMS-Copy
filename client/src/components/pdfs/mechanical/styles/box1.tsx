import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    formNo: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        fontSize: 6,
    },
    permitTitle: {
        justifyContent: "center",
        alignItems: "center",
    },
    permitTitleText: {
        fontSize: 8,
        marginBottom: 4,
    },
    permitTitleText1: {
        fontSize: 10,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    permitTitleText2: {
        fontSize: 8,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    permitTitleText3: {
        fontSize: 10,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    noApplication: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 6,
        marginTop: 10,
    },
    numberContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%', 
    },
    numberText: {
        fontSize: 8,
        textAlign: 'center',
        width: '30%',
        right: 30,
    },
    numberText1: {
        fontSize: 8,
        textAlign: 'center',
        width: '30%',
        right: 40,
        bottom: 2,
    },
    numberText2: {
        fontSize: 8,
        textAlign: 'center',
        width: '30%',
        left: 30,
    },
    boxStyleContainer: {
        flexDirection: 'row',
        width: '100%',
        marginBottom: 20,
    },

    boxStyleContainer2: {
        flexDirection: 'row',
        width: '100%',
        marginBottom: 2,
    },
    boxStyleContainer4: {
        justifyContent: 'center',
        width: '100%',
        marginTop: 2,
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
        marginHorizontal: 27,
        width: '30%',
    },
    printText: {
        marginTop: 10,
        fontSize: 6,
        textAlign: 'left',
        alignItems: 'flex-start',
        marginBottom: 2,
    },
    dateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
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
        fontSize: 8,
        textAlign: 'center',
        borderTop: '1px solid black',
        paddingVertical: 2,
        paddingHorizontal: 50,
    },
    dateLabel2: {
        fontSize: 8,
        textAlign: 'center',
        borderTop: '1px solid black',
        paddingVertical: 2,
        paddingHorizontal: 63,
    },
    container: {
        width: '100%',
        padding: 4,
        paddingBottom: 8,
        border: '2px solid black',
        borderBottom: 'none',
        flexDirection: 'column',
        fontSize: 6,
    },
    container4: {
        width: '100%',
        padding: 4,
        paddingBottom: 14,
        border: '2px solid black',
        borderBottom: 'none',
        flexDirection: 'column',
        fontSize: 6,
    },
    container5: {
        textAlign: 'left',
        width: '100%',
        border: '2px solid black',
        borderBottom: 'none',
        flexDirection: 'column',
        fontSize: 6,
        padding: 4,
    },
    container6: {
        width: '100%',
        padding: 4,
        border: '2px solid black',
        flexDirection: 'column',
        fontSize: 6,
    },
    title: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    row: {
        flexDirection: 'row',
    },
    column: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    columnBox: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    rowOption: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 1,
    },
    rowOption2: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 1,
    },
    rowOption3: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 1,
    },
    scopeOfWorkRow: {
        flexDirection: 'row',
        marginLeft: 10,
        justifyContent: 'space-between', // Space between the two columns
        width: '100%',
    },
    scopeColumn: {
        flexDirection: 'column',
        width: '40%', // Adjust width for each column
    },
    scopeColumn2: {
        flexDirection: 'column',
        width: '30%', // Adjust width for each column
    },
    scopeColumn3: {
        flexDirection: 'column',
        width: '30%', // Adjust width for each column
    },
    scopeColumn4: {
        flexDirection: 'column',
        width: '30%', // Adjust width for each column
    },
    scopeColumn5: {
        flexDirection: 'column',
        width: '30%', // Adjust width for each column
    },
    scopeColumn6: {
        flexDirection: 'column',
        width: '40%', // Adjust width for each column
    },
    
    label: {
        width: '30%',
        fontSize: 6,
    },
    label2: {
        width: '30%',
        fontSize: 6,

    },
    label3: {
        textAlign: 'right',
        width: '90%',
        fontSize: 6,
        bottom: 6,
    },
    rowlabel: {
        width: '30%',
        fontSize: 6,

    },
    rowlabel2: {
        width: '30%',
        fontSize: 6,
 

    },
    rowlabel6: {
        width: '20%',
        fontSize: 8,
    },
    box2label: {
        width: '30%',
        fontSize: 6,

    },
    box2label2: {
        width: '30%',
        fontSize: 6,
 
    },
    box2label3: {
        width: '30%',
        fontSize: 6,
    },
    box3label: {
        width: '30%',
        fontSize: 6,

    },
    box3label2: {
        width: '30%',
        fontSize: 6,
    },
    box4label: {
        width: '30%',
        fontSize: 8,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    box4label2: {
        width: '50%',
        fontSize: 5,
    },
    boxColumn: {
        width: 10,
        height: 8,
        minHeight: 8,
        minWidth: 10,
        border: '1px solid black',
        marginHorizontal: 4,
    },
    boxColumn2: {
        width: 10,
        height: 8,
        minHeight: 8,
        minWidth: 10,
        border: '1px solid black',
        marginHorizontal: 6,
    },
    line: {
        position: 'absolute',
        width: 2,
        backgroundColor: 'black',
        height: 24,
        left: 400,
    },
    line2: {
        position: 'absolute',
        width: 2,
        backgroundColor: 'black',
        height: 32,
        left: 150,
    },
    line3: {
        position: 'absolute',
        width: 2,
        backgroundColor: 'black',
        height: 32,
        left: 370,
    },
    line4: {
        position: 'absolute',
        width: 2,
        backgroundColor: 'black',
        height: 21,
        bottom: -10,
        left: 390,
    },
    multiCellBox: {
        flexDirection: 'row',
    },
    cell: {
        border: '2px solid black',
        width: '9.3%', // Dividing 100% by 12 cells gives ~8.3%
        minWidth: '9.3%', // Adjust width as needed
        minHeight: 20, // Adjust height as needed
        height: 20, // Adjust height as needed
        justifyContent: 'center',
        alignItems: 'center',
    },
    underline: {
        width: '50%', // Adjust width to match the text
        height: 1, // Thickness of the underline
        backgroundColor: 'black',
        marginTop: 5, // Adjust this to control the space between text and underline
        alignSelf: 'center',
        right: 38,
    },
    underline2: {
        width: '45%', // Adjust width to match the text
        height: 1, // Thickness of the underline
        backgroundColor: 'black',
        marginTop: 5, // Adjust this to control the space between text and underline
        alignSelf: 'center',
        right: 38,
    },
    underline3: {
        width: '69%', // Adjust width to match the text
        height: 1, // Thickness of the underline
        backgroundColor: 'black',
        marginTop: 5, // Adjust this to control the space between text and underline
        alignSelf: 'center',
        right: 38,
    },
    underline4: {
        width: '65%', // Adjust width to match the text
        height: 1, // Thickness of the underline
        backgroundColor: 'black',
        marginTop: 5, // Adjust this to control the space between text and underline
        alignSelf: 'center',
        right: 38,
    },

    underline5: {
        width: '190%', // Adjust width to match the text
        height: 1, // Thickness of the underline
        backgroundColor: 'black',
        marginTop: 5, // Adjust this to control the space between text and underline
        alignSelf: 'center',
        right: 20,
    },
    underline6: {
        width: '140%', // Adjust width to match the text
        height: 1, // Thickness of the underline
        backgroundColor: 'black',
        marginTop: 5, // Adjust this to control the space between text and underline
        alignSelf: 'center',
        right: 20,
    },
    underline7: {
        width: '38%', // Adjust width to match the text
        height: 1, // Thickness of the underline
        backgroundColor: 'black',
        marginTop: 5, // Adjust this to control the space between text and underline
        alignSelf: 'center',
        right: 20,
    },
    underline8: {
        width: '105%', // Adjust width to match the text
        height: 1, // Thickness of the underline
        backgroundColor: 'black',
        marginTop: 5, // Adjust this to control the space between text and underline
        alignSelf: 'center',
        right: 20,
    },
    box6label: {
        fontSize: 8,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    columnsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
    },
    column6: {
        width: '50%', // Adjust width as needed for even columns
    },
    checkboxRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 1,
    },
    checkbox: {
        width: 10,
        height: 8,
        minwidth: 10,
        minheight: 8,
        border: '1px solid black',
        marginRight: 6,
    },
    checkbox2: {
        width: 25,
        height: 8,
        minwidth: 25,
        minheight: 8,
        border: '1px solid black',
        marginRight: 6,
    },
    checkboxLabel: {
        width: '100%',
        fontSize: 6,
    },
    underlineBox6: {
        width: 500, // Adjust width to match the text
        height: 1, // Thickness of the underline
        backgroundColor: 'black',
        marginTop: 5, // Adjust this to control the space between text and underline
        alignSelf: 'center',
        right: 28,
    },
    
});

export default styles;
