import React from 'react'
import job from './job.png'
import './logo.css'
class Logo extends React.Component{
    render() {
        return (
            <div className="logo-container">
                <img src={job} alt="" />
            </div>
        )
    }
}

export default Logo