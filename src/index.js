import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Link, Redirect, Switch} from 'react-router-dom'
import './config.js'
import './index.css'
import reducers from './reducer'
import AuthRoute from './component/authroute/authroute'
import Login from './container/login/login'
import Register from './container/register/register'
import BossInfo from './container/bossInfo/bossInfo'
import GeniusInfo from './container/geniusInfo/geniusInfo'
import Dashboard from './component/dashboard/dashboard'
import Chat from './component/chat/chat'
import registerServiceWorker from './registerServiceWorker'

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : f => f


const store = createStore(reducers, compose(
    applyMiddleware(thunk), reduxDevtools
))
// function Dashboard () {
//     return <div>Dashboard</div>
// }
//boss genius me msg 4个页面
ReactDOM.render(
    (<Provider store={ store }>
        <BrowserRouter>
            <div>
                <AuthRoute></AuthRoute>
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/register" component={Register}></Route>
                    <Route path="/bossInfo" component={BossInfo}></Route>
                    <Route path="/geniusInfo" component={GeniusInfo}></Route>
                    <Route path="/chat/:user" component={Chat}></Route>
                    <Route component={Dashboard}></Route>
                </Switch>
                
            </div>
        </BrowserRouter>
 </Provider> ) ,
  document.getElementById('root')
)

registerServiceWorker();