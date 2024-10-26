import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    container: {
        border: '1px solid black',
        padding: 5,
    },
    title: {
        fontSize: 6,
        fontWeight: 'bold',
        textAlign: 'left',
        marginLeft: 10,
        marginTop: 2,
    },
    actionTitle: {
        fontSize: 10,
        fontWeight: 'bold',
        marginTop: 5,
    },
    conditions: {
        marginTop: 10,
        fontSize: 10,
        textAlign: 'justify',
        marginLeft: 10,
    },
    conditionContainer: {
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 8,
    },
    conditionNumber: {
        fontSize: 13,
        fontWeight: 'bold',
        width: '5%', // Space allocated for the number on the left
        textAlign: 'left',
    },
    conditionText: {
        fontSize: 13,
        textAlign: 'justify', // Justify paragraph text
        width: '95%', // Space allocated for paragraph text
        marginLeft: -10,
    },
    boldText: {
        fontWeight: 'bold',
    },
    permitIssuer: {
        fontSize: 10,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 10,
    },
    issuerName: {
        fontSize: 10,
        textAlign: 'center',
        marginTop: 10,
    },
    underline: {
        width: '31%', // Adjust width to match the text
        height: 1, // Thickness of the underline
        backgroundColor: 'black',
        marginTop: 2, // Adjust this to control the space between text and underline
        alignSelf: 'center',
    },
    issuerTitle: {
        fontSize: 10,
        textAlign: 'center',
        marginBottom: 10,
    },
    footerContainer: {
        marginTop: 1,
        marginLeft: 10, 
    },
    footer: {
        fontSize: 6,
        textAlign: 'left',
    },
});

export default styles;
