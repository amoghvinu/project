import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light " style={{backgroundColor:"black"}}>
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                  <a class="nav-item nav-link" href="/"><i class="fas fa-book-open fa-2x"></i></a>
                <a class="nav-item nav-link  text-warning active" href="/">Home</a>
                <a class="nav-item nav-link text-warning" href="Syllabus">Syllabus</a>
                <a class="nav-item nav-link text-warning" href="Qp">Sample Papers</a>
                
              </div>
            </div>
          </nav>
        )
    }
}
