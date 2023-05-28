import React from 'react';
import { useNavigate } from 'react-router-dom';

const Labs = () => {
    const navigate=useNavigate();

    function clickHandler(){
        navigate('/about')
    }
    return (
        <div>
            This is Labs Page
            <div>
                <button onClick={clickHandler}>Move to About page</button>
            </div>
        </div>
    );
}

export default Labs;
