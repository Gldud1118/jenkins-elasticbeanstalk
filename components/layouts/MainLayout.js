import React from "react";
import Header from "../Header"

const MainLayout = (props) => {
    return (
        <>
            <Header {...props}/>
            <div>
                {props.children}
            </div>
        </>
         
    )
}
    
    



export default MainLayout;
