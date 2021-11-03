import React, { useState, useEffect, useRef, useCallback } from "react";

const allData = new Array(50).fill(0).map((_val, i) => i + 1);

const Home = () => {
    const [loading, setloading] = useState(false);
    const [element, setElement] = React.useState(null);
    const [data, setdata] = useState(allData.slice(0, 10));
    const [page, setpage] = useState(1);

    // Load more
    const loadMoreData = useCallback(() => {
        const currentPage = page + 1;
        const currentData = [...data, ...allData.slice(data.length, currentPage * 10)];
        setdata(currentData);
        setpage(currentPage);
    }, []);

    const loader = React.useRef(loadMoreData);

    useEffect(() => {
        loader.current = loadMoreData;
    }, [loadMoreData]);

    const observer = useRef(
        new IntersectionObserver(
            (entries) => {
                const first = entries[0];
                if (first.isIntersecting) {
                    console.log("heelo instersecting");
                    // loadMoreData();
                    loader.current();
                }
            },
            { threshold: 1 }
        )
    );

    // Initialize Observer
    useEffect(() => {
        const currentElement = element;
        const currentObserver = observer.current;

        if (currentElement) {
            currentObserver.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                currentObserver.unobserve(currentElement);
            }
        };
    }, [element]);

    return (
        <>
            <div className="lr-pad-d lr-pad-m">
                <ul>
                    {data.map((row) => (
                        <li key={row} style={{ background: "orange" }}>
                            {row}
                        </li>
                    ))}
                    {loading && <li>Loading...</li>}
                    {!loading && (
                        <li ref={setElement} style={{ background: "red" }}>
                            LOAD MORE
                        </li>
                    )}
                </ul>
            </div>
            <style jsx={"true"}>{`
                body {
                    font-size: 16px;
                    padding: 1rem;
                }

                ul {
                    margin: 0 auto;
                    max-width: 600px;
                    list-style: none;
                }

                li {
                    padding: 1rem;
                    margin: 1rem;
                    min-height: 100px;
                }

                button {
                    border-radius: 0px;
                    background: #bbded6;
                    border: none;
                    cursor: pointer;
                    padding: 1rem;
                }

                span {
                    display: block;
                    padding: 1rem 0px;
                }
            `}</style>
        </>
    );
};

export default Home;
