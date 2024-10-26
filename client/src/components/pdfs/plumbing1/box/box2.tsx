import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/box2'; // Import the styles

// Define the permit layout component
export function PermitBodyBox2({ permitInfo }: { permitInfo: any }) {
    return (
        <View style={styles.formNo}>
            <View style={styles.container}>
                <Text style={styles.printText}>BOX 2 (TO BE ACCOMPLISHED BY THE DESIGNING PROFESSIONAL)</Text>
            </View>

            {/* Row Box 6 */}
            <View style={styles.container3}>
                {/* Row for FIXTURES TO BE INSTALLED */}
                <View style={styles.boxStyleContainer2}>
                    <View style={styles.columnBox}>
                        <Text style={styles.box4label}>FIXTURES TO BE INSTALLED</Text>

                        {/* Create a flex row to arrange both sets side by side */}
                        <View style={styles.scopeOfWorkRow}>
                            {/* Left column for NEW CONSTRUCTION, ERECTION, etc. */}
                            <View style={styles.scopeColumn}>
                                
                                <View style={styles.rowOption}>
                                    <Text style={styles.titlelabel}>QTY.</Text>
                                    <View style={styles.titlelabelSplit1}>
                                        <Text>NEW</Text>
                                        <Text>FIXTURES</Text>
                                    </View>
                                    <View style={styles.titlelabelSplit2}>
                                        <Text>EXISTING</Text>
                                        <Text>FIXTURES</Text>
                                    </View>
                                    <View style={styles.titlelabelSplit3}>
                                        <Text>KIND OF</Text>
                                        <Text>FIXTURES</Text>
                                    </View>
                                    <Text style={styles.titlelabel2}>QTY.</Text>
                                    <View style={styles.titlelabelSplit1}>
                                        <Text>NEW</Text>
                                        <Text>FIXTURES</Text>
                                    </View>
                                    <View style={styles.titlelabelSplit2}>
                                        <Text>EXISTING</Text>
                                        <Text>FIXTURES</Text>
                                    </View>
                                    <View style={styles.titlelabelSplit3}>
                                        <Text>KIND OF</Text>
                                        <Text>FIXTURES</Text>
                                    </View>
                                </View>

                                <View style={styles.rowOption}>
                                    {/* This black line is aligned to the left of the first box */}
                                    <View style={styles.boxLabelLine}></View>
                                    <View style={styles.boxColumn}></View>
                                    <View style={styles.boxColumn2}></View>
                                    <View style={styles.boxColumn3}></View>
                                    <Text style={styles.boxlabel2}>Water Closet</Text>
                                    {/* This black line is aligned to the left of the first box */}
                                    <View style={styles.box2LabelLine}></View>
                                    <View style={styles.box2Column}></View>
                                    <View style={styles.box2Column2}></View>
                                    <View style={styles.box2Column3}></View>
                                    <Text style={styles.box2label2}>Bidet</Text>
                                </View>
                                <View style={styles.rowOption}>
                                    {/* This black line is aligned to the left of the first box */}
                                    <View style={styles.boxLabelLine}></View>
                                    <View style={styles.boxColumn}></View>
                                    <View style={styles.boxColumn2}></View>
                                    <View style={styles.boxColumn3}></View>
                                    <Text style={styles.boxlabel2}>Floor Drain </Text>
                                    {/* This black line is aligned to the left of the first box */}
                                    <View style={styles.box2LabelLine}></View>
                                    <View style={styles.box2Column}></View>
                                    <View style={styles.box2Column2}></View>
                                    <View style={styles.box2Column3}></View>
                                    <Text style={styles.box2label2}>Laundry Trays</Text>
                                </View>
                                <View style={styles.rowOption}>
                                    {/* This black line is aligned to the left of the first box */}
                                    <View style={styles.boxLabelLine}></View>
                                    <View style={styles.boxColumn}></View>
                                    <View style={styles.boxColumn2}></View>
                                    <View style={styles.boxColumn3}></View>
                                    <Text style={styles.boxlabel2}>Lavatories</Text>
                                    {/* This black line is aligned to the left of the first box */}
                                    <View style={styles.box2LabelLine}></View>
                                    <View style={styles.box2Column}></View>
                                    <View style={styles.box2Column2}></View>
                                    <View style={styles.box2Column3}></View>
                                    <Text style={styles.box2label2}>Dental Cuspidator</Text>
                                </View>
                                <View style={styles.rowOption}>
                                    {/* This black line is aligned to the left of the first box */}
                                    <View style={styles.boxLabelLine}></View>
                                    <View style={styles.boxColumn}></View>
                                    <View style={styles.boxColumn2}></View>
                                    <View style={styles.boxColumn3}></View>
                                    <Text style={styles.boxlabel2}>Kitchen Sink </Text>
                                    {/* This black line is aligned to the left of the first box */}
                                    <View style={styles.box2LabelLine}></View>
                                    <View style={styles.box2Column}></View>
                                    <View style={styles.box2Column2}></View>
                                    <View style={styles.box2Column3}></View>
                                    <Text style={styles.box2label2}>Gas Heater</Text>
                                </View>
                                <View style={styles.rowOption}>
                                    {/* This black line is aligned to the left of the first box */}
                                    <View style={styles.boxLabelLine}></View>
                                    <View style={styles.boxColumn}></View>
                                    <View style={styles.boxColumn2}></View>
                                    <View style={styles.boxColumn3}></View>
                                    <Text style={styles.boxlabel2}>Faucet</Text>
                                    {/* This black line is aligned to the left of the first box */}
                                    <View style={styles.box2LabelLine}></View>
                                    <View style={styles.box2Column}></View>
                                    <View style={styles.box2Column2}></View>
                                    <View style={styles.box2Column3}></View>
                                    <Text style={styles.box2label2}>Electric Heater</Text>
                                </View>
                                <View style={styles.rowOption}>
                                    {/* This black line is aligned to the left of the first box */}
                                    <View style={styles.boxLabelLine}></View>
                                    <View style={styles.boxColumn}></View>
                                    <View style={styles.boxColumn2}></View>
                                    <View style={styles.boxColumn3}></View>
                                    <Text style={styles.boxlabel2}>Shower Head </Text>
                                    {/* This black line is aligned to the left of the first box */}
                                    <View style={styles.box2LabelLine}></View>
                                    <View style={styles.box2Column}></View>
                                    <View style={styles.box2Column2}></View>
                                    <View style={styles.box2Column3}></View>
                                    <Text style={styles.box2label2}>Water Boiler</Text>
                                </View>
                                <View style={styles.rowOption}>
                                    {/* This black line is aligned to the left of the first box */}
                                    <View style={styles.boxLabelLine}></View>
                                    <View style={styles.boxColumn}></View>
                                    <View style={styles.boxColumn2}></View>
                                    <View style={styles.boxColumn3}></View>
                                    <Text style={styles.boxlabel2}>Water Meter</Text>
                                    {/* This black line is aligned to the left of the first box */}
                                    <View style={styles.box2LabelLine}></View>
                                    <View style={styles.box2Column}></View>
                                    <View style={styles.box2Column2}></View>
                                    <View style={styles.box2Column3}></View>
                                    <Text style={styles.box2label2}>Drinking Fountain</Text>
                                </View>
                                <View style={styles.rowOption}>
                                    {/* This black line is aligned to the left of the first box */}
                                    <View style={styles.boxLabelLine}></View>
                                    <View style={styles.boxColumn}></View>
                                    <View style={styles.boxColumn2}></View>
                                    <View style={styles.boxColumn3}></View>
                                    <Text style={styles.boxlabel2}>Grease Trap</Text>
                                    {/* This black line is aligned to the left of the first box */}
                                    <View style={styles.box2LabelLine}></View>
                                    <View style={styles.box2Column}></View>
                                    <View style={styles.box2Column2}></View>
                                    <View style={styles.box2Column3}></View>
                                    <Text style={styles.box2label2}>Bar Sink</Text>
                                </View>
                                <View style={styles.rowOption}>
                                    {/* This black line is aligned to the left of the first box */}
                                    <View style={styles.boxLabelLine}></View>
                                    <View style={styles.boxColumn}></View>
                                    <View style={styles.boxColumn2}></View>
                                    <View style={styles.boxColumn3}></View>
                                    <Text style={styles.boxlabel2}>Bath Tubs</Text>
                                    {/* This black line is aligned to the left of the first box */}
                                    <View style={styles.box2LabelLine}></View>
                                    <View style={styles.box2Column}></View>
                                    <View style={styles.box2Column2}></View>
                                    <View style={styles.box2Column3}></View>
                                    <Text style={styles.box2label2}>Soda Fountain Sink</Text>
                                </View>
                                <View style={styles.rowOption}>
                                    {/* This black line is aligned to the left of the first box */}
                                    <View style={styles.boxLabelLine}></View>
                                    <View style={styles.boxColumn}></View>
                                    <View style={styles.boxColumn2}></View>
                                    <View style={styles.boxColumn3}></View>
                                    <Text style={styles.boxlabel2}>Slop Sink</Text>
                                    {/* This black line is aligned to the left of the first box */}
                                    <View style={styles.box2LabelLine}></View>
                                    <View style={styles.box2Column}></View>
                                    <View style={styles.box2Column2}></View>
                                    <View style={styles.box2Column3}></View>
                                    <Text style={styles.box2label2}>Laboratory Sink</Text>
                                </View>
                                <View style={styles.rowOption}>
                                    {/* This black line is aligned to the left of the first box */}
                                    <View style={styles.boxLabelLine}></View>
                                    <View style={styles.boxColumn}></View>
                                    <View style={styles.boxColumn2}></View>
                                    <View style={styles.boxColumn3}></View>
                                    <Text style={styles.boxlabel2}>Urinal </Text>
                                    {/* This black line is aligned to the left of the first box */}
                                    <View style={styles.box2LabelLine}></View>
                                    <View style={styles.box2Column}></View>
                                    <View style={styles.box2Column2}></View>
                                    <View style={styles.box2Column3}></View>
                                    <Text style={styles.box2label2}>Sterilizer</Text>
                                </View>
                                <View style={styles.rowOption}>
                                    {/* This black line is aligned to the left of the first box */}
                                    <View style={styles.boxLabelLine}></View>
                                    <View style={styles.boxColumn}></View>
                                    <View style={styles.boxColumn2}></View>
                                    <View style={styles.boxColumn3}></View>
                                    <Text style={styles.boxlabel2}>Airconditioning Unit</Text>
                                    {/* This black line is aligned to the left of the first box */}
                                    <View style={styles.box2LabelLine}></View>
                                    <View style={styles.box2Column}></View>
                                    <View style={styles.box2Column2}></View>
                                    <View style={styles.box2Column3}></View>
                                    <Text style={styles.box2label2}>Swimming Pool</Text>
                                </View>
                                <View style={styles.rowOption}>
                                    {/* This black line is aligned to the left of the first box */}
                                    <View style={styles.boxLabelLine}></View>
                                    <View style={styles.boxColumn}></View>
                                    <View style={styles.boxColumn2}></View>
                                    <View style={styles.boxColumn3}></View>
                                    <Text style={styles.boxlabel2}>Water Tank/reservoir</Text>
                                    {/* This black line is aligned to the left of the first box */}
                                    <View style={styles.box2LabelLine}></View>
                                    <View style={styles.box2Column}></View>
                                    <View style={styles.box2Column2}></View>
                                    <View style={styles.box2Column3}></View>
                                    <Text style={styles.box2label3}>R.C.S. volume</Text>
                                    <View style={styles.box2label2line2}></View>
                                </View>
                                <View style={styles.rowOption}>
                                    <View style={styles.boxLabelLine2}></View>
                                    <Text style={styles.total}>TOTAL</Text>
                                    <View style={styles.boxLabelLine3}></View>
                                    <Text style={styles.total2}>TOTAL</Text>
                                    <View style={styles.boxOther}></View>
                                    <Text style={styles.boxOtherLabel}>Others (Specify)</Text>
                                    <View style={styles.boxOtherLine}></View>
                                </View>
                                <View style={styles.rowOptionLast}>
                                <View style={styles.boxColumnLast}></View>
                                <Text style={styles.boxlLabelLast}>Water Closet</Text>
                                <View style={styles.boxColumnLast}></View>
                                <Text style={styles.boxlLabelLast}>Sanitary Sewer System</Text>
                                <View style={styles.boxColumnLast}></View>
                                <Text style={styles.boxlLabelLast}>Storage Drainage System</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            {/* End of Row Box 6 */}
        </View>
    );
}
