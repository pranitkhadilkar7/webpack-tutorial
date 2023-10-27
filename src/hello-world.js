// import {helloWorld} from './hello-world'
// import {addImage} from './add-image'
import {HelloWorldButton} from './components/hello-world-button/hello-world-button'
import {Heading} from './components/heading/heading'
import _ from 'lodash'

// helloWorld()
// addImage()
const helloWorldButton = new HelloWorldButton()
helloWorldButton.render()

const heading = new Heading()
heading.render(_.upperFirst('hello world'))