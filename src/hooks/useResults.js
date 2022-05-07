import {useEffect, useState} from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]); // data from api  
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async (searchTerm) => {
        console.log('hi')
        try{
        const response = await yelp.get('/search', {
            params:{
                // attaches to the URL 
                limit: 50,
                term: searchTerm, 
                location: 'seattle' 
            }
        });
        setResults(response.data.businesses);
    } catch(err){
        setErrorMessage('Something went wrong');
    }
};

// call searchApi when component is first rendered 
//searchApi('pasta');
useEffect(() => {
    searchApi('pasta');
}, []);

    return [searchApi, results, errorMessage]
}