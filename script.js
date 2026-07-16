const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.innerHTML = "☀️";
        localStorage.setItem("theme", "dark");
    }
    else{
        themeBtn.innerHTML = "🌙";
        localStorage.setItem("theme", "light");
    }

});


// Remember theme

if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark");
    themeBtn.innerHTML = "☀️";

}
