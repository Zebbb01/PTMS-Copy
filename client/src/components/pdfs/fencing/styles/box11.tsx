import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    header: {
        textAlign: 'center',
        fontSize: 10,
        marginBottom: 2,
    },
    subHeader: {
        textAlign: 'center',
        fontSize: 10,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    city: {
        textAlign: 'center',
        fontSize: 10,
        marginBottom: 10,
    },
    headerContainerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 5,
    },
    headerContainerColumn: {
        width: '48%',
    },
    formsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    form: {
        width: '48%',
    },
    label: {
        fontSize: 8,
    },
    labelRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    line: {
        width: '71%', // Adjust width for desired line length
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginLeft: 5, // Space between label and line
        marginTop: 8,
    },
    line2: {
        width: '85%', // Adjust width for desired line length
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginLeft: 5, // Space between label and line
        marginTop: 8,
    },
    line3: {
        width: '60%', // Adjust width for desired line length
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginLeft: 5, // Space between label and line
        marginTop: 8,
    },
    line4: {
        width: '75%', // Adjust width for desired line length
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginLeft: 5, // Space between label and line
        marginTop: 8,
    },
    line5: {
        width: '65%', // Adjust width for desired line length
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginLeft: 5, // Space between label and line
        marginTop: 8,
    },
    line6: {
        width: '47%', // Adjust width for desired line length
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginLeft: 5, // Space between label and line
        marginTop: 8,
    },
    line7: {
        width: '43.5%', // Adjust width for desired line length
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginLeft: 5, // Space between label and line
        marginTop: 8,
    },
    underline: {
        width: '99%', // Adjust width for desired line length
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginVertical: 10, // Space between label and line
    },
});

export default styles;
