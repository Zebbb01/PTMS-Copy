import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/box9'; // Import the styles

export function PermitBodyBox9({ permitInfo }: { permitInfo: any }) {
    return (
        <View style={styles.titleContainer}>
            {/* Title Section */}
            <Text style={styles.title}>BOX 9</Text>

            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>PROGRESS FLOW</Text>
                </View>

                {/* Note Section */}
                <View style={styles.headerRow}>
                    <View style={styles.noteColumn}>
                        <Text style={styles.headerNote}>NOTE:</Text>
                        <Text style={styles.headerChief}>CHIEF.</Text>
                        <Text style={styles.headerSection}>PROCESSING DIVISION/SECTION</Text>
                        <Text style={styles.headerSection2}>RECEIVING AND RECORDING</Text>
                        <Text style={styles.headerSection3}>MECHANICAL</Text>
                    </View>

                    {/* IN Section */}
                    <View style={styles.inOutSection}>
                        <Text style={styles.sectionTitle}>IN</Text>
                        <View style={styles.subHeaderRow}>
                            <View style={styles.timeDateContainer}><Text>Time</Text></View>
                            <View style={styles.dividerLine} />
                            <View style={styles.timeDateContainer}><Text>Date</Text></View>
                        </View>
                    </View>

                    {/* OUT Section */}
                    <View style={styles.inOutSection2}>
                        <Text style={styles.sectionTitle}>OUT</Text>
                        <View style={styles.subHeaderRow}>
                            <View style={styles.timeDateContainer}><Text>Time</Text></View>
                            <View style={styles.dividerLine} />
                            <View style={styles.timeDateContainer}><Text>Date</Text></View>
                        </View>
                    </View>

                    {/* Action/Remarks and Processed By */}
                    <View style={styles.largeContainer}>
                        <Text style={styles.action}>ACTION/REMARKS</Text>
                    </View>
                    <View style={styles.dividerLine2} />
                    <View style={styles.rowLine} />
                    <View style={styles.rowLine2} />
                    <View style={styles.largeContainer}>
                        <Text style={styles.process}>PROCESSED BY</Text>
                    </View>
                </View>

                {/* Empty Rows for Time and Date */}
                <View style={styles.dataRow}>
                    <View style={styles.emptyCell}></View>
                    <View style={styles.emptyCell}></View>
                    <View style={styles.emptyCellLarge}></View>
                    <View style={styles.emptyCellLarge2}></View>
                </View>

                {/* Empty Rows for Time and Date */}
                <View style={styles.dataRow2}>
                    <View style={styles.emptyCell}></View>
                    <View style={styles.emptyCell}></View>
                    <View style={styles.emptyCellLarge}></View>
                    <View style={styles.emptyCellLarge2}></View>
                </View>
            </View>
        </View>
    );
}
