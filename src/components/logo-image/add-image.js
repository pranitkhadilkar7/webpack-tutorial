import logoImg from '../../assets/logo.jpeg';
import './add-image.scss'

export class AddImage {
    render () {
        const img = document.createElement('img')
        img.alt = kiwiText
        img.src = logoImg
        img.classList.add('logo-image')
        const body = document.querySelector('body')
        body.appendChild(img)
    }
}