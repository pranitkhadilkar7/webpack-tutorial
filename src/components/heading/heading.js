import './heading.scss'

export class Heading {
    render() {
        const heading = document.createElement('h1')
        heading.innerHTML = 'Webpack is Awesome'
        heading.classList.add('heading')
        const body = document.querySelector('body')
        body.appendChild(heading)
    }
}