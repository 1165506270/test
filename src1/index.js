import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'React-redux'
import { BrowserRouter, Route, Link, Redirect, Switch} from 'react-router-dom'
import App from './App'
import { counter } from './index.redux'
import reducers from './reducer'
import Auth from './Auth'
import Dashboard from './Dashboard'
import './config.js'
import './index.css'



import registerServiceWorker from './registerServiceWorker'
const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : f => f
const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    reduxDevtools
))
console.log(store.getState())
// function Two (){
//     return <div>二营</div>
// }
// function Tree (){
//     return <div>三营</div>
// }

// class Test extends React.Component{
//     constructor(props) {
//         super(props)
//     }
//     onclick() {
//         this.props.history.push('/')
//     }
//     render() {
//         console.log(this.props)
//        return <div onClick={() => this.onclick()}>测试组件{this.props.match.params.location}</div> 
//     }
// }
ReactDOM.render(
    (
      <Provider store={store}>
          <BrowserRouter>
            <Switch>
                <Route path='/login' exact component={Auth}></Route>
                <Route path='/dashboard' component={Dashboard}></Route>
                <Redirect to='/dashboard'></Redirect>
            </Switch>
            {/* <div>
                <ul>
                <li>
                    <Link to='/'>一营</Link>
                </li>
                <li>
                    <Link to='/two'>二营</Link>
                </li>
                <li>
                    <Link to='/tree'>三营</Link>
                </li>
            </ul>
            <Switch>
            {/*只渲染命中的第一个路由 *
                <Route path='/' exact component={App}></Route>
                <Route path='/two' component={Two}></Route>
                <Route path='/tree' component={Tree}></Route> 
                <Route path='/:location' component={Test}></Route>
                <Redirect to='/two'></Redirect>
            </Switch>
            
            </div> */}
            
          </BrowserRouter>
          
      </Provider>    
    ),
    
 document.getElementById('root')
);

registerServiceWorker();