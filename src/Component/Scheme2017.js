import React, { Component } from 'react'
import axios from 'axios'

export default class Scheme2017 extends Component {
  state={
    confirmed:[]
  }
  componentDidMount=()=>{
    axios({
      url:'https://covid19.mathdro.id/api',
      method:'GET'
    })
    .then((res)=>{
      console.log(('Data:',res.data))
      this.setState({confirmed:res.data.confirmed.value})
    })
    .catch(()=>{
      alert('yappa error banth');
    })
  }
    render() {
        return (
            <div class="card-group">
            <div class="card">
              <div class="card-body" style={{backgroundColor:"peachpuff"}}>
                <h5 class="card-title text-center">SEM 3</h5>
                <div>
                    <a class="card text-center bg-success text-dark" href="/"><h5> Subjects Syllabus</h5></a>
                </div>
                <div>
                    <a class="card text-center bg-warning text-dark" href="/"><h5> Labarotary Syllabus</h5></a>
                </div>
               
              
                
              </div>
            </div>
            <div class="card">
            
              <div class="card-body" style={{backgroundColor:"peachpuff"}}>
                <h5 class="card-title text-center">SEM 4</h5>
                <div>
                    <a class="card text-center bg-success text-dark" href="/"><h5> Subjects Syllabus</h5></a>
                </div>
                <div>
                    <a class="card text-center bg-warning text-dark" href="/"><h5> Labarotary Syllabus</h5></a>
                </div>
              </div>
            </div>
            <div class="card">
              
              <div class="card-body" style={{backgroundColor:"peachpuff"}}>
                <h5 class="card-title text-center">SEM 5</h5>
                <div>
                    <a class="card text-center bg-success text-dark" href="/"><h5> Subjects Syllabus</h5></a>
                </div>
                <div>
                    <a class="card text-center bg-warning text-dark" href="/"><h5> Labarotary Syllabus</h5></a>
                </div>
              </div>
            </div>
            <div class="card">
              
              <div class="card-body" style={{backgroundColor:"peachpuff"}}>
                <h5 class="card-title text-center">SEM 6</h5>
                <div>
                    <a class="card text-center bg-success text-dark" href="/"><h5> Subjects Syllabus</h5></a>
                </div>
                <div>
                    <a class="card text-center bg-warning text-dark" href="/"><h5> Labarotary Syllabus</h5></a>
                </div>
              </div>
            </div>
            <div class="card">
              
              <div class="card-body" style={{backgroundColor:"peachpuff"}}>
                <h5 class="card-title text-center">SEM 7</h5>
                <div>
                    <a class="card text-center bg-success text-dark" href="/"><h5> Subjects Syllabus</h5></a>
                </div>
                <div>
                    <a class="card text-center bg-warning text-dark" href="/"><h5> Labarotary Syllabus</h5></a>
                </div>
              </div>
            </div>
            <div class="card">
              
              <div class="card-body" style={{backgroundColor:"peachpuff"}}>
                <h5 class="card-title text-center">SEM 8</h5>
                <div>
                    <a class="card text-center bg-success text-dark" href="/"><h5> Subjects Syllabus</h5></a>
                </div>
                <div>
                    <a class="card text-center bg-warning text-dark" href="/"><h5> Labarotary Syllabus</h5></a>
                </div>
              </div>
            </div>
            

          </div>
        
          
        )
    }
}
