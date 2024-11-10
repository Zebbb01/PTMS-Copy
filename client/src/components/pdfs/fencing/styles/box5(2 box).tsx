import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    formNo: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    infoText: {
        paddingTop: 0,
        marginBottom: 5,
        marginLeft: 0,
        fontSize: 5,
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
        marginTop: 1,
        width: '50%',
        padding: 5,
        border: '2px solid black',
        borderRight: '2px solid black',
        borderBottom: 'none',
        fontSize: 5,
    },
    container2: {
        marginTop: -2,
        width: '50%',
        padding: 10,
        border: '2px solid black',
        borderRight: '2px solid black',
        borderTop: 'none',
        flexDirection: 'column',
        marginBottom: -5,
        fontSize: 5,
        justifyContent: 'space-between',
    },
    container3: {
        width: '50%',
        marginTop: 3,
        paddingBottom: 10,
        paddingLeft: 5,
        border: '2px solid black',
        borderRight: '2px solid black',
        textAlign: 'left',
        fontSize: 7,
    },
    container4: {
        width: '50%',
        marginTop: -2,
        paddingBottom: 10,
        paddingLeft: 5,
        border: '2px solid black',
        borderRight: '2px solid black',
        textAlign: 'left',
        fontSize: 7,
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
        fontSize: 5,
        textAlign: 'left',
    },
    labelOnLine: {
        fontSize: 5,
        marginTop: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        width: '100%', // Ensures the text is centered relative to the line
    },
    labelDate: {
        fontSize: 5,
        marginTop: 2,
        textAlign: 'center',
        fontWeight: 'bold',
        width: '80%', // Ensures the text is centered relative to the line
    },
    line: {
        left: 25,
        width: '80%',
        height: 1, // thickness of the line
        backgroundColor: 'black',
        marginTop: 15, // Space above the line to ensure text fits properly
    },
    lineDate: {
        left: 110,
        width: '20%',
        height: 1, // thickness of the line
        backgroundColor: 'black',
        marginBottom: 10,
    },
    verticalLine: {
        width: 1,
        top: 5,
        backgroundColor: 'black',
        height: '300%',
    },
    textLineContainer: {
        position: 'relative', // Ensures lines are positioned relative to text
        width: '100%', // Ensures consistent width for alignment
    },
    prcContainer: {
        flexGrow: 1, // Allow it to take the necessary space
        paddingTop: 5,
        paddingLeft: 5, // Adjust this to move "PRC NO." away from the vertical line
    },
    validityContainer: {
        flexGrow: 1, // Allow it to take the necessary space
        paddingTop: 5,
        paddingLeft: 5, // Adjust this to move "VALIDITY" away from the vertical line
    },
});

export default styles;

