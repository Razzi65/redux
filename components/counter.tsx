import { Button, Box } from '@chakra-ui/react'
import useCounter from '@/custom Hooks/useCounter'
import { useDispatch } from 'react-redux'
import { doIncerement } from '@/store/counterSlice'

const Counter = () => {
    const {count, incerement, decerement, reset} = useCounter()
    
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
    )
}

export default Counter