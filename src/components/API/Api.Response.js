import React,{ useState, useEffect } from 'react'
import axios from 'axios';


export const ApiResponse = (props) =>{

    const searchName  = props.searchName;
    console.log(searchName);
    const [developers,setDevelopers]=useState([])
    

    useEffect(() =>{
        axios.get('https://developers-api.glitch.me/api')
        .then(response=>{
            const resp = response.data
            const match = resp.developers.filter(developer => developer.name === searchName)
            setDevelopers(match[0])
        })
    },[searchName])

    console.log(developers)

    return(
        <>
        </>
    )
}