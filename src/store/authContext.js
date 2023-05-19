import {useState, createContext, useEffect, useCallback} from 'react'

const AuthContext = createContext({
    token: '',
    userId: null,
    login: () => {},
    logout: () => {}
})

const getLocalData = () => {
    const storedToken = localStorage.getItem('token')
    const storedId = localStorage.getItem('userId')

    return {
        token: storedToken,
        userId: +storedId
    }
}

export const AuthContextProvider = props => {
    const localData = getLocalData()
    console.log(localData)


    const [userId, setUserId] = useState(localData.userId)
    const [token, setToken] = useState(localData.token)

    const login = (token, userId) => {
        setToken(token)
        setUserId(userId)

        localStorage.setItem("token", token)
        localStorage.setItem("userId", userId)
    }

    const logout = () => {

    }

    const contextValue = {
        userId,
        token,
        login,
        logout
    }


    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext