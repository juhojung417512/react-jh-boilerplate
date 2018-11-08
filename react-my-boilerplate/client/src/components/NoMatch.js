import React from 'react'
import { Icon , Header } from 'semantic-ui-react'

import Layout from './Layout'

const NoMatch = ()=>{
    return(
        <Layout>
            <Icon name="minus circle" size="big"></Icon>
            <strong>Page Not Found.</strong>
        </Layout>
    )
}

export default NoMatch