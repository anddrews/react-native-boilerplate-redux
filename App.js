import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/redux/store/configureStore';
import { ReduxNavigation } from './src/settings/navigation/';
import Video from "expo/src/av/Video";

const store = configureStore({});

export default class App extends Component<{}> {
  render() {
    return (
        <Provider style={styles.container} store={store}>
          <ReduxNavigation />
        </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
});
