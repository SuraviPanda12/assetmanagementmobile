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
import AddSoftwareModal from '../components/AddSoftwareModal';

const AddSoftware = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Add Software</Text>
          <TouchableOpacity style={[styles.appButtonContainer, {backgroundColor:"white", }]}  onPress={() => setModalVisible(true)} >
              <Text style={[styles.appButtonText, {color:"black", fontSize:15}]}>View</Text>
            </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.inputContainer}>
            {/* Input Field 1 */}
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>Software Name:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Software Name..."
                placeholderTextColor="#888"
              />
            </View>
            {/* Input Field 2 */}
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>License Key:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter License Key..."
                placeholderTextColor="#888"
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            {/* Input Field 3 */}
            <View style={styles.fieldContainer}>
              <Text style={styles.text}> Purchase Date:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Purchase Date..."
                placeholderTextColor="#888"
              />
            </View>
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>Software Expire Date:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Expire Date..."
                placeholderTextColor="#888"
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            {/* Input Field 1 */}
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>Version:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Version..."
                placeholderTextColor="#888"
              />
            </View>
            {/* Input Field 2 */}
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>Vendor Name:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Vendor Name..."
                placeholderTextColor="#888"
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            {/* Input Field 3 */}
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>License Type:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter License Type..."
                placeholderTextColor="#888"
              />
            </View>
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>Status:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Status..."
                placeholderTextColor="#888"
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            {/* Input Field 1 */}
            <View style={styles.fieldContainer}>
              <Text style={styles.text}>Description:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Description..."
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
      <AddSoftwareModal
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

export default AddSoftware;
