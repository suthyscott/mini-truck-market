import "./css/App.css"
import Header from "./elements/Header"
import Sidebar from "./elements/Sidebar"
import Home from "./pages/Home"
import Details from "./pages/Details"
import Auth from "./pages/Auth"
import Profile from "./pages/Profile"
//AddTruck and MyTrucks are both children of and rendered simultaneously in Profile
import { Routes, Route } from "react-router-dom"

function App() {
    return (
        <div>
            <Header />
            <main id="main-container">
                <Sidebar />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/details/:id" element={<Details />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </main>
        </div>
    )
}

export default App
