import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import DataRecordScreen from './src/screens/DataRecordScreen';
import ShowDataScreen from './src/screens/ShowDataScreen';
import { ContextProvider } from './src/context/CentralDataCenter';

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    DataViewer: DataRecordScreen,
    ShowData: ShowDataScreen
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: "Fare Calculator"
    }
  }
);

const App = createAppContainer(navigator);
export default () => {
  return (
    <ContextProvider>
      <App />
    </ContextProvider>
  );
};