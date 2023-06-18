import { createContext } from "react"
import { useContext } from "react"

const AuthContext = createContext()

function AuthProvider () {


    return ()
}
export default AuthProvider

export const useAuth = () =>{
    return useContext(AuthContext)
}