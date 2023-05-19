import { useState, useEffect, useContext } from "react"
import AuthContext from "../store/authContext"

const Home = () => {
    const [trucks, setTrucks] = useState([])
    const authCtx = useContext(AuthContext)

    console.log(authCtx)
    return (
        <div>
            {trucks.length > 0 ? (
                <div>There will be trucks here</div>
            ) : (
                <h2>There are currently no trucks to display</h2>
            )}
        </div>
    )
}

export default Home
