import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/box1'; // Import the styles

// Define the permit layout component
export function PermitBodyBox1({ permitInfo }: { permitInfo: any }) {
    return (
        <View style={styles.formNo}>
            {/* Title Section */}
            <Text style={styles.printText}>NBC FORM NO. A-04</Text>
            <View style={styles.permitTitle}>
                <Text style={styles.permitTitleText}>Republic of the Philippines</Text>
                <Text style={styles.permitTitleText1}>DEPARTMENT OF PUBLIC WORKS AND HIGWAYS</Text>
                <Text style={styles.permitTitleText2}>OFFICE OF THE BUILDING OFFICIAL</Text>
                <Text style={styles.permitTitleText3}>PANABO CITY </Text>

                <Text style={styles.title}>MECHANICAL PERMIT</Text>

                <View style={styles.noApplication}>
                    {/* Align the text horizontally */}
                    <View style={styles.numberContainer}>
                        <Text style={styles.numberText}>APPLICATION NO.</Text>
                        {/* Data for APPLICATION NO. goes here */}

                        <Text style={styles.numberText1}>MP NO.</Text>
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
                            {Array.from({ length: 11 }).map((_, index) => (
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
                        <View style={styles.boxContainer}>
                            {/* Insert individual digits of PERMIT NO. here */}
                            {/* Multi-Cell Box (for data entry) */}
                        <View style={styles.multiCellBox}>
                            {Array.from({ length: 11 }).map((_, index) => (
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
                            <Text style={styles.dateLabel2}>DATE ISSUED</Text>
                            {/* Data for DATE ISSUED goes here */}
                        </View>
                    </View>       

                </View>
            </View>

            <Text style={styles.printText}>BOX 1 (TO BE ACCOMPLISHED IN PRINT BY THE OWNER/APPLICANT)</Text>
            
            {/* Row Box 1 */}
            <View style={styles.container}>
                {/* Row for NAME OF OWNER/APPLICANT */}
                    <View style={styles.row}>
                        <Text style={styles.label}>NAME OF OWNER/APPLICANT </Text>
                        {/* Data for NAME OF OWNER/APPLICANT goes here */}
                        <Text style={styles.label2}>LAST NAME, FIRST NAME, M.I.</Text>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.row}>
                        <Text style={styles.label3}>TAX I.D. NO</Text>
                        {/* Data for TAX ACCT. NO goes here */}
                    </View>
            </View>
            {/* End of Row Box 1 */}
            {/* Row Box 3 */}
            <View style={styles.container}>
                {/* Row for NAME OF OWNER/APPLICANT */}
                    <View style={styles.row}>
                        <Text style={styles.label}>FOR CONSTRUCTION OWNED </Text>
                        {/* Data for NAME OF OWNER/APPLICANT goes here */}
                        
                        <Text style={styles.label2}>FORM OF OWNERSHIP</Text>
                    </View>
                    <View style={styles.line2} />
                    <View style={styles.line3} />
                    <View style={styles.row}>
                        <Text style={styles.label3}>USE OF CHARACTER OF OCCUPANCY</Text>
                        {/* Data for TAX ACCT. NO goes here */}
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.box2label}>BY AN ENTERPRISE</Text>
                    </View>
            </View>
            {/* End of Row Box 3 */}

             {/* Row Box 3 */}
             <View style={styles.container}>
                {/* Row for NAME OF OWNER/APPLICANT */}
                    <View style={styles.row}>
                        <Text style={styles.label}>ADDRESS</Text>
                        {/* Data for NAME OF OWNER/APPLICANT goes here */}
                        <Text style={styles.label2}>NO., STREET, BARANGAY, CITY/MUNICIPALITY/ ZIP CODE</Text>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.row}>
                        <Text style={styles.label3}>TELEPHONE NO.</Text>
                        {/* Data for TAX ACCT. NO goes here */}
                    </View>
            </View>
            {/* End of Row Box 3 */}

            {/* Row Box 3 */}
            <View style={styles.container4}>
                    <View style={styles.row}>
                        <Text style={styles.box3label}>LOCATION OF CONSTRUCTION : </Text>
                        <Text style={styles.box3label2}>NO.STREET, BARANGAY, CITY/MUNICIPALITY</Text>
                        {/* Data for NAME OF OWNER/APPLICANT goes here */}
                    </View>
            </View>
            {/* End of Row Box 4 */}
            
            {/* Row Box 5 */}
            <View style={styles.container5}>
                {/* Row for SCOPE OF WORKS */} 
                <Text style={styles.box4label}>SCOPE OF WORKS : </Text>
                <View style={styles.boxStyleContainer4}>
                    <View style={styles.columnBox}>
                        {/* Create a flex row to arrange both sets side by side */}
                        <View style={styles.scopeOfWorkRow}>
                            {/* Left column for NEW CONSTRUCTION, ERECTION, etc. */}
                            <View style={styles.scopeColumn4}>
                                <View style={styles.rowOption}>
                                    <View style={styles.boxColumn}></View>
                                    {/* Check NEW CONSTRUCTION box here */}
                                    <Text style={styles.box4label2}>NEW CONSTRUCTION</Text>
                                </View>
                                <View style={styles.rowOption}>
                                    <View style={styles.boxColumn}></View>
                                    {/* Check NEW CONSTRUCTION box here */}
                                    <Text style={styles.box4label2}>ERECTION</Text>
                                </View>
                                <View style={styles.rowOption}>
                                    <View style={styles.boxColumn}></View>
                                    {/* Check NEW CONSTRUCTION box here */}
                                    <Text style={styles.box4label2}>ADDITION</Text>
                                </View>
                                <View style={styles.rowOption}>
                                    <View style={styles.boxColumn}></View>
                                    {/* Check NEW CONSTRUCTION box here */}
                                    <Text style={styles.box4label2}>ALTERATION</Text>
                                </View>
                            </View>

                            {/* Right column for RENOVATION, CONVERSION, etc. */}
                            <View style={styles.scopeColumn5}>
                                <View style={styles.rowOption2}>
                                    <View style={styles.boxColumn2}></View>
                                    {/* Check RENOVATION box here */}
                                    <Text style={styles.box4label2}>RENOVATION</Text>
                                    <View style={styles.underline} />
                                </View>
                                <View style={styles.rowOption2}>
                                    <View style={styles.boxColumn2}></View>
                                    {/* Check RENOVATION box here */}
                                    <Text style={styles.box4label2}>CONVERSION</Text>
                                    <View style={styles.underline2} />
                                </View>
                                <View style={styles.rowOption2}>
                                    <View style={styles.boxColumn2}></View>
                                    {/* Check RENOVATION box here */}
                                    <Text style={styles.box4label2}>REPAIR</Text>
                                    <View style={styles.underline3} />
                                </View>
                                <View style={styles.rowOption2}>
                                    <View style={styles.boxColumn2}></View>
                                    {/* Check RENOVATION box here */}
                                    <Text style={styles.box4label2}>MOVING</Text>
                                    <View style={styles.underline4} />
                                </View>
                            </View>
                             {/* Right column for RENOVATION, CONVERSION, etc. */}
                             <View style={styles.scopeColumn6}>
                                <View style={styles.rowOption2}>
                                    <View style={styles.boxColumn2}></View>
                                    {/* Check RENOVATION box here */}
                                    <Text style={styles.box4label2}>RAISING</Text>
                                    <View style={styles.underline5} />
                                </View>
                                <View style={styles.rowOption2}>
                                    <View style={styles.boxColumn2}></View>
                                    {/* Check RENOVATION box here */}
                                    <Text style={styles.box4label2}>DEMOLITION</Text>
                                    <View style={styles.underline6} />
                                </View>
                                <View style={styles.rowOption2}>
                                    <View style={styles.boxColumn2}></View>
                                    {/* Check RENOVATION box here */}
                                    <Text style={styles.box4label2}>ACCESSORY BUILDING/STRUCTURE</Text>
                                    <View style={styles.underline7} />
                                </View>
                                <View style={styles.rowOption2}>
                                    <View style={styles.boxColumn2}></View>
                                    {/* Check RENOVATION box here */}
                                    <Text style={styles.box4label2}>OTHERS (specify)</Text>
                                    <View style={styles.underline8} />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            {/* End of Row Box 5 */}

            {/* Row Box 6 */}
            {/* Container for nature of installation */}
            <View style={styles.container6}>
                <Text style={styles.box6label}>USE OR TYPE OF OCCUPANCY</Text>
                
                {/* Columns layout */}
                <View style={styles.columnsContainer}>
                    
                    {/* First Column */}
                    <View style={styles.column6}>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkbox}></View>
                            <Text style={styles.checkboxLabel}>RESIDENTIAL</Text>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkbox}></View>
                            <Text style={styles.checkboxLabel}>COMMERCIAL</Text>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkbox}></View>
                            <Text style={styles.checkboxLabel}>INDUSTRIAL</Text>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkbox}></View>
                            <Text style={styles.checkboxLabel}>INSTITUTIONAL</Text>
                        </View>
                    </View>

                    {/* Second Column */}
                    <View style={styles.column6}>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkbox}></View>
                            <Text style={styles.checkboxLabel}>AGRICULTURAL</Text>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkbox}></View>
                            <Text style={styles.checkboxLabel}>LANDSCAPING</Text>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkbox2}></View>
                            <Text style={styles.checkboxLabel}>OTHER (SPECIFY)</Text>
                            <View style={styles.underlineBox6} />
                        </View>
                    </View>
                </View>
            </View>
            {/* End of Row Box 6 */}
            
        </View>
    );
}
