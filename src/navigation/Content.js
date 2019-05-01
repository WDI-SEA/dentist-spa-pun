import React, { Component } from 'react'
import { Route } from 'react-router-dom'

// Custom Components
import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Procedures from '../pages/Procedures'

class Content extends Component {
  render() {
    let services = [{service: 'Whitening', desc: 'Whitening Fast! 30 min or less guaranteed!'},
    {service: 'Braces', desc: 'Brace for impact!'},
    {service: 'Route Canal', desc: 'Deeply unnerving...'}]
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/procedures" render={
          () => (<Procedures services={services} />)
        } />
        <Route path="/contact" render={
          () => (<Contact name="Toothy Tootherson" phone="(555) 555-5555" />)
        } />
      </div>
    )
  }
}

export default Content
