// 텍스트 나타나기 애니메이션
const fadeTexts = document.querySelectorAll('.goal .fade-in');
fadeTexts.forEach((fadeText, index) => {
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeText, 1, {
    delay: (index+1)*.7,
    opacity: 1
  });
});

// 이미지 슬라이드
new Swiper('.interest .swiper', {
  autoplay: true, //자동재생
  loop: true,
  spaceBetween: 30,
  slidesPerView: 4, // 하나의 화면에 몇개의 슬라이드를 노출
});


// floating 사진 애니메이션
function random(min, max) {
  return parseFloat((Math.random()*(max-min)+min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  gsap.to(
    selector,
    random(1.5, 2.5),
    {
      y: size,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay)
    }
  );
}
floatingObject('.picture1', 1, 15);
floatingObject('.picture2', .5, 15);
floatingObject('.picture3', 1.5, 20);