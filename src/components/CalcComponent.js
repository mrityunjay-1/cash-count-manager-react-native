import React from 'react';
import { TextInput, Text, View, StyleSheet, Image } from 'react-native';

const CalcComponent = (props) => {
  return (
    <View style={{ flexDirection: 'row', margin: 5 }}>
      <Image
        source={props.uri}
        style={{ width: 100, height: 37 }}
      />

      <Text style={{ fontSize: 20, color: 'lightgrey' }}> * </Text>

      <TextInput
        keyboardType="number-pad"
        value={props.notes}
        onChangeText={(new_value) => {
          props.onTextInput(new_value, props.amount * new_value);
        }}
        style={styles.textinput}
      />

      <Text style={{ fontSize: 20, color: 'lightgrey' }}> = </Text>


      <TextInput
        value={props.total_amount}
        style={{ ...styles.textinput, textAlign: 'right' }}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  textinput: {
    borderWidth: 1,
    borderColor: 'grey',
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    marginHorizontal: 5,
    padding: 2
  }
})

export default CalcComponent;