// // $(window).scroll(function () {
// //     // 100 = The point you would like to fade the nav in.

// //     if ($(window).scrollTop() > 100) {

// //         $('.navbar').addClass('show');

// //     } else {

// //         $('.navbar').removeClass('show');

// //     };
// // });
// // var typed = new Typed(".typing", {
// //     strings: ["Web Developer", "Mentor", "Open Source Contributor", "Action on Google Developer", "Freelancer", "AI Enthusiast", "Front End Enthusiast", "UI Designer", "Photographer", "Technical Writer", "Author", "Cloud Computing Enthusiast"],
// //     typeSpeed: 100,
// //     backSpeed: 60,
// //     loop: true
// // });

// let slideIndex = [1,1];
// let slideId = ["mySlides1", "mySlides2"]
// showSlides(1,0);
// showSlides(1,1);

// // Next/previous controls
// function plusSlides(n, no) {
//   showSlides(slideIndex[no] += n, no);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n, no) {
//   let i;
//   let x = document.getElementsByClassName(slideId[no]);
//   // let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > x.length) {slideIndex[no] = 1}
//   if (n < 1) {slideIndex[no] = x.length}
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   x[slideIndex[no]-1].style.display = "block";
//   // if (n > slides.length) {slideIndex = 1}
//   // if (n < 1) {slideIndex = slides.length}
//   // for (i = 0; i < slides.length; i++) {
//   //   slides[i].style.display = "none";
//   // }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   // slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})
