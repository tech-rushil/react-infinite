import React from 'react';

const UnAuthorized = () => {
    return (
        <>
            <div className="unauthorized-container f-d f-vt f-v-c f-h-c c-height">
                <div className="title">403</div>
                <div className="desc">Sorry, you are not authorized to access this page.</div>
                <a href="/" className="back-home-btn f-d f-v-c">Back Home</a>
            </div>

            <style jsx={'true'}>
                {`
                .unauthorized-container .title {
                    font-size: 30px;
                    font-weight: 900;
                }

                .unauthorized-container .desc {
                    font-size: 18px;
                }

                .unauthorized-container .back-home-btn {
                    height: 64px;
                    padding: 0 2rem;
                    margin-top: 2rem;
                    color: var(--dove);
                    background: var(--carbon);
                    border-radius: 4px;
                    box-shadow: var(--peaky-shadow-none);
                    transition: all 0.2s;
                }

                .unauthorized-container .back-home-btn:hover {
                    box-shadow: var(--peaky-shadow-high);
                }
                `}
            </style>
        </>
    );
}

export default UnAuthorized;
