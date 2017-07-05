import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCmeQlaeucQPB0sHCkHy9L0TCcIQkZsmHY',
      authDomain: 'manager-21da4.firebaseapp.com',
      databaseURL: 'https://manager-21da4.firebaseio.com',
      projectId: 'manager-21da4',
      storageBucket: 'manager-21da4.appspot.com',
      messagingSenderId: '1077163481050'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
