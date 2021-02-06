window.onload = () => {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var humans = 7844130000;
    var animalDeaths = 70000000000;

    
    
    ctx.fillStyle = "rgb(100, 0, 100)";
    ctx.fillRect(50, 50, 5, 5);

    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.font = "30px Arial";
    ctx.fillText("Human Population", 10, 40);

    

}
