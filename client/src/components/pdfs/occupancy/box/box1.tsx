import { View, Text, Image } from '@react-pdf/renderer';
import styles from '../styles/box1'; // Import the styles
import box1Image from '/img/occupancy_cert/box1.png';

// Define the permit layout component
export function PermitBodyBox1({ permitInfo }: { permitInfo: any }) {
    // Dummy static data
    const defaultData = {
        labelData: 'John A. Doe',
        date: '01/01/2000',
        cellData: '2024.09.0392',
        address: 'purok 1, brgy. 2, city of san jose del monte, bulacan',
        checkboxData: 'Y',
    };

    const data = { ...defaultData, ...permitInfo };
    return (
        <View>
            
            <View style={styles.imageContainer}>

                <Image style={styles.image} source={{ uri: box1Image }} />

                {/* First Page Left Side */}
                <Text style={styles.text}>{data.labelData}</Text> 
                <Text style={styles.text2}>{data.labelData}</Text>

                <Text style={styles.text3}>{data.labelData}</Text>
                <Text style={styles.text4}>{data.labelData}</Text>
                <Text style={styles.text5}>{data.labelData}</Text>

                <Text style={styles.text6}>{data.cellData}</Text>
                <Text style={styles.text7}>{data.date}</Text>

                <Text style={styles.text8}>{data.labelData}</Text>
                
                {/* First Page Right Side */}
                <Text style={styles.secondtext}>{data.cellData}</Text> 
                <Text style={styles.secondtext2}>{data.cellData}</Text>
                <Text style={styles.secondtext3}>{data.date}</Text>

                <Text style={styles.secondtext4}>{data.labelData}</Text>
                <Text style={styles.secondtext5}>{data.labelData}</Text>
                <Text style={styles.secondtext6}>{data.labelData}</Text>
                <Text style={styles.secondtext7}>{data.labelData}</Text>
                <Text style={styles.secondtext8}>{data.address}</Text>
                <Text style={styles.secondtext9}>{data.cellData}</Text>
                <Text style={styles.secondtext10}>{data.date}</Text>
                <Text style={styles.secondtext11}>{data.cellData}</Text>
                <Text style={styles.secondtext12}>{data.date}</Text>
                
                <Text style={styles.secondtext13}>{data.labelData}</Text>

            </View>
        
        </View>
    );
}
