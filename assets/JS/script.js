// -----------------------------------------------
// ACCESS HTML ELEMENTS
// -----------------------------------------------

// INTRO LOGO
const introLogo = document.querySelector("[data-intro-logo]");
// PLAY BTN
const playContainer = document.querySelector("[data-play]");
const playBtn = document.querySelector("[data-play-btn]");
// SOUND
const themeSong = new Audio("assets/sound Effect/theme-song.mp3");
const shack = new Audio("/sound/shack.mp3");
const optionclick = new Audio("/sound/click.mp3");
// GAME CONTAINER
const gameContainer = document.querySelector("[data-game-container]");
// MAIN GAME ELEMENTS
// -- RESULT IMG --
const userResult = document.querySelector("[data-user-result]");
const userResultImg = document.querySelector(".user-result img")
const comResult = document.querySelector("[data-cpu-result]");
const comResultImg = document.querySelector(".cpu-result img")
// -- POINT ELEMENTS --
const userPoint = document.querySelector("[data-user-point]");
const comPoint = document.querySelector("[data-cpu-point]");
// -- RESULT TEXT ELEMENT --
const resultText = document.querySelector("[data-result-title]");
// -- OPTIONS BUTTON -- 
const options = document.querySelectorAll("[data-option-btn]");
const optionList = document.querySelector("[data-option-list]");
// EMOJI 
const emojiBox = document.querySelector("[data-emoji-box]");
const emoji = document.querySelector("[data-emoji]");
// VICTORY BOX
const victoryBox = document.querySelector("[data-victory]");
const victorytitle = document.querySelector("[data-victory-title]");
const victorysubtitle = document.querySelector("[data-victory-subtitle]");
const victoryBtn = document.querySelector("[data-replay-btn]");
// OVERLAY
const overlay = document.querySelector("[data-overlay]");
// THEME SECTION
const themeMenuBtn = document.querySelectorAll("[data-theme-btn]");
const themeMenu = document.querySelector("[data-theme-menu]");
const colors = document.querySelectorAll("[data-color-btn]");




// -----------------------------------------------
// CUSTOM VARIABLE
// -----------------------------------------------

// TO STORE 'R', 'P', 'S' VALUE
let user, com;
// IMAGE SRC ADDRESS ARRAY
let imgSrc = ["./assets/images/r-rock.png", "./assets/images/r-paper.png", "./assets/images/r-scissor.png"]
// POINT VARIABLE
let userPointValue = 0;
let comPointValue = 0;
let matchTie = 0;




// -----------------------------------------------
// INTRO LOGO
// -----------------------------------------------

// FOR LOGO FADE EFFECT
setTimeout(() => {
    introLogo.classList.add("active");
}, 500);
// MOVE LOGO ON TOP
setTimeout(() => {
    introLogo.classList.add("header");
}, 3000);




// -----------------------------------------------
// PLAY SECTION 
// -----------------------------------------------

// PLAY BUTTON SHOW
setTimeout(() => {
    playContainer.classList.add("active");
}, 3500);

// PLAY BTN ADD EVENT
playBtn.addEventListener("click", () => {
    playBtn.classList.add("active");
    
    // RESET
    playContainer.classList.remove("active");
    introLogo.classList.remove("active");
    
    // SHOW MAIN GAME MENU SECTION
    gameContainer.classList.add("show");
});




// -----------------------------------------------
// MAIN GAME CODE
// -----------------------------------------------

// RANDOM NUMBER GENERATOR FUNCTION
// -----------------------------------------------
const randomNo = () => {
    
    // GENERATE RANDOME NUMNER 0 - 2
    const randomNumber = Math.floor(Math.random() * 3);
    
    // ADD RPS VALUE BASE ON NUMBER
    if (randomNumber == 0) {
        com = 'R';
    } else if (randomNumber == 1) {
        com = 'P';
    } else if (randomNumber == 2) {
        com = 'S';
    }
    
};


// ACCESS EACH OPTION BUTTON AND INDEX
// -----------------------------------------------
options.forEach((option, index) => {
    
    // ADD EVENT ON BTN
    option.addEventListener("click", () => {
        
        // ADD RPS VALUE BASE ON INDEX OF BTN
        if (index == 0) {
            user = 'R';
        } else if (index == 1) {
            user = 'P';
        } else if (index == 2) {
            user = 'S';
        }
        
        // CLICK SOUND EFFECT PLAY
        optionclick.play();

        // CALL FUNCTION
        setTimeout(() => {
            
            // PLAY SHACK SOUND EFFECT
            shack.play();
            
            // CALL RANDOM FUNCTION
            randomNo();
            
            // CALL MAIN GAME FUNCTION AND PASS USER , COM , AND INDEX VALUE
            GameFunction(user, com, index);
            
        }, 200);


        themeMenu.classList.remove("show");


    });
    

});



// GAME FUNCTION TO PRINT RESULT 
// -----------------------------------------------
const GameFunction = (user, com, index2) => {
    
    // ADD DEFAULT IMG 
    userResultImg.src = imgSrc[0];
    comResultImg.src = imgSrc[0];
    
    // ACTIVE HAND SHACK EFFECT
    userResult.classList.add("active");
    comResult.classList.add("active");
    
    // ADD WAITING TEXT ON RESULT TEXT 
    resultText.innerHTML = 'Huh..'
    
    // ACTIVE OPTION EFFECT
    options[index2].classList.add("active");
    optionList.classList.add("active");
    
    
    setTimeout(() => {
        
        
        // DEACTIVE HAND SHACK EFFECT
        userResult.classList.remove("active");
        comResult.classList.remove("active");
        
        // DEACTIVE OPTION EFFECT
        options[index2].classList.remove("active");
        optionList.classList.remove("active");

        // CHECK CONDITION TO PRINT TRUE RESULT
        if (user == com) {

            // INCREMENT MATCHTIE VALUE
            matchTie++;

            // PRINT IMG ON TIE CONDITION
            if (user == 'R' && com == 'R') {
                userResultImg.src = imgSrc[0];
                comResultImg.src = imgSrc[0];
            } else if (user == 'P' && com == 'P') {
                userResultImg.src = imgSrc[1];
                comResultImg.src = imgSrc[1];
            } else if (user == 'S' && com == 'S') {
                userResultImg.src = imgSrc[2];
                comResultImg.src = imgSrc[2];
            }
            
            // PRINT TIE RESULT
            resultText.innerHTML = 'Match Tie!';
            
        }
        else if (user == 'R') {
            
            // PRINT IMG
            userResultImg.src = imgSrc[0];
            
            if (com == 'P') {
                
                // PRINT TEXT
                resultText.innerHTML = 'Com get a point'
                
                // PRINT IMG
                comResultImg.src = imgSrc[1];
                
                // IF COMPUTER WON INCREMET VALUE BY 1
                comPointValue++;
                comPoint.innerHTML = comPointValue;
                
            }
            else if (com == 'S') {
                
                // PRINT TEXT
                resultText.innerHTML = 'You get a point'
                
                // PRINT IMG
                comResultImg.src = imgSrc[2];
                
                // IF USER WON INCREMET VALUE BY 1
                userPointValue++;
                userPoint.innerHTML = userPointValue;
                
            }
            
        }
        else if (user == 'P') {
            
            // PRINT IMG
            userResultImg.src = imgSrc[1];
            
            if (com == 'S') {
                
                // PRINT TEXT
                resultText.innerHTML = 'Com get a point'
                
                // PRINT IMG
                comResultImg.src = imgSrc[2];
                
                // IF COMPUTER WON INCREMET VALUE BY 1
                comPointValue++;
                comPoint.innerHTML = comPointValue;
                
            }
            else if (com == 'R') {
                
                // PRINT TEXT
                resultText.innerHTML = 'You get a point'
                
                // PRINT IMG
                comResultImg.src = imgSrc[0];
                
                // IF USER WON INCREMET VALUE BY 1
                userPointValue++;
                userPoint.innerHTML = userPointValue;
                
            }
            
        }
        else if (user == 'S') {
            
            // PRINT IMG
            userResultImg.src = imgSrc[2];
            
            if (com == 'R') {
                
                // PRINT TEXT
                resultText.innerHTML = 'Com get a point'
                
                // PRINT IMG
                comResultImg.src = imgSrc[0];
                
                // IF COMPUTER WON INCREMET VALUE BY 1
                comPointValue++;
                comPoint.innerHTML = comPointValue;
                
            }
            else if (com == 'P') {
                
                // PRINT TEXT
                resultText.innerHTML = 'You get a point'
                
                // PRINT IMG
                comResultImg.src = imgSrc[1];
                
                // IF USER WON INCREMET VALUE BY 1
                userPointValue++;
                userPoint.innerHTML = userPointValue;
                
            }
            
        }
        
        // PRINT IF COMPUTER WIN
        if (comPointValue == 10) {
            
            // TITLE
            victorytitle.innerHTML = "😓";
            victorysubtitle.innerHTML = "Bad!<br>You Lose";
            victoryBtn.innerHTML = "Try Again";
            
            // OVERLAY EFFECT ACTIVE
            overlay.classList.add("active");
            
            // SHOW CONTAINER
            victoryBox.classList.add("show");
        }
        // PRINT IF USER WIN
        if (userPointValue == 10) {
            
            // TITLE
            victorytitle.innerHTML = "🙂";
            victorysubtitle.innerHTML = "Good!<br>You Won";
            victoryBtn.innerHTML = "Play Again";
            
            // OVERLAY EFFECT ACTIVE
            overlay.classList.add("active");

            // SHOW CONTAINER
            victoryBox.classList.add("show");
        }
        
        // BTN 
        victoryBtn.addEventListener("click", ()=> {
            
            // OVERLAY EFFECT DEACTIVE
            overlay.classList.remove("active");
            
            
            // HIDE CONTAINER
            victoryBox.classList.remove("show");

            // RESET VALUE
            comPointValue = 0;
            comPoint.innerHTML = comPointValue;
            
            // RESET VALUE
            userPointValue = 0;
            userPoint.innerHTML = userPointValue;
            
            // RESET VALUE
            matchTie = 0;
        });
        
    }, 2000);
    
    

}



// ----------------------------------------------------
// THEME SECTION
// ----------------------------------------------------

// THEME MENU OPEN-CLOSE BTN 
for (let i = 0; i < themeMenuBtn.length; i++) {
    themeMenuBtn[i].addEventListener("click", ()=> {
        themeMenu.classList.toggle("show");
    });
}

// CHANGE COLOR THEME OF GAME
colors.forEach((color, index) => {
    
    // COLOR BTN
    color.addEventListener("click", ()=>{
        
        if (index == 0) {
            document.documentElement.style.setProperty('--color', '#8233ff');
        }
        else if (index == 1) {
            document.documentElement.style.setProperty('--color', '#ff337d');
        }
        else if (index == 2) {
            document.documentElement.style.setProperty('--color', '#ffc033');
        }
        else if (index == 3) {
            document.documentElement.style.setProperty('--color', '#12db50');
        }
        else if (index == 4) {
            document.documentElement.style.setProperty('--color', '#ff33f1');
        }
        
    });
});