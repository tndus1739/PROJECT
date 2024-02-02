// 슬라이드해서 나왔다가 스크롤 내리면 다시 사라지는 글씨
let mainText = document.querySelector(".roll_content");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  console.log("scrollY", value);

  if (value > 350) {
    mainText.style.animation = "disappear 1s ease-out";
    // forwards :유지가 됨
  } else {
    mainText.style.animation = "slide 1s ease-out";
  }
});
