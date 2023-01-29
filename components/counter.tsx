import { Button, Box } from '@chakra-ui/react'
import useCounter from '@/custom Hooks/useCounter'

const Counter = () => {

    const {count} = useCounter()
    
    return ( <>
    <Box p={5}>
            <Button colorScheme='blue'>Plus</Button><br/>

            {count}

            <br/>
       
             <Button colorScheme='blue'>Minus</Button>
             </Box>
        </>
    )
}

export default Counter