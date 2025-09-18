import React from 'react';
import { useNavigate } from 'react-router-dom';

const Support = () => {
    const navigate=useNavigate();

    function backHandler(){
        navigate(-1)
    }
    return (
        <div>
            This is Support Page
            <div>
                <button onClick={backHandler}>Back</button>
            </div>
        </div>
    );
}

export default Support;
