import { useState, useEffect } from "react"

const Home = () => {
    const [trucks, setTrucks] = useState([])

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
