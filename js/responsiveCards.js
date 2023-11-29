function rotateCard(event) {
    const card = document.querySelector("div.song_speak")
    const rect = card.getBoundingClientRect();
    const centerX = (rect.left + rect.right) / 2;
    const centerY = (rect.top + rect.bottom) / 2;
    const posX = event.pageX - centerX;
    const posY = event.pageY - centerY;
    if ( posX < 0 ) {
        card.style.webkitTransform = 'rotate(-20deg)';
    }
    else {
        card.dataset.rotateX = 20;
    }
    if ( posY < 0 ) {
        card.dataset.rotateY = -20;
    }
    else {
        card.dataset.rotateY = 20;
    }
}



// document.addEventListener("DOMContentLoaded", (event) => {
//     let song_cont = document.querySelector("div.song_container");
//     let cards = song_cont.querySelectorAll("div");
//     // const cards = document.querySelectorAll("div.song_speak");
//     // cards.push(document.querySelectorAll("div.song_rep"));
//     cards.forEach((card) => {
//         card.addEventListener("mousemove", (event) => {
            // const rect = card.getBoundingClientRect();
            // const centerX = (rect.left + rect.right) / 2;
            // const centerY = (rect.top + rect.bottom) / 2;
            // const posX = event.pageX - centerX;
            // const posY = event.pageY - centerY;
            // if ( posX < 0 ) {
            //     card.style.rotateX = "-20deg";
            // }
            // else {
            //     card.dataset.rotateX = 20;
            // }
            // if ( posY < 0 ) {
            //     card.dataset.rotateY = -20;
            // }
            // else {
            //     card.dataset.rotateY = 20;
            // }
//         });

//         card.addEventListener("mouseout", (event) => {
//             card.dataset.rotateX = 0;
//             card.dataset.rotateY = 0;
//         });
//     });

//     console.log(cards);
// })