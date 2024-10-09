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
      <DataTable style={[styles.container, { width: screenWidth * 2.5 }]}>
        <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title style={{ width: screenWidth / 2.5 }}>
            <Text style={styles.textStyle}>Software Name</Text>
          </DataTable.Title>
          <DataTable.Title style={{ width: screenWidth / 2.5 }}>
            <Text  style={styles.textStyle}>License</Text>
          </DataTable.Title>
          <DataTable.Title style={{ width: screenWidth / 2.5 }}>
            <Text  style={styles.textStyle}>Software Expiry Date</Text>
          </DataTable.Title>
          <DataTable.Title style={{ width: screenWidth / 2.5 }}>
            <Text  style={styles.textStyle}>Software Purchase Date</Text>
          </DataTable.Title>
          <DataTable.Title style={{ width: screenWidth / 2.5 }}>
            <Text  style={styles.textStyle}>Version</Text>
          </DataTable.Title>
          <DataTable.Title style={{ width: screenWidth / 2.5 }}>
            <Text  style={styles.textStyle}>Vendor Name</Text>
          </DataTable.Title>
          <DataTable.Title style={{ width: screenWidth / 2.5 }}>
            <Text  style={styles.textStyle}>License Type</Text>
          </DataTable.Title>
          <DataTable.Title style={{ width: screenWidth / 2.5 }}>
            <Text  style={styles.textStyle}>Status</Text>
          </DataTable.Title>
          <DataTable.Title style={{ width: screenWidth / 2.5 }}>
            <Text  style={styles.textStyle}>Description</Text> {/* New Description column */}
          </DataTable.Title>
        </DataTable.Header>

        {/* Adjust the rows to include the new "Description" column */}
        <DataTable.Row>
          <DataTable.Cell style={{ width: screenWidth / 2.5 }}>
            <Text>Software A</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{ width: screenWidth / 2.5 }}>
            <Text>GPL</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{ width: screenWidth / 2.5 }}>
            <Text>2025-12-31</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{ width: screenWidth / 2.5 }}>
            <Text>2020-01-15</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{ width: screenWidth / 2.5 }}>
            <Text>1.0.5</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{ width: screenWidth / 2.5 }}>
            <Text>Vendor X</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{ width: screenWidth / 2.5 }}>
            <Text>Annual</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{ width: screenWidth / 2.5 }}>
            <Text>Active</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{ width: screenWidth / 2.5 }}>
            <Text>This is a description for Software A.</Text> {/* New description */}
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell style={{ width: screenWidth / 2.5 }}>
            <Text>Software B</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{ width: screenWidth / 2.5 }}>
            <Text>MIT</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{ width: screenWidth / 2.5 }}>
            <Text>2024-06-30</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{ width: screenWidth / 2.5 }}>
            <Text>2019-05-12</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{ width: screenWidth / 2.5 }}>
            <Text>2.3.1</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{ width: screenWidth / 2.5 }}>
            <Text>Vendor Y</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{ width: screenWidth / 2.5 }}>
            <Text>Lifetime</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{ width: screenWidth / 2.5 }}>
            <Text>Expired</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{ width: screenWidth / 2.5 }}>
            <Text>This is a description for Software B.</Text> {/* New description */}
          </DataTable.Cell>
        </DataTable.Row>

        {/* Add additional rows as needed */}
      </DataTable>
    </ScrollView>
  );
};

const AddSoftwareModal = ({ modalVisible, setModalVisible }) => {
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

export default AddSoftwareModal;

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
  openButton: {
    backgroundColor: '#2196F3',
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize:14
  },
});
