import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Login from './src/screens/Login';
import Dashboard from './src/screens/Dashboard';
import AddEmployee from './src/screens/AddEmployee';
import AddHardware from './src/screens/AddHardware';
import AddSoftware from './src/screens/AddSoftware';
import AssetAllocation from './src/screens/AssetAllocation';
import AssignRole from './src/screens/AssignRole';
import Table from './src/screens/Table';

const HeaderLeft = () => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}>
      <Icon
        name="person-circle" // You can change this to any other profile icon you like
        size={40} // Adjust size as needed
        color="white" // Set the icon color
      />
      <Text style={{ marginLeft: 10, fontSize: 16, color: 'white' }}>Superadmin</Text>
    </View>
  );
};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const animate1 = {
  0: { scale: 0.5, translateY: 8 },
  0.92: { translateY: -34 },
  1: { scale: 1.2, translateY: -24 },
};

const animate2 = {
  0: { scale: 1.2, translateY: -24 },
  1: { scale: 1, translateY: 0 },
};

const circle1 = {
  0: { scale: 0 },
  0.3: { scale: 0.9 },
  0.5: { scale: 0.3 },
  0.8: { scale: 0.7 },
  1: { scale: 1 },
};

const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } };

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({ scale: 1 });
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({ scale: 0 });
    }
  }, [focused]);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={1}>
      <Animatable.View
        style={styles.container}
        animation="zoomIn"
        duration={1000}
        ref={viewRef}>
        <View style={styles.btn}>
          <Animatable.View
            ref={circleRef}
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: Colors.black,
              borderRadius: 25,
            }}
          />
          <Icon
            type={item.type}
            name={item.activeIcon}
            color={focused ? Colors.white : Colors.black}
            size={23}
          />
        </View>
        <Animatable.Text
          ref={textRef}
          style={{
            fontSize: 10,
            color: Colors.black,
            textAlign: 'center',
          }}>
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  );
};

const MainTabNavigator = () => {
  const Tabarr = [
    {
      route: 'Dashboard',
      label: 'Dashboard',
      type: 'Icon.Ionicons',
      activeIcon: 'apps-sharp',
      inActiveIcon: 'apps-sharp',
      component: Dashboard,
    },
    {
      route: 'AddEmployee',
      label: 'AddEmployee',
      type: 'Icon.Ionicons',
      activeIcon: 'person-add',
      inActiveIcon: 'person-add',
      component: AddEmployee,
    },
    {
      route: 'AddSoftware',
      label: 'AddSoftware',
      type: 'Icon.Ionicons',
      activeIcon: 'tv-sharp',
      inActiveIcon: 'tv-sharp',
      component: AddSoftware,
    },
    {
      route: 'AddHardware',
      label: 'AddHardware',
      type: 'Icon.Ionicons',
      activeIcon: 'build-sharp',
      inActiveIcon: 'build-sharp',
      component: AddHardware,
    },
    {
      route: 'AssetAllocation',
      label: 'AssetAllocation',
      type: 'Icon.Ionicons',
      activeIcon: 'add-circle',
      inActiveIcon: 'add-circle',
      component: AssetAllocation,
    },
    {
      route: 'AssignRole',
      label: 'AssignRole',
      type: 'Icon.Ionicons',
      activeIcon: 'person',
      inActiveIcon: 'person',
      component: AssignRole,
    },
  ];

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
          position: 'absolute',
          borderRadius: 16,
        },
      }}>
      {Tabarr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: props => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Attendance', headerShown: false }}
        />
        <Stack.Screen
          name="MainTabNavigator"
          component={MainTabNavigator}
          options={{
            headerShown: true,
            title: 'Asset Management',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerBackVisible: false,
            headerRight: () => <HeaderLeft />, // Add HeaderLeft here
          }}
        />
        <Stack.Screen
          name="Table"
          component={Table}
          options={{ title: 'Attendance', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 6,
    borderColor: Colors.white,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
