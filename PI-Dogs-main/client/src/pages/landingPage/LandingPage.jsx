import React from 'react'
import {Link} from 'react-router-dom'


export default function LandingPage() {
    return(
        <div>
            <div>
                <h1>Epic Dogs</h1>
                <Link to = '/home'>
                    <button>The Dog</button>
                </Link>
            </div>
        </div>
    )
}