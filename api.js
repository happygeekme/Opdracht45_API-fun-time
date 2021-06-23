// async function getJoke () { 
//     const response = await fetch("https://icanhazdadjoke.com/");
//     const json = await response.json();
//     console.log(json);
// // }

// async function getJoke () {
//     fetch("https://icanhazdadjoke.com/", {
//     method: "Get",
//     headers: {"content-type": "application/json"},
//     headers: {"User-Agent": "https://github.com/happygeekme"}
// })
// .then(response => await response.json())
// .then(json => console.log(json))
// .catch(err => console.log(err))
// }

const API_URL = "https://icanhazdadjoke.com/";
const API_PIC = "https://icanhazdadjoke.com/j/R7UfaahVfFd.png"

const getRandomDadJoke = async () => {
    const res = await fetch(API_URL, {
        method: "GET",
        headers: {
            'accept': 'application/json'
        },
    })
    const randomJoke = await res.json();
    return randomJoke;
}

console.log(getRandomDadJoke());



const getPictureJoke = async () => {
    const res = await fetch(API_PIC, {
        method: "GET",
        headers: {
            'accept': 'application/json'
        },
    })
    const plaatje = await res.json();
    return plaatje;
}

console.log(getPictureJoke())

// ik krijg het plaatje niet aan de praat. Ben heeft er ook naar gekeken
// en kwam er ook niet uit. 
    