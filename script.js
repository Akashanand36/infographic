var lightcolor = new Array(' purple', '#ffd400', '#00008b', '#ff022c');
var darkcolor = new Array('darkblue', '#ff4b00', '#4668ff', '#6c0046');
var textcolor = new Array('#f36dc3', '#f5f773', '#c1f1ee', ' #e27729b');

const box1 = document.querySelectorAll('.box1');
const box2 = document.querySelectorAll('.box2');
const smallbox1 = document.querySelectorAll('.smallbox1');
const smallbox2 = document.querySelectorAll('.smallbox2');
const arrowhead = document.querySelectorAll('.arrowhead');
const box2text = document.querySelectorAll('.box2text');
const box1text = document.querySelectorAll('.box1text');

for (let i = 0; i < box1.length; i++) {
    box2[i].style.backgroundImage = "linear-gradient(to right," + lightcolor[i] + "," + darkcolor[i] + ")";


    box1[i].style.border = "20px solid" + lightcolor[i];
    box1[i].style.borderRightColor = "transparent";
    box1[i].style.filter = "drop-shadow(10px -10px 10px " +
        darkcolor[i] + ")";

    smallbox1[i].style.backgroundColor = lightcolor[i];
    smallbox2[i].style.backgroundColor = lightcolor[i];
    arrowhead[i].style.backgroundColor = lightcolor[i];

    box1text[i].style.color = lightcolor[i];

    box2text[i].style.color = textcolor[i];

}