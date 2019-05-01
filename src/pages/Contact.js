import React, { Component } from 'react'

class Contact extends Component {
  render() {
    return (
      <div>
        <h1>Hours: 24/7</h1>
        <p>This dentist never stops working.</p>
        <p className="subtext">He's a compulsive abscessive.</p>
        <hr />
        <img src="https://res.cloudinary.com/briezh/image/upload/v1556727942/sweetie_vyxlna.jpg" alt="Toothy" />
        <h2>Lead dentist: {this.props.name}</h2>
        <h3>Phone: {this.props.phone}</h3>
        <p className="subtext">You know the drill!</p>
      </div>
    )
  }
}

export default Contact
