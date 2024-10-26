import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/box1'; // Import the styles

// Define the permit layout component
export function PermitBodyBox1({ permitInfo }: { permitInfo: any }) {
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

                    <View style={styles.boxStyleContainer}>
                        {/* Create boxes below the text for Application No. */}
                        <View style={styles.boxContainer}>
                            {/* Insert individual digits of APPLICATION NO. here */}
                            {/* Multi-Cell Box (for data entry) */}
                        <View style={styles.multiCellBox}>
                            {Array.from({ length: 12 }).map((_, index) => (
                                <View key={index} style={styles.cell}>
                                    {/* Replace `permitInfo.cellData[index]` with actual data you want to display */}
                                    <Text>{permitInfo.cellData ? permitInfo.cellData[index] : ''}</Text>
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
                                    <Text>{permitInfo.cellData ? permitInfo.cellData[index] : ''}</Text>
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
                                    <Text>{permitInfo.cellData ? permitInfo.cellData[index] : ''}</Text>
                                </View>
                            ))}
                        </View>
                        </View>
                    </View>

                    {/* Date Container */}
                    <View style={styles.dateContainer}>
                        <View style={styles.dateText}>
                            <Text style={styles.dateLabel}>DATE OF APPLICATION</Text>
                            {/* Data for DATE OF APPLICATION goes here */}
                        </View>
                        <View style={styles.dateText1}>
                            <Text style={styles.dateLabel}>DATE ISSUED</Text>
                            {/* Data for DATE ISSUED goes here */}
                        </View>
                    </View>
                </View>
            </View>

            <Text style={styles.printText}>BOX 1 (TO BE ACCOMPLISHED BY SANITARY ENGINEER/MASTER PLUMBER, IN PRINT)</Text>
            
            {/* Row Box 1 */}
            <View style={styles.container}>
                {/* Row for NAME OF OWNER/APPLICANT */}
                <View style={styles.boxStyleContainer}>
                    <View style={styles.row}>
                        <Text style={styles.label}>NAME OF OWNER/APPLICANT</Text>
                        {/* Data for NAME OF OWNER/APPLICANT goes here */}
                        <Text style={styles.label2}>LAST NAME, FIRST NAME,</Text>
                        <Text style={styles.label3}>M.I.</Text> 
                    </View>
                    <View style={styles.line} />
                    <View style={styles.rowBox}>
                        <Text style={styles.label}>TAX ACCT. NO</Text>
                        {/* Data for TAX ACCT. NO goes here */}
                    </View>
                </View>
            </View>
            {/* End of Row Box 1 */}

            {/* Row Box 2 */}
            <View style={styles.container2}>
                {/* Row for ADDRESS */}
                <View style={styles.boxStyleContainer}>
                    <View style={styles.row}>
                        <Text style={styles.box2label}>ADDRESS</Text>
                        {/* Data for ADDRESS goes here */}
                        <Text style={styles.box2label2}>No., Street, Barangay, City/Municipality</Text>
                    </View>
                    <View style={styles.line2} />
                    <View style={styles.rowBox2}>
                        <Text style={styles.box2label}>TELEPHONE NO.</Text>
                        {/* Data for TELEPHONE NO. goes here */}
                    </View>
                </View>
            </View>
            {/* End of Row Box 2 */}

            {/* Row Box 3 */}
            <View style={styles.container3}>
                {/* Row for Location of Installation */}
                <View style={styles.boxStyleContainer2}>
                    <View style={styles.rowBox3}>
                        <Text style={styles.box3label}>Location of Installation</Text>
                        {/* Data for LOCATION OF INSTALLATION goes here */}
                        <Text style={styles.box3label2}>No., Street, Barangay, City/Municipality</Text>
                    </View>
                </View>
            </View>
            {/* End of Row Box 3 */}

            {/* Row Box 4 */}
            <View style={styles.container4}>
                {/* Row for SCOPE OF WORK */}
                <View style={styles.boxStyleContainer2}>
                    <View style={styles.columnBox}>
                        <Text style={styles.box4label}>SCOPE OF WORK</Text>
                        
                        {/* Create a flex row to arrange both sets side by side */}
                        <View style={styles.scopeOfWorkRow}>
                            {/* Left column for NEW CONSTRUCTION, ERECTION, etc. */}
                            <View style={styles.scopeColumn}>
                                <View style={styles.rowOption}>
                                    <View style={styles.boxColumn}></View>
                                    {/* Check NEW CONSTRUCTION box here */}
                                    <Text style={styles.box4label2}>NEW CONSTRUCTION</Text>
                                </View>
                                <View style={styles.rowOption}>
                                    <View style={styles.boxColumn}></View>
                                    {/* Check ERECTION box here */}
                                    <Text style={styles.box4label2}>ERECTION</Text>
                                </View>
                                <View style={styles.rowOption}>
                                    <View style={styles.boxColumn}></View>
                                    {/* Check ADDITION box here */}
                                    <Text style={styles.box4label2}>ADDITION</Text>
                                </View>
                                <View style={styles.rowOption}>
                                    <View style={styles.boxColumn}></View>
                                    {/* Check ALTERATION box here */}
                                    <Text style={styles.box4label2}>ALTERATION</Text>
                                </View>
                            </View>

                            {/* Right column for RENOVATION, CONVERSION, etc. */}
                            <View style={styles.scopeColumn2}>
                                <View style={styles.rowOption2}>
                                    <View style={styles.boxColumn2}></View>
                                    {/* Check RENOVATION box here */}
                                    <Text style={styles.box4label2}>RENOVATION</Text>
                                    <View style={styles.boxLabelLine} />
                                </View>
                                <View style={styles.rowOption2}>
                                    <View style={styles.boxColumn2}></View>
                                    {/* Check CONVERSION box here */}
                                    <Text style={styles.box4label2}>CONVERSION</Text>
                                    <View style={styles.boxLabelLine2} />
                                </View>
                                <View style={styles.rowOption2}>
                                    <View style={styles.boxColumn2}></View>
                                    {/* Check REPAIR box here */}
                                    <Text style={styles.box4label2}>REPAIR</Text>
                                    <View style={styles.boxLabelLine3} />
                                </View>
                                <View style={styles.rowOption2}>
                                    <View style={styles.boxColumn2}></View>
                                    {/* Check MOVING box here */}
                                    <Text style={styles.box4label2}>MOVING</Text>
                                    <View style={styles.boxLabelLine4}> 
                                    </View>
                                </View>
                            </View>
                            {/* Right column for RENOVATION, CONVERSION, etc. */}
                            <View style={styles.scopeColumn3}>
                                <View style={styles.rowOption2}>
                                    <View style={styles.boxColumn2}></View>
                                    {/* Check RENOVATION box here */}
                                    <Text style={styles.box4label2}>RISING</Text>
                                    <View style={styles.boxLabel2Line} />
                                </View>
                                <View style={styles.rowOption2}>
                                    <View style={styles.boxColumn2}></View>
                                    {/* Check CONVERSION box here */}
                                    <Text style={styles.box4label2}>DEMOLITION</Text>
                                    <View style={styles.boxLabel2Line2} />
                                </View>
                                <View style={styles.rowOption2}>
                                    <View style={styles.boxColumn2}></View>
                                    {/* Check REPAIR box here */}
                                    <Text style={styles.box4label2}>ACCESSORY BUILDING/STRUCTURE</Text>
                                    <View style={styles.boxLabel2Line3} />
                                </View>
                                <View style={styles.rowOption2}>
                                    <View style={styles.boxColumn2}></View>
                                    {/* Check MOVING box here */}
                                    <Text style={styles.box4label2}>OTHERS (specify)</Text>
                                    <View style={styles.boxLabel2Line4}> 
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            {/* End of Row Box 4 */}
            
            {/* Row Box 5 */}
            <View style={styles.container5}>
                {/* Row for USE OR TYPE OF OCCUPANCY */}
                <View style={styles.boxStyleContainer2}>
                    <View style={styles.columnBox}>
                        <Text style={styles.box4label}>USE OR TYPE OF OCCUPANCY</Text>
                        
                        {/* Create a flex row to arrange both sets side by side */}
                        <View style={styles.scopeOfWorkRow}>
                            {/* Left column for NEW CONSTRUCTION, ERECTION, etc. */}
                            <View style={styles.scopeColumn4}>
                                <View style={styles.rowOption}>
                                    <View style={styles.boxColumn}></View>
                                    {/* Check NEW CONSTRUCTION box here */}
                                    <Text style={styles.box4label2}>Residentia</Text>
                                </View>
                                <View style={styles.rowOption}>
                                    <View style={styles.boxColumn}></View>
                                    {/* Check ERECTION box here */}
                                    <Text style={styles.box4label2}>Commercial</Text>
                                </View>
                                <View style={styles.rowOption}>
                                    <View style={styles.boxColumn}></View>
                                    {/* Check ADDITION box here */}
                                    <Text style={styles.box4label2}>Industrial</Text>
                                </View>
                                <View style={styles.rowOption}>
                                    <View style={styles.boxColumn}></View>
                                    {/* Check ALTERATION box here */}
                                    <Text style={styles.box4label2}>Institutional</Text>
                                </View>
                            </View>

                            {/* Right column for RENOVATION, CONVERSION, etc. */}
                            <View style={styles.scopeColumn5}>
                                <View style={styles.rowOption2}>
                                    <View style={styles.boxColumn2}></View>
                                    {/* Check RENOVATION box here */}
                                    <Text style={styles.box4label2}>Agricultural</Text>
                                </View>
                                <View style={styles.rowOption2}>
                                    <View style={styles.boxColumn2}></View>
                                    {/* Check CONVERSION box here */}
                                    <Text style={styles.box4label2}>Parks, Plazas, Monuments</Text>
                                </View>
                                <View style={styles.rowOption2}>
                                    <View style={styles.boxColumn2}></View>
                                    {/* Check REPAIR box here */}
                                    <Text style={styles.box4label2}>Recreational</Text>
                                </View>
                                <View style={styles.rowOption2}>
                                    <View style={styles.boxColumn2}></View>
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
