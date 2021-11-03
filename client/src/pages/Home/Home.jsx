import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import CardSkelton from "../../components/Skelton/skelton";
import { notification } from "antd";

import { UserOutlined, MailOutlined } from "@ant-design/icons";
import { logout_user } from "../../utils/auth.util";

const Home = () => {
    const [loading, setloading] = useState(true);
    const [element, setElement] = React.useState(null);
    const [data, setdata] = useState([]);
    const [page, setpage] = useState(1);

    // Load more
    const loadMoreData = useCallback(() => {
        const currentPage = page + 1;

        axios
            .get("https://randomuser.me/api/", {
                params: {
                    page: currentPage,
                    results: 10,
                    seed: "abc",
                },
            })
            .then((res) => {
                if (res && res.data && res.data.results && res.data.results.length > 0) {
                    const newData = res.data.results;
                    const currentData = [...data, ...newData];
                    setdata(currentData);
                } else {
                    setloading(false);
                    notification.open({
                        message: "No data Found",
                        description: "Please try again",
                        type: "error",
                    });
                }
            });

        setpage(currentPage);
    }, [data, page]);

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
            { threshold: 0.3 }
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

    const handleLogout = () => {
        logout_user();
    };

    return (
        <>
            <div className="lr-pad-d lr-pad-m">
                <div
                    className="f-d f-h-c f-v-c logout-btn c-pointer body-regular"
                    onClick={handleLogout}
                >
                    Logout
                </div>
                <ul>
                    {data.map((row) => (
                        <li key={row.email} className="">
                            <div className="card f-d f-v-c f-h-sb ">
                                <div className="card-profile f-d f-h-c f-v-c">
                                    <div
                                        className="circle-100 bg-image-full"
                                        style={{
                                            backgroundImage: "url(" + row.picture.medium + ")",
                                        }}
                                    ></div>
                                </div>
                                <div className="card-body">
                                    <div className="name f-d f-v-c">
                                        <UserOutlined className="mr-8" style={{ fontSize: 18 }} />
                                        <div className="body-regular">
                                            {row.name.title +
                                                " " +
                                                row.name.first +
                                                " " +
                                                row.name.last}
                                        </div>
                                    </div>
                                    <div className="email mt-8 f-d f-v-c">
                                        <MailOutlined className="mr-8" />
                                        <div className="body-regular">{row.email}</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}

                    {loading && (
                        <li ref={setElement} className="list-cards">
                            <CardSkelton />
                            <CardSkelton />
                        </li>
                    )}
                </ul>
            </div>
            <style jsx={"true"}>{`
                .card {
                    min-height: 200px;
                    width: 100%;
                    border-radius: var(--peaky-br-4);
                    box-shadow: var(--peaky-shadow-high);
                    padding: 1rem;
                    margin-bottom: 32px;
                }

                .logout-btn {
                    width: 160px;
                    height: 54px;
                    border-radius: var(--peaky-br-4);
                    background-color: var(--carbon);
                    color: var(--dove);
                    margin-left: auto;
                    margin-bottom: 32px;
                }

                .card:hover {
                    background-color: var(--smoke);
                    transition: all 0.2s;
                }

                .card .card-profile {
                    width: 30%;
                    height: 100%;
                }

                .card .card-profile .circle-100 {
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                }

                .card .card-body {
                    width: 70%;
                    word-wrap: break-word;
                }

                .email {
                    word-break: break-word;
                }

                .mt-16 {
                    margin-top: 16px;
                }

                .mt-8 {
                    margin-top: 8px;
                }

                .mr-8 {
                    margin-right: 8px;
                }

                ul {
                    margin: 0 auto;
                    max-width: 600px;
                    list-style: none;
                }

                li {
                    min-height: 100px;
                }

                button {
                    border-radius: 0px;
                    background: #bbded6;
                    border: none;
                    cursor: pointer;
                    padding: 1rem;
                }

                @media only screen and (max-device-width: 760px) {
                    .card {
                        padding: 8px;
                        gap: 16px;
                    }

                    .card .card-profile .circle-100 {
                        width: 64px;
                        height: 64px;
                    }
                }
            `}</style>
        </>
    );
};

export default Home;
