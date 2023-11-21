class Request {

    // async get(url){
    //     const result = await fetch(url);
    //     return result.json();

    // }

    get = (url) => {
        return fetch(url)
        .then(res => res.json())
    }
    // TODO: methods to handle requests to API
}

export default Request;
