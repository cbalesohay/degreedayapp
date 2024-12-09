import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {useEffect, useState} from 'react';
// const url = 'http://localhost:8080/get';
// const url = '44.226.145.213/get'

function Fetch() {
  const [number, setNumber] = useState(null);
  const [date, setDate] = useState('2024-10-16');
  const [value, setValue] = useState(null);
  const [species, setSpecies] = useState('WesternCherry');
  const [reqData, setReqData] = useState('dayDegreeDay');
  const [isLoading, setLoading] = useState(true);

  const info = [
    {date: '2024-10-16'},
    {species: 'WesternCherry'},
    {reqData: 'dayDegreeDay'},
  ];
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
    const url = 'http://localhost:8080/get';
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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // useEffect(() => {
  //   let ignore = false;
  //   const url = 'http://localhost:8080/get';
  //   fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(info),
  //   })
  //     .then(res => res.json())
  //     .then(degreeDay => {
  //       if (!ignore) {
  //         setNumber(degreeDay);
  //       }
  //     })
  //     // .catch(error => console.error(error));
  //   return () => {
  //     ignore = true;
  //   };
  // }, []);
  return (
    <>
      <Dropdown
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
      />
      {/* <Text>{number ?? 'Loading...'}</Text> */}
      <Text>{number}</Text>
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
});
