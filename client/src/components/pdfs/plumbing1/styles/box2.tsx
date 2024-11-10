import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    printText: {
        fontSize: 6,
        textAlign: 'left',
        alignItems: 'flex-start',
    },
    container: {
        justifyContent: 'center',
        width: '100%',
        border: '1px solid black',
        padding: 6,
        paddingBottom: -6,
    },
    row: {
        flexDirection: 'row',
        width: '100%',
    },
    column: {
        flexDirection: 'column',
    },
    columnFixtures: {
        width: '48%',
        left: 20,
    },
    columnFixtures2: {
        width: '48%',
        left: 10,
    },
    columnFixtures3: {
        width: '48%',
    },
    columnLine: {
        width: "7%",
        color: '#FF0000',
    },
    columnBox: {
        width: "12.5%",
        color: '#FF0000',
        alignItems: 'center',
    },
    columnBox2: {
        width: "8%",
        color: '#FF0000',
        alignItems: 'center',
    },
    columnBox3: {
        width: "12.5%",
        color: '#FF0000',
        alignItems: 'center',
    },
    columnLabel: {
        right: 20,
    },
    columnLabelText: {
        fontSize: 6,
        textAlign: 'left',
        marginVertical: 2,
        paddingTop: 0.5,
    },
    title: {
        fontSize: 8,
        fontWeight: 'bold',
        textAlign: 'left',
        paddingHorizontal: 2,
    },
    subTitleContainer: {
        width: '50%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    subTitle: {
        width: '20%',
        paddingHorizontal: 2,
        fontSize: 8,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    subTitleFixtures: {
        width: '50%',
        fontSize: 8,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    blankLine: {
        width: "100%",
        color: '#FF0000',
        textAlign: 'center',
        fontSize: 6,
        marginTop: 3.2,
        borderBottomWidth: 1,
        paddingLeft: 5,
    },
    blankLineVolume: {
        width: "75%",
        position: 'absolute',
        color: '#FF0000',
        textAlign: 'center',
        fontSize: 6,
        marginTop: 3.2,
        left: 40,
        borderBottomWidth: 1,
    },
    blankLineTotal: {
        width: "40%",
        color: '#FF0000',
        textAlign: 'center',
        fontSize: 8,
        marginTop: 3.2,
        borderBottomWidth: 1,
        paddingLeft: 5,
    },
    totalText: {
        fontSize: 8,
        textAlign: 'left',
    },
    lastText: {
        fontSize: 6,
        textAlign: 'left',
    },
    totalContainer: {
        width: '100%',
        bottom: 8,
        flexDirection: 'row',
    },
    lastContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        bottom: 5,
    },
    checkBoxText:{
        width: 14,
        height: 10,
        minHeight: 10,
        minWidth: 14,
        border: '1px solid black',
        marginHorizontal: 5,
        marginTop: 1,
    },
});

export default styles;
