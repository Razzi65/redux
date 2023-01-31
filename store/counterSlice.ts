import { createSlice } from '@reduxjs/toolkit'



export const counterSlice = createSlice({
    name: 'counter',
    initialState: {count:0} ,
    reducers: {
        doIncerement: (state,action)=>{
            console.log(state.count);
            console.log(action.payload);
            
            state.count+=1
            
        },

        doDecerement:(state,action)=> {
            state.count-=1
        },

        doReset:(state, action)=>{
            state.count=0
        }
    }

})

export const {doIncerement, doDecerement, doReset} = counterSlice.actions

export default counterSlice.reducer

