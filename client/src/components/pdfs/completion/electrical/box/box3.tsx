import { View, Image } from '@react-pdf/renderer'; 
import styles from '../styles/box3';
import box1Image from '/img/Completion/Electrical/page2.png';

export function PermitBodyBox3({ permitInfo }: { permitInfo: any }) {
    return (
        <View style={styles.imageContainer}>
              <Image source={{ uri: box1Image }} />
        </View>
    );
}
