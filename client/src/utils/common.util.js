const getSearchParam = (param) => {
    const urlParams = new URLSearchParams(window.location.search);
    let paramValue = urlParams.get(param);
    return paramValue;
};

const getRandomString = (length) => {
    let randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
};

const getTimestamp = () => {
    return parseInt(new Date().getTime() / 1000);
};

export { getSearchParam, getRandomString, getTimestamp };
