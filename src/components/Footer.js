import { Home, Inbox, Person, Search } from '@material-ui/icons'
import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='Footer'>
            <Home style={{color: "white"}}/>
            <Search />
            <Inbox />
            <Person />
        </div>
    )
}

export default Footer