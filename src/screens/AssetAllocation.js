import React,{useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native';
import AllocationModal from '../components/AllocationModal';

const AssignRole = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Asset Allocation</Text>
          <TouchableOpacity
            style={[styles.appButtonContainer, {backgroundColor: 'white'}]}
            onPress={() => setModalVisible(true)}>
            <Text
              style={[styles.appButtonText, {color: 'black', fontSize: 15}]}>
              View
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={{backgroundColor: 'black', marginTop: 10, padding: 9}}>
            <Text style={styles.headerText}>IMAC Requisition Form</Text>
          </View>
          <View style={styles.inputContainer}>
            {/* Input Field 2 */}
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>Device Name:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Device Name..."
                placeholderTextColor="#888"
              />
            </View>
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>Asset Code:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Asset Code..."
                placeholderTextColor="#888"
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>Devision:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Division..."
                placeholderTextColor="#888"
              />
            </View>
            {/* Input Field 2 */}
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>Employee ID:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Employee ID..."
                placeholderTextColor="#888"
              />
            </View>
          </View>
          <View style={{backgroundColor: 'black', marginTop: 10, padding: 9}}>
            <Text style={styles.headerText}>Employee Personal Details</Text>
          </View>
          <View style={styles.inputContainer}>
            {/* Input Field 2 */}
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>Device Name:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Device Name..."
                placeholderTextColor="#888"
              />
            </View>
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>Asset Code:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Asset Code..."
                placeholderTextColor="#888"
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>Devision:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Division..."
                placeholderTextColor="#888"
              />
            </View>
            {/* Input Field 2 */}
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>Employee ID:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Employee ID..."
                placeholderTextColor="#888"
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            {/* Input Field 2 */}
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>Device Name:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Device Name..."
                placeholderTextColor="#888"
              />
            </View>
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>Asset Code:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Asset Code..."
                placeholderTextColor="#888"
              />
            </View>
          </View>

          <View style={{backgroundColor: 'black', marginTop: 10, padding: 9}}>
            <Text style={styles.headerText}>
              Details For HardWare Requirement
            </Text>
          </View>
          <View style={styles.inputContainer}>
            {/* Input Field 2 */}
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>Machine Serial Num:</Text>
              <TextInput style={styles.input} placeholderTextColor="#888" />
            </View>
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>Processor Type:</Text>
              <TextInput style={styles.input} placeholderTextColor="#888" />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>HardWare Type:</Text>
              <TextInput style={styles.input} placeholderTextColor="#888" />
            </View>
            {/* Input Field 2 */}
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>PC Model:</Text>
              <TextInput style={styles.input} placeholderTextColor="#888" />
            </View>
          </View>
          <View style={styles.inputContainer}>
            {/* Input Field 2 */}
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>HDD:</Text>
              <TextInput style={styles.input} placeholderTextColor="#888" />
            </View>
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>RAM:</Text>
              <TextInput style={styles.input} placeholderTextColor="#888" />
            </View>
          </View>
          <View style={styles.inputContainer}>
            {/* Input Field 2 */}
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>Help Desk Case ID:</Text>
              <TextInput style={styles.input} placeholderTextColor="#888" />
            </View>
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>Make Type:</Text>
              <TextInput style={styles.input} placeholderTextColor="#888" />
            </View>
          </View>
          <View style={styles.inputContainer}>
            {/* Input Field 2 */}
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>IMAC Requirement:</Text>
              <TextInput style={styles.input} placeholderTextColor="#888" />
            </View>
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>Assign To:</Text>
              <TextInput style={styles.input} placeholderTextColor="#888" />
            </View>
          </View>
          <View style={{backgroundColor: 'black', marginTop: 10, padding: 9}}>
            <Text style={styles.headerText}>
              Details For Software Requirement
            </Text>
          </View>
          <View style={styles.inputContainer}>
            {/* Input Field 2 */}
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>Software Requirement:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Software Requirement..."
                placeholderTextColor="#888"
              />
            </View>
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>Requisition Position:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Requisition Position..."
                placeholderTextColor="#888"
              />
            </View>
          </View>
          <View style={{padding: 20, width: '100%', height: '60%'}}>
            <TouchableOpacity style={styles.appButtonContainer}>
              <Text style={styles.appButtonText}>Assign Role</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <AllocationModal
         modalVisible={modalVisible}
         setModalVisible={setModalVisible}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Fixed typo
    top: 20,
  },
  box: {
    width: '95%',
    height: '80%',
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    padding: 10,
    marginTop: 10,
    flexDirection: 'row',
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
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
    color: '#333',
    fontSize: 16,
    shadowColor: '#000', // Add shadow effect
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4, // For Android shadow effect
    marginTop: 5, // Space between label and input
  },
});

export default AssignRole;
