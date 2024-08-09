import { useState, useEffect } from "react";
import yelp from "../api/yelp";


export default () => {
    const [results,setResults] = useState([])
    const [erro,setErro] = useState('')

    const searchApi = async (searchTerm) => {
        try {
            
        const response = await yelp.get('/search',{
            params: {
                limit:20,
                term: searchTerm,
                location:'sao paulo'
            }
        
        })
        setResults(response.data.businesses)
        } catch(err) {
            console.log(err)
            setErro('algo deu errado com a api',err)
        }
    }
    useEffect(()=> {

        searchApi('pasta')
    }, [])

    return [searchApi, results, erro]
}