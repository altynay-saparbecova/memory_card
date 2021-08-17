import React from 'react'
import { Link } from "react-router-dom";
import './about.css'
export const About = () => {
    return (
        <div >
            <div className='text'>
                <p>
                    Memory games are a great way to boost different aspects of your child’s development.
                    At the same time, they help pass those long waiting hours in the car or outside somewhere,
                    when your kids are restricted from moving around. Such games not only help kids to hone their
                    memory skills but also help them learn strategy, force them to think, teach them concentration,
                    and improve their reflexes.
                </p>


            </div>
            <button className="registerLoginButton">
                <Link className="Link" to="/home">
                    Home
                </Link>
            </button>
        </div>

    )
}
export default About