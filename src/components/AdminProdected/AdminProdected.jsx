import { Navigate } from "react-router-dom"
import { AdminContext } from "../../Context/AdminContext"
import { useContext } from "react"

function AdminProdected({children}) {
    
    const {isAdmin} = useContext(AdminContext)
    if (isAdmin === false && localStorage.getItem("Admin") === null){
        return <Navigate to='/' ></Navigate>
    }
    return (
        <>
            {children}
        </>
    )
}

export default AdminProdected
