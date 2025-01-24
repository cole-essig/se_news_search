import React from "react";

const CurrentUserContext = React.createContext({
    currentUser: 
    {
        user: "",
        email: ""
    },
})

export {CurrentUserContext}