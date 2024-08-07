const popup = document.querySelector('.popup')
const popupImg = document.querySelector('.popup_inner img')

window.addEventListener('load', () => {
  popup.classList.add('is-visible')
})

popup.addEventListener('click', () => {
  popup.classList.remove('is-visible')
})

popupImg.addEventListener('click', (e) => {
  e.stopPropagation()
})