import React,{ useState, useEffect } from 'react'
import axios from 'axios';
import { Search } from '../Search/Search';

export const ApiResponse = (props) =>{

    const searchName  = props.searchName;
    
    const [developers,setDevelopers]=useState([])

    useEffect(() =>{
        axios.get('https://developers-api.glitch.me/api')
        .then(response=>{
            const resp = response.data
            const match = resp.developers.filter(developer => developer.name === searchName)
            setDevelopers(match[0])
        })
    },[searchName])


    return (
        <>
        <Search {...developers}></Search>
        </>
    );
};