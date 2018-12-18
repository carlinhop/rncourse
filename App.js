/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button, ScrollView, Alert } from 'react-native';
import ListItem from './src/components/ListItem/ListItem';
import InputComponent from './src/components/InputComponent/InputComponent';
import ListContainer from './src/components/ListContainer/ListContainer';
import placeImage from './src/assets/beautiful-place.jpg';
import PlaceDetail from './src/components/PlaceDetails/PlaceDetail';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    placename: '',
    places: [],
    selectedPlace: null,
  }

  placenameChangeHandler = (val) => {
    this.setState({
      placename: val,
    });
  }
  pressButttonHandler = () => {
    if (this.state.placename.trim() === '') {
      return;
    }
    this.setState(prevState => ({
      places: prevState.places.concat({
        key: Math.random().toString(),
        name: this.state.placename,
        image: placeImage,
      }),
    }));
  }

  itemDeletedHandler=() => {
    this.setState(prevState => ({
      places: prevState.places.filter(place => place.key !== prevState.selectedPlace.key),

      selectedPlace: null,
    }));
  }
  modalClosedHandler=() => this.setState({ selectedPlace: null })

  placeSelectedHandler = (key) => {
    this.setState(prevState => ({
      selectedPlace: prevState.places.find(place => (
        place.key === key
      )),
    }

    ));
  }
  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.itemDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <InputComponent
          placenameChangeHandler={this.placenameChangeHandler}
          pressButttonHandler={this.pressButttonHandler}
          placename={this.state.placename}
        />

        <View style={styles.listContainer}>
          <ListContainer items={this.state.places} onItemSeleted={this.placeSelectedHandler} />
        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 26,
  },

  placeInput: {
    width: '70%',
  },
  placeButton: {
    width: '30%',
  },
  listContainer: {
    width: '100%',
  },
});
