import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {useEffect, useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {Button} from 'react-native';

const getCurrentDate = () => {
  var date = new Date().getDate();
  var month = new Date().getMonth() - 2;
  var year = new Date().getFullYear();

  //Alert.alert(date + '-' + month + '-' + year);
  // You can turn it in to your desired format
  return year + '-' + month + '-' + date; //format: d-m-y;
};
function SelectDate() {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <Button title="Select Date" onPress={() => setOpen(true)} />
        <DatePicker
          modal
          open={open}
          date={date}
          mode='date'
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
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
