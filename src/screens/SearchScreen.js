import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    // price == "$" or "$$" or "$$$"
    return results.filter((result) => {
      return result.price == price;
    });
  };

  return (
    <View>
      <View style={styles.searchContainer}>
        <View style={styles.cityInputContainer}>
          <Ionicons
            style={styles.iconStyle}
            name="restaurant"
            size={24}
            color="black"
          />
          <SearchBar
            style={styles.searchBarStyle}
            term={term}
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term, location)}
            placeHolderText="Search Restaurant/Food"
          />
        </View>
        <View style={styles.citySearchContainer}>
          <Entypo
            name="location-pin"
            size={24}
            color="black"
            style={styles.iconStyle}
          />
          <SearchBar
            style={styles.citySearchBarStyle}
            placeHolderText="Enter City"
            term={location}
            onTermChange={setLocation}
            onTermSubmit={() => searchApi(term, location)}
          />
        </View>
      </View>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList results={filterResultsByPrice("$")} title="Low-cost" />
        <ResultsList results={filterResultsByPrice("$$")} title="Costly" />

        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="High-Roller"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    paddingLeft: 10,
  },
  cityInputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  searchBarStyle: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
  },
  citySearchBarStyle: {},
  citySearchContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  iconStyle: {
    //fontSize: 30,
    //alignSelf: "center",
    //marginHorizontal: 15,
  },
});

export default SearchScreen;
