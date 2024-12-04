import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    containerTitle: {
        fontSize: 8,
        marginTop: 30,
    },
    title: {
        fontSize: 10,
        textAlign: "center",
    },
    mainTitle: {
        fontSize: 14,
        textAlign: "center",
        textDecoration: "underline",
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 10,
    },
    container: {
        width: "100%",
        fontSize: 8,
    },
    column: {
        width: "100%",
        flexDirection: "column",
    },
    row: {
        width: "100%",
        flexDirection: "row",
    },
    label: {
        fontSize: 8,
    },
    labelData: {
        flexGrow: 1,
        width: '100%',
        color: '#FF0000',
        fontSize: 8,
    },
    
});

export default styles;
