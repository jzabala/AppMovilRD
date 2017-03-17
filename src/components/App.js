import React from 'react';
import { View, Text, TabBarIOS } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => (
  <TabBarIOS>
    <Icon.TabBarItem
      title="Procesos"
      iconName="shopping-cart">
      {/* TODO: Add purchasing processes list */}
      <Text>Processes View</Text>
    </Icon.TabBarItem>
    <Icon.TabBarItem
      title="Eventos"
      iconName="calendar">
      {/* TODO: Add Events list */}
      <Text>Eventos View</Text>
    </Icon.TabBarItem>
    <Icon.TabBarItem
      title="Servicios"
      iconName="gear">
      {/* TODO: Think about ideas for this view */}
      <Text>Servicios View</Text>
    </Icon.TabBarItem>
    <Icon.TabBarItem
      title="Informacion"
      iconName="info-circle">
      {/* TODO: Add Information view */}
      <Text>Informacion View</Text>
    </Icon.TabBarItem>
  </TabBarIOS>
);

export default App;
