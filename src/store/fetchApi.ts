export default function fetchApi(url: string) {
    return fetch(url, {mode: "no-cors"})
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
        })
        .catch((e) => console.log(e))
        .finally(() => console.log("DONE"))
}