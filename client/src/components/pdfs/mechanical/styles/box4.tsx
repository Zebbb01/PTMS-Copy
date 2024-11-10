import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    printText: {
        fontSize: 6,
        textAlign: 'left',
        alignItems: 'flex-start',
        paddingBottom: 2,
    },
    infoText: {
        fontSize: 5,
        textAlign: 'left',
    },
    infoText2: {
        fontSize: 5,
        textAlign: 'left',

    },
    infoText3: {
        fontSize: 5,
        textAlign: 'left',
    },
    infoText4: {
        fontSize: 5,
        textAlign: 'left',
    },
    container: {
        width: '100%',
        padding: 5,
        border: '2px solid black',
        borderBottom: 'none',
        fontSize: 6,
    },
    container2: {
        width: '100%',
        border: '2px solid black',
        flexDirection: 'column',
        fontSize: 6,
        justifyContent: 'space-between',
    },
    container3: {
        width: '100%',
        marginTop: -1,
        padding: 4,
        border: '2px solid black',
        borderTop: 'none',
        textAlign: 'left',
        fontSize: 7,
    },
    container4: {
        justifyContent: 'space-between',
        width: '100%',
        marginTop: -1,
        padding: 4,
        border: '2px solid black',
        borderTop: 'none',
        textAlign: 'left',
        fontSize: 7,
    },
    container5: {
        justifyContent: 'space-between',
        width: '100%',
        marginTop: -1,
        padding: 4,
        border: '2px solid black',
        borderTop: 'none',
        textAlign: 'left',
        fontSize: 7,
    },
    container6: {
        justifyContent: 'space-between',
        width: '100%',
        marginTop: -1,
        padding: 4,
        border: '2px solid black',
        borderTop: 'none',
        textAlign: 'left',
        fontSize: 7,
    },
    scopeColumn4: {
        position: 'absolute',
        top: 2,
        paddingLeft: 5, // Adjust left position for each column
    },
    scopeColumn5: {
        position: 'absolute',
        top: 2,
        left: '65%', // Position the second column to the right
    },
    rowOption: {
        flexDirection: 'row',
    },
    boxColumn: {
        width: 8,
        height: 8,
        minHeight: 8,
        minWidth: 8,
        border: '1px solid black',
        marginRight: 5, // Add margin to the right of the box to create space
    },
    
    box4label2: {
        width: '45%',
        fontSize: 5,
        marginTop: 2,
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
    boxStyleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },
    boxStyleContainer2: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },
    labelOnLine: {
        marginTop: 2,   
        fontSize: 6,
        textAlign: 'center',
        fontWeight: 'bold',
        width: '90%', // Ensures the text is centered relative to the line
    },
    labelOnLine2: {
        marginTop: 5,
        fontSize: 6,
        textAlign: 'center',
        fontWeight: 'bold',
        width: '60%', // Ensures the text is centered relative to the line
    },
    labelOnLine3: {
        fontSize: 6,
        textAlign: 'center',
        width: '90%', // Ensures the text is centered relative to the line
    },
    line: {
        width: '95%',
        height: 1, // thickness of the line
        backgroundColor: 'black',
        marginTop: 30, // Space above the line to ensure text fits properly
    },
    line2: {
        width: '25%',
        height: 1,
        backgroundColor: 'black',
        marginLeft: 85, // Space between the line and the text
        marginBottom: 5,
    },
    verticalLine: {
        width: 1,
        top: -4, // Space between the line and the text
        backgroundColor: 'black',
        height: 13,
        left: 120, // Space between the line and the text
        position: 'absolute', // Ensures lines are positioned relative to text
    },
    verticalLine2: {
        width: 1,
        top: -4, // Space between the line and the text
        backgroundColor: 'black',
        height: 13,
        left: 120, // Space between the line and the text
        position: 'absolute', // Ensures lines are positioned relative to text
    },
    textLineContainer: {
        position: 'relative', // Ensures lines are positioned relative to text
        width: '100%', // Ensures consistent width for alignment
        marginLeft: 10, // Space between text and the next element
    },
    prcContainer: {
        flexGrow: 1, // Allow it to take the necessary space
    
    },
    validityContainer: {
        flexGrow: 1, // Allow it to take the necessary space
        paddingLeft: 5, // Adjust this to move "VALIDITY" away from the vertical line
    },
    prcContainer2: {
        flexGrow: 1, // Allow it to take the necessary space
        paddingRight: 13.5, // Adjust this to move "PRC NO." away from the vertical line
    },
    validityContainer2: {
        flexGrow: 1, // Allow it to take the necessary space
        paddingLeft: 2, // Adjust this to move "VALIDITY" away from the vertical line
    },
    prcContainer3: {
        flexGrow: 1, // Allow it to take the necessary space
       
    },
    validityContainer3: {
        flexGrow: 1, // Allow it to take the necessary space
        marginLeft: -13, // Adjust this to move "VALIDITY" away from the vertical line
    },
    
});

export default styles;

