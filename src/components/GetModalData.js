import React from 'react';
import {
  Text, View, StyleSheet, ScrollView, Button
} from 'react-native';
import { withNavigation } from 'react-navigation';


const GetDetails = ({ sr, amount, data }) => {
  return (
    <View style={{ flexDirection: 'row', margin: 8 }}>
      <Text style={{ width: 70, fontSize: 18 }} > {sr} .) </Text>
      <Text style={{ width: 50, fontSize: 18 }}> {amount} </Text>
      <Text style={{ width: 30, fontSize: 18 }}>  * </Text>
      <Text style={{ width: 50, fontSize: 18, textAlign: 'right' }}> {data.notes} </Text>
      <Text style={{ width: 30, fontSize: 18 }}>  = </Text>
      <Text style={{ width: 80, fontSize: 18, textAlign: 'right' }}> {data.total_amount} </Text>
    </View>
  );
};

const GetModalData = ({ modal, navigation, data }) => {
  // console.log("GetModalData = ", data);

  return (
    <>
      <ScrollView>
        <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', padding: 20 }}> {data.id} </Text>
        <GetDetails sr={1} amount={2000} data={data.tt} />
        <GetDetails sr={2} amount={500} data={data.fh} />
        <GetDetails sr={3} amount={200} data={data.th} />
        <GetDetails sr={4} amount={100} data={data.oh} />
        <GetDetails sr={5} amount={50} data={data.fifty} />
        <GetDetails sr={6} amount={20} data={data.twenty} />
        <GetDetails sr={7} amount={10} data={data.ten} />
        <GetDetails sr={8} amount={5} data={data.five} />
        <GetDetails sr={9} amount={2} data={data.two} />
        <GetDetails sr={10} amount={1} data={data.one} />

        <Text style={{ backgroundColor: 'red' }}></Text>

        <Text style={{ fontSize: 20, textAlign: 'right', marginHorizontal: 40 }} > {data.final_amount} </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>

        <Button onPress={() => { modal(false); navigation.navigate("ShowData"); }} title="Edit" />
      </ScrollView>
    </>
  );
};

export default withNavigation(GetModalData);