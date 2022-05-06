import React, { useState } from "react";
import { View, Text, StyleSheet} from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
    const [term, setTerm] = useState("");
    const [results, setResults] = useState([]); // data from api  
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async () => {
        try{
        const response = await yelp.get('/search', {
            params:{
                // attaches to the URL 
                limit: 50,
                term, 
                location: 'seattle' 
            }
        });
        setResults(response.data.businesses);
    } catch(err){
        setErrorMessage('Something went wrong');
    }
};

    return (
    <View>
        <SearchBar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmit={searchApi}
            />
       {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text>We have found {results.length}</Text>
    </View>)
}

const styles = StyleSheet.create({})

export default SearchScreen;  