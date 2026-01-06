console.log("Script loaded");
setInterval(() => {
let img = document.createElement('img');
img.setAttribute('src', '206417161_10854507.png');
img.style.position = 'absolute';
img.style.left = Math.random() * window.innerWidth + 'px';
img.style.top = Math.random() * window.innerHeight + 'px';
img.style.width = Math.random() * 30 + 10 + 'px';
img.style.height = img.style.width;
document.body.appendChild(img);


}, 100);








