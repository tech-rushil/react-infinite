import React from 'react';
import { Menu, Dropdown } from 'antd';
import LOGO_BW from '../../assets/brand/virtusbox_bw.svg';
import USER_LOGO from '../../assets/icons/profile.svg';
import { logout_user } from '../../utils/auth.util';

const Header = () => {

    const accountMenu = (
        <Menu>
            <Menu.Item key={'logout'} onClick={() => logout_user()}>Logout</Menu.Item>
        </Menu>
    );

    return (
        <>
            <div id="main-header" className="header-container lr-pad-d lr-pad-m f-d f-v-c f-h-sb">
                <div className="left-container">
                    <div 
                        className={`brand-logo bg-image-full`}
                        style={{backgroundImage: `url(${LOGO_BW})`}}>
                    </div>
                </div>
                <div className="right-container">
                    <Dropdown overlay={accountMenu} placement="bottomRight">
                        <div className="user-menu f-d f-v-c f-h-c">
                            <div 
                                className={`user-logo bg-image-full`}
                                style={{backgroundImage: `url(${USER_LOGO})`}}>
                            </div>
                        </div>
                    </Dropdown>
                </div>
            </div>

            <style jsx={'true'}>
                {`
                .header-container {
                    height: 80px;
                    background: #ffffff;
                    box-shadow: 0px 5px 11px 0px rgba(50, 50, 50, 0);
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    border-bottom: 1px solid var(--snowfall);
                    transition: all 0.2s;
                }

                .header-container .brand-logo {
                    width: 150px;
                    height: 30px;
                }

                .header-container .user-menu {
                    width: 40px;
                    height: 40px;
                    background: var(--smoke-2);
                    border-radius: var(--peaky-br-full);
                    cursor: pointer;
                }

                .header-container .user-logo {
                    width: 20px;
                    height: 20px;
                }
                `}
            </style>
        </>
    );
}

export default Header;
