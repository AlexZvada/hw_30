import { useContext } from "react"
import { CountContext } from "../App"


const Card = () => {
    const { count, setCount } = useContext(CountContext)
    const hadleCountIncrement = () => setCount(count + 1)
    return <div className="card">
        <h3>{count}</h3>
        <button onClick={hadleCountIncrement}>Click</button>
    </div>
}

export default Card