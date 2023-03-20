import { useContext } from "react"
import { CountContext } from "../App"


const Card = () => {
    const { count, setCount } = useContext(CountContext)
    return <div className="card">
        <h3>{count}</h3>
        <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
}

export default Card