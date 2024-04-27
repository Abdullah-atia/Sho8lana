import { createContext, useEffect, useState } from "react";

const AdminContext = createContext()

function  AdminProvider({children}){
    const [isAdmin, setIsAdmin] = useState(false)
    useEffect(() =>{
        if(localStorage.getItem("Admin") !== null)
        setIsAdmin(true)
    }
,[])
    

    return (
        <AdminContext.Provider value={{
            isAdmin,
            setIsAdmin,
        }} >
            {children}
        </AdminContext.Provider>
    )

}
// function useAdmin() {
//     const context = useContext(AdminContext);
//     if (context === undefined)
//       throw new Error("AdminContext was used outside the CitiesProvider");
//     return context;
//   }
//   export {useAdmin, AdminProvider}
export {AdminContext, AdminProvider}