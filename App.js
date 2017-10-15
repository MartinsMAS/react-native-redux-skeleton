import React, { Component } from 'react';
import {
  View
} from 'react-native';
import { Provider, connect } from 'react-redux';
import getStore from './src/redux/store';



class App extends Component<{}> {
  render() {
    const store = getStore();
    console.log(store);

    return (
      <Provider store={store}>
        <View>

        </View>
      </Provider>
    );
  }
}

export default (App)
