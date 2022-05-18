import React, { useState } from "react";
// allows to run code one time (useEffect) 
import { View, Text, StyleSheet, ScrollView} from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
    
    const [term, setTerm] = useState("");
    const [searchApi, results, errorMessage] = useResults(); 

    const filterResultsByPrice = (price) => {
        // price == "$" or "$$" or "$$$"
        return results.filter(result => {
            return result.price == price; 
        })
    }

    return (
    <>
        <SearchBar 
            term={term} 
            onTermChange={setTerm} 
            onTermSubmit={() => searchApi(term)}
            />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <ScrollView>
        <ResultsList results={filterResultsByPrice("$")} title="Cost Effective"/>
        <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier"/>
        <ResultsList results={filterResultsByPrice("$$$")} title="Big Spender"/>
        </ScrollView>
    </>)
}

const styles = StyleSheet.create({})

export default SearchScreen;  