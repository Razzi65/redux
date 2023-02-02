import { Button, Box } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { doIncerement, doDecerement, doReset } from '@/store/counterSlice'
import { useSelector } from "react-redux"


const Counter = () => {
    const count = useSelector((store)=> store.counterSlice.count)
    const dispatch = useDispatch()

    const incerement = () => {
        dispatch(doIncerement())
    }

    const decerement = () => {
        dispatch(doDecerement())
    }

        const reset = () => {
            dispatch(doReset())
            
        }
    
    
    return ( <>
    <Box p={5}>
            <Button onClick={()=>incerement() }  colorScheme='blue'>Plus</Button><br/>


        {count}
        <br/>
       
             <Button onClick={()=>decerement()} colorScheme='blue'>Minus</Button>
             
        <br/>
       
             <Button onClick={()=>reset()} colorScheme='red'>RESET</Button>
             </Box>
        </>
    )}



export default Counter