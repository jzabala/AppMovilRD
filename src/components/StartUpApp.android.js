import React from 'react';
import { StackNavigator } from 'react-navigation'
import Layout from './Layout';
import Setting from './Setting.js';

const StartUpApp = StackNavigator({
  Home : { screen : Layout },
  Setting : { screen : Setting },
});

export default  StartUpApp;
