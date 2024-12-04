import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/box1'; // Import the styles

// Define the permit layout component
export function PermitBodyBox1({ permitInfo }: { permitInfo: any }) {
    // Dummy static data
    const defaultData = {
        labelData: 'John A. Doe',
        cellData: '123412341234',
        cellData2: '24682468',
        cellData3: '123123123123',
        checkboxData: 'Y',
    };

    const data = { ...defaultData, ...permitInfo };
    return (
        <>
            <View style={styles.containerTitle}>
                <View style={styles.column}>
                    <Text style={styles.title}>Republic of the Philippines</Text>
                    <Text style={styles.title}>Region XI</Text>
                    <Text style={styles.title}>OFFICE OF THE BUILDING OFFICIAL</Text>
                    <Text style={styles.title}>Province of Davao</Text>
                    <Text style={styles.title}>City of Panabo</Text>
                    <Text style={styles.title}>-oOo-</Text>
                    <Text style={styles.mainTitle}>CERTIFICATE OF COMPLETION</Text>
                </View>
            </View>

        <View style={styles.container}>
            <View style={styles.column}>
                <View style={styles.row}>
                    <Text style={styles.label}>This is certified that the sanitary/plumbing installation of</Text>
                    <Text style={styles.labelData}>{data.labelData}</Text>
                </View>
                
            </View>
        </View>
        
        </>  


    );
}
