import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/box4'; // Import the styles

// Define the permit layout component
export function PermitBodyBox4({ permitInfo }: { permitInfo: any }) {
    return (
        <>
            {/* Title Section */}
            <Text style={styles.printText}>BOX 4</Text>

            {/* Row Box 1 */}
            <View style={styles.container}>
                <View style={styles.boxStyleContainer}>
                    <View style={styles.row}>
                        <Text style={styles.label}>SUPERVISOR / IN-CHARGE OF MECHANICAL WORKS</Text>
                    </View>
                </View>
            </View>
            {/* End of Row Box 1 */}

            {/* Row Box 2 */}
            <View style={styles.container2}>
                <View style={styles.scopeColumn4}>
                        <View style={styles.rowOption}>
                            <View style={styles.boxColumn}></View>
                            {/* Check NEW CONSTRUCTION box here */}
                            <Text style={styles.box4label2}>PROFESSIONAL MECHANICAL ENGINEER</Text>
                        </View>
                </View>

                <View style={styles.scopeColumn5}>
                        <View style={styles.rowOption}>
                            <View style={styles.boxColumn}></View>
                            {/* Check NEW CONSTRUCTION box here */}
                            <Text style={styles.box4label2}>MECHANICAL ENGINEER</Text>
                        </View>
                </View>
                <View style={styles.boxStyleContainer2}>
                    <View style={styles.row2}>
                        {/* Master Plumber label and line */}
                        <View style={styles.textLineContainer}>
                            <View style={styles.line}></View>
                            <Text style={styles.labelOnLine}>PROFESSIONAL MECHANICAL ENGINEER</Text>
                            <Text style={styles.labelOnLine3}>(signed and sealed over printed name)</Text>
                            <Text style={styles.labelOnLine2}>Date</Text>
                            <View style={styles.line2}></View>
                            </View>
                    </View>
                </View>
            </View>
            {/* End of Row Box 2 */}

            {/* Row Box 3 */}
            <View style={styles.container3}>
                <Text style={styles.infoText}>ADDRESS </Text>
            </View>
            {/* End of Row Box 3 */}

            {/* Row Box 4 */}
            <View style={styles.container4}>
                <View style={styles.row3}>
                    <View style={styles.prcContainer}>
                        <Text style={styles.infoText2}>PRC NO.</Text>
                    </View>
                    
                    {/* Vertical Line */}
                    <View style={styles.verticalLine} />
                    
                    <View style={styles.validityContainer}>
                        <Text style={styles.infoText3}>VALIDITY</Text>
                    </View>
                </View>
            </View>
            {/* End of Row Box 4 */}

            {/* Row Box 5 */}
            <View style={styles.container5}>
                <View style={styles.row3}>
                    <View style={styles.prcContainer2}>
                        <Text style={styles.infoText2}>PTR NO.</Text>
                    </View>
                    
                    {/* Vertical Line */}
                    <View style={styles.verticalLine} />
                    
                    <View style={styles.validityContainer2}>
                        <Text style={styles.infoText3}>DATE ISSUED</Text>
                    </View>
                </View>
            </View>
            {/* End of Row Box 5 */}

            {/* Row Box 6 */}
            <View style={styles.container6}>
                <View style={styles.row3}>
                    <View style={styles.prcContainer3}>
                        <Text style={styles.infoText2}>ISSUED AT</Text>
                    </View>
                    
                    {/* Vertical Line */}
                    <View style={styles.verticalLine2} />
                    
                    <View style={styles.validityContainer3}>
                        <Text style={styles.infoText4}>TIN </Text>
                    </View>
                </View>
            </View>
            {/* End of Row Box 6 */}
        </>
        
        
    );
}
