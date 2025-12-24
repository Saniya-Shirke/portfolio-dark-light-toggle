let button = document.querySelectorAll('.button1')[0];
let body1 = document.querySelector('body');
let mode = "light";
button.addEventListener("click", () =>  {
     if (mode === "light"){
        mode = "dark";
        button.innerText = "dark";
        body1.classList.add("dark");
        body1.classList.remove("light");
        navbar.style.backgroundColor('#1F2933');
        cont.style.backgroundColor('#111827');
     } else {
        mode = "light";
        button.innerText="light";
        body1.classList.add("light");
        body1.classList.remove("dark");
     }
     console.log(mode);
})