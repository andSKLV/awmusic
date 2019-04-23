const getUrlWithSize = (url,size) => {
    return url.replace('{w}',size).replace('{h}',size);
}
export {
    getUrlWithSize,
}