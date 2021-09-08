import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'

/**
 * Rotas do browser.
 * Para adicionar uma rota use o component Route
 *
 * @return JSX.Element
 */
export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
      </Switch>
    </BrowserRouter>
  )
}
