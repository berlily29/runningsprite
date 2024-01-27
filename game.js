//JAVASCRIPT: LUISE GIAN YAMBAO

// BOARD DIVISION

var game = document.getElementById('game');
var x = -10;
var y = -50;
var ninja = document.getElementById('ninja');
var gamefocus = document.getElementById('container');
var pausesplash = document.getElementById('paused');
var scoredashboard = document.getElementById('score');
var obstacle = document.getElementById('obstacle');
var obstacleimg = document.getElementById('enemy');
var gameover = document.getElementById('gameover');
var lastscore = document.getElementById('lastscore');
var reload = document.getElementById('reload');
var title = document.getElementById('title');

// for ALL ITERATION OF ANIMATION
var start;
var pause;
var running;
var jumping;
var sliding;
var keydown = true;
var score = 0;
var scorer;
var obstacleiterate1;
var obstacleiterate2;
var obstacleMaker;
var flapping;
var gameoverstatus = false;


//CHARACTERS / OBSTACLES PROPERTY

var characterTop;
var characterLeft;
var characterRight;
var characterBot;
var characterWidth;

var obstacleTop;
var obstacleLeft;
var obstacleRight;
var obstacleBot;
var obstacleWidth;
var obstacleHeight;

//var property = window.getComputedStyle(game); // FOR EMERGENCY




//RUNNING ANIMATION
async function runanimation() {
    

    pausesplash.style.opacity = '0';
    ninja.style.opacity = '1';
    ninja.style.top = '550px';
    

    start = setInterval(() => {
    var loopbg = x + 'px';
    game.style.backgroundPositionX = loopbg;
    x += -40;

    }, 50);

    var run = 0;
    running  = setInterval(() => {
        var url = 'png/Run__00'+ run +'.png';
        ninja.style.width = '150px';
        ninja.style.height = '150px';
        characterTop = parseFloat(window.getComputedStyle(ninja).getPropertyValue('top').split('p')[0]);
        characterLeft = parseFloat(window.getComputedStyle(ninja).getPropertyValue('left').split('p')[0]);
        characterRight = parseFloat(window.getComputedStyle(ninja).getPropertyValue('right').split('p')[0]);
        characterBot = parseFloat(window.getComputedStyle(ninja).getPropertyValue('bottom').split('p')[0]);
        characterWidth = parseFloat(window.getComputedStyle(ninja).getPropertyValue('width').split('p')[0]);

        ninja.src =url;
        run +=1;
        if (run == 9) run = 0;
    }, 100);

    keydown = false;

}

async function jumpanimation() {

    start = setInterval(() => {
        var loopbg = x + 'px';
        game.style.backgroundPositionX = loopbg;
        x += -40;
        }, 50);

    
    var jump = 0;    
    
    
    jumping  = setInterval(() => {
        var url = 'png/Jump__00'+ jump +'.png';
        ninja.style.width = '150px';
        ninja.style.height = '150px';

        characterTop = parseFloat(window.getComputedStyle(ninja).getPropertyValue('top').split('p')[0]);
        characterLeft = parseFloat(window.getComputedStyle(ninja).getPropertyValue('left').split('p')[0]);
        characterRight = parseFloat(window.getComputedStyle(ninja).getPropertyValue('right').split('p')[0]);
        characterBot = parseFloat(window.getComputedStyle(ninja).getPropertyValue('bottom').split('p')[0]);
        characterWidth = parseFloat(window.getComputedStyle(ninja).getPropertyValue('width').split('p')[0]);

        ninja.src=url;
        jump +=1;
        ninja.style.top = '450px';

        if (jump == 9) {
            clearInterval(jumping)
            clearInterval(running);
            clearInterval(start); 
            keydown = false;
            runanimation();
        };
        }, 100);
        
}

async function slideanimation() {

    start = setInterval(() => {
        var loopbg = x + 'px';
        game.style.backgroundPositionX = loopbg;
        x += -40;
        }, 50);

    
    var slide = 1;    

    sliding  = setInterval(() => {
        var url = 'png/Slide__00'+ slide +'.png';
        ninja.style.width = '150px';
        ninja.style.height = '130px';
        characterTop = parseFloat(window.getComputedStyle(ninja).getPropertyValue('top').split('p')[0]);
        characterLeft = parseFloat(window.getComputedStyle(ninja).getPropertyValue('left').split('p')[0]);
        characterRight = parseFloat(window.getComputedStyle(ninja).getPropertyValue('right').split('p')[0]);
        characterBot = parseFloat(window.getComputedStyle(ninja).getPropertyValue('bottom').split('p')[0]);
        characterWidth = parseFloat(window.getComputedStyle(ninja).getPropertyValue('width').split('p')[0]);

        ninja.src=url;
        slide +=1;
        ninja.style.top = '600px';


        if (slide == 9) {
            clearInterval(sliding);
            clearInterval(running);
            clearInterval(start); 
            keydown = false;
            runanimation();
        };
        }, 100);
        
}

async function paused() {
    game.style.backgroundPositionX = x + 'px';
    var idle = 0;
    pausesplash.style.opacity = '.8';
    ninja.style.opacity = '.6';
    obstacle.style.opacity = '.6';


    pause = setInterval(() => {
            var url = 'png/Idle__00'+ idle +'.png';
            ninja.style.width = '100px';
            ninja.src= url;
            idle += 1;
            if (idle == 9) idle = 0;
    }, 100);

}


function scorecount() {
    scorer = setInterval(()=> {
        score += 1;
    
        scoredashboard.innerHTML = score;
    
    },300);
}

reload.addEventListener('click',()=>{location.reload()})

function controls() {

//pausechecker
var pausecheck = false;

document.addEventListener('keyup', event => {
    if (event.code == 'Enter' && gameoverstatus == false) {
        clearInterval(start);
        clearInterval(pause);
        clearInterval(running);
        clearInterval(jumping);
        clearInterval(sliding);
        clearInterval(scorer);
        clearInterval(obstacleMaker);
        clearInterval(obstacleiterate1);
        clearInterval(obstacleiterate2);
        clearInterval(flapping);
        pausecheck = false;
        title.innerHTML = '';

        scorecount();
        runanimation(); 
        maker();

    }
    else if (event.code == 'KeyP') {

        if (pausecheck == false && keydown == false) {
        clearInterval(start);
        clearInterval(running);
        clearInterval(pause);
        clearInterval(jumping);
        clearInterval(sliding);
        clearInterval(scorer)
        clearInterval(obstacleMaker);
        clearInterval(obstacleiterate1);
        clearInterval(obstacleiterate2);
        clearInterval(flapping);
        pausecheck = true;
        paused();
        }
        else return;
    }


    else if (event.code == 'KeyW') {

        if (pausecheck == false && keydown == false) {
        clearInterval(start);
        clearInterval(running);
        clearInterval(pause);
        clearInterval(jumping);
        clearInterval(sliding);
        keydown = true;
       jumpanimation(); 
    } else return;
    }

    else if (event.code == 'KeyS' ) {

        if (pausecheck == false && keydown == false) {
        clearInterval(start);
        clearInterval(running);
        clearInterval(pause);
        clearInterval(jumping);
        clearInterval(sliding);
        
        keydown = true;
        slideanimation(); 
    } else return;
     }


  }

  );
}

function createobstacle1() {
     obstacleiterate1 =setInterval(()=> {
        y += 40;
        obstacle.style.top = '650px';
        obstacle.style.right = y + 'px';
        var url = `png/trap1.png`;
        obstacleimg.src =url;
        
        obstacleTop = parseFloat(window.getComputedStyle(obstacle).getPropertyValue('top').split('p')[0]);
        obstacleLeft = parseFloat(window.getComputedStyle(obstacle).getPropertyValue('left').split('p')[0]);
        obstacleRight = parseFloat(window.getComputedStyle(obstacle).getPropertyValue('right').split('p')[0]);
        obstacleBot = parseFloat(window.getComputedStyle(obstacle).getPropertyValue('bottom').split('p')[0]);
        obstacleWidth = parseFloat(window.getComputedStyle(obstacle).getPropertyValue('width').split('p')[0]);
        obstacleHeight = parseFloat(window.getComputedStyle(obstacle).getPropertyValue('height').split('p')[0]);


        if(characterRight >= obstacleRight - characterWidth
            && characterRight <= obstacleRight + obstacleWidth 
            && characterBot <=  obstacleBot+obstacleHeight) {

                clearInterval(start);
                clearInterval(running);
                clearInterval(pause);
                clearInterval(jumping);
                clearInterval(sliding);
                clearInterval(scorer)
                clearInterval(obstacleMaker);
                clearInterval(obstacleiterate1);
                clearInterval(obstacleiterate2);
                clearInterval(flapping);
    
                ninja.style.opacity = 0;
                obstacle.style.opacity = 0;
                scoredashboard.innerHTML = '';
                gameover.style.opacity = 1;
                lastscore.innerHTML = score;
                gameoverstatus = true;

        
        }


        if (y>1500) {
            y= -30;
            maker();
        }
    },100)
    
}


function createobstacle2() {
    obstacleiterate2 =setInterval(()=> {
       y += 40;
       obstacle.style.top = '500px';
       obstacle.style.right = y + 'px'; 

       obstacleTop = parseFloat(window.getComputedStyle(obstacle).getPropertyValue('top').split('p')[0]);
        obstacleLeft = parseFloat(window.getComputedStyle(obstacle).getPropertyValue('left').split('p')[0]);
        obstacleRight = parseFloat(window.getComputedStyle(obstacle).getPropertyValue('right').split('p')[0]);
        obstacleBot = parseFloat(window.getComputedStyle(obstacle).getPropertyValue('bottom').split('p')[0]);
        obstacleWidth = parseFloat(window.getComputedStyle(obstacle).getPropertyValue('width').split('p')[0]);
        obstacleHeight = parseFloat(window.getComputedStyle(obstacle).getPropertyValue('height').split('p')[0]);

       if(characterRight >= obstacleRight - characterWidth
        && characterRight <= obstacleRight + obstacleWidth 
        && characterTop <=  obstacleTop+obstacleHeight) {

                clearInterval(start);
                clearInterval(running);
                clearInterval(pause);
                clearInterval(jumping);
                clearInterval(sliding);
                clearInterval(scorer)
                clearInterval(obstacleMaker);
                clearInterval(obstacleiterate1);
                clearInterval(obstacleiterate2);
                clearInterval(flapping);
    
                ninja.style.opacity = 0;
                obstacle.style.opacity = 0;
                scoredashboard.innerHTML = '';
                gameover.style.opacity = 1;
                lastscore.innerHTML = score;
                gameoverstatus = true;



        }

        
       if (y >1500) {
        y = -30;
        maker();
    }

   },100)

       var flap = 1;
       flapping = setInterval(()=> {
        var url = 'png/frame-'+flap+'.png';
        obstacleimg.src = url;
        
        if(flap == 4) {
            flap = 0;
        };

        flap += 1;

       },100)

}


function maker() {

    obstacle.style.opacity = '1';

    var chooser = Math.floor(Math.random() * 2);
    

    if (chooser == 0)  {
    clearInterval(obstacleiterate1);
    clearInterval(obstacleiterate2);
    clearInterval(flapping);
    createobstacle1();
}

    else if (chooser == 1) {
        clearInterval(obstacleiterate1);
        clearInterval(obstacleiterate2);
        clearInterval(flapping);
        createobstacle2();
    }

}

controls();



