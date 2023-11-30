function rotateCard(event) {
    const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

    if (!isReduced) {
        const card = event.currentTarget;
        card.style.transition = 'transform 0.5s';
        const rect = card.getBoundingClientRect();
        const centerX = (rect.left + rect.right) / 2;
        const centerY = (rect.top + rect.bottom) / 2;
        // console.log("rect.top: ", rect.top);
        // console.log("rect.bottom", rect.bottom);
        // console.log("centerY:", centerY);
        const posX = event.clientX - centerX;
        const posY = event.clientY - centerY;
        console.log("ClientY: ", event.clientY);
        if ( posX < 0 && posY > 0) {
            card.style.transform = 'skew(-1deg,-1deg)';
            // console.log("Skew left bottom");
            // console.log("Pos Y:", posY);
        }
        else if(posX > 0 && posY > 0) {
            card.style.transform = 'skew(1deg,1deg)';
            // console.log("Skew right bottom");
            // console.log("Pos Y:", posY);
        }
        else if(posX < 0 && posY < 0) {
            card.style.transform = 'skew(1deg,1deg)';
            // console.log("Skew left top");
            // console.log("Pos Y:", posY);
        }
        else if( posX > 0 && posY < 0) {
            card.style.transform = 'skew(-1deg,-1deg)';
            // console.log("Skew right top");
            // console.log("Pos Y:", posY);
        }
    }
}

function resetCard(event) {
    const card = event.currentTarget;
    card.style.webkitTransform = 'skew(0deg,0deg)';
}