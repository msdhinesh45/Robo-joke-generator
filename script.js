const chat = document.getElementById("_chat");
const jokeBtn = document.getElementById("jokeBtn");

generateJoke();

jokeBtn.addEventListener("click",generateJoke);

async function generateJoke(){
    jokeBtn.disabled = true;
    
    const message =  createMes("Hey, tell me a joke!");
    appendMessage(message);

    const joke = createMes();
    setElement(joke,"<i class='fa-solid fa-ellipsis>What did the digital clock say to the grandfather Clock? Look, no hand!</i>");

    appendMessage(joke);

    const res = await fetch("https://icanhazdadjoke.com",{
        headers:{
            Accept:"application/json",
        },

    });
    if(res.ok){
        const data = await res.json();
        console.log(data);
        setElement(joke,data.joke);
        jokeBtn.disabled = false;
    }
}

function createMes(content){
    const element = document.createElement("div");
    element.classList.add("message")
    if(content){
        element.classList.add("response");
        setElement(element,content);
    }
    else{
        element.classList.add("joke");
    }
    return element;
}

function setElement(element,content){

    element.innerHTML = content;

}

function appendMessage(element){
    chat.appendChild(element);
}