import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/box11';

export function PermitBodyBox11({ permitInfo }: { permitInfo: any }) {
    // Dummy static data
    // const defaultData = {
    //     date: '2023-09-22',
    //     firstName: 'John',
    //     middleName: 'A.',
    //     lastName: 'Doe',
    //     applicationFor: 'Electrical Permit',
    //     property: 'Residential Building',
    //     address: '123 Main Street, Panabo City',
    //     representative: 'Jane Doe',
    //     ownerSignature: 'John A. Doe',
    //     ownerAddress: '123 Main Street, Panabo City',
    //     ownerContact: '09123456789',
    //     repSignature: 'Jane Doe',
    //     repAddress: '456 Secondary St, Panabo City',
    //     repContact: '09876543210',
    // };

    // const data = { ...defaultData, ...permitInfo };

    return (
        <View style={styles.container}>
            {/* Header */}
            <Text style={styles.title}>APPLICATION LETTER</Text>
            <View style={styles.dateRow}>
                <Text style={styles.date}>Date: </Text>
                <Text style={styles.lineDate}>{permitInfo.date || ' '}</Text>
            </View>

            {/* Recipient */}
            <Text style={styles.recipient}>
                ENGR. BERNARDO C. RABANOZ, JR.
                {'\n'} {'\t'} BUILDING OFFICIAL
                {'\n'} {'\t'} PANABO CITY
            </Text>

            {/* Content */}
            <Text>Sir/Maam:</Text>
            <View style={styles.bodyContainer}>
                <View style={styles.lineGroup}>
                    <Text style={styles.label}>I</Text>
                    <Text style={styles.line}>{permitInfo.firstName || ' '}</Text>
                    <Text style={styles.line}>{permitInfo.middleName || ' '}</Text>
                    <Text style={styles.line}>{permitInfo.lastName || ' '}</Text>
                </View>
                <View style={styles.subGroup}>
                    <Text style={styles.subLabel}>(First Name)</Text>
                    <Text style={styles.subLabel}>(Middle Name)</Text>
                    <Text style={styles.subLabel}>(Family Name)</Text>
                </View>

                <View style={styles.lineGroup}>
                    <Text>would like to apply for </Text>
                    <Text style={styles.line}>{permitInfo.applicationFor || ' '}</Text>
                    <Text>for my </Text>
                    <Text style={styles.line}>{permitInfo.property || ' '}</Text>
                </View>

                <View style={styles.lineGroup}>
                    <Text>located at </Text>
                    <Text style={styles.line}>{permitInfo.address || ' '}</Text>
                </View>
                <Text style={styles.subLabel2}>(Complete Address)</Text>

                <View style={styles.lineGroup}>
                    <Text style={styles.label2}>I also authorize</Text>
                    <Text style={styles.line}>{permitInfo.representative || ' '}</Text>
                    <Text>to</Text>
                </View>
                <Text style={styles.subLabel3}>(Authorized Representative of the Company)</Text>

                <Text style={styles.bodyText}>
                    to transact the application with your Office on my behalf.
                </Text>
            </View>

            {/* Declaration */}
            <View style={styles.declarationContainer}>
                <Text style={styles.declarationFirstLine}>
                    I/We hereby certify that the documents submitted herein are all true and correct, therefore  
                </Text>
                <Text style={styles.declaration}>
                falsification on the supporting document in any way will cause disapproval of the permit application without prejudice to further action that may be undertaken pursuant to Articles 171 & 172 of R.A. 3815, otherwise known as the Revised Penal Code of the Philippines.
                </Text>
            </View>


            {/* Signatures */}
            <View style={styles.signatureContainer}>
                <View style={styles.signatureBox}>
                    <Text style={styles.line}>{permitInfo.ownerSignature || ''}</Text>
                    <Text>(Signature over Printed Name of Owner)</Text>
                    <View style={styles.lineGroupFooter}>
                        <Text>Address: </Text>
                        <Text style={styles.line}>{permitInfo.ownerAddress || ' '}</Text>
                    </View>
                    <View style={styles.lineGroupFooter}>
                        <Text>Contact Number: </Text>
                        <Text style={styles.contactLine}>{permitInfo.ownerContact || ''}</Text>
                    </View>
                </View>
                <View style={styles.signatureBox}>
                    <Text style={styles.line}>{permitInfo.ownerSignature || ''}</Text>
                    <Text>(Signature over Printed Name of Authorized Representative)</Text>
                    <View style={styles.lineGroupFooter}>
                        <Text>Address: </Text>
                        <Text style={styles.line}>{permitInfo.ownerAddress || ' '}</Text>
                    </View>
                    <View style={styles.lineGroupFooter}>
                        <Text>Contact Number: </Text>
                        <Text style={styles.contactLine}>{permitInfo.ownerContact || ''}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
