function HienThiThoiGianThi() {
  var countDownDate = new Date().getTime() + 3600 * 1000 + 2;
// Update the count down every 1 second
  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    //Output the result in an element with id="demo"
    document.getElementById("count").innerHTML = minutes + "m " + seconds + "s ";
    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "TIME IS UP";
    }
  }, 1000);
}
function LayCacGiaTriNULL () {
  let CauHoiChuaDuocTraLoi = "";
  for (let i = 1; i<= 10; i++ ) {
    let count = 0;
    let baseQuestion = document.getElementById(i);
    let element = baseQuestion.children[2];
    for (let j = 0; j<element.children.length; j++ ) {
      if (element.children[j].firstElementChild.firstElementChild.checked) {
        count++;
      }
    }
    if (count === 0 )  {
      CauHoiChuaDuocTraLoi += `Question ${i} is not answered \n`;
    }
  }
  console.log(CauHoiChuaDuocTraLoi);
  return CauHoiChuaDuocTraLoi;
}
HienThiThoiGianThi();
LayCacGiaTriNULL();