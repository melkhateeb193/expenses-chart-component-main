let spanCon = document.querySelectorAll('.oneC');
let span = document.querySelectorAll('.one');
let monthP = document.querySelectorAll('.monthP');
let hover = document.querySelectorAll('.appear');


async function func () {
var response = await fetch(`data.json`);
var finialResult = await response.json();
finialResult.forEach((e , i )=> {
let maxAmount = Math.max(...finialResult.map(item => item.amount));
span[i].style.height =` ${e.amount * 2}px`
monthP[i].innerHTML=e.day;
if (e.amount == maxAmount) {
 span[i].style.backgroundColor= 'hsl(186, 34%, 60%)';}

spanCon.forEach(()=> addEventListener('click',()=>{
hover[i].style.display= ` block `;
hover[i].innerHTML = `${e.amount}`;
}))
});}
func()

