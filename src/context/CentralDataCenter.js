import React, { createContext, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CentralDataCenter = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "getData":
      return action.payload.data;

    case "addData":
      return [...state, action.payload];

    case 'deleteData':
      // console.log(action.payload); // its an object
      let new_data = state.filter((items) => {
        return items.id !== action.payload.id;
      })
      return new_data;


    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  // defining hooks
  const [data, dispatch] = useReducer(reducer, []);
  // console.log("Cetral Data = ", data);

  React.useEffect(() => {
    const fetchData = async () => {
      let async_storage_data = await AsyncStorage.getItem("user1234");


      if (async_storage_data) {
        console.log("NO data");
        return;
      }

      dispatch({ type: "getData", payload: { data: JSON.parse(async_storage_data) } });
    };
    fetchData();
  }, []);


  const addData = async ({ state }) => {
    // console.log(state);
    dispatch({ type: "addData", payload: { id: `${Math.floor(Math.random() * 500000)}`, ...state } });
    // console.log(data);
    await AsyncStorage.setItem("user1234", JSON.stringify(data));
  };

  const deleteData = async ({ id }) => {
    // console.log("delete in Central = ", id);
    dispatch({ type: 'deleteData', payload: { id } });
    await AsyncStorage.setItem('user1234', JSON.stringify(data));
  }

  return (
    <CentralDataCenter.Provider value={{ data, addData, deleteData }}>
      {children}
    </CentralDataCenter.Provider>
  );
};

export default CentralDataCenter;