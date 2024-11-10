import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/box12';

export function PermitBodyBox12( { permitInfo }: { permitInfo: any } ) {
    return (
        <View style={styles.container}>
            {/* Header */}
            <Text style={styles.title}>Republic of the Philippines</Text>
            <Text style={styles.subtitle}>DEPARTMENT OF PUBLIC WORKS & HIGHWAYS</Text>
            <Text style={styles.subtitle}>OFFICE OF THE CITY BUILDING OFFICIAL</Text>
            <Text style={styles.subtitle}>PANABO CITY</Text>
            <Text style={styles.mainTitle}>CERTIFICATE OF COMPLETION</Text>
            <Text style={styles.subTitle}>Mechanical Works</Text>

            {/* Certificate Body */}
            <View style={styles.bodyTextContainer}>
                <Text style={styles.bodyText}>
                    This is to Certify that mechanical installation/works of the building covered by Building Permit No.
                </Text>
                <Text style={styles.bodyText1}>
                    {permitInfo.buildingPermitNo || '__________________'} issued on {permitInfo.issueDate || '__________________'}
                    has been completed in accordance with the approved plans and specification on file with the Office of the Building Officials and the National Building Code (P.D. 1096) that the said installation is ready for partial/final completion.
                </Text>
            </View>

            {/* Owner Information */}
            <View style={styles.ownerInfoContainer}>
                <View style={styles.nameContainer}>
                    <Text>NAME OF OWNER</Text>
                    <View style={styles.lineGroup}>
                        <Text style={styles.line}>{permitInfo.lastName || '_____________________'}</Text>
                        <Text style={styles.line}>{permitInfo.firstName || '_____________________'}</Text>
                        <Text style={styles.line}>{permitInfo.middleName || '______________________'}</Text>
                    </View>
                </View>
                <View style={styles.subGroup}>
                    <Text>(Last Name)</Text>
                    <Text>(Given Name)</Text>
                    <Text>(Middle Name)</Text>
                </View>
                <Text>Address: {permitInfo.address || '___________________________________________________________________'}</Text>
                <Text>Location of Construction: {permitInfo.location || '_______________________________________________________'}</Text>
                <Text>Use or Type of Occupancy: {permitInfo.occupancyType || '______________________________________________________'}</Text>
                <Text>Date of Start of Construction: {permitInfo.startDate || '____________________________________________________'}</Text>
                <Text>Date of Completion: {permitInfo.completionDate || '___________________________________________________________'}</Text>
            </View>

            {/* Equipment Information */}
            <Text style={styles.sectionTitle}>Description and Type of Equipment Installed</Text>
            <View style={styles.equipmentContainer}>
                <View style={styles.equipmentRow}>
                    <Text style={styles.equipmentTitle}>Description</Text>
                    <Text style={styles.equipmentTitleMargin}>HP/Tons</Text>
                    <Text style={styles.equipmentTitle}>Capacity</Text>
                </View>
                <View style={styles.equipmentRow}>
                    <View style={styles.equipmentColumn}>
                        <Text style={styles.equipLine}>{permitInfo.lastName || '___________________________'}</Text>
                        <Text style={styles.equipLine}>{permitInfo.lastName || '___________________________'}</Text>
                        <Text style={styles.equipLine}>{permitInfo.lastName || '___________________________'}</Text>
                        <Text style={styles.equipLine}>{permitInfo.lastName || '___________________________'}</Text>
                        <Text style={styles.equipLine}>{permitInfo.lastName || '___________________________'}</Text>
                        <Text style={styles.equipLine}>{permitInfo.lastName || '___________________________'}</Text>
                        <Text style={styles.equipLine}>{permitInfo.lastName || '___________________________'}</Text>
                        <Text style={styles.equipmentLabel}>WindowType, No. of Units </Text>
                        <Text style={styles.equipmentLabel}>Mechanical Ventilation </Text>
                        <Text style={styles.equipmentLabel}>No. of units </Text>
                    </View>
                    <View style={styles.equipmentColumn2}>
                        <Text style={styles.equipLine2}>{permitInfo.lastName || '________________'}</Text>
                        <Text style={styles.equipLine2}>{permitInfo.lastName || '________________'}</Text>
                        <Text style={styles.equipLine2}>{permitInfo.lastName || '________________'}</Text>
                        <Text style={styles.equipLine2}>{permitInfo.lastName || '________________'}</Text>
                        <Text style={styles.equipLine2}>{permitInfo.lastName || '________________'}</Text>
                        <Text style={styles.equipLine2}>{permitInfo.lastName || '________________'}</Text>
                        <Text style={styles.equipLine2}>{permitInfo.lastName || '________________'}</Text>
                    </View>
                    <View style={styles.equipmentColumn3}>
                        <Text style={styles.equipmentLabel}>Elevator </Text>
                        <Text style={styles.equipmentLabel}>
                        No. of Floors Served: {permitInfo.elevator || '__________'}</Text>
                        <Text style={styles.equipmentLabel}>Escalator, Mts. {permitInfo.escSet || '_______________'}</Text>
                        <Text style={styles.equipmentLabel2}>(Type) (HP) </Text>
                        <Text style={styles.equipmentLabel}>Generating Set {permitInfo.genSet || '_______________'} </Text>
                        <Text style={styles.equipmentLabel}>Other ICE not registered with </Text>
                        <Text style={styles.equipmentLabel}>LTO.  {permitInfo.genSet || '_______________________'} </Text>
                        <Text style={styles.equipmentLabel}>{permitInfo.genSet || '____________________________'} </Text>
                        <Text style={styles.equipmentLabel}>Sprinklers/AFE, No. of Heads </Text>
                        <Text style={styles.equipmentLabel}>Pressure Vessels, Mt. {permitInfo.elevator || '__________'} </Text>
                        <Text style={styles.equipmentLabel}>Pneumatic Tubes, Conveyors </Text>
                        <Text style={styles.equipmentLabel}>Monorails for Materials </Text>
                        <Text style={styles.equipmentLabel}>Handling L Mts. </Text>
                        <Text style={styles.equipmentLabel}>{permitInfo.genSet || '____________________________'}  </Text>
                    </View>
                </View>

            </View>

            {/* Footer */}
            <View style={styles.footer}>
                <Text style={styles.footerLabel}>Done on this {permitInfo.doneDate || '_____________________________'} day of {permitInfo.doneMonth || '__________________'} Installation is under </Text>
                <Text>contract.</Text>
                <View style={styles.nameContainer}>
                    <View style={styles.footerLineGroup}>
                        <Text style={styles.footerLine}>{permitInfo.lastName || '____________________________'}</Text>
                        <Text style={styles.footerLine}>{permitInfo.firstName || '_____________________________'}</Text>
                        <Text style={styles.footerLine}>{permitInfo.middleName || '______________________________'}</Text>
                    </View>
                </View>
                <View style={styles.footerSubGroup}>
                    <Text style={styles.footerLabel1}>Contractor</Text>
                    <Text style={styles.footerLabel2}>Prof. Mechanical Engineer</Text>
                    <Text style={styles.footerLabel3}>Prof. Mechanical Engineer Checked plans, signed and sealed</Text>
                </View>
            </View>

            <View style={styles.conformContainer}>
                <Text  style={styles.conformLabel}>CONFORM :</Text>
                <Text style={styles.footerLine}>{permitInfo.conform || '_______________________'}</Text>
                <Text style={styles.conformLabel2}>Owner/Applicant</Text>
            </View>

            {/* Final Inspection */}
            <Text style={styles.inspectionTitle}>CERTIFICATION OF FINAL INSPECTION</Text>
            <View style={styles.inspectionContainer}>
            <Text style={styles.inspectionLabel}>This certifies that the mechanical works and the following apparatus Installed at the promises No. </Text>
            <Text style={styles.inspectionLabel}>{permitInfo.inspectionNo || '_____'} </Text>
            </View>
            <View style={styles.inspectionContainer2}>
            <Text style={styles.inspectionLabel}>Street </Text>
            <Text style={styles.inspectionLabel}>{permitInfo.inspectionStreet || '_____________________________________________________________________________'} </Text>
            <Text style={styles.inspectionLabel}> Davao City</Text>
            </View>
            <View style={styles.inspectionContainer2}>
            <Text style={styles.inspectionLabel}>Owner/Occupied by : </Text>
            <Text style={styles.inspectionLabel}>{permitInfo.inspectionStreet || '_________________________________________________'} </Text>
            <Text style={styles.inspectionLabel}>were inspected and found to be</Text>
            </View>
            <View style={styles.inspectionContainer2}>
            <Text style={styles.inspectionLabel}>in accordance with the present management and regulations prescribed by the National Building Code of the</Text>
            </View>
            <View style={styles.inspectionContainer2}>
            <Text style={styles.inspectionLabel}>Philippines (P.D. 1096).</Text>
            </View>

            <View style={styles.inspectionContainer2}>
            <Text style={styles.inspectionLabel}>Miscellaneous : </Text>
            <Text style={styles.inspectionLabel}>{permitInfo.inspectionStreet || '________________________________________'} </Text>
            <Text style={styles.inspectionLabel2}>Kind of Installation </Text>
            <Text style={styles.inspectionLabel}>{permitInfo.inspectionStreet || '_____________________'} </Text>
            </View>
            <View style={styles.inspectionContainer2}>
            <Text style={styles.inspectionLabel}>Contractor : </Text>
            <Text style={styles.inspectionLabel}>{permitInfo.inspectionStreet || '___________________________________________'} </Text>
            <Text style={styles.inspectionLabel2}>Permit No.  </Text>
            <Text style={styles.inspectionLabel}>{permitInfo.inspectionStreet || '___________________________'} </Text>
            </View>
            <View style={styles.inspectionContainer2}>
            <Text style={styles.inspectionLabel}>O.R. No </Text>
            <Text style={styles.inspectionLabel}>{permitInfo.inspectionStreet || '_____________________'} </Text>
            <Text style={styles.inspectionLabel2}>Amount Paid : </Text>
            <Text style={styles.inspectionLabel}>{permitInfo.inspectionStreet || '_____________________'} </Text>
            <Text style={styles.inspectionLabel2}>Date : </Text>
            <Text style={styles.inspectionLabel}>{permitInfo.inspectionStreet || '_____________________'} </Text>
            </View>
            <View style={styles.inspectionContainer2}>
            <Text style={styles.inspectionLabel}>Date of Inspection : </Text>
            <Text style={styles.inspectionLabel}>{permitInfo.inspectionStreet || '_____________________'} </Text>
            </View>

            <View style={styles.inspectionContainer4}>
                <View style={styles.inspectionContainer3}>
                <Text style={styles.inspectionLast}>{permitInfo.inspectionStreet || '_______________________________'} </Text>
                <Text style={styles.inspectionLast2}>Inspector</Text>
                </View>

                <View style={styles.inspectionContainer3}>
                <Text style={styles.inspectionOfficial}>ENGR. BERNARDO C. RABANOZ JR.</Text>
                <Text style={styles.inspectionLast2}>BUILDING OFFICIAL</Text>
                </View>
            </View>

        </View>
    );
}
