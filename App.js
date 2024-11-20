import React from 'react';
import {View, Text, FlatList, TouchableOpacity, ScrollView, StyleSheet, SectionList, StatusBar, Button, TextInput} from 'react-native';

const styles = StyleSheet.create({
  opacityStyle: {
    padding: 2,
    marginLeft: 15,
    marginRight: 15,
    borderWidth: 1,
  },
  textStyle: {
    fontSize: 15,
    margin: 10,
    textAlign: 'left',
  },
  headerText:{
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    fontWeight: 'bold'
  }
})

// const dataSource = [
//     {key: 'a'},
//     {key: 'b'},
//     {key: 'c'},
//     {key: 'd'},
//     {key: 'e'},
//     {key: 'f'},
//     {key: 'g'},
//     {key: 'h'},
//     {key: 'i'},
//     {key: 'j'},
//     {key: 'k'},
//     {key: 'l'},
//     {key: 'm'},
//     {key: 'n'},
//     {key: 'o'},
//     {key: 'p'},
//     {key: 'q'},
//     {key: 'r'},
//     {key: 's'},
//     {key: 't'},
//     {key: 'u'},
//     {key: 'v'},
//     {key: 'w'},
//     {key: 'x'},
//     {key: 'y'},
//     {key: 'z'}
// ];

const dataSource = [
  {data:[
      {key: 'a'},
      {key:'e'},
      {key:'i'},
      {key:'o'},
      {key:'u'},
    ],
  title:"Vowels", bkgColor:"green"},
  {data:[
      {key:'b'},
      {key: 'c'},
      {key: 'd'},
      {key: 'f'},
      {key: 'g'},
      {key: 'h'},
      {key: 'j'},
      {key: 'k'},
      {key: 'l'},
      {key: 'm'},
      {key: 'n'},
      {key: 'p'},
      {key: 'q'},
      {key: 'r'},
      {key: 's'},
      {key: 't'},
      {key: 'v'},
      {key: 'w'},
      {key: 'x'},
      {key: 'y'},
      {key: 'z'}
    ],
  title:"Consonants", bkgColor:"yellow"}
];

const renderItem = ({item}) => {
  return(
      <TouchableOpacity style={styles.opacityStyle}>
        <Text style={styles.textStyle}>{item.key}</Text>
      </TouchableOpacity>
  );
};

// const App1 = () => {
//   return (
//       <ScrollView style={styles.container}>
//         <FlatList data={dataSource} renderItem={renderItem}/>
//       </ScrollView>
//   );
// };

const App2 = () => {
  return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <SectionList sections={dataSource} renderItem={renderItem}
                     renderSectionHeader={({section:{title, bkgColor}})=>(
                         <Text style={[styles.headerText, {backgroundColor:bkgColor}]}>{title}</Text>
                     )}
        />
      </View>
  );
};

export default App2;
