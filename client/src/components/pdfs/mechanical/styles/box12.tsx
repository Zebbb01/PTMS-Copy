import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    container: {
        padding: 20,
        fontSize: 12,
    },
    title: {
        fontSize: 12,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 12,
        textAlign: 'center',
    },
    mainTitle: {
        fontSize: 14,
        textAlign: 'center',
        marginVertical: 10,
    },
    subTitle: {
        fontSize: 12,
        textAlign: 'center',
        fontStyle: 'italic',
    },
    bodyTextContainer: {
        marginVertical: 10,
    },
    bodyText: {
        fontSize: 10,
        marginLeft: 50,
    },
    bodyText1: {
        textAlign: 'justify',
        fontSize: 10,
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    ownerInfoContainer: {
        marginVertical: 2,
    },
    lineGroup: {
        flexDirection: 'row',
        marginLeft: 5,
    },
    line: {
        width: '28%',
        flexGrow: 1,
    },
    
    footerLineGroup: {
        flexDirection: 'row',
        marginTop: 10,
    },
    footerLine: {
        width: '35%',
        flexGrow: 1,
    },
    footerSubGroup: {
        fontSize: 8,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 2,
        marginLeft: 50,
    },
    subGroup: {
        fontSize: 8,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 2,
        marginLeft: 100,
    },
    
    sectionTitle: {
        textAlign: 'center',
        fontSize: 10,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    equipmentContainer: {
        marginBottom: 2,
    },
    equipmentRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 5,
    },
    equipmentTitle: {
        textDecoration: 'underline',
        fontSize: 10,
    },
    equipmentTitleMargin: {
        textDecoration: 'underline',
        marginHorizontal: 120, // Adjusted for alignment
        fontSize: 10,
    },
    equipmentColumn: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        flex: 1,
    },
    equipmentColumn2: {
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        marginLeft: 20,

    },
    equipmentColumn3: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        flex: 1,
        marginTop: 2,
    },
    equipLine: {
        width: '80%', // Adjusted width for better spacing
    },
    equipLine2: {
        width: '70%', // Adjusted width and alignment
    },
    equipmentLabel: {
        fontSize: 8,
        textAlign: 'center',
        marginBottom: 3,
    },
    equipmentLabel2: {
        fontSize: 8,
        textAlign: 'right',
        marginBottom: 5,
        left: 90,
    },
    footer: {
        marginBottom: 2,
        fontSize: 10,
    },
    footerLabel: {
        marginLeft: 70,
        fontSize: 10,
    },
    footerLabel1: {
        textAlign: 'left',
        width: '18%',
        fontSize: 8,
    },
    footerLabel2: {
        textAlign: 'center',
        width: '35%',
        fontSize: 8,
    },
    footerLabel3: {
        textAlign: 'center',
        width: '29%',
        fontSize: 8,
    },
    conformContainer: {
        flexDirection: 'column',
    },
    conformLabel: {
        textAlign: 'left',
        fontSize: 8,
    },
    conformLabel2: {
        width: '28%',
        textAlign: 'center',
        fontSize: 8,
    },
    inspectionTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        marginVertical: 10,
        textAlign: 'center',
        textDecoration: 'underline',
    },
    inspectionContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    inspectionContainer2: {
        flexDirection: 'row',
    },
    inspectionContainer3: {
        flexDirection: 'column',
        marginTop: 15,
    },
    inspectionContainer4: {
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'space-between',
    },
    inspectionLabel: {
        fontSize: 10,
        marginTop: 1,
    },
    inspectionLabel2: {
        marginLeft: 10,
        fontSize: 10,
        marginTop: 1,
    },
    inspectionLast: {
        fontSize: 10,
        marginTop: 1,
    },
    inspectionLast2: {
        fontSize: 10,
        width: '33%',
        textAlign: 'center',
    },
    inspectionOfficial: {
        fontSize: 10,
        marginBottom:5,
    },
});

export default styles;
