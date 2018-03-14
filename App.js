import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import HomeScreen from './Components/HomeScreen';
import SettingsScreen from './Components/SettingsScreen';
import { Header, Container, Icon, Content, Body } from 'native-base';

class App extends Component {
  render() {
    return (
      <MyApp/>
    );
  }
}

const CustomDrawerContentComponent = (props) =>(

  <Container>
    <Header style={{ height: 150, backgroundColor:'white'}}>
      <Body>
        <Image 
        style = {styles.drawerImage}
        source={require('./assets/DrawerIcons/Monkey.png')}/>
        </Body>
     </Header> 
     <Content>
       <DrawerItems {...props}/>
      </Content> 
  </Container>
  
);

const MyApp = DrawerNavigator({
  Home : { screen: HomeScreen},
  Setting : { screen : SettingsScreen}
},{
  initialRouteName: 'Home',
  contentComponent: CustomDrawerContentComponent,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle'
});

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerImage:{
    height:120,
    width: 120,
    borderRadius: 75
  }
});
