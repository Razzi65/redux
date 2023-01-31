import { useSelector } from "react-redux"

const useCounter = () => {

    const count = useSelector((store)=> store.counterSlice.count)
        console.log(count);
        

    return {
        count
    }
}

export default useCounter