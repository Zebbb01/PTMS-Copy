import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/box7'; // Import the styles

// Define the permit layout component
export function PermitBodyBox7({ permitInfo }: { permitInfo: any }) {
    // Dummy static data
    const defaultData = {
        labelData: 'John A. Doe',
        checkboxData: 'Y',
    };

    const data = { ...defaultData, ...permitInfo };
    return (
        <View style={styles.formNo}>
            {/* Title Section */}
            <Text style={styles.printText}>BOX 7 (TO BE ACCOMPLISHED BY THE RECEIVING & RECORDING SECTION ) </Text>


            {/* Row Box 4 */}
            <View style={styles.container4}>
                <View style={styles.row3}>
                    <View style={styles.prcContainer}>
                        <Text style={styles.infoText2}>RECEIVED BY: </Text>
                        <Text style={styles.data}>{data.labelData || ' '}</Text>
                    </View>
                    
                    {/* Vertical Line */}
                    <View style={styles.verticalLine} />
                    
                    <View style={styles.validityContainer}>
                        <Text style={styles.infoText3}>DATE: </Text>
                        <Text style={styles.data}>{data.labelData || ' '}</Text>
                    </View>
                </View>
            </View>
            {/* End of Row Box 4 */}
            
            {/* Row Box 3 */}
            <View style={styles.container3}>
                <Text style={styles.infoText}>THREE (3) SETS OF PLUMBING DOCUMENTS
                </Text>

                {/* Create a flex row to arrange both sets side by side */}
                <View style={styles.setsRow}>
                            {/* Left column for NEW CONSTRUCTION, ERECTION, etc. */}
                            <View style={styles.scopeColumn}>
                                <View style={styles.rowOption}>
                                    <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                                    {/* Check NEW CONSTRUCTION box here */}
                                    <Text style={styles.box4label2}>Plumbing Plans & Specifications</Text>
                                </View>
                                <View style={styles.rowOption}>
                                    <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                                    {/* Check ERECTION box here */}
                                    <Text style={styles.box4label2}>Bill of Materials </Text>
                                </View>
                            </View>
    

                    {/* Create a flex row to arrange both sets side by side */}
                
                            {/* Left column for NEW CONSTRUCTION, ERECTION, etc. */}
                            <View style={styles.scopeColumn}>
                                <View style={styles.rowOption}>
                                    <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                                    {/* Check NEW CONSTRUCTION box here */}
                                    <Text style={styles.box4label2}>Cost Estimates</Text>
                                </View>
                                <View style={styles.rowOption}>
                                    <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                                    {/* Check ERECTION box here */}
                                    <Text style={styles.box4label2}>Others (Specify)</Text>
                                    <Text style={styles.boxLabelLine}>{data.labelData || ' '}</Text> 
                                </View>
                            </View>
                    </View>
            </View>
            {/* End of Row Box 3 */}
        </View>
        
        
    );
}
