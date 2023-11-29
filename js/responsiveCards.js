document.addEventListener("DOMContentLoaded", (event) => {
    let song_cont = document.querySelector("div.song_container");
    let cards = song_cont.querySelectorAll("div");
    // const cards = document.querySelectorAll("div.song_speak");
    // cards.push(document.querySelectorAll("div.song_rep"));
    cards.forEach((card) => {
        card.addEventListener("mousemove", (event) => {
            const rect = card.getBoundingClientRect();
            
        })
    })

    console.log(cards);
})