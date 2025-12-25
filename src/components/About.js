import React, { useState } from 'react'

export default function About() {

  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  })

  const [btnText, setBtnText] = useState("Enable Dark Mode")

  const toggleStyle = () => {
    if (myStyle.color === 'black') {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
        border: '1px solid white'
      })
      setBtnText("Enable Light Mode")
    } else {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      })
      setBtnText("Enable Dark Mode")
    }
  }

  return (
    <div className="container" style={myStyle}>
      <h1 className='my-3'>About Us</h1>

      <div className="accordion" id="accordionExample">

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show">
            <div className="accordion-body" style={myStyle}>
              <strong>This is the first item's accordion body.</strong>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse">
            <div className="accordion-body" style={myStyle}>
              <strong>This is the second item's accordion body.</strong>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse">
            <div className="accordion-body" style={myStyle}>
              <strong>This is the third item's accordion body.</strong>
            </div>
          </div>
        </div>

      </div>

      <div className="container my-3">
        <button onClick={toggleStyle} className="btn btn-primary">
          {btnText}
        </button>
      </div>

    </div>
  )
}
