import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/box2'; // Import the styles

// Define the permit layout component
export function PermitBodyBox2({ permitInfo }: { permitInfo: any }) {

    // Dummy static data
    const defaultData = {
        labelData: 'John ',
        checkboxData: 'yes',
    };

    const data = { ...defaultData, ...permitInfo };

    return (
        <>                
        <Text style={styles.printText}>BOX 2 (TO BE ACCOMPLISHED BY THE DESIGNING PROFESSIONAL)</Text>
        <View style={styles.container}>
            <Text style={styles.title}>FIXTURES TO BE INSTALLED</Text>
                <View style={styles.row}>
                    <View style={styles.subTitleContainer}>
                        <Text style={styles.subTitle}>QTY.</Text>
                        <View style={styles.columnFixtures}>
                            <Text style={styles.subTitleFixtures}>NEW</Text>
                            <Text style={styles.subTitleFixtures}>FIXTURES</Text>
                        </View>
                        <View style={styles.columnFixtures2}>
                            <Text style={styles.subTitleFixtures}>EXISTING</Text>
                            <Text style={styles.subTitleFixtures}>FIXTURES</Text>
                        </View>
                        <View style={styles.columnFixtures3}>
                            <Text style={styles.subTitleFixtures}>KIND OF</Text>
                            <Text style={styles.subTitleFixtures}>FIXTURES</Text>
                        </View>
                    </View>
                    <View style={styles.subTitleContainer}>
                        <Text style={styles.subTitle}>QTY.</Text>
                        <View style={styles.columnFixtures}>
                            <Text style={styles.subTitleFixtures}>NEW</Text>
                            <Text style={styles.subTitleFixtures}>FIXTURES</Text>
                        </View>
                        <View style={styles.columnFixtures2}>
                            <Text style={styles.subTitleFixtures}>EXISTING</Text>
                            <Text style={styles.subTitleFixtures}>FIXTURES</Text>
                        </View>
                        <View style={styles.columnFixtures3}>
                            <Text style={styles.subTitleFixtures}>KIND OF</Text>
                            <Text style={styles.subTitleFixtures}>FIXTURES</Text>
                        </View>
                    </View>       
                </View>

                    {/* First Fixtures Columns */}
                <View style={styles.row}>
                    <View style={styles.columnLine}>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                    </View>
                    <View style={styles.columnBox}>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                    </View>
                    <View style={styles.columnBox2}>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                    </View>
                    <View style={styles.columnBox3}>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                    </View>
                    <View style={styles.columnLabel}>
                        <Text style={styles.columnLabelText}>Water Closet</Text>
                        <Text style={styles.columnLabelText}>Floor Drain</Text>
                        <Text style={styles.columnLabelText}>Lavatories</Text>
                        <Text style={styles.columnLabelText}>Kitchen Sink</Text>
                        <Text style={styles.columnLabelText}>Faucet</Text>
                        <Text style={styles.columnLabelText}>Shower Head</Text>
                        <Text style={styles.columnLabelText}>Water Meter</Text>
                        <Text style={styles.columnLabelText}>Grease Trap</Text>
                        <Text style={styles.columnLabelText}>Bath Tubs</Text>
                        <Text style={styles.columnLabelText}>Slop Sink</Text>
                        <Text style={styles.columnLabelText}>Urinal</Text>
                        <Text style={styles.columnLabelText}>Airconditioning Unit</Text>
                        <Text style={styles.columnLabelText}>Water Tank/reservoir</Text>
                    </View>


                    {/* First Fixtures Columns */}
                    <View style={styles.columnLine}>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                    </View>
                    <View style={styles.columnBox}>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                    </View>
                    <View style={styles.columnBox2}>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                    </View>
                    <View style={styles.columnBox3}>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                    </View>
                    <View style={styles.columnLabel}>
                        <Text style={styles.columnLabelText}>Bidet</Text>
                        <Text style={styles.columnLabelText}>Laundry Trays</Text>
                        <Text style={styles.columnLabelText}>Dental Cuspidator</Text>
                        <Text style={styles.columnLabelText}>Gas Heater</Text>
                        <Text style={styles.columnLabelText}>Electric Heater</Text>
                        <Text style={styles.columnLabelText}>Water Boiler</Text>
                        <Text style={styles.columnLabelText}>Drinking Fountain</Text>
                        <Text style={styles.columnLabelText}>Bar Sink</Text>
                        <Text style={styles.columnLabelText}>Soda Fountain Sink</Text>
                        <Text style={styles.columnLabelText}>Laboratory Sink</Text>
                        <Text style={styles.columnLabelText}>Sterilizer</Text>
                        <Text style={styles.columnLabelText}>Swimming Pool</Text>
                        <View style={styles.row}>
                            <Text style={styles.columnLabelText}>R.C.S. volume</Text>
                            <Text style={styles.blankLineVolume}>{data.labelData || ' '} </Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.columnLabelText}>Others (Specify)</Text>
                            <Text style={styles.blankLineVolume}>{data.labelData || ' '} </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.totalContainer}>
                        <Text style={styles.blankLineTotal}>{data.labelData || ' '} </Text>
                        <Text style={styles.totalText}>TOTAL</Text>
                    </View>
                    <View style={styles.totalContainer}>
                        <Text style={styles.blankLineTotal}>{data.labelData || ' '} </Text>
                        <Text style={styles.totalText}>TOTAL</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.lastContainer}>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.lastText}>Water Distribution</Text>
                    </View>
                    <View style={styles.lastContainer}>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.lastText}>Sanitary Sewer System</Text>
                    </View>
                    <View style={styles.lastContainer}>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        <Text style={styles.lastText}>Storage Drainage System</Text>
                    </View>
                </View>
        </View>
        </>
    );
}
