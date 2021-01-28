import React, { createContext, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CentralDataCenter = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "getData":
      return action.payload;

    case "addData":
      let new_data123 = [...state, action.payload];
      return new_data123;

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
      let initial_data = [];
      let all_key = await AsyncStorage.getAllKeys();


      all_key.forEach(async (item) => {
        let getData = await AsyncStorage.getItem(item);
        console.log("Get Data = ", getData);
        initial_data.push(JSON.parse(getData));
      });

      // finally submit it to the CentralDataCenter;
      dispatch({ type: "getData", payload: initial_data });

    };
    fetchData();
  }, []);


  const addData = async (state) => {
    dispatch({ type: "addData", payload: state });
  };

  const deleteData = async ({ id }) => {
    await AsyncStorage.removeAllKey();
    // dispatch({ type: 'deleteData', payload: { id } });
    // await AsyncStorage.setItem('user1234', JSON.stringify(data));
  }

  return (
    <CentralDataCenter.Provider value={{ data, addData, deleteData }}>
      {children}
    </CentralDataCenter.Provider>
  );
};

export default CentralDataCenter;