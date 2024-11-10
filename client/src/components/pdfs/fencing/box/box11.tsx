import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/box11';

export function PermitBodyBox11({ permitInfo }: { permitInfo: any }) {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.headerContainerRow}>
                <View style={styles.headerContainerColumn}>
                    <Text style={styles.header}>Republic of the Philippines</Text>
                    <Text style={styles.subHeader}>OFFICE OF THE CITY BUILDING OFFICIAL</Text>
                    <Text style={styles.city}>PANABO CITY</Text>
                </View>

                <View style={styles.headerContainerColumn}>
                    <Text style={styles.header}>Republic of the Philippines</Text>
                    <Text style={styles.subHeader}>OFFICE OF THE CITY BUILDING OFFICIAL</Text>
                    <Text style={styles.city}>PANABO CITY</Text>
                </View>
            </View>

            {/* Content (Two forms side by side) */}
            <View style={styles.formsContainer}>
                {/* Left Form */}
                <View style={styles.form}>
                    <View style={styles.labelRow}>
                        <Text style={styles.label}>Name of Applicant:</Text>
                        <View style={styles.line} />
                    </View>
                    
                    <View style={styles.labelRow}>
                        <Text style={styles.label}>Address:</Text>
                        <View style={styles.line2} />
                    </View>
                    <View style={styles.underline} />

                    <View style={styles.labelRow}>
                        <Text style={styles.label}>Use or Type of Occupancy:</Text>
                        <View style={styles.line3} />
                    </View>

                    <View style={styles.labelRow}>
                        <Text style={styles.label}>Project location:</Text>
                        <View style={styles.line4} />
                    </View>
                    <View style={styles.underline} />

                    <View style={styles.labelRow}>
                        <Text style={styles.label}>Applicants Contact No.:</Text>
                        <View style={styles.line5} />
                    </View>

                    <View style={styles.labelRow}>
                        <Text style={styles.label}>Name of Authorized Representative:</Text>
                        <View style={styles.line6} />
                    </View>
                    <View style={styles.underline} />

                    <View style={styles.labelRow}>
                        <Text style={styles.label}>Authorized Representative Contact No.</Text>
                        <View style={styles.line7} />
                    </View>
                </View>

                {/* Right Form */}
                <View style={styles.form}>
                    <View style={styles.labelRow}>
                        <Text style={styles.label}>Name of Applicant:</Text>
                        <View style={styles.line} />
                    </View>
                    
                    <View style={styles.labelRow}>
                        <Text style={styles.label}>Address:</Text>
                        <View style={styles.line2} />
                    </View>
                    <View style={styles.underline} />

                    <View style={styles.labelRow}>
                        <Text style={styles.label}>Use or Type of Occupancy:</Text>
                        <View style={styles.line3} />
                    </View>

                    <View style={styles.labelRow}>
                        <Text style={styles.label}>Project location:</Text>
                        <View style={styles.line4} />
                    </View>
                    <View style={styles.underline} />

                    <View style={styles.labelRow}>
                        <Text style={styles.label}>Applicants Contact No.:</Text>
                        <View style={styles.line5} />
                    </View>

                    <View style={styles.labelRow}>
                        <Text style={styles.label}>Name of Authorized Representative:</Text>
                        <View style={styles.line6} />
                    </View>
                    <View style={styles.underline} />

                    <View style={styles.labelRow}>
                        <Text style={styles.label}>Authorized Representative Contact No.</Text>
                        <View style={styles.line7} />
                    </View>
                </View>
            </View>
        </View>
    );
}
