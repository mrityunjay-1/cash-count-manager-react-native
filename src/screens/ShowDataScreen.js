import React, { useState } from 'react';
import { Text, View, Modal, TouchableOpacity, Alert } from 'react-native';
// import CalcComponent from '../components/CalcComponent';

function GetDetails({ data }) {

  return (
    <>
      <Text> {data.id} </Text>
      <Text> 2000 * {data.tt.notes} - {data.tt.total_amount} </Text>
      <Text> 500  * {data.fh.notes} - {data.fh.total_amount} </Text>
      <Text> 200  * {data.th.notes} - {data.th.total_amount} </Text>
      <Text> 100  * {data.oh.notes} - {data.oh.total_amount} </Text>
      <Text> 50   * {data.fifty.notes} - {data.fifty.total_amount} </Text>
      <Text> 20   * {data.twenty.notes} - {data.twenty.total_amount} </Text>
      <Text> 10   * {data.ten.notes} - {data.ten.total_amount} </Text>
      <Text> 5    * {data.five.notes} - {data.five.total_amount} </Text>
      <Text> 2    * {data.two.notes} - {data.two.total_amount} </Text>
      <Text> 1    * {data.one.notes} - {data.one.total_amount} </Text>
      <Text> Totals - {data.final_notes} - {data.final_amount}   </Text>
    </>
  );
}

const ShowDataScreen = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);

  const id = navigation.getParam("item");

  return (
    <>
      <GetDetails data={id} />

      {/* <View style={{ margin: 50, flex: 1, alignItems: 'center' }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={showModal}
          onRequestClose={() => { Alert.alert("Modal has been closed..."); }}
        >
          <View style={{ margin: 22, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ textAlign: 'center' }}> I am Modal in react-native Fantastic </Text>
            <TouchableOpacity onPress={() => setShowModal(false)}>
              <Text style={{ color: 'magenta', fontWeight: 'bold', fontSize: 25, textAlign: 'center' }}> Close me </Text>
            </TouchableOpacity>
          </View>
        </Modal>


        <TouchableOpacity onPress={() => { setShowModal(true); }}>
          <Text> Show Details </Text>
        </TouchableOpacity>
      </View> */}
    </>
  );
}
export default ShowDataScreen;