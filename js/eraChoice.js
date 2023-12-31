function chooseSpeakNow() {
    console.log("Called Choose Speak Now");
    let folklore_songs = document.querySelectorAll(".song_folklore");
    let rep_songs = document.querySelectorAll(".song_rep");
    let speak_songs = document.querySelectorAll(".song_speak");

    const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;
    if (!isReduced) {

        //use animation to send them out
        for(let index = 0; index < rep_songs.length; index++) {
            rep_songs[index].style.animation = "flyOut 0.6s";
        }
        for(let index = 0; index < folklore_songs.length; index++) {
            folklore_songs[index].style.animation = "flyOut 0.6s";
        }
        for(let index = 0; index < speak_songs.length; index++) {
            speak_songs[index].style.animation = "flyIn 1s";
        }
    }
    else {
        //use animation to send them out
        for(let index = 0; index < rep_songs.length; index++) {
           rep_songs[index].style.animation = "none";
       }
       for(let index = 0; index < folklore_songs.length; index++) {
           speak_songs[index].style.animation = "none";
       }
       for(let index = 0; index < speak_songs.length; index++) {
           folklore_songs[index].style.animation = "none";
       }
   }
    
    //set the display to none after 2 s
    setTimeout( function () {
        console.log("setting display to none");
        for(let index = 0; index < rep_songs.length; index++) {
            rep_songs[index].style.display = "none";
        }
        for(let index = 0; index < folklore_songs.length; index++) {
            folklore_songs[index].style.display = "none";
        }
        for(let index = 0; index < speak_songs.length; index++) {
            speak_songs[index].style.display = "block";
        }
    }, 400)

    //hide snake if visible
     document.querySelector(".snake").style.display = "none";

    if (!isReduced) {
        //add glitter border
        document.querySelector("table").style.display = "revert";
    }

     // set the header and body class
     document.querySelector("header").className = "speak";
     document.querySelector("h1").innerHTML = "Speak Now";
     document.querySelector("body").className = "speak";


}

function chooseReputation() {
    console.log("Called Choose Reputation");
    let folklore_songs = document.querySelectorAll(".song_folklore");
    let speak_songs = document.querySelectorAll(".song_speak");
    let rep_songs = document.querySelectorAll(".song_rep");

    const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

    if (!isReduced) {
        for(let index = 0; index < rep_songs.length; index++) {
            rep_songs[index].style.animation = "flyIn 1s";
        }

        //send out other songs
        for(let index = 0; index < folklore_songs.length; index++) {
            folklore_songs[index].style.animation = "flyOut 0.6s";
        }
        for(let index = 0; index < speak_songs.length; index++) {
            speak_songs[index].style.animation = "flyOut 0.6s";
        }
    }
    else {
        //use animation to send them out
        for(let index = 0; index < rep_songs.length; index++) {
           rep_songs[index].style.animation = "none";
       }
       for(let index = 0; index < folklore_songs.length; index++) {
           speak_songs[index].style.animation = "none";
       }
       for(let index = 0; index < speak_songs.length; index++) {
           folklore_songs[index].style.animation = "none";
       }
   }

    //change visibility of other songs to 0 and send new songs in
    setTimeout(function() {
        for(let index = 0; index < folklore_songs.length; index++) {
            folklore_songs[index].style.display = "none";
        }

        for(let index = 0; index < speak_songs.length; index++) {
            speak_songs[index].style.display = "none";
        }

        for(let index = 0; index < rep_songs.length; index++) {
            rep_songs[index].style.display = "block";
        }
    }, 400)

    // remove glitter border if present
    document.querySelector("table").style.display = "none";

    // set the header and body class
    document.querySelector("header").className = "reputation";
    document.querySelector("h1").innerHTML = "Reputation";
    document.querySelector("body").className = "reputation";

    if (!isReduced) {
        document.querySelector(".snake").style.display = "inline";
    }

    // document.addEventListener('mousemove', function(e) {
    //     destX = e.clientX;
    //     destY = e.clientY;
    //     snakeMove();

    // })

    // function snakeMove() {
    //     let snake = document.querySelector(".snake");
    //     currentX = snake.style.left;
    //     currentY = snake.style.top;
    //     snake.style.transform = 'translate(' + destX + 'px,' + destY + 'px)';
    //     // snake.css('transition', 'transform 1.8s linear');
    // }

}

function snakeMove(e) {
    destX = e.clientX;
    destY = e.clientY;
    // console.log(destX);
    // console.log(destY);
    let snake = document.querySelector(".snake");
    snake.style.transform = 'translate(' + destX + 'px,' + destY + 'px)';
}

function chooseFolklore() {
    console.log("Called Choose Folklore");
    let folklore_songs = document.querySelectorAll(".song_folklore");
    let rep_songs = document.querySelectorAll(".song_rep");
    let speak_songs = document.querySelectorAll(".song_speak");

    const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

    if (!isReduced) {
        //use animation to send them out
        for(let index = 0; index < rep_songs.length; index++) {
            rep_songs[index].style.animation = "flyOut 0.6s";
        }
        for(let index = 0; index < folklore_songs.length; index++) {
            speak_songs[index].style.animation = "flyOut 0.6s";
        }
        for(let index = 0; index < speak_songs.length; index++) {
            folklore_songs[index].style.animation = "flyIn 1s";
        }
    }
    else {
        //use animation to send them out
        for(let index = 0; index < rep_songs.length; index++) {
           rep_songs[index].style.animation = "none";
       }
       for(let index = 0; index < folklore_songs.length; index++) {
           speak_songs[index].style.animation = "none";
       }
       for(let index = 0; index < speak_songs.length; index++) {
           folklore_songs[index].style.animation = "none";
       }
   }
    
    //set the display to none after 2 s
    setTimeout( function () {
        console.log("setting display to none");
        for(let index = 0; index < rep_songs.length; index++) {
            rep_songs[index].style.display = "none";
        }
        for(let index = 0; index < folklore_songs.length; index++) {
            folklore_songs[index].style.display = "block";
        }
        for(let index = 0; index < speak_songs.length; index++) {
            speak_songs[index].style.display = "none";
        }
    }, 400)

    if (!isReduced) {
        //start the bird animation
        document.querySelector(".birdOne").style.animation = "birdFly 4s";

        setTimeout( function() {
            document.querySelector(".birdOne").style.animation = "revert";
        }, 4000)
    }

    //hide snake if visible
    document.querySelector(".snake").style.display = "none";

    // remove glitter border if present
    document.querySelector("table").style.display = "none";

    // set the header and body class
    document.querySelector("header").className = "folklore";
    document.querySelector("h1").innerHTML = "folklore";
    document.querySelector("body").className = "folklore";

}

function chooseAll() {
    console.log("Called Choose All");

    let folklore_songs = document.querySelectorAll(".song_folklore");
    let rep_songs = document.querySelectorAll(".song_rep");
    let speak_songs = document.querySelectorAll(".song_speak");

    const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

    if(!isReduced) {
        //use animation to send them out
        for(let index = 0; index < rep_songs.length; index++) {
            rep_songs[index].style.animation = "flyIn 1s";
        }
        for(let index = 0; index < folklore_songs.length; index++) {
            speak_songs[index].style.animation = "flyIn 1s";
        }
        for(let index = 0; index < speak_songs.length; index++) {
            folklore_songs[index].style.animation = "flyIn 1s";
        }
    }
    else {
         //use animation to send them out
         for(let index = 0; index < rep_songs.length; index++) {
            rep_songs[index].style.animation = "none";
        }
        for(let index = 0; index < folklore_songs.length; index++) {
            speak_songs[index].style.animation = "none";
        }
        for(let index = 0; index < speak_songs.length; index++) {
            folklore_songs[index].style.animation = "none";
        }
    }
    
    //set the display to none after 2 s
    setTimeout( function () {
        console.log("setting display to none");
        for(let index = 0; index < rep_songs.length; index++) {
            rep_songs[index].style.display = "block";
        }
        for(let index = 0; index < folklore_songs.length; index++) {
            folklore_songs[index].style.display = "block";
        }
        for(let index = 0; index < speak_songs.length; index++) {
            speak_songs[index].style.display = "block";
        }
    }, 400)

    // let rep_songs = document.querySelectorAll(".song_rep");
    // for(let index = 0; index < rep_songs.length; index++) {
    //     console.log(index);
    //     console.log(rep_songs[index].innerHTML);
    //     rep_songs[index].style.display = "block";
    // }
    // let folklore_songs = document.querySelectorAll(".song_folklore");
    // for(let index = 0; index < folklore_songs.length; index++) {
    //     folklore_songs[index].style.display = "block";
    // }
    // let speak_songs = document.querySelectorAll(".song_speak");
    // for(let index = 0; index < speak_songs.length; index++) {
    //     speak_songs[index].style.display = "block";
    // }

    //hide snake if visible
    document.querySelector(".snake").style.display = "none";

    // remove glitter border if present
    document.querySelector("table").style.display = "none";

     // set the header and body class
     document.querySelector("header").className = "choose";
     document.querySelector("h1").innerHTML = "The Eras";
     document.querySelector("body").className = "choose";

}