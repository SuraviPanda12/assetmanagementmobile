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
import AddHardwareModal from '../components/AddHardwareModal';

const AddHardware = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Add HardWare</Text>
          <TouchableOpacity style={[styles.appButtonContainer, {backgroundColor:"white", }]} onPress={() => setModalVisible(true)}>
              <Text style={[styles.appButtonText, {color:"black", fontSize:15}]}>View</Text>
            </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.inputContainer}>
            {/* Input Field 1 */}
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>Machine Serial Num:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Serial Number..."
                placeholderTextColor="#888"
              />
            </View>
            {/* Input Field 2 */}
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>Processor Type:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Processor Type..."
                placeholderTextColor="#888"
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            {/* Input Field 3 */}
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>Hardware Type:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Hardware Type..."
                placeholderTextColor="#888"
              />
            </View>
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>Hard Disk:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Hard Disk..."
                placeholderTextColor="#888"
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            {/* Input Field 1 */}
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>PC Model:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter PC Model..."
                placeholderTextColor="#888"
              />
            </View>
            {/* Input Field 2 */}
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>RAM:</Text>
              <TextInput
                style={styles.input}
                placeholder="Select RAM..."
                placeholderTextColor="#888"
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            {/* Input Field 3 */}
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>Make Type:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Make Type..."
                placeholderTextColor="#888"
              />
            </View>
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>Monitor Model:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Monitor Model..."
                placeholderTextColor="#888"
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            {/* Input Field 1 */}
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>Help Desk Case ID:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Help Desk Case ID..."
                placeholderTextColor="#888"
              />
            </View>
            {/* Input Field 2 */}
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>Invoice No:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Invoice No.."
                placeholderTextColor="#888"
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            {/* Input Field 3 */}
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>Vendor Name:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Vendor Name..."
                placeholderTextColor="#888"
              />
            </View>
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>Purchased On:</Text>
              <TextInput
                style={styles.input}
                placeholderTextColor="#888"
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            {/* Input Field 3 */}
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>Warranty Expiration Status:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Status ..."
                placeholderTextColor="#888"
              />
            </View>
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>Warranty Expiration Date:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Reporting Manager Email ..."
                placeholderTextColor="#888"
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            {/* Input Field 3 */}
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>Asset Category:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Reporting Manager Email ..."
                placeholderTextColor="#888"
              />
            </View>
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>Asset Value:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Reporting Manager Email ..."
                placeholderTextColor="#888"
              />
            </View>
          </View>
          <View style={{padding: 20, width: '100%', height: '60%'}}>
            <TouchableOpacity style={styles.appButtonContainer}>
              <Text style={styles.appButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <AddHardwareModal
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
    flexDirection:"row",
    justifyContent:"space-between"
  },
  headerText: {
    color: 'white', 
    fontSize: 20, 
    fontWeight: 'bold', 
  },
  inputContainer: {
    padding: 10,
    flexDirection: 'row', 
    justifyContent: 'space-between', 
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

export default AddHardware;
