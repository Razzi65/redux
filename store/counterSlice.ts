import { createSlice } from '@reduxjs/toolkit'



export const counterSlice = createSlice({
    name: 'counter',
    initialState: {count:0} ,
    reducers: {
        doIncerement: (state)=>{
            console.log(state);
            
        }
    }

})

export const {doIncerement} = counterSlice.actions

export default counterSlice.reducer

