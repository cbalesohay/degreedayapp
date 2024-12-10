import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {useEffect, useState} from 'react';

const getCurrentDate = () => {
  var date = new Date().getDate();
  var month = new Date().getMonth() - 2;
  var year = new Date().getFullYear();

  //Alert.alert(date + '-' + month + '-' + year);
  // You can turn it in to your desired format
  return year + '-' + month + '-' + date; //format: d-m-y;
};
function SelectDate() {
  const [date, setDate] = useState('2024-10-10');
  
  return (
    <>
      {/* <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select an item"
        value={value}
        onChange={item => {
          setValue(item.value);
          setSpecies(item.species);
          setReqData(item.reqData);
        }}
      /> */}
      <View style={styles.container}>
        <Text style={styles.degreeDays}>{date}</Text>
      </View>
    </>
  );
}

export default SelectDate;

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  degreeDays: {
    fontSize: 25,
    textAlign: 'center',
  },
});