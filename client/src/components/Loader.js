import React from 'react';
import { Spin } from 'antd';

const Loader = () => {
    return (
        <div className="loading-container f-d f-v-c f-h-c c-height">
            <Spin />
        </div>
    );
}

export default Loader;
