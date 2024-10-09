import React from 'react';
import { StyleSheet, ScrollView, Dimensions, View, Modal, Button, Text } from 'react-native';
import { DataTable } from 'react-native-paper';

const TableExample = () => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <ScrollView horizontal={true} style={styles.scrollView}>
      <DataTable style={[styles.container, { width: screenWidth * 2 }]}>
        <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title style={{ width: screenWidth / 4 }}>
            <Text style={styles.textStyle}>IMAC No</Text>
          </DataTable.Title>
          <DataTable.Title style={{ width: screenWidth / 4 }}>
            <Text style={styles.textStyle}>Employee</Text>
          </DataTable.Title>
          <DataTable.Title style={{ width: screenWidth / 4 }}>
            <Text style={styles.textStyle}>Device</Text>
          </DataTable.Title>
          <DataTable.Title style={{ width: screenWidth / 4 }}>
            <Text style={styles.textStyle}>Division</Text>
          </DataTable.Title>
          <DataTable.Title style={{ width: screenWidth / 4 }}>
            <Text style={styles.textStyle}>Assigned By</Text>
          </DataTable.Title>
          <DataTable.Title style={{ width: screenWidth / 4 }}>
            <Text style={styles.textStyle}>Assigned Form</Text>
          </DataTable.Title>
          <DataTable.Title style={{ width: screenWidth / 4 }}>
            <Text style={styles.textStyle}>HelpDesk No</Text>
          </DataTable.Title>
          <DataTable.Title style={{ width: screenWidth / 4 }}>
            <Text style={styles.textStyle}>Action</Text>
          </DataTable.Title>
        </DataTable.Header>

        {/* Sample Row 1 */}
        <DataTable.Row>
          <DataTable.Cell style={{ width: screenWidth / 4 }}>
            <Text>001</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{ width: screenWidth / 4 }}>
            <Text>John Doe</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{ width: screenWidth / 4 }}>
            <Text>MacBook</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{ width: screenWidth / 4 }}>
            <Text>IT</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{ width: screenWidth / 4 }}>
            <Text>Admin</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{ width: screenWidth / 4 }}>
            <Text>Remote</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{ width: screenWidth / 4 }}>
            <Text>12345</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{ width: screenWidth / 4 }}>
            <Text>Active</Text>
          </DataTable.Cell>
        </DataTable.Row>

        {/* Sample Row 2 */}
        <DataTable.Row>
          <DataTable.Cell style={{ width: screenWidth / 4 }}>
            <Text>002</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{ width: screenWidth / 4 }}>
            <Text>Jane Smith</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{ width: screenWidth / 4 }}>
            <Text>iPad</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{ width: screenWidth / 4 }}>
            <Text>HR</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{ width: screenWidth / 4 }}>
            <Text>Manager</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{ width: screenWidth / 4 }}>
            <Text>In-Office</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{ width: screenWidth / 4 }}>
            <Text>67890</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{ width: screenWidth / 4 }}>
            <Text>Inactive</Text>
          </DataTable.Cell>
        </DataTable.Row>

        {/* Add additional rows as needed */}
      </DataTable>
    </ScrollView>
  );
};

const AllocationModal = ({ modalVisible, setModalVisible }) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <TableExample />
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

export default AllocationModal;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  tableHeader: {
    backgroundColor: '#222f3e',
  },
  scrollView: {
    flexGrow: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    top: '8%',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14,
  },
});
