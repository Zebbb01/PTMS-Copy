import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    container: {
        padding: 20,
        fontSize: 10,
    },
    title: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 15,
    },
    dateRow: {
        textAlign: 'right',
        marginBottom: 15,
    },
    recipient: {
        fontSize: 10,
        textAlign: 'left',
        marginBottom: 15,
        lineHeight: 1.5,
    },
    bodyContainer: {
        fontSize: 10,
        marginTop: 15,
        marginBottom: 15,
    },
    lineGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
    },
    label: {
        fontSize: 10,
        textAlign: 'right',
        width: '7%',
    },
    label2: {
        fontSize: 10,
        textAlign: 'right',
        width: '19%',
    },
    line: {
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        flexGrow: 1,
        paddingLeft: 5,
    },
    subGroup: {
        flexDirection: 'row',
        alignContent: 'space-between',
        justifyContent: 'flex-end',

    },
    subLabel: {
        fontSize: 10,
        width: '27%',
        marginBottom: 10,
    },
    subLabel2: {
        fontSize: 10,
        width: '100%',
        textAlign: 'center',
    },
    subLabel3: {
        fontSize: 10,
        width: '100%',
        marginBottom: 5,
        textAlign: 'center',
    },
    bodyText: {
        textAlign: 'left',
        fontSize: 10,
        marginBottom: 10,
    },
    declarationContainer: {
        marginBottom: 30,
    },
    declarationFirstLine: {
        fontSize: 10,
        textAlign: 'justify',
        marginLeft: 33, // Adjust as needed for the left margin
    },
    declaration: {
        fontSize: 10,
        textAlign: 'justify',
    },
    signatureContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    signatureBox: {
        width: '45%',
        fontSize: 8,
        textAlign: 'center',
    },
    underlineData: {
        textDecoration: 'underline',
    },
});

export default styles;
