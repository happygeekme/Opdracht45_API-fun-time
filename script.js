const jokeBox = document.querySelector("#jokeBox");
const grapKnop = document.querySelector("#grapKnop");

showJoke = async() => {
    jokeBox.innerHTML= "";
    const res = await getRandomDadJoke();
    const joke = res.joke;
    const node = document.createTextNode(joke);
    return jokeBox.appendChild(node);
}

grapKnop.addEventListener("click", showJoke)
