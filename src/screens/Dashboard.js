import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from "react-native-vector-icons/FontAwesome6";
import IconBox from "react-native-vector-icons/MaterialIcons";

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Dashboard</Text>
        </View>
        <View style={styles.boxContainer}>
          <View style={styles.boxes}>
            <View style={styles.innerBox}>
              <Text style={styles.boxText}>TOTAL EMPLOYEE</Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Text style={[styles.boxText, {top: -5}]}>6</Text>
                <Icon name="users" color="white" size={15} />
              </View>
            </View>
          </View>
          <View style={styles.boxes}>
            <View style={[styles.innerBox, {backgroundColor: '#3498db'}]}>
              <Text style={styles.boxText}>TOTAL ASSETS</Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Text style={[styles.boxText, {top: -5}]}>6</Text>
                <Icons name="hard-drive" color="white" size={15} />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.boxContainer, {top: -85}]}>
          <View style={styles.boxes}>
            <View style={[styles.innerBox,{backgroundColor: '#f39c12'}]}>
              <Text style={styles.boxText}>ALLOCATED ASSETS</Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Text style={[styles.boxText, {top: -5}]}>0</Text>
                <Icon name="check-square-o" color="white" size={15} />
              </View>
            </View>
          </View>
          <View style={styles.boxes}>
            <View style={[styles.innerBox, {backgroundColor: '#e74c3c'}]}>
              <Text style={styles.boxText}>UNALLOCATED ASSETS</Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Text style={[styles.boxText, {top: -5}]}>2</Text>
                <IconBox name="battery-alert" color="white" size={15} />
              </View>
            </View>
          </View>
        </View>
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
    top: 20,
  },
  box: {
    width: '95%',
    height: '70%',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 23,
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
    padding: 7,
  },
  boxText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    padding: 7,
  },
  boxContainer: {
    flexDirection: 'row',
  },
  boxes: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerBox: {
    backgroundColor: 'green',
    padding: 10,
    height: '45%',
    width: '85%',
    justifyContent: 'center',
    borderRadius: 20,
    elevation: 20,
  },
});

export default Dashboard;
