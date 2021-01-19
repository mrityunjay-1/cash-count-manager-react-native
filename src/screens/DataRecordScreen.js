import React, { useContext } from 'react';
import { Text, View, FlatList, TouchableOpacity, Button } from 'react-native';
import CentralDataCenter from '../context/CentralDataCenter';

const DataRecordScreen = ({ navigation }) => {

  const { data, deleteData } = useContext(CentralDataCenter);
  // console.log("Actual Data = ", data);


  return (
    <>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ index, item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("ShowData", { item })}>
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