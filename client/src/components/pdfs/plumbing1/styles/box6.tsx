import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    formNo: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        fontSize: 6,
        marginTop: 5,
    },
    printText: {
        fontSize: 6,
        textAlign: 'left',
        alignItems: 'flex-start',
        marginLeft: 10,
    },
    infoText: {
        paddingTop: 0,
        marginBottom: 5,
        marginLeft: 0,
        fontSize: 6,
        textAlign: 'left',
        alignItems: 'flex-start',
    },
    infoText2: {
        paddingTop: 0,
        marginBottom:5,
        marginLeft: -5,
        fontSize: 5,
        textAlign: 'left',
    },
    infoText3: {
        paddingTop: 0,
        marginBottom:5,
        marginLeft: -4,
        fontSize: 5,
        textAlign: 'left',
    },
    container: {
        marginTop: 2,
        width: '48%',
        padding: 5,
        border: '1px solid black',
        borderBottom: 'none',
        fontSize: 6,
    },
    container2: {
        width: '48%',
        padding: 10,
        border: '1px solid black',
        borderTop: 'none',
        flexDirection: 'column',
        marginBottom: -5,
        fontSize: 6,
        justifyContent: 'space-between',
    },
    container3: {
        width: '48%',
        marginTop: 3,
        padding: 2,
        border: '1px solid black',
        borderTop: 'none',
        textAlign: 'left',
        fontSize: 7,
        marginBottom: -5,
    },
    container4: {
        justifyContent: 'space-between',
        width: '48%',
        marginTop: 3,
        padding: 2,
        border: '1px solid black',
        borderTop: 'none',
        fontSize: 7,
        marginBottom: -5,
    },
    boxStyleContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
        marginBottom: -3,
        marginTop: -3,
    },
    boxStyleContainer2: {
        marginTop: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginBottom: -10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    row2: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
    },
    row3: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', // Ensure items are spaced properly
    },
    label: {
        width: '100%',
        fontSize: 6,
        textAlign: 'left',
    },
    labelOnLine: {
        fontSize: 6,
        marginTop: 4,
        textAlign: 'center',
        fontWeight: 'bold',
        width: '100%', // Ensures the text is centered relative to the line
    },
    line: {
        width: '100%',
        height: 1, // thickness of the line
        backgroundColor: 'black',
        marginTop: 15, // Space above the line to ensure text fits properly
    },
    verticalLine: {
        width: 1,
        marginTop: 2,
        backgroundColor: 'black',
        height: '130%',
    },
    textLineContainer: {
        position: 'relative', // Ensures lines are positioned relative to text
        width: '100%', // Ensures consistent width for alignment
    },
    verticalLine2: {
        width: 1,
        marginTop: 2,
        backgroundColor: 'black',
        height: '130%',
        marginLeft: -21,
    },
    prcContainer: {
        flexGrow: 1, // Allow it to take the necessary space
        paddingLeft: 5, // Adjust this to move "PRC NO." away from the vertical line
    },
    validityContainer: {
        flexGrow: 1, // Allow it to take the necessary space
        paddingLeft: 5, // Adjust this to move "VALIDITY" away from the vertical line
    },
});

export default styles;

