import React from 'react'
import { Link } from 'react-router-dom'
import {Loader} from 'semantic-ui-react'

import Layout from './Layout'

const Home = ()=>{
    return(
        <Layout>
            <p>Hello World!!!!!!!!!!!!!!!!</p>
            <p>
                <Link to="/dynamic">Navigate to Dynamic</Link>
            </p>
        </Layout>
    )
}

export default Home