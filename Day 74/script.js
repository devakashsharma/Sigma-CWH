let jsBtn = document.getElementById("btn");

jsBtn.addEventListener("click", ()=> {
    // alert("Hello there")
    document.querySelector(".box").innerHTML = "English: I am a Box";
})

jsBtn.addEventListener("contextmenu", ()=> {
    document.querySelector(".box").innerHTML = "English: I am a Box";
})

document.addEventListener("keydown", (e) => {
    console.log(e)
})