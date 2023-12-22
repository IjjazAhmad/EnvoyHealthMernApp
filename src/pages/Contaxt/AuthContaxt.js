import React, { createContext, useContext, useReducer, useState } from 'react'

const AuthContext = createContext()
const initialState = { isAuth: false , user:{}}
const reducer = (state, { type, payload }) => {
  switch (type) {
    case "LOGIN":
      return {isAuth: true, user: payload.user }
    case "LOGOUT":
      return initialState
    default:
      return state
  }

}
export default function AuthContextProvider(props) {
  const [isAppLoading, setIsAppLoading] = useState(true)
  const [state, dispatch] = useReducer(reducer , initialState)
console.log(state);
 
  return (
    <AuthContext.Provider value={{ ...state, dispatch, isAppLoading }} >
      {props.children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)