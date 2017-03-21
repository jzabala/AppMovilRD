import React from 'react';
import { View, Text, Switch } from 'react-native';


class Setting extends React.Component{
constructor(props){
  super(props);
  this.state = {
                 isNotification : false
               }
  this.changeNotificationValue = this.changeNotificationValue.bind(this);
}
static navigationOptions = {
 title : 'Configuracion',
};
changeNotificationValue(){
  this.setState({isNotification : !this.state.isNotification});
}
  render(){
    return(
      <View>
        <View sytle={{flex : 1, flexDirection : 'row'}}>
           <View>
              <Text>Quiere recibir notificaciones</Text>
            </View>
            <View>
              <Switch
                 onValueChange={this.changeNotificationValue}
                 value={this.state.isNotification}
                 style={{marginLeft : 2}}
               />
             </View>

        </View>
      </View>
    );
  }

}
 export default Setting;
