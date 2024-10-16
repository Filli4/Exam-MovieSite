import {createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import React from 'react'



const ApiService = async (setFilmData) => {
    try {
        const res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=a02a3bfa`)

        if (!res.ok) {
            throw new Error(`Could not fetch !status ${res.status}`);
            
        }
        const data = await res.json();
        
        setFilmData(data)

    } catch (error) {
        console.error(`Error fetching Data`, error)
        throw error;
    }
}

export default ApiService