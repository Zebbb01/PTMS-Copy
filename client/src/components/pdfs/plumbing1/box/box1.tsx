import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/box1'; // Import the styles

// Define the permit layout component
export function PermitBodyBox1({ permitInfo }: { permitInfo: any }) {
    // Dummy static data
    const defaultData = {
        labelData: 'John A. Doe',
        cellData: '123412341234',
        cellData2: '24682468',
        cellData3: '123123123123',
        checkboxData: 'N',
    };

    const data = { ...defaultData, ...permitInfo };
    
    return (
        <View style={styles.formNo}>
            {/* Title Section */}
            <Text style={styles.formNo}>NBC FORM NO. A-06</Text>
            <View style={styles.permitTitle}>
                <Text style={styles.permitTitleText}>Republic of the Philippines</Text>
                <Text style={styles.permitTitleText1}>DEPARTMENT OF PUBLIC WORKS & HIGHWAYS</Text>
                <Text style={styles.permitTitleText2}>OFFICE OF THE BUILDING OFFICIAL</Text>
                <Text style={styles.permitTitleText3}>PANABO CITY</Text>

                <Text style={styles.title}>PLUMBING PERMIT</Text>

                <View style={styles.noApplication}>
                    {/* Align the text horizontally */}
                    <View style={styles.numberContainer}>
                        <Text style={styles.numberText}>APPLICATION NO.</Text>
                        {/* Data for APPLICATION NO. goes here */}

                        <Text style={styles.numberText1}>PP NO.</Text>
                        {/* Data for PP NO. goes here */}

                        <Text style={styles.numberText2}>PERMIT NO</Text>
                        {/* Data for PERMIT NO goes here */}
                    </View>

                    <View style={styles.row}>
                        {/* Create boxes below the text for Application No. */}
                        <View style={styles.boxContainer}>
                            {/* Insert individual digits of APPLICATION NO. here */}
                            {/* Multi-Cell Box (for data entry) */}
                        <View style={styles.multiCellBox}>
                            {Array.from({ length: 12 }).map((_, index) => (
                                <View key={index} style={styles.cell}>
                                    {/* Replace `permitInfo.cellData[index]` with actual data you want to display */}
                                    <Text style={styles.cellData}>{data.cellData ? data.cellData[index] : ''}</Text>
                                </View>
                            ))}
                        </View>
                        </View>
                        {/* Create boxes below the text for PP No. */}
                        <View style={styles.boxContainer1}>
                            {/* Insert individual digits of PP NO. here */}
                            {/* Multi-Cell Box (for data entry) */}
                        <View style={styles.multiCellBox}>
                            {Array.from({ length: 8 }).map((_, index) => (
                                <View key={index} style={styles.cell}>
                                    {/* Replace `permitInfo.cellData[index]` with actual data you want to display */}
                                    <Text style={styles.cellData}>{data.cellData2 ? data.cellData2[index] : ''}</Text>
                                </View>
                            ))}
                        </View>
                        </View>
                        {/* Create boxes below the text for Permit No. */}
                        <View style={styles.boxContainer2}>
                            {/* Insert individual digits of PERMIT NO. here */}
                            {/* Multi-Cell Box (for data entry) */}
                        <View style={styles.multiCellBox}>
                            {Array.from({ length: 12 }).map((_, index) => (
                                <View key={index} style={styles.cell}>
                                    {/* Replace `permitInfo.cellData[index]` with actual data you want to display */}
                                    <Text style={styles.cellData}>{data.cellData3 ? data.cellData3[index] : ''}</Text>
                                </View>
                            ))}
                        </View>
                        </View>
                    </View>
                </View>
            </View>

            {/* Date Container */}
                    <View style={styles.dateContainer}>
                            <View style={styles.dateColumn}>
                                <Text style={styles.dateLine}>{data.labelData || ' '} </Text>
                                <Text style={styles.dateLabel}>DATE OF APPLICATION</Text>
                            </View>
                            <View style={styles.dateColumn2}>
                                <Text style={styles.dateLine}>{data.labelData || ' '} </Text>
                                <Text style={styles.dateLabel}>DATE ISSUED</Text>
                            </View>
                    </View>

            <Text style={styles.printText}>BOX 1 (TO BE ACCOMPLISHED BY SANITARY ENGINEER/MASTER PLUMBER, IN PRINT)</Text>
            
            {/* Row Box 1 */}
            <View style={styles.container}>
                {/* Row for NAME OF OWNER/APPLICANT */}
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={styles.row}>
                            <Text style={styles.label}>NAME OF OWNER/APPLICANT</Text>
                            <Text style={styles.label}>LAST NAME, FIRST NAME,</Text>
                            <Text style={styles.label}>M.I.</Text>   
                        </View>
                    </View>
                    <View style={styles.subRow}>
                        <Text style={styles.label}>TAX ACCT. NO</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={styles.row}>
                        <Text style={styles.labelData}>{data.labelData || ' '} </Text>
                        <Text style={styles.labelData}>{data.labelData || ' '} </Text>
                        <Text style={styles.labelData}>{data.labelData || ' '} </Text>  
                        </View>
                    </View>
                    <View style={styles.subRow}>
                    <Text style={styles.labelData}>{data.labelData || ' '} </Text>
                    </View>
                </View>
            </View>
            {/* End of Row Box 1 */}

            {/* Row Box 2 */}
            <View style={styles.container}>
                {/* Row for NAME OF OWNER/APPLICANT */}
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={styles.row}>
                            <Text style={styles.label}>ADDRESS</Text>
                            <Text style={styles.label}>No., Street, Barangay, City/Municipality</Text>
                        </View>
                    </View>
                    <View style={styles.subRow2}>
                        <Text style={styles.label}>TELEPHONE NO.</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={styles.row}>
                        <Text style={styles.labelData}>{data.labelData || ' '} </Text>
                        <Text style={styles.labelData}>{data.labelData || ' '} </Text>  
                        </View>
                    </View>
                    <View style={styles.subRow2}>
                    <Text style={styles.labelData}>{data.labelData || ' '} </Text>
                    </View>
                </View>
            </View>
            {/* End of Row Box 2 */}

            {/* Row Box 3 */}
            <View style={styles.container}>
                {/* Row for NAME OF OWNER/APPLICANT */}
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={styles.row}>
                            <Text style={styles.label}>ADDRESS</Text>
                            <Text style={styles.label}>No., Street, Barangay, City/Municipality</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={styles.row}>
                        <Text style={styles.labelData}>{data.labelData || ' '} </Text>
                        <Text style={styles.labelData}>{data.labelData || ' '} </Text>  
                        </View>
                    </View>
                </View>
            </View>
            {/* End of Row Box 3 */}

            {/* Row Box 4 */}
            <View style={styles.container2}>
                {/* Row for SCOPE OF WORK */}
                <View style={styles.boxStyleContainer2}>
                    <View style={styles.columnBox}>
                        <Text style={styles.box4label}>SCOPE OF WORK</Text>
                        
                        {/* Create a flex row to arrange both sets side by side */}
                        <View style={styles.scopeOfWorkRow}>
                            {/* Left column for NEW CONSTRUCTION, ERECTION, etc. */}
                            <View style={styles.scopeColumn}>
                                <View style={styles.rowOption}>
                                    <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>

                                    {/* Check NEW CONSTRUCTION box here */}
                                    <Text style={styles.box4label2}>NEW CONSTRUCTION</Text>
                                </View>
                                <View style={styles.rowOption}>
                                    <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>

                                    {/* Check ERECTION box here */}
                                    <Text style={styles.box4label2}>ERECTION</Text>
                                </View>
                                <View style={styles.rowOption}>
                                    <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>

                                    {/* Check ADDITION box here */}
                                    <Text style={styles.box4label2}>ADDITION</Text>
                                </View>
                                <View style={styles.rowOption}>
                                    <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>

                                    {/* Check ALTERATION box here */}
                                    <Text style={styles.box4label2}>ALTERATION</Text>
                                </View>
                            </View>

                            {/* Right column for RENOVATION, CONVERSION, etc. */}
                            <View style={styles.scopeColumn2}>
                                <View style={styles.rowOption2}>
                                    <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>

                                    {/* Check RENOVATION box here */}
                                    <Text style={styles.box4label2}>RENOVATION</Text>
                                    <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                                </View>
                                <View style={styles.rowOption2}>
                                    <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>

                                    {/* Check CONVERSION box here */}
                                    <Text style={styles.box4label2}>CONVERSION</Text>
                                    <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                                </View>
                                <View style={styles.rowOption2}>
                                    <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>

                                    {/* Check REPAIR box here */}
                                    <Text style={styles.box4label2}>REPAIR</Text>
                                    <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                                </View>
                                <View style={styles.rowOption2}>
                                    <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>

                                    {/* Check MOVING box here */}
                                    <Text style={styles.box4label2}>MOVING</Text>
                                    <Text style={styles.blankLine}>{data.labelData || ' '} </Text> 
                                </View>
                            </View>
                            {/* Right column for RENOVATION, CONVERSION, etc. */}
                            <View style={styles.scopeColumn3}>
                                <View style={styles.rowOption3}>
                                    <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>

                                    {/* Check RENOVATION box here */}
                                    <Text style={styles.box4label2}>RISING</Text>
                                    <Text style={styles.blankLine2}>{data.labelData || ' '} </Text>
                                </View>
                                <View style={styles.rowOption3}>
                                    <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>

                                    {/* Check CONVERSION box here */}
                                    <Text style={styles.box4label2}>DEMOLITION</Text>
                                    <Text style={styles.blankLine3}>{data.labelData || ' '} </Text>
                                </View>
                                <View style={styles.rowOption3}>
                                    <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>

                                    {/* Check REPAIR box here */}
                                    <Text style={styles.box4label2}>ACCESSORY BUILDING/STRUCTURE</Text>
                                    <Text style={styles.blankLine4}>{data.labelData || ' '} </Text>
                                </View>
                                <View style={styles.rowOption3}>
                                    <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>

                                    {/* Check MOVING box here */}
                                    <Text style={styles.box4label2}>OTHERS (specify)</Text>
                                    <Text style={styles.blankLine5}>{data.labelData || ' '} </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            {/* End of Row Box 4 */}
            
            {/* Row Box 5 */}
            <View style={styles.container3}>
                {/* Row for USE OR TYPE OF OCCUPANCY */}
                <View style={styles.boxStyleContainer2}>
                    <View style={styles.columnBox}>
                        <Text style={styles.box4label}>USE OR TYPE OF OCCUPANCY</Text>
                        
                        {/* Create a flex row to arrange both sets side by side */}
                        <View style={styles.scopeOfWorkRow}>
                            {/* Left column for NEW CONSTRUCTION, ERECTION, etc. */}
                            <View style={styles.scopeColumn4}>
                                <View style={styles.rowOption}>
                                    <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>

                                    {/* Check NEW CONSTRUCTION box here */}
                                    <Text style={styles.box4label2}>Residentia</Text>
                                </View>
                                <View style={styles.rowOption}>
                                    <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>

                                    {/* Check ERECTION box here */}
                                    <Text style={styles.box4label2}>Commercial</Text>
                                </View>
                                <View style={styles.rowOption}>
                                    <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>

                                    {/* Check ADDITION box here */}
                                    <Text style={styles.box4label2}>Industrial</Text>
                                </View>
                                <View style={styles.rowOption}>
                                    <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>

                                    {/* Check ALTERATION box here */}
                                    <Text style={styles.box4label2}>Institutional</Text>
                                </View>
                            </View>

                            {/* Right column for RENOVATION, CONVERSION, etc. */}
                            <View style={styles.scopeColumn4}>
                                <View style={styles.rowOption2}>
                                    <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>

                                    {/* Check RENOVATION box here */}
                                    <Text style={styles.box4label2}>Agricultural</Text>
                                </View>
                                <View style={styles.rowOption2}>
                                    <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>

                                    {/* Check CONVERSION box here */}
                                    <Text style={styles.box4label2}>Parks, Plazas, Monuments</Text>
                                </View>
                                <View style={styles.rowOption2}>
                                    <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>

                                    {/* Check REPAIR box here */}
                                    <Text style={styles.box4label2}>Recreational</Text>
                                </View>
                                <View style={styles.rowOption2}>
                                    <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>

                                    {/* Check MOVING box here */}
                                    <Text style={styles.box4label2}>Others (Specify)</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            {/* End of Row Box 5 */}
            
        </View>
    );
}
