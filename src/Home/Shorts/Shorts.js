import React, { useEffect, useState } from 'react';
import Short from './Short';

const Shorts = () => {
    const [shorts, setShorts] = useState([])
    useEffect(()=>{
        fetch('shorts.json')
        .then(res => res.json())
        .then(data => setShorts(data))
    },[])
    return (
        <div className={`flex p-6 mx-5 gap-8 md:border mb-16 mt-5`}>
            {
                shorts.map((short,i) => <Short key={i} short={short}></Short> )
            }
        </div>
    );
};

export default Shorts;