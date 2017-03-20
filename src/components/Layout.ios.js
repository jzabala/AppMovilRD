import React from 'react';
import { View, Text, TabBarIOS, StyleSheet, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { isIOS } from '../../utils/platform';

class Laytout extends React.Component {
  state = {
    selectedTab: 'processesTab'
  }

  render() {
    return (
      <TabBarIOS>
        <Icon.TabBarItem
          title="Procesos"
          iconName="shopping-cart"
          selected={ this.state.selectedTab === 'processesTab' }
          onPress={ () => this.setState({ selectedTab: 'processesTab' }) }
          style={ styles.container }>
          {/* TODO: Add purchasing processes list */}
          <Text>Processes View</Text>
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Eventos"
          iconName="calendar"
          selected={ this.state.selectedTab === 'eventsTab' }
          onPress={ () => this.setState({ selectedTab: 'eventsTab' }) }
          style={ styles.container }>
          {/* TODO: Add Events list */}
          <Text>Eventos View</Text>
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Servicios"
          iconName="gear"
          selected={ this.state.selectedTab === 'gearTab' }
          onPress={ () => this.setState({ selectedTab: 'gearTab' }) }
          style={ styles.container }>
          {/* TODO: Think about ideas for this view */}
          <Text>Servicios View</Text>
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Informacion"
          iconName="info-circle"
          selected={ this.state.selectedTab === 'infoTab' }
          onPress={ () => this.setState({ selectedTab: 'infoTab' }) }
          style={ styles.container }>
          {/* TODO: Add Information view */}
          <Text>Informacion View</Text>
        </Icon.TabBarItem>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: isIOS() ? 20 : 0,
  }
});

export default Laytout;
