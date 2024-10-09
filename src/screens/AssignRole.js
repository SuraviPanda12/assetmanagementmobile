import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Import the Picker component

const AssignRole = () => {
  const [selectedRole, setSelectedRole] = useState(''); // State to hold the selected role
  const [employeeName, setEmployeeName] = useState(''); // State to hold the employee name

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Assign Role</Text>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.inputContainer}>
            {/* Dropdown for Role Selection */}
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>Role:</Text>
              <Picker
                selectedValue={selectedRole}
                onValueChange={(itemValue) => setSelectedRole(itemValue)}
                style={styles.picker} // Style for the Picker
              >
                <Picker.Item label="Select Role..." value="" />
                <Picker.Item label="Admin" value="admin" />
                <Picker.Item label="Super Admin" value="superadmin" />
                <Picker.Item label="User" value="user" />
              </Picker>
            </View>

            {/* Input Field for Employee Name */}
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>Employee Name:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Employee Name..."
                placeholderTextColor="#888"
                value={employeeName} // Bind value to the state
                onChangeText={setEmployeeName} // Update state on change
              />
            </View>
          </View>

          <View style={{ padding: 20, width: '100%', height: '60%' }}>
            <TouchableOpacity style={styles.appButtonContainer}>
              <Text style={styles.appButtonText}>Assign Role</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    top: 90,
  },
  box: {
    width: '95%',
    height: '50%',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 23,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#3498db',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  header: {
    backgroundColor: 'black',
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    padding: 10,
    marginTop: 10,
  },
  fieldContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  text: {
    color: 'black',
    fontSize: 18,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 0.1,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
    color: '#333',
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
    marginTop: 5,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
    color: '#333',
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
    marginTop: 5,
    marginBottom: 10,
  },
});

export default AssignRole;
