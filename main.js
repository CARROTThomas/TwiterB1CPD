// const
const heure = document.querySelector(".heures")
const minute = document.querySelector(".minutes")
//



//Donnée heure Tel
setInterval(()=>{
    const now = new Date()

    hours = now.getHours()
    heure.innerHTML = hours

    minutes = now.getMinutes()
    minute.innerHTML = minutes

},1000)


