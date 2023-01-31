import { doIncerement, doDecerement, doReset } from "@/store/counterSlice";
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";

const useCounter = () => {

    const count = useSelector((store)=> store.counterSlice.count)
        console.log(count);
        
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




    return {
        count, dispatch, incerement, decerement, reset
    }
}

export default useCounter