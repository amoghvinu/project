import React, { Component } from 'react'

export default class Syllabus extends Component {
    render() {
        return (
            <div>
                <h class="text text-center">
                   Syllabus
                </h>
                <button type="button" class="btn  btn-lg btn-block" style={{backgroundColor:"indigo"}}>
                   <a class="item text-white" href="Scheme2017">17CS Scheme</a>

                </button>
<button type="button" class="btn  btn-lg btn-block" style={{backgroundColor:"maroon"}}>
<a class="item text-white" href="Qp">18CS Scheme</a>
</button>
            </div>
        )
    }
}
