import {Heading} from './components/heading/heading'
import {AddImage} from './components/logo-image/add-image'
// import _ from 'lodash'

const heading = new Heading()
// heading.render(_.upperFirst('add image'))
heading.render('add image')

const logo = new AddImage()
logo.render()