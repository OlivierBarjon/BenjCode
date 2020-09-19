const bigCircle = document.querySelector('.content__photo__bigCircle');
const smallCircle = document.querySelector('.content__photo__smallCircle');
const img = document.querySelector('.content__photo_img');
const zoneContent = document.querySelector('.content');

if (window.innerWidth > 300) {
    zoneContent.addEventListener("mousemove", () => {
        let x = (event.clientX - (window.innerWidth/2));
        //console.log(x); //
        bigCircle.style.transform = `translate3D(${x/50}px, 0, 0)`;
        smallCircle.style.transform = `translate3D(${-x/8.5}px, 0, 0)`;
        img.style.transform = `translate3D(${-x/35}px, 0, 0)`;

    });
}



