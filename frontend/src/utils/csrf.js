export const crsfFetch = async (url, options = {}) => {
    options.method ||= "GET";
    options.headers ||= {};

    if (options.method.toUpperCase() !== "GET") {
        options.headers["X-CSRF-Token"] = sessionStorage.getItem("csrfToken");
        if (!(options.body instanceof FormData)) {
            options.headers["Content-Type"] = "application/json";
        }
    }

    const res = await fetch(url, options);
    return res;
};