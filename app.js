
document.querySelector(".calculate-love").addEventListener("click", function(e){
    const matimatik = Math.floor(Math.random()*100 +1);
    const inputResult = document.querySelector(".input-result");
    const name1 = document.querySelector(".input-name1").value
    const name2 = document.querySelector(".input-name2").value


    inputResult.value = `${name1} and ${name2} you guys are matched ${parseInt(matimatik)} %`;

    const penampakan = document.querySelectorAll(".result");

    if (matimatik >= 50){
        document.querySelector("img").src = "https://i.gifer.com/DDv.gif"
    } else if (matimatik <= 50){
        document.querySelector("img").src = "https://media1.giphy.com/media/mW76PcxGB5vhSQ1sGn/200.gif"
    }
    
    e.preventDefault();
})






