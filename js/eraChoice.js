function chooseSpeakNow() {
    console.log("Called Choose Speak Now");
    let folklore_songs = document.querySelectorAll(".song_folklore");
    let rep_songs = document.querySelectorAll(".song_rep");
    let speak_songs = document.querySelectorAll(".song_speak");

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

     // set the header and body class
     document.querySelector("header").className = "speak";
     document.querySelector("body").className = "speak";

}

function chooseReputation() {
    console.log("Called Choose Reputation");
    let folklore_songs = document.querySelectorAll(".song_folklore");
    let speak_songs = document.querySelectorAll(".song_speak");
    let rep_songs = document.querySelectorAll(".song_rep");

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

    // set the header and body class
    document.querySelector("header").className = "reputation";
    document.querySelector("body").className = "reputation";

}

function chooseFolklore() {
    console.log("Called Choose Folklore");
    let rep_songs = document.querySelectorAll(".song_rep");
    for(let index = 0; index < rep_songs.length; index++) {
        console.log(index);
        console.log(rep_songs[index].innerHTML);
        rep_songs[index].style.display = "none";
    }
    let folklore_songs = document.querySelectorAll(".song_folklore");
    for(let index = 0; index < folklore_songs.length; index++) {
        folklore_songs[index].style.display = "block";
    }
    let speak_songs = document.querySelectorAll(".song_speak");
    for(let index = 0; index < speak_songs.length; index++) {
        speak_songs[index].style.display = "none";
    }

    // set the header and body class
    document.querySelector("header").className = "folklore";
    document.querySelector("body").className = "folklore";

}

function chooseAll() {
    console.log("Called Choose All");
    let rep_songs = document.querySelectorAll(".song_rep");
    for(let index = 0; index < rep_songs.length; index++) {
        console.log(index);
        console.log(rep_songs[index].innerHTML);
        rep_songs[index].style.display = "block";
    }
    let folklore_songs = document.querySelectorAll(".song_folklore");
    for(let index = 0; index < folklore_songs.length; index++) {
        folklore_songs[index].style.display = "block";
    }
    let speak_songs = document.querySelectorAll(".song_speak");
    for(let index = 0; index < speak_songs.length; index++) {
        speak_songs[index].style.display = "block";
    }

     // set the header and body class
     document.querySelector("header").className = "choose";
     document.querySelector("body").className = "choose";

}