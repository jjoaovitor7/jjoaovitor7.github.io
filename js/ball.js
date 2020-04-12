let context; let vel=8;
let dx=3; let dy=3;
let y=1; let x=10;

function ball(){
    context=canvas.getContext('2d');
    context.clearRect(0, 0, 400, 800);

    context.beginPath();
    context.fillStyle="#000"; //cor do círculo
    context.arc(x, y, 10, 0, Math.PI * 2, true); //criando o círculo
    context.closePath();

    context.fill();

    if(x < 0 || x > 800){
        dx = -dx;
    }

    if(y < 0 || y > 400){
        dy = -dy;
    }
    x +=  dx;
    y +=  dy;

}

setInterval(ball, vel);
