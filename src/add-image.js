import logoImg from './assets/logo.jpeg'
import kiwiText from './assets/altText.txt'

export function addImage() {
    const img = document.createElement('img')
    img.alt = kiwiText
    img.width = 300
    img.height= 300
    img.src = logoImg
    const body = document.querySelector('body')
    body.appendChild(img)
}