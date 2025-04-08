async function fetcher(method, url, data) {
    const options = {
        method,
        headers: {},
    };

    // If there's data, send it as JSON
    if (data && method !== "GET" && method !== "DELETE") {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(data);
    }

    //Add access token to headers if available
    const token = localStorage.getItem("accessToken");
    if (token) {
        options.headers["Authorization"] = `Bearer ${token}`;
    }

    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (err) {
        console.error("Request error:", err);
        throw err;
    }
}


export const get = (url) => fetcher("GET", url);
export const post = (url, data) => fetcher("POST", url, data);
export const put = (url, data) => fetcher("PUT", url, data);
export const del = (url) => fetcher("DELETE", url);

