import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    titleContainer: {
        width: '100%',
        marginTop: 5,
    },
    container: {
        width: '100%',
        border: '1px solid black',
    },
    
    // Title
    title: {
        fontSize: 6,
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 2,
    },

    header: {
        textAlign: 'center',
        borderBottom: '1px solid black',
    },
    headerText: {
        fontSize: 6,
        marginVertical: 2,
    },

    // Note column
    noteColumn: {
        flexBasis: '30%',
        flexDirection: 'column',
        paddingLeft: 5,
    },
    headerNote: {
        fontSize: 6,
        textAlign: 'left',
    },
    headerChief: {
        fontSize: 6,
        textAlign: 'left',
        position: 'absolute',
        top: 8,
        left: 5,
    },
    headerSection: {
        fontSize: 6,
        textAlign: 'left',
        paddingTop: 2,
        top: 2,
        paddingLeft:30,
    },
    headerSection2: {
        top: 3,
        fontSize: 6,
        textAlign: 'left',
        paddingLeft:30,
    },
    headerSection3: {
        top: 4,
        fontSize: 6,
        textAlign: 'left',
        paddingLeft:30,
    },

    // IN/OUT Section Title
    sectionTitle: {
        fontSize: 6,
        textAlign: 'center',
    },

    // IN/OUT Section
    inOutSection: {
        flexBasis: '15%',
        flexDirection: 'column',
        marginTop: -13,
        marginRight: -1,
        borderLeft: '1px solid black',
        borderBottom: '1px solid black',
        borderRight: '1px solid black',
    },
    inOutSection2: {
        flexBasis: '15%',
        flexDirection: 'column',
        marginTop: -13,
        borderLeft: '1px solid black',
        borderBottom: '1px solid black',
        borderRight: '1px solid black',
    },

    // Action/Remarks and Processed By
    largeContainer: {
        flexBasis: '20%',
        fontSize: 6,
        textAlign: 'center',
    },

    action: {
        fontSize: 6,
        textAlign: 'center',
        marginTop: -5,
    },
    process: {
        fontSize: 6,
        textAlign: 'center',
        marginTop: -5,
    },

    // Header Row
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
    },

    // Sub-header for Time and Date
    subHeaderRow: {
        flexDirection: 'row',
        borderTop: '1px solid black',
        justifyContent: 'center',
    },

    // Time and Date Cell
    timeDateContainer: {
        flex: 1,
        fontSize: 6,
        textAlign: 'center',
        
    },

    // Empty Cells for Data Rows
    dataRow: {
        flexDirection: 'row',
        position: 'absolute',
        left: 166,
        top: 26,
    },
    // Empty Cells for Data Rows
    dataRow2: {
        flexDirection: 'row',
        position: 'absolute',
        left: 166,
        top: 36,
    },
    emptyCell: {
        flexBasis: '15%',
        fontSize: 6,
        textAlign: 'center',
        paddingVertical: 3,
        border: '1px solid black',
        marginRight: -1,
        
    },
    emptyCellLarge: {
        flexBasis: '20%',
        fontSize: 6,
        textAlign: 'center',
        borderTop: '1px solid black',
        marginRight: -1,
        paddingVertical: 5,
        
    },
    emptyCellLarge2: {
        flexBasis: '20.7%',
        fontSize: 6,
        textAlign: 'center',
        borderTop: '1px solid black',
        marginRight: -1,
        paddingVertical: 5,
        
    },
    // Vertical Line Divider
    rowLine: {
        position: 'absolute',
        width: '41%',
        backgroundColor: 'black',
        height: 1,
        flexGrow: 0, // Keeps vertical line fixed in place
        top: 6.6,
        right: 0,
    },
    rowLine2: {
        position: 'absolute',
        width: '41%',
        backgroundColor: 'black',
        height: 1,
        flexGrow: 0, // Keeps vertical line fixed in place
        top: 14.3,
        right: 0,
    },
     // Vertical Line Divider
     dividerLine: {
        width: 1,
        backgroundColor: 'black',
        height: '400%',
        flexGrow: 0, // Keeps vertical line fixed in place
    },
    dividerLine2: {
        top: 3,
        width: 1,
        backgroundColor: 'black',
        height: '125%',
        flexGrow: 0, // Keeps vertical line fixed in place
    },
});

export default styles;
