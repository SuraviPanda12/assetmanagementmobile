import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  Dimensions,
  View,
  Modal,
  Button,
  Text,
} from 'react-native';
import { DataTable } from 'react-native-paper';

const TableExample = () => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <ScrollView horizontal={true} style={styles.scrollView}>
      {/* Adjust width to accommodate the new column */}
      <DataTable style={[styles.container, { width: screenWidth * 2.75 }]}>
        <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title style={{ width: screenWidth / 2.75 }}>
            <Text style={styles.textStyle}>Employee ID</Text>
          </DataTable.Title>
          <DataTable.Title style={{ width: screenWidth / 2.75 }}>
            <Text style={styles.textStyle}>Name</Text>
          </DataTable.Title>
          <DataTable.Title style={{ width: screenWidth / 2.75 }}>
            <Text style={styles.textStyle}>Department</Text>
          </DataTable.Title>
          <DataTable.Title style={{ width: screenWidth / 2.75 }}>
            <Text style={styles.textStyle}>Designation</Text>
          </DataTable.Title>
          <DataTable.Title style={{ width: screenWidth / 2.75 }}>
            <Text style={styles.textStyle}>Grade</Text>
          </DataTable.Title>
          <DataTable.Title style={{ width: screenWidth / 2.75 }}>
            <Text style={styles.textStyle}>Location</Text>
          </DataTable.Title>
          <DataTable.Title style={{ width: screenWidth / 2.75 }}>
            <Text style={styles.textStyle}>DOJ</Text>
          </DataTable.Title>
          <DataTable.Title style={{ width: screenWidth / 2.75 }}>
            <Text style={styles.textStyle}>Contact</Text>
          </DataTable.Title>
          <DataTable.Title style={{ width: screenWidth / 2.75 }}>
            <Text style={styles.textStyle}>Employee Email</Text>
          </DataTable.Title>
          <DataTable.Title style={{ width: screenWidth / 2.75 }}>
            <Text style={styles.textStyle}>Reporting Manager</Text>
          </DataTable.Title>
          <DataTable.Title style={{ width: screenWidth / 2.75 }}>
            <Text style={styles.textStyle}>Manager Email</Text>
          </DataTable.Title>
        </DataTable.Header>

        {/* Adjust the rows to include the new columns */}
        <DataTable.Row>
          <DataTable.Cell style={{ width: screenWidth / 2.75 }}>
            <Text>12345</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{ width: screenWidth / 2.75 }}>
            <Text>John Doe</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{ width: screenWidth / 2.75 }}>
            <Text>Sales</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{ width: screenWidth / 2.75 }}>
            <Text>Manager</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{ width: screenWidth / 2.75 }}>
            <Text>A1</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{ width: screenWidth / 2.75 }}>
            <Text>New York</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{ width: screenWidth / 2.75 }}>
            <Text>2020-05-01</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{ width: screenWidth / 2.75 }}>
            <Text>123-456-7890</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{ width: screenWidth / 2.75 }}>
            <Text>john.doe@example.com</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{ width: screenWidth / 2.75 }}>
            <Text>Jane Smith</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{ width: screenWidth / 2.75 }}>
            <Text>jane.smith@company.com</Text>
          </DataTable.Cell>
        </DataTable.Row>

        {/* Add more rows as needed */}
      </DataTable>
    </ScrollView>
  );
};

const AddEmployeeModal = ({ modalVisible, setModalVisible }) => {
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

export default AddEmployeeModal;

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
