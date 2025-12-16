const backTop = document.querySelector("#to-top")
window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop

  if (scrollTop > 500) {
    backTop.style.display = "block"
  } else {
    backTop.style.display = "none"
  }
})

backTop.addEventListener("click", (e) => {
  e.preventDefault()

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})
