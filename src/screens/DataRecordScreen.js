import React, { useContext, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, Button, Modal } from 'react-native';
import CentralDataCenter from '../context/CentralDataCenter';
import GetModalData from '../components/GetModalData';

const DataRecordScreen = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);
  const [presentModalData, setPresentModalData] = useState();

  const { data, deleteData } = useContext(CentralDataCenter);
  // console.log("Actual Data = ", data);

  return (
    <>
      {/* Modal for Showing data */}
      <Modal
        animationType="slide"
        visible={showModal}
        onRequestClose={() => { /*alert("You closed it...");*/ setShowModal(false); }}
      >
        <View stlye={{ flex: 1, justifyContent: 'center', marginVertical: 50 }}>
          <GetModalData modal={setShowModal} data={presentModalData} />
        </View>
        <Button onPress={() => setShowModal(false)} title="Close" />

        {/* <TouchableOpacity onPress={() => setShowModal(false)}> <Text> Close </Text> </TouchableOpacity> */}
      </Modal>



      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ index, item }) => {
          return (
            <TouchableOpacity onPress={() => { setShowModal(true); setPresentModalData(item); }}>
              <View style={{ padding: 15, flexDirection: 'row' }}>
                <Text style={{ width: 50 }}> {index + 1} </Text>
                <Text style={{ flex: 1 }}> {item.id} </Text>
                <Button title="Delete" onPress={() => { deleteData({ id: item.id }) }} />
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
}
export default DataRecordScreen;