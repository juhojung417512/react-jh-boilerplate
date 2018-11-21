import React from 'react'
import {Link} from 'react-router-dom'
import {Header, Container, Divider, Icon} from 'semantic-ui-react'

import {pullRight, h1} from '../style/Layout.css'

const Layout = ({children}) =>{
    return (
        <Container className="main-container">
            <div className="nav-container">
                <Header as="h1" className={h1}>
                    HEADER!
                </Header>
            </div>
            <Link to="/">
                
            </Link>
            {children}
            <Divider />
            <p className={pullRight}>
                Made with <Icon name="heart" color="red" />
            </p>
        </Container>
    )
}

export default Layout