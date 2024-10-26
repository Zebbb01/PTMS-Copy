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
        paddingTop: 4,
        marginBottom:-2,
        marginLeft: 5,
        fontSize: 6,
        textAlign: 'left',
        alignItems: 'flex-start',
    },
    infoText2: {
        paddingTop: 4,
        fontSize: 6,
        textAlign: 'left',
    },
    infoText3: {
        paddingTop: 4,
        fontSize: 6,
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
    container5: {
        justifyContent: 'space-between',
        width: '48%',
        marginTop: 3,
        padding: 2,
        border: '1px solid black',
        borderTop: 'none',
        fontSize: 7,
        marginBottom: -5,
    },
    container6: {
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
        justifyContent: 'center',
        width: '100%',
        marginBottom: -3,
        marginTop: -3,
    },
    boxStyleContainer2: {
        marginTop: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 2,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    row2: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
        justifyContent: 'space-around', // Aligning items evenly
    },
    row3: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', // Ensure items are spaced properly
    },
    label: {
        width: '100%',
        fontSize: 6,
        textAlign: 'center',
    },
    labelOnLine: {
        position: 'absolute',
        bottom: -8, // Adjust based on the space you need between the text and the line
        fontSize: 6,
        textAlign: 'right',
        fontWeight: 'bold',
        width: '90%', // Ensures the text is centered relative to the line
    },
    labelOnLine2: {
        position: 'absolute',
        bottom: -8, // Adjust based on the space you need between the text and the line
        fontSize: 6,
        textAlign: 'right',
        fontWeight: 'bold',
        width: '80%', // Ensures the text is centered relative to the line
    },
    labelOnLine3: {
        position: 'absolute',
        bottom: -8, // Adjust based on the space you need between the text and the line
        fontSize: 6,
        textAlign: 'left',
        paddingLeft: 35,
        width: '100%', // Ensures the text is centered relative to the line
    },
    line: {
        width: '160%',
        height: 1, // thickness of the line
        backgroundColor: 'black',
        marginLeft: -13,
        marginTop: 10, // Space above the line to ensure text fits properly
    },
    line2: {
        width: '60%',
        height: 1,
        backgroundColor: 'black',
        marginTop: 10,
        marginLeft: 50, // Space between the line and the text
    },
    verticalLine: {
        width: 1,
        marginTop: 2,
        backgroundColor: 'black',
        height: '130%',
    },
    verticalLine2: {
        width: 1,
        marginTop: 2,
        backgroundColor: 'black',
        height: '130%',
        marginLeft: -21,
    },
    textLineContainer: {
        position: 'relative', // Ensures lines are positioned relative to text
        width: '48%', // Ensures consistent width for alignment
        marginLeft: 10, // Space between text and the next element
    },
    prcContainer: {
        flexGrow: 1, // Allow it to take the necessary space
        paddingLeft: 5, // Adjust this to move "PRC NO." away from the vertical line
    },
    validityContainer: {
        flexGrow: 1, // Allow it to take the necessary space
        paddingLeft: 5, // Adjust this to move "VALIDITY" away from the vertical line
    },
    prcContainer2: {
        flexGrow: 1, // Allow it to take the necessary space
        paddingRight: 13.5, // Adjust this to move "PRC NO." away from the vertical line
        paddingLeft: 5, // Adjust this to move "PRC NO." away from the vertical line
    },
    validityContainer2: {
        flexGrow: 1, // Allow it to take the necessary space
        paddingLeft: 5, // Adjust this to move "VALIDITY" away from the vertical line
    },
    prcContainer3: {
        flexGrow: 1, // Allow it to take the necessary space
        paddingLeft: 5, // Adjust this to move "PRC NO." away from the vertical line
    },
    validityContainer3: {
        flexGrow: 1, // Allow it to take the necessary space
        paddingLeft: 5, // Adjust this to move "VALIDITY" away from the vertical line
    },
});

export default styles;

