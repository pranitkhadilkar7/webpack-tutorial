import './heading.scss'

export class Heading {
    render(pageName) {
        const heading = document.createElement('h1')
        heading.innerHTML = `Webpack is Awesome. Welcome to ${pageName}.`
        heading.classList.add('heading')
        const body = document.querySelector('body')
        body.appendChild(heading)
    }
}