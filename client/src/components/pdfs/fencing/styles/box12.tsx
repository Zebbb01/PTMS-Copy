import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: -10,   
    },
    headerContainerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 10,
    },
    headerContainerColumn: {
        width: '48%',
    },
    header: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 10,
        marginBottom: 4,
    },
    subHeader: {
        textAlign: 'center',
        fontSize: 10,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    columnsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    column: {
        width: '48%',
    },
    sectionHeader: {
        fontSize: 7,
        fontWeight: 'bold',
        marginBottom: 3,
    },
    subsectionHeader: {
        fontSize: 7,
        fontWeight: 'bold',
        marginTop: 3,
        marginBottom: 3,
    },
    applicationHeader: {
        fontSize: 7,
        fontWeight: 'bold',
        marginBottom: 3,
        marginLeft: 20,
    },
    noteHeader: {
        fontSize: 7,
        fontWeight: 'bold',
        marginBottom: 3,
        marginLeft: 20,
        fontStyle: 'italic',
    },
    
    italicNote: {
        fontSize: 7,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    italicNoteUnderline: {
        borderBottom: '1px solid black',
        fontSize: 7,
        fontStyle: 'italic',
    },
    italicCorporationUnderline: {
        borderBottom: '1px solid black',
        fontSize: 7,
        fontStyle: 'italic',
        marginLeft: 10,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 2,
    },
    itemFooter: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 10,
    },
    subItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 3,
        marginLeft: 10,
    },
    checkbox: {
        width: 10,
        height: 7,
        minHeight: 7,
        minWidth: 10,
        border: '1px solid black',
        marginHorizontal: 6,
    },
    itemNumber: {
        fontSize: 7,
        marginRight: 6,
    },
    itemText: {
        width: '100%',
        fontSize: 7,
        textAlign: 'justify',
    },
    itemTextBrgy: {
        borderBottom: '1px solid black',
        width: '60%',
        fontSize: 7,
        textAlign: 'justify',
    },
    note: {
        fontSize: 7,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 10,
    },
    noteSmall: {
        fontSize: 7,
        textAlign: 'center',
        marginTop: 5,
    },
    receivedSection: {
        marginTop: 20,
    },
    receivedText: {
        fontSize: 7,
        marginBottom: 5,
    },
    signatureLine: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },
    underline: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        width: '500%',
        paddingTop: 7,
        right: 10,
    },
    checklistUnderline: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        width: '300%',
        paddingTop: 7,
        right: 10,
    },
    checklistUnderline2: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        width: '400%',
        paddingTop: 7,
        right: 10,
    },
    label: {
        fontSize: 7,
        marginTop: 3,
    },
    noteFooter: {
        fontSize: 7,
        fontWeight: 'bold',
        marginTop: 2,
    },
    noteFooterSub: {
        fontSize: 7,
        fontWeight: 'bold',
    },
    footerContainer: {
        alignItems: 'center',
        alignContent: 'flex-start',
        right: 25,
    },
});

export default styles;
