import { View, Image } from '@react-pdf/renderer'; 
import styles from '../styles/box1';
import box1Image from '/img/electrical/box1.png';

export function PermitBodyBox1({ permitInfo }: { permitInfo: any }) {
    return (
        <View style={styles.imageContainer}>
            <Image source={{ uri: box1Image }}  />
        </View>
    );
}
