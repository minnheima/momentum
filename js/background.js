const images = ["0.jpeg","1.jpeg","2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const $bgImage = document.createElement('img');
$bgImage.classList = "background";
$bgImage.src = `img/${chosenImage}`;
const cont = document.querySelector('.wrap');
const imgWrap = document.createElement('div');
imgWrap.classList = 'bg-wrap';
cont.appendChild(imgWrap);
imgWrap.appendChild($bgImage);