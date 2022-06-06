import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";
import Spacer from "../components/Spacer";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null); // reassign to state obj after request
  const id = navigation.getParam("id");

  // make api request for single
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Spacer />
      <Text style={styles.title}>{result.name}</Text>
      <Text>{result.display_phone}</Text>
      <Text>{result.location.address1}</Text>
      <Text>
        {result.location.city +
          " " +
          result.location.state +
          " " +
          result.location.zip_code}
      </Text>

      <Spacer />
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          // item = photo url
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
  },
  image: {
    height: 200,
    width: 300,
    marginBottom: 25,
  },
});

export default ResultsShowScreen;
