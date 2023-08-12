let isModalOpen = false
let isModalOpenSuccess = true

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

// document.getElementById("contact-link").addEventListener("click", showContactForm)

// function showContactForm() {
//   const form = document.getElementById("contact-form");
//   form.classList.add("show")
//   console.log("Function called")
// }

// function closeContactForm() {
//   const form = document.getElementById("contact-form");
//   form.classList.remove("show")
// }

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector('.modal__overlay--loading')
  const success = document.querySelector('.modal__overlay--success')
  loading.classList.add(" modal__overlay--visible")
  // emailjs
  //   .sendForm(
  //     'service_bqx4s2d',
  //     'template_74y021e',
  //     event.target,
  //     'K186n3klexni0hH1l'
  //   )
    .then(() => {
      loading.classList.remove("modal__overlay--visible")
      success.classList.add(" modal__overlay--visible")
    }).catch(() => {
      loading.classList.remove("modal__overlay--visible")
      alert(
        "The email service is temporarily unavailable. Please directly contact me on chrismeehan91@gmail.com"
      )
    })
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false
    return document.body.classList.remove('modal--open')

  }
  isModalOpen = true
  document.body.classList += " modal--open"
}

function toggleModalSuccess() {
  if (isModalOpenSuccess) {
    isModalOpenSuccess = true
    return document.body.classList += " modal--open"

  }
  isModalOpenSuccess = false
  document.body.classList.remove('modal--open')
}

// toggleModalSuccess();

// service_s13lxyz
