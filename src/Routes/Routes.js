import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'
import Main from './Main'
import { UserContext } from '../App'

const Routes = () => {

    const { user } = useContext(UserContext)

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/*" element={<Main />} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes