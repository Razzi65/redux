import { createSlice } from '@reduxjs/toolkit'


const counterSlice = createSlice({
    name: 'counter',
    initialState:{count:15},
    reducers: {
    doIncerement:(state, action)=> {
        console.log("state", state);
        
    }
      }})


      export default counterSlice.reducer