import React, { useState } from "react";
import { View, Text, StyleSheet} from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
    const [term, setTerm] = useState("");
    const [results, setResults] = useState([]); // data from api  

    const searchApi = async () => {
        const response = await yelp.get('/search', {
            params:{
                // attaches to the URL 
                limit: 50,
                term, 
                location: 'seattle' 

            }
        });

        //error checking 
        if(response.status !== 201){
            console.log(response.status)
            throw new Error("response error")
        }else{
            setResults(response.data.businesses);
        }
        
    };

    return (
    <View>
        <SearchBar 
            term={term} 
            onTermChange={newTerm => setTerm(newTerm)}
            onTermSubmit={searchApi}
            />
        <Text>Search Screen</Text>
        <Text>We have found {results.length}</Text>
    </View>)
}

const styles = StyleSheet.create({})

export default SearchScreen;  