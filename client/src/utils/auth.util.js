import { __deleteCookie, __getCookie, __setCookie } from "./cookie.util";
import { getSearchParam } from "./common.util";
import keys from "../config/keys";
import { G_URL } from "../constants/constants";
import CryptoJS from "crypto-js";

const login_user = (data) => {
    let userToken = data.token;
    if (userToken !== undefined) {
        __setCookie(keys.cookiePrefix + "ut", userToken, 1, "month");
    }
};

const check_login = () => {
    const token_cookie = __getCookie(keys.cookiePrefix + "ut");
    return (
        token_cookie.cookieExists &&
        token_cookie.cookieValue !== undefined &&
        token_cookie.cookieValue !== null
    );
};

const logout_user = () => {
    let cookies = document.cookie.split(";");
    cookies.map((cookie) => __deleteCookie(cookie.split("=")[0]));
    localStorage.removeItem("Nocookie");
    // Clear Storage
    localStorage.clear();
    sessionStorage.clear();
    // Get rurl if its available
    let rurl = getSearchParam('rurl');
    rurl = rurl !== undefined && rurl !== null ? rurl : '';
    // Clear learning platform cookie
    window.location = G_URL + `login?rurl=${rurl}`;
};

const encHexSalt = (content) => {
    let encContent = [];
    let content_B64 = CryptoJS.AES.encrypt(content, "BSLDFS");
    encContent.hex = content_B64.ciphertext.toString();
    encContent.salt = content_B64.salt.toString();
    return encContent;
};

export {
    login_user,
    check_login,
    logout_user,
    encHexSalt
};
