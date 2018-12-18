import React from 'react';
import { TextInput, View, StyleSheet, Button } from 'react-native';

const InputComponent = props => (
  <View style={styles.inputContainer}>
    <TextInput
      value={props.placename}
      placeholder="A placeholder"
      style={styles.placeInput}
      onChangeText={props.placenameChangeHandler}
    />
    <Button
      title="Add"
      style={styles.placeButton}
      onPress={props.pressButttonHandler}
    />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export default InputComponent;
