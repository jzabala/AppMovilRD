import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Animated, Button, ScrollView } from 'react-native';
import { SideMenu, List, ListItem, Icon } from 'react-native-elements';
import  { StackNavigator }  from 'react-navigation';

class Layout extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isOpen : false
    }
  }
  static navigationOptions = {
    title: 'Home'
  }
 toggleSideMenu (){
   this.setState({ isOpen : !this.state.isOpen })
 }
  render(){
    const sideMenuNameItem = [
                               {title : 'item1', icon : 'tasks', page : 'Setting'},
                               {title : 'item2', icon : 'tasks', page : 'Setting'},
                               {title : 'item3', icon : 'filter', page : 'Setting'},
                               {title : 'item4', icon : 'cog', page : 'Setting'},
                               {title : 'item5', icon : 'exclamation-circle', page : 'Setting'},
                             ];
    const { navigate } = this.props.navigation;
    const MenuComponent = (
        <View style={styles.master_container}>
        <List containerStyle={{marginBottom: 20}}>
        {
          sideMenuNameItem.map((item, index) => (
            <ListItem
              onPress = {() => navigate(item.page)}
              hideChevron={true}
              leftIcon={{type:'font-awesome', name:item.icon, color:'#f50' }}
              key={index}
              title={item.title}
              titleStyle = {{color:'white'}}
              containerStyle={{backgroundColor : 'dodgerblue'}}
            />
          )
        )
        }
        </List>
        </View>
    )
    return(
      <SideMenu
        isOpen={this.state.isOpen}
        menu={MenuComponent}>
          <View
            style={styles.detail_container}
            toggleSideMenu={this.toggleSideMenu.bind(this)}>
              <View>
                <Text>Welcome</Text>
              </View>
          </View>
      </SideMenu>
    );
  }
}

const styles = StyleSheet.create({
  master_container : {
    backgroundColor : 'dodgerblue',
    flex : 1,
    flexDirection : 'column',

  },
  detail_container : {
    flex:2,
    backgroundColor : 'aliceblue',
  },
  master_item :
  {
     width : 50
  }
});

export default Layout;
