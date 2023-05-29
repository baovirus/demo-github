//ngày mốc
const countdownDate = new Date("2023-04-30T00:00:00").getTime();
setInterval(updateCountdown, 1000); //lặp lại mỗi giây

//hàm updte đếm ngược
function updateCountdown() {
    const now = new Date().getTime(); //thời gian hiện tại
    const distance = countdownDate - now; //khoảng cách = mốc - hiện tại
  
    //xử lý dữ liệu
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    //chuyển dữ liệu sang html
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
  }
  