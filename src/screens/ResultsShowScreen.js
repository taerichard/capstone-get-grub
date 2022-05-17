import React, { useState, useEffect } from "react";
import {View, Text, StyleSheet} from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);   // reassign to state obj after request
    const id = navigation.getParam('id');
    
    console.log(result);
    // make api request for single 
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    return <View>
        <Text>Results Show</Text>
    </View>
};

const styles = StyleSheet.create({});

export default ResultsShowScreen