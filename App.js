import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Greeting from './Greeting';

export default class App extends Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <View>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
        />
        <Greeting name="Chiney"/>
      </View>
    );
  }
}