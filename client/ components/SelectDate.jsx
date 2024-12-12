import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useEffect, useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {Button} from 'react-native';

function SelectDate({date, setDate, children}) {
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
          minimumDate={new Date("2024-01-02")}
          maximumDate={new Date()}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
        <Text>{children}</Text>
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
