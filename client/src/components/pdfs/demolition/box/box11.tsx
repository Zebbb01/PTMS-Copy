import { View, Text, Image } from '@react-pdf/renderer';
import styles from '../styles/box11';
import box1Image from '/img/demolition/box1.png';

export function PermitBodyBox11({ permitInfo }: { permitInfo: any }) {
    // Dummy static data
    const defaultData = {
        labelData: 'John A. Doe',
        checkboxData: 'Y',
    };

    const data = { ...defaultData, ...permitInfo };
    return (
        <View style={styles.container}>

        <View style={styles.imageContainer}>
              <Image source={{ uri: box1Image }} />
        </View>

            {/* Content (Two forms side by side) */}
            <View style={styles.formsContainer}>
                {/* Left Form */}
                <View style={styles.form}>
                    <View style={styles.labelRow}>
                        <Text style={styles.label}>Name of Applicant:</Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                    </View>
                    <View style={styles.labelRow}>
                        <Text style={styles.label}>Use or Type of Occupancy:</Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                    </View>

                    <View style={styles.labelRow}>
                        <Text style={styles.label}>Project location:</Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                    </View>
                    <View style={styles.labelRow}>
                        <Text style={styles.label}>Applicants Contact No.:</Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                    </View>

                    <View style={styles.labelRow}>
                        <Text style={styles.label}>Name of Authorized Representative:</Text>
                    </View>
                    <View style={styles.labelRow}>
                        <Text style={styles.blankLine2}>{data.labelData || ' '} </Text>
                    </View>

                    <View style={styles.labelRow}>
                        <Text style={styles.label}>Authorized Representative Contact No.</Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                    </View>
                </View>

                {/* Right Form */}
                <View style={styles.form}>
                    <View style={styles.labelRow}>
                        <Text style={styles.label}>Name of Applicant:</Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                    </View>
                    <View style={styles.labelRow}>
                        <Text style={styles.label}>Use or Type of Occupancy:</Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                    </View>

                    <View style={styles.labelRow}>
                        <Text style={styles.label}>Project location:</Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                    </View>
                    <View style={styles.labelRow}>
                        <Text style={styles.label}>Applicants Contact No.:</Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                    </View>

                    <View style={styles.labelRow}>
                        <Text style={styles.label}>Name of Authorized Representative:</Text>
                    </View>
                    <View style={styles.labelRow}>
                        <Text style={styles.blankLine2}>{data.labelData || ' '} </Text>
                    </View>

                    <View style={styles.labelRow}>
                        <Text style={styles.label}>Authorized Representative Contact No.</Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
