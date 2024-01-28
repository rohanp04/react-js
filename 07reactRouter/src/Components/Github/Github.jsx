/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(() =>{
    //     fetch('https://api.github.com/users/rohanprajapati')
    //     .then((response) => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        Github followers: {data.followers}
        <img src={data.avatar_url} alt="GIt pic" className="w-[300px]" />
        </div>
  )
}

export default Github

export const gitinfoloader = async () => {
    const response = await fetch('https://api.github.com/users/rohanprajapati')
    
    return response.json()
}

