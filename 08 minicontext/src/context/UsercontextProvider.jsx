/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Usercontext from "./Usercontext"

const UsercontextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)

    return(
        <Usercontext.Provider value={{user, setUser}}>
            {children}
        </Usercontext.Provider>
    )
}

export default UsercontextProvider