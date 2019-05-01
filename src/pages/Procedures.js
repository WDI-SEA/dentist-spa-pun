import React, { Component } from 'react'

class Procedures extends Component {
  render() {
    let services = this.props.services.map((s, i) => {
      return (
        <li key={i}>
          {s.service}
          <p className="subtext">{s.desc}</p>
        </li>
      )
    })
    return (
      <div>
        <h1>Procedures</h1>
        <p>It's like pulling teeth to get a laugh out of you guys</p>
        <div className="image">
          <img src="https://res.cloudinary.com/briezh/image/upload/v1556727942/toothhurty_zgvrp0.jpg" alt="tooth hurt" />
        </div>
        <hr />
        <h1>Our Services</h1>
        <ol>
          {services}
        </ol>
        <hr />
        <h2>A joke to make you feel better...</h2>
        <p>What does the dentist of the year get?</p>
        <p class="subtext">A little plaque!</p>
      </div>
    )
  }
}

export default Procedures
