import {Component} from 'react'
class Welcome extends Component {
  render() {
    const {item} = this.props
    return <h1> Hello {item} </h1>
  }
}

export default Welcome
