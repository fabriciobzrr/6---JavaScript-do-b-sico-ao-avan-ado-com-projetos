// selecionando os elementos
const imageElement = document.querySelectorAll(".gallery-item")
const lightBoxImage = document.querySelector(".lightbox-image")
const lightBox = document.querySelector(".lightbox")
const lightBoxClose = document.querySelector(".lightbox-close")

imageElement.forEach((image) => {
  image.addEventListener("click", () => {
    const imageSrc = image
      .querySelector(".gallery-image")
      .getAttribute("data-src")
    lightBoxImage.setAttribute("src", imageSrc)
    lightBox.style.display = "flex"
  })
})

lightBoxClose.addEventListener("click", () => {
  lightBox.style.display = "none"
})
