console.log('connected');

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

function randomInt(min,max){
    return Math.floor(Math.random()*max)+min;
};

function randomDirection(){
    const d = Math.random();
    (d >= 0.5) ? r = 1 : r = -1;
    return r;
};

function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};

resizeCanvas();

function fillCanvas(){
    context.fillStyle='rgba(0,0,0,0.25)'
    context.fillRect(0,0,window.innerWidth,innerHeight);
};

fillCanvas();

function rainDrop(x,y){
    context.fillStyle = '#666';
        context.globalCompositeOperation = 'xor';
    context.beginPath();
    context.arc(x,y,randomInt(2,6),0,Math.PI*2);
    context.fill()
};

function randomX(){
    context.translate(window.innerWidth * Math.random(),0);
};
    let x = 0
    let y = 0
    let d = randomDirection();
    let reset = 0;

function rain(){
    context.save();
    randomX();
    let SI = window.setInterval(()=>{
        
        let rz = randomInt(1,2);
        
        if(reset > rz){
            d = randomDirection();
            rz = randomInt(1,2);
            reset = 0;
        };
        
        if(y > window.innerHeight){
            window.clearInterval(SI);
            console.log('finished');
            x = 0;
            y = randomInt(0, window.innerHeight);
            context.restore();
            rain();
            return;
        };
        
        rainDrop(x,y)
        
        x+=d;
        y+=1;
        reset+=1;

    },'1');
};

function randomDrop(){
    let x = randomInt(0,window.innerWidth);
    let y = randomInt(0,window.innerHeight);
    rainDrop(x,y);
    rainDrop(x+1,y+1);
    rainDrop(x-1,y);
    rainDrop(x-1,y+2);
};

window.setInterval(randomDrop,'500');
rain();
