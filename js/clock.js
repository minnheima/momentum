const clock = document.querySelector("h2#clock");

function getClock(){
  const date = new Date(); 
  const hours = String(date.getHours()).padStart(2, "0"); //padStart는 String에만 적용가능한 것이라서 string으로 변경해줘야함
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = (`${hours}:${minutes}:${seconds}`);

}

getClock();
setInterval(getClock, 1000);