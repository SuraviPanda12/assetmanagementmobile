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
      <DataTable style={[styles.container, { width: screenWidth * 2.75 }]}>
        <DataTable.Header style={styles.tableHeader}>
          {headerTitles.map((title, index) => (
            <DataTable.Title key={index} style={styles.headerCell}>
              <Text style={styles.textStyle}>{title}</Text>
            </DataTable.Title>
          ))}
        </DataTable.Header>

        <DataTable.Row>
          {dataRows[0].map((data, index) => (
            <DataTable.Cell key={index} style={styles.cell}>
              <Text>{data}</Text>
            </DataTable.Cell>
          ))}
        </DataTable.Row>

        {/* Add more rows as needed */}
      </DataTable>
    </ScrollView>
  );
};

const AddHardwareModal = ({ modalVisible, setModalVisible }) => {
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

export default AddHardwareModal;

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
  headerCell: {
    flex: 1, // Make the cell expand to take available space
    padding: 5, // Increase padding for more space
    width:184
  },
  cell: {
    flex: 1,
    padding: 5,
    width:184

  },
});

// Sample data and titles
const headerTitles = [
  "Machine Sr.No",
  "Processor Type",
  "Hardware Type",
  "Hard Disk",
  "PC Model",
  "RAM",
  "Make Type",
  "Monitor Model",
  "HelpDesk CaseID",
  "Invoice No.",
  "Purchased On",
  "Warranty Exp sts",
  "Warranty Exp Date",
  "Asset Category",
  "Asset Value",
];

const dataRows = [
  ["12345", "Intel Core i7", "Laptop", "500GB", "Dell Inspiron", "16GB", "HP", "Model X", "HD123456", "INV1234", "2023-01-01", "Active", "2025-12-31", "IT Equipment", "$1000"]
];
