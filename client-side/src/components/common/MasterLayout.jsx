import React from 'react';
import Header from "./Header.jsx";
import {Toaster} from "react-hot-toast";

const MasterLayout = (props) => {
    return (
        <div>
            <Header siteContent={props.children}/>
            <Toaster position="bottom-center"/>
        </div>
    );
};

export default MasterLayout;