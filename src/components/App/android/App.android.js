import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Animated, Button, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      optionSelect : 'list_item',
      showMaster : false,
      fadeAnim : new Animated.Value(0)
    }
    this._onPressButton = this._onPressButton.bind(this);
  }

  componentDidMount() {
  }
  _onPressButton() {
    this.setState({...this.state, optionSelect : 'what up', showMaster : !this.state.showMaster});



 }
  render(){
    return(
      <View style={{flex : 1, flexDirection : 'row'}}>
      <View style={{flex : 1}}>
      <Text>{this.state.showMaster == false? 1: 2 }</Text>
      </View>
      <Animated.View>
      {this.state.showMaster == true ?
        <View style={styles.master_container}>
          <View sytle={styles.master_item}>
            <Text>{this.state.optionSelect}</Text>
          </View>
          <View sytle={styles.master_item}>
            <Text>Eventos</Text>
          </View>
          <View sytle={styles.master_item}>
            <Text>Configuraci&oacute;n</Text>
          </View>
          <View sytle={styles.master_item}>
            <Text>Informaci&oacute;n</Text>
          </View>
        </View> : <View><Text>Informaci&oacute;n</Text></View>}
        </Animated.View>

        <View  style={styles.detail_container}>
          <View sytle={styles.master_item}>
            <Button title="OK" onPress={this._onPressButton}>ok</Button>
          </View>
        </View>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  master_container : {
    backgroundColor : 'aqua',
    flex : 1,
    flexDirection : 'column',

  },
  detail_container : {
    flex:2,
    backgroundColor : 'blueviolet',
  },
  master_item :
  {
     width : 50
  }
});

export default App;
