import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    formNo: {
        fontSize: 6,
    },
    printText: {
        fontSize: 6,
        marginBottom: 2,
    },
    container3: {
        border: '2px solid black',
        padding: 4,
    },
    box4label: {
        fontSize: 8,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    columnsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
    },
    column: {
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
        width: 24,
        height: 8,
        minwidth: 24,
        minheight: 8,
        border: '1px solid black',
        marginRight: 6,
    },
    checkboxLabel: {
        width: '100%',
        fontSize: 6,
    },
    underline: {
        width: 230, // Adjust width to match the text
        height: 1, // Thickness of the underline
        backgroundColor: 'black',
        marginTop: 5, // Adjust this to control the space between text and underline
        alignSelf: 'center',
        right: 10,
    },
});

export default styles;
