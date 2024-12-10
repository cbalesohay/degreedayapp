import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Button,
  TouchableOpacity,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {useEffect, useState} from 'react';

const getCurrentDate = () => {
  var date = new Date().getDate();
  var month = new Date().getMonth() - 1;
  var year = new Date().getFullYear();
  //format: yyyy-mm-dd;
  return year + '-' + month + '-' + date;
};

function Fetch({selectedDate}) {
  const [number, setNumber] = useState(null);
  const [date, setDate] = useState(null);
  const [value, setValue] = useState(null);
  const [species, setSpecies] = useState('WesternCherry');
  const [isLoading, setLoading] = useState(true);

  const info = {
    date: date,
    species: species,
    reqData: 'dayDegreeDay',
  };
  const data = [
    {
      value: '1',
      label: 'Western Cherry',
      species: 'WesternCherry',
      reqData: 'dayDegreeDay',
    },
    {
      value: '2',
      label: 'Leaf Rollers',
      species: 'LeafRollers',
      reqData: 'dayDegreeDay',
    },
    {
      value: '3',
      label: 'Codling Moth',
      species: 'CodlingMoth',
      reqData: 'dayDegreeDay',
    },
    {
      value: '4',
      label: 'Apple Scab',
      species: 'AppleScab',
      reqData: 'dayDegreeDay',
    },
  ];

  const getData = async () => {
    const url = 'https://degreedayapp.onrender.com/get';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(info),
      });
      const json = await response.json();
      setNumber(json);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    setDate(getCurrentDate());
    getData();
    setLoading(false);
    return () => {};
  }, [species, date]);

  return (
    <>
      {data.map((item, index) => (
        <Button
          key={index}
          title={item.label}
          onPress={() => {
            console.log(item.species);
            setValue(item.value);
            setSpecies(item.species);
          }}/>
      ))}
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Text style={styles.degreeDays}>Degree Days: {number}</Text>
        )}
      </View>
    </>
  );
}

export default Fetch;

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
