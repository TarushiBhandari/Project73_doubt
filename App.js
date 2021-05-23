import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ReadStoryScreen from './screens/ReadStory';
import WriteStoryScreen from './screens/WriteStory';
import AppHeader from './AppHeader';

export default class App extends React.Component{
  render(){
  return (
      
      <AppContainer/>

 
  );
}
}

const tabNavigator= createBottomTabNavigator({
  Read_Story: {screen: ReadStoryScreen},
  Write_Story: {screen: WriteStoryScreen}
},
{
  defaultNavigationOptions:({navigation})=>({
     tabBarIcon:()=>{
       const routeName= navigation.state.routeName;

       if(routeName==="Write_Story"){
         return (
         <Image 
             source={require("./assets/write.png")} 
             style={{width:40, height:40}} 
         />
         )
       }else if(routeName==="Read_Story"){
         return(
           <Image
               source={require("./assets/read.png")}
               style={{width:40, height:40}}
           />
         )
       }
     }
  })
}

)
const AppContainer= createAppContainer(tabNavigator);