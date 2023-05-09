//these commented out methods make sure that there is an authenticity token present by first doing a get request and then...
//...setting the resutlant token under the key of X-CSRF-Token

// export const restoreCSRF = async ()=>{
//     let res = await csrfFetch('/api/session')
//     storeCSRFToken(res)
//     return res;
// }

// export const storeCSRFToken =(res)=>{
//     const csrfToken = res.headers.get("X-CSRF-Token");
//     if (csrfToken) sessionStorage.setItem("X-CSRF-Token", csrfToken);
// }

const csrfFetch = async (url, options = {}) => {
    options.headers = options.headers || {};
    options.method = options.method || 'GET';
    if (options.method.toUpperCase() !== 'GET'){
        options.headers['Content-Type'] = options.headers['Content-Type'] || 'application/json';
        //this token is the token that is provided by the Rails app (in the application controller)
        //this line causes it to be retrieved from sessionStorage (this sessionStorage can be seen in Google Dev tools)
        options.headers['X-CSRF-Token'] = sessionStorage.getItem('X-CSRF-Token');
    }

    const res = await fetch(url, options);

    if (res.status >= 400) throw res;

    return res;
}

export default csrfFetch;
