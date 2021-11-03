import React from "react";

const CardSkelton = () => {
    return (
        <div className="card">
            <div className="f-d f-v-c f-h-sb">
                <div className="card-profile f-d f-h-c f-v-c">
                    <div className="skeleton-circle-64 circle-100"></div>
                </div>
                <div className="card-body">
                    <div className="skeleton-heading-24 "></div>
                    <div className="skeleton-paragraph w-60"></div>
                    <div className="skeleton-paragraph w-40 mt-16"></div>
                    <div className="skeleton-paragraph w-40 mt-16"></div>
                </div>
            </div>
        </div>
    );
};

export default CardSkelton;
