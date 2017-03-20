import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Animated, Button, ScrollView } from 'react-native';
import { SideMenu, List, ListItem, Icon } from 'react-native-elements';


class Laytout extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      optionSelect : 'list_item',
      isOpen : false
    }
    this._onPressButton = this._onPressButton.bind(this);
  }

  componentDidMount() {
  }
  _onPressButton() {
    this.setState({...this.state, optionSelect : 'what up', showMaster : !this.state.showMaster});
 }
 toggleSideMenu (){
   this.setState({ isOpen : !this.state.isOpen })
 }
  render(){
    const sideMenuNameItem = ['item1', 'item2', 'item3'];
    const MenuComponent = (
        <View style={styles.master_container}>
        <List containerStyle={{marginBottom: 20}}>
        {
          sideMenuNameItem.map((item, index) => (
            <ListItem
              onPress = {() => console.log('Pressed')}
              hideChevron={true}
              leftIcon={{type:'font-awesome', name:'heartbeat', color:'#f50' }}
              key={index}
              title={item}
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
          <View  style={styles.detail_container} toggleSideMenu={this.toggleSideMenu.bind(this)}>
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

export default Laytout;
