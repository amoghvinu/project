import React, { Component } from 'react'
import './Styles.css'
import axios from 'axios'

export default class Home extends Component {
    state={
        confirmed:[],
        death:[],
        recovered:[]
    }
   componentDidMount=()=>{
       axios({
           url:'https://vtu17cse-lab-adityam945.netlify.app/.netlify/functions/api/',
           method:'GET'
           
       })
       .then((Response)=>{
           console.log('Data:',Response.data);
           
           
       })
       .catch(()=>{
        alert('oops');
       })
   }
    render() {
        return (
            <div>
                <h>
                    welcome
                </h>
                
                    <p>
                       
                    </p>
                ))}
                
               
            </div>
        )
    }
}
