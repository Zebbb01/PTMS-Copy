import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/box8'; // Import the styles

// Define the permit layout component
export function PermitBodyBox8({ permitInfo }: { permitInfo: any }) {
    return (
        <View style={styles.mainContainer}>
            {/* Title Section */}
            <Text style={styles.titleText}>BOX 7 (TO BE ACCOMPLISHED BY THE RECEIVING & RECORDING SECTION ) </Text>

            {/* Row Box 3 */}
            <View style={styles.headerRow}>
                <Text style={styles.headerText}>ASSESSED FEES</Text>
            </View>
            {/* End of Row Box 3 */}

            {/* Row Box 4 */}
            <View style={styles.rowContainer}>
                <View style={styles.contentRow}>
                    <View style={styles.emptyColumn}></View>
                    
                    {/* Vertical Line */}
                    <View style={styles.dividerLine} />
                    
                    <View style={styles.columnContainer}>
                        <Text style={styles.centerText}>AMOUNT DUE</Text>
                    </View>

                    {/* Vertical Line */}
                    <View style={styles.dividerLine} />
                    
                    <View style={styles.columnContainer}>
                        <Text style={styles.centerText}>ASSESSED BY</Text>
                    </View>

                    {/* Vertical Line */}
                    <View style={styles.dividerLine} />
                    
                    <View style={styles.columnContainer}>
                        <Text style={styles.centerText}>O.R. NUMBER</Text>
                    </View>

                    {/* Vertical Line */}
                    <View style={styles.dividerLine} />
                    
                    <View style={styles.columnContainer}>
                        <Text style={styles.centerText}>DATE PAID</Text>
                    </View>
                </View>
            </View>
            {/* End of Row Box 4 */}

            {/* Row Box 5 */}
            <View style={styles.rowContainer}>
                <View style={styles.contentRow}>
                    <View style={styles.emptyColumn}></View>
                    
                    {/* Vertical Line */}
                    <View style={styles.dividerLine} />
                    
                    <View style={styles.columnContainer}>
                        <Text style={styles.centerText}></Text>
                    </View>

                    {/* Vertical Line */}
                    <View style={styles.dividerLine} />
                    
                    <View style={styles.columnContainer}>
                        <Text style={styles.centerText}></Text>
                    </View>

                    {/* Vertical Line */}
                    <View style={styles.dividerLine} />
                    
                    <View style={styles.columnContainer}>
                        <Text style={styles.centerText}></Text>
                    </View>

                    {/* Vertical Line */}
                    <View style={styles.dividerLine} />
                    
                    <View style={styles.columnContainer}>
                        <Text style={styles.centerText}></Text>
                    </View>
                </View>
            </View>
            {/* End of Row Box 5 */}

            {/* Row Box 6 */}
            <View style={styles.rowContainer}>
                <View style={styles.contentRow}>
                    <View style={styles.emptyColumn}></View>
                    
                    {/* Vertical Line */}
                    <View style={styles.dividerLine} />
                    
                    <View style={styles.columnContainer}>
                        <Text style={styles.centerText}></Text>
                    </View>

                    {/* Vertical Line */}
                    <View style={styles.dividerLine} />
                    
                    <View style={styles.columnContainer}>
                        <Text style={styles.centerText}></Text>
                    </View>

                    {/* Vertical Line */}
                    <View style={styles.dividerLine} />
                    
                    <View style={styles.columnContainer}>
                        <Text style={styles.centerText}></Text>
                    </View>

                    {/* Vertical Line */}
                    <View style={styles.dividerLine} />
                    
                    <View style={styles.columnContainer}>
                        <Text style={styles.centerText}></Text>
                    </View>
                </View>
            </View>
            {/* End of Row Box 6 */}
           
        </View>
        
        
    );
}
