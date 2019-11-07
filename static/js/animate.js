let backdrop
let dragonfly
let header

window.onload = () => {
  backdrop = document.querySelector('.logo__backdrop')
  dragonfly = document.querySelector('.logo__dragonfly')
  header = document.querySelector('.reveal__stagger')

  // revealLogo()
  revealLogo()
  revealHeader()
}

function revealLogo() {
  backdrop.classList.add('logo__backdrop--reveal')
  dragonfly.classList.add('logo__dragonfly--reveal')
}

function revealHeader() {
  header.classList.add('reveal__stagger--reveal')
}