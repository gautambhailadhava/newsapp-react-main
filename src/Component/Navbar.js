import React, { Component } from 'react'


export class Navbar extends Component {
   

    render() {
      const mystyle = {
        marginLeft : "45%",
        marginRight : "45%"
      }
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand text-center" style={mystyle} href="/">VP Daily News</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
    </div>
          </nav>
        )
    }
}

export default Navbar
