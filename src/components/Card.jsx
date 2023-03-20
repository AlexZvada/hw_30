import { useContext } from "react"
import { CountContext } from "../App"
import Button from "./Button"


const Card = () => {
    const { count, setCount } = useContext(CountContext)
    const hadleCountIncrement = () => setCount(count + 1)
    return <div className="card">
        <h3>{count}</h3>
        <Button onClick={hadleCountIncrement}>Click</Button>
    </div>
}

export default Card