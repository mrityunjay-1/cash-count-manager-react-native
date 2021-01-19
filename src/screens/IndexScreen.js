import React, { useReducer, useContext } from 'react';
import { Text, View, ScrollView, FlatList, TouchableOpacity, Button } from 'react-native';
import CalcComponent from '../components/CalcComponent';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import CentralDataCenter from '../context/CentralDataCenter';
import AsyncStorage from '@react-native-async-storage/async-storage';

const reducer = (state, { type, payload }) => {
  let data = { ...state };
  data[type] = { notes: payload.notes, total_amount: payload.total_amount };

  // final sum of the total_amount
  let sum = 0, sum_notes = 0;
  let data2 = Object.values(data);
  for (let i = 0; i < 10; i++) {
    sum_notes += data2[i].notes;  // first converted to the number
    sum += data2[i].total_amount;
  }

  data.final_notes = sum_notes;
  data.final_amount = sum;
  return data;
};

const IndexScreen = ({ navigation }) => {
  const { addData } = useContext(CentralDataCenter);
  const [state, dispatch] = useReducer(reducer, { tt: { notes: 0, total_amount: 0 }, fh: { notes: 0, total_amount: 0 }, th: { notes: 0, total_amount: 0 }, oh: { notes: 0, total_amount: 0 }, fifty: { notes: 0, total_amount: 0 }, twenty: { notes: 0, total_amount: 0 }, ten: { notes: 0, total_amount: 0 }, five: { notes: 0, total_amount: 0 }, two: { notes: 0, total_amount: 0 }, one: { notes: 0, total_amount: 0 }, final_notes: 0, final_amount: 0 });

  // console.log(data);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <CalcComponent uri={require('../../assets/2000.png')} amount={2000} notes={state.tt.notes.toString()} total_amount={state.tt.total_amount.toString()} onTextInput={(notes, total_amount) => { dispatch({ type: "tt", payload: { notes: +notes, total_amount } }) }} />
        <CalcComponent uri={require('../../assets/500.png')} amount={500} notes={state.fh.notes.toString()} total_amount={state.fh.total_amount.toString()} onTextInput={(notes, total_amount) => dispatch({ type: "fh", payload: { notes: +notes, total_amount } })} />
        <CalcComponent uri={require('../../assets/200.png')} amount={200} notes={state.th.notes.toString()} total_amount={state.th.total_amount.toString()} onTextInput={(notes, total_amount) => dispatch({ type: "th", payload: { notes: +notes, total_amount } })} />
        <CalcComponent uri={require('../../assets/100.png')} amount={100} notes={state.oh.notes.toString()} total_amount={state.oh.total_amount.toString()} onTextInput={(notes, total_amount) => dispatch({ type: "oh", payload: { notes: +notes, total_amount } })} />
        <CalcComponent uri={require('../../assets/50.jpg')} amount={50} notes={state.fifty.notes.toString()} total_amount={state.fifty.total_amount.toString()} onTextInput={(notes, total_amount) => dispatch({ type: "fifty", payload: { notes: +notes, total_amount } })} />
        <CalcComponent uri={require('../../assets/20.jpg')} amount={20} notes={state.twenty.notes.toString()} total_amount={state.twenty.total_amount.toString()} onTextInput={(notes, total_amount) => dispatch({ type: "twenty", payload: { notes: +notes, total_amount } })} />
        <CalcComponent uri={require('../../assets/10.png')} amount={10} notes={state.ten.notes.toString()} total_amount={state.ten.total_amount.toString()} onTextInput={(notes, total_amount) => dispatch({ type: "ten", payload: { notes: +notes, total_amount } })} />
        <CalcComponent uri={require('../../assets/5.jpg')} amount={5} notes={state.five.notes.toString()} total_amount={state.five.total_amount.toString()} onTextInput={(notes, total_amount) => dispatch({ type: "five", payload: { notes: +notes, total_amount } })} />
        <CalcComponent uri={require('../../assets/2.jpg')} amount={2} notes={state.two.notes.toString()} total_amount={state.two.total_amount.toString()} onTextInput={(notes, total_amount) => dispatch({ type: "two", payload: { notes: +notes, total_amount } })} />
        <CalcComponent uri={require('../../assets/1.jpg')} amount={1} notes={state.one.notes.toString()} total_amount={state.one.total_amount.toString()} onTextInput={(notes, total_amount) => dispatch({ type: "one", payload: { notes: +notes, total_amount } })} />

        <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'black', paddingVertical: 20, paddingHorizontal: 10 }}>
          <Text style={{ flex: 1, color: 'white', fontWeight: 'bold', fontSize: 20 }}> Final amount : </Text>
          <Text style={{ flex: 1, color: 'white', fontWeight: 'bold', fontSize: 20, textAlign: 'right' }}> <FontAwesome name="rupee" color="white" size={20} />  {state.final_amount} </Text>
        </View>

      </ScrollView>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 20 }}>
        <Button onPress={() => { addData({ state }); }} title="Save" />
        <Button onPress={() => { navigation.navigate("DataViewer"); }} title="get data" />
      </View>
    </View>
  );
};

// IndexScreen.navigationOptions = ({ navigation }) => {
//   return {
//     headerRight: () => {
//       return (
//         <TouchableOpacity onPress={() => addData({ state })}>
//           <Feather name="save" size={30} color="magenta" style={{ paddingHorizontal: 20 }} />
//         </TouchableOpacity>
//       );
//     }
//   };
// };

export default IndexScreen;