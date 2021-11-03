import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <>
                <div
                    className="hero-img team-banner bg-image"
                    style={{
                        backgroundImage: `url("https://storage.googleapis.com/virtusbox/welcome-pirate.svg")`
                    }}
                >
                </div>

                <style jsx={'true'}>
                    {`
                    #root {
                        margin: 0;
                        background: #FFD15C;
                    }

                    .hero-img {
                        width: 60vw;
                        height: 100vh;
                        margin: 0 auto;
                    }

                    .hero-img::after {
                        content: "";
                        width: 100%;
                        height: 100%;
                        background: #FFD15C;
                        position: absolute;
                        mix-blend-mode: darken;
                    }
                    `}
                </style>
            </>
        );
    }
}

export default Home;
