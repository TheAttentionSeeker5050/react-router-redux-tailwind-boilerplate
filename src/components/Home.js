import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "../reduxFiles/testSlice"


export default function HomePage() {
    const count = useSelector((state) => state.test.value)
    const dispatch = useDispatch()
    
    return (
        <main>
            <button 
            onClick={() => dispatch(decrement())} 
            aria-label="Decrement value">decrement</button>
            <span>|-{count}-|</span>
            <button 
            aria-label="Increment value" 
            onClick={() => dispatch(increment())}>increment</button>
        </main>
    )
}