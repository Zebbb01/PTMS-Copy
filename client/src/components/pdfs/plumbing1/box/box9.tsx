import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/box9'; // Import the styles

export function PermitBodyBox9({ permitInfo }: { permitInfo: any }) {
    return (
        <View style={styles.titleContainer}>
            {/* Title Section */}
            <Text style={styles.title}>BOX 9 (TO BE ACCOMPLISHED BY THE DIVISION / SECTION CONCERNED)</Text>
        
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>PROGRESS FLOW</Text>
                </View>
                
                {/* Header Row */}
                <View style={styles.headerRow}>
                    <Text style={styles.headerNote}>NOTE</Text>
                    <Text style={styles.headerIn}>IN</Text>
                    <Text style={styles.headerOut}>OUT</Text>
                    <Text style={styles.headerRemarks}>ACTION/REMARKS</Text>
                    <Text style={styles.headerProcessedBy}>PROCESSED BY</Text>
                </View>

                {/* Sub-header Row for Time and Date */}
                <View style={styles.subHeaderRow}>
                    <Text style={styles.emptyCell}></Text>
                    <View style={styles.timeDateContainer}>
                        <Text style={styles.timeDate}>TIME</Text>
                    </View>
                    <View style={styles.timeDateContainer2}>
                        <Text style={styles.timeDate}>DATE</Text>
                    </View>
                    <View style={styles.timeDateContainer3}>
                        <Text style={styles.timeDate}>TIME</Text>
                    </View>
                    <View style={styles.timeDateContainer2}>
                        <Text style={styles.timeDate}>DATE</Text>
                    </View>
                    
                    <Text style={styles.emptyCell}></Text>
                    
                    {/* Vertical Line */}
                    <View style={styles.dividerLine} />
                    
                    <Text style={styles.emptyCell}></Text>
                </View>

                {/* Sub-header Row for Time and Date 2*/}
                <View style={styles.subHeaderRow}>
                    <Text style={styles.Cell}>Chief, Processing Division/Section</Text>
                    <View style={styles.timeDateContainer}>
                        <Text style={styles.timeDate}></Text>
                    </View>
                    <View style={styles.timeDateContainer2}>
                        <Text style={styles.timeDate}></Text>
                    </View>
                    <View style={styles.timeDateContainer3}>
                        <Text style={styles.timeDate}></Text>
                    </View>
                    <View style={styles.timeDateContainer2}>
                        <Text style={styles.timeDate}></Text>
                    </View>
                    
                    <Text style={styles.emptyCell}></Text>
                    
                    {/* Vertical Line */}
                    <View style={styles.dividerLine} />
                    
                    <Text style={styles.emptyCell}></Text>
                </View>

                {/* Sub-header Row for Time and Date 3*/}
                <View style={styles.subHeaderRow}>
                    <Text style={styles.Cell}>Receiving and Recording</Text>
                    <View style={styles.timeDateContainer}>
                        <Text style={styles.timeDate}></Text>
                    </View>
                    <View style={styles.timeDateContainer2}>
                        <Text style={styles.timeDate}></Text>
                    </View>
                    <View style={styles.timeDateContainer3}>
                        <Text style={styles.timeDate}></Text>
                    </View>
                    <View style={styles.timeDateContainer2}>
                        <Text style={styles.timeDate}></Text>
                    </View>
                    
                    <Text style={styles.emptyCell}></Text>
                    
                    {/* Vertical Line */}
                    <View style={styles.dividerLine} />
                    
                    <Text style={styles.emptyCell}></Text>
                </View>

                {/* Sub-header Row for Time and Date 4*/}
                <View style={styles.subHeaderRow}>
                    <Text style={styles.Cell}>Geodetic (Line and Grade)</Text>
                    <View style={styles.timeDateContainer}>
                        <Text style={styles.timeDate}></Text>
                    </View>
                    <View style={styles.timeDateContainer2}>
                        <Text style={styles.timeDate}></Text>
                    </View>
                    <View style={styles.timeDateContainer3}>
                        <Text style={styles.timeDate}></Text>
                    </View>
                    <View style={styles.timeDateContainer2}>
                        <Text style={styles.timeDate}></Text>
                    </View>
                    
                    <Text style={styles.emptyCell}></Text>
                    
                    {/* Vertical Line */}
                    <View style={styles.dividerLine} />
                    
                    <Text style={styles.emptyCell}></Text>
                </View>

                {/* Sub-header Row for Time and Date 5*/}
                <View style={styles.subHeaderRow}>
                    <Text style={styles.Cell}>Plumbing</Text>
                    <View style={styles.timeDateContainer}>
                        <Text style={styles.timeDate}></Text>
                    </View>
                    <View style={styles.timeDateContainer2}>
                        <Text style={styles.timeDate}></Text>
                    </View>
                    <View style={styles.timeDateContainer3}>
                        <Text style={styles.timeDate}></Text>
                    </View>
                    <View style={styles.timeDateContainer2}>
                        <Text style={styles.timeDate}></Text>
                    </View>
                    
                    <Text style={styles.emptyCell}></Text>
                    
                    {/* Vertical Line */}
                    <View style={styles.dividerLine} />
                    
                    <Text style={styles.emptyCell}></Text>
                </View>
                
            </View>
        </View>
    );
}
