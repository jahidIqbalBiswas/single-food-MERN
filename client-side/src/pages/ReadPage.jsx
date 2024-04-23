import React from 'react';
import {createFood, fetchFoods} from "../api-services/apis.js";
import ReadList from "../components/ReadList.jsx";
import MasterLayout from "../components/common/MasterLayout.jsx";

const ReadPage = () => {
    return (
        <MasterLayout>
            <ReadList/>
        </MasterLayout>
    );
};

export default ReadPage;