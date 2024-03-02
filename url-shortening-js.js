const hamburger = document.querySelector(".hamburger");
const infoContainer = document.querySelector(".info-container");
const input = document.getElementById("input");
const errorContainer = document.querySelector(".error-container");
const submit = document.getElementById("submit");



//check and shorten input link
const shortenUrl = async () => {
    checkInput();
    try {
        const inputValue = input.value.trim();
        const apiUrl = 'https://cleanuri.com/api/v1/shorten';
        const requestBody = new URLSearchParams({ url: inputValue });
        let res = await fetch(apiUrl, {
            method: 'POST',
            body: requestBody,
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
        const data = await res.json();
        console.log(data);
        const shortenedUrl = data.result_url;
    } catch(err) {
        console.log(err);
        alert("Invalid Link Input");
    }
}

const checkInput = () => {
    input.value == "" ?  errorContainer.classList.add("invalid") : errorContainer.classList.remove("invalid");
}

submit.addEventListener("click", shortenUrl);

//hamburger dropdown function
hamburger.addEventListener("click", () => {
    infoContainer.classList.toggle("active");
})

document.addEventListener("click", e => {
    const isHamburger = e.target.closest(".hamburger");
    if (!isHamburger && e.target.closest(".info-container") == null){
        infoContainer.classList.remove("active");
    }
})