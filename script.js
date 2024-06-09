alert("Welcome to my form website, Stay tuned for more updates :D");

/**@type {HTMLButtonElement} */
const submit_btn = document.querySelector("#submit_btn")

function onSubmit() {
    alert("Congratulations, you have submitted your info! Now you are hacked 😎(jk)")
}

submit_btn.onclick = onSubmit;