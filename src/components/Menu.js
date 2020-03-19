import React, { Component } from 'react'
import '../../src/App.css';
import { Link } from 'react-router-dom'


export class Menu extends Component {
    render() {
        return (
            <div>
                <ul class="nav nav-pills nav-fill bg-info p-2 m-2">
                    <li class="nav-item">
                        <Link to="/"><h1 className=" navHead border border-secondary p-2">पुस्तकालय २०२०</h1></Link>
                    </li>
                    <li className="nav-item ml-4">
                        <Link to ="About" className="text-white">About</Link>
                    </li>
                    <li className="nav-item ml-4">
                    <Link to ="Signup" className="text-white">Signup</Link>
                    </li>
                    <li className="nav-item ml-4">
                    <Link to ="Home" className="text-white">Home</Link>
                    </li>
                </ul>
                
            </div>
        )
    }
}

export default Menu;