import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, NativeSyntheticEvent, TextInputChangeEventData, FlatList } from 'react-native';
import { API_URL } from './src/constants/api';
import fetchApi from './src/store/fetchApi';

let URL = "https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=4D15D63FD5FD55469D5A8B7228B1A266&steamids=76561197960435530"

export default function App() {
  const [search, setSearch] = useState<null | string>(null)
  const [data, setData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true);
  
  const onChangeInput = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const value = e.nativeEvent.text;
    setSearch(value);
  }
  useEffect(() => {
    fetch(encodeURIComponent(URL), { mode:'no-cors'})
    .then((response) => {
      console.log(response)
      if (!response.ok) {
        throw new Error("HTTP STATUS: " + response.status)
      }
      return response.json();
    })
    .then((message) => console.log(message))
  }, [])


  return (
    <SafeAreaView style={styles.container}>
      <TextInput
      style={styles.textInput} 
      value={search ?? ""} 
      onChange={onChangeInput}
      />
      <Text style={styles.text}>{search ?? "INGRESA TEXTO"}</Text>
      {/* <FlatList
        data={data}
        keyExtractor={({ steamid }, index) => steamid}
          renderItem={({ item }) => (
            <Text>{item.personaname}, {item.profileurl}</Text>
          )}
      /> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 44,
  },
  textInput: {
    width: "300px",
    backgroundColor: "red"
  }
});
