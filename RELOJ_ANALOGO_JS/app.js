const body = document.querySelector("body"),
    hourHand = document.querySelector(".hour"),
    minuteHand = document.querySelector(".minute"),
    secondHand = document.querySelector(".second"),
    modeSwitch = document.querySelector(".mode-switch");


//chequear si mode está puesto en "Dark Mode" en el localStorage
if(localStorage.getItem("mode") === "Dark Mode"){
    //Agregar dark class al body y colocar el texto de modeSwitch en Light Mode
    body.classList.add("dark");
    modeSwitch.textContent ="Light Mode";
}

//addEventlistener para el switch mode:
modeSwitch.addEventListener("click", () => {
    //Toggle la clase dark en el body
    body.classList.toggle("dark");
    //chequear si la clase dark está presente en el body:
    const isDarkMode = body.classList.contains("dark");
    console.log(isDarkMode);
    //Cambiar el color del modeswitch si la clase dark está presente
    modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
    //Guardar el Local Storage
    localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
})




updatetime = () => {
   //console.log("Time"); 
   //Obtener el tiempo para calcular los grados para las manecillas
   let date = new Date(),
    secToDeg = (date.getSeconds() / 60) * 360,
    minToDeg = (date.getMinutes() / 60) * 360,
    hourToDeg = (date.getHours() / 12) * 360;

    //Rotar las manecillas del reloj respecto current time:
    secondHand.style.transform = `rotate(${secToDeg}deg)`;
    minuteHand.style.transform = `rotate(${minToDeg}deg)`;
    hourHand.style.transform = `rotate(${hourToDeg}deg)`;
}

//Llamar a la función updateTime para actualizar segundos
setInterval(updatetime, 1000);