import React from 'react'
import {Link, Route, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from './Auth.redux'
import { Button } from 'antd-mobile'
import App from './App'

function Tree (){
    return <div>三营</div>
}
@connect(
    state=> state.auth,
    {logout}
)
class Auth extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        const redirectToLogin = (<Redirect to='/login'></Redirect>)
        const match = this.props.match
        const app = (
            <div>
                <Button onClick={this.props.logout}>注销</Button>
                <ul>
                    <li>
                        <Link to={`${match.url}`}>一营</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/two`}>二营</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/tree`}>三营</Link>
                    </li>
                </ul>
                <Route path={`${match.url}`} exact component={App}></Route>
                <Route path={`${match.url}/two`} component={App}></Route>
                <Route path={`${match.url}/tree`} component={App}></Route>
            </div>
        )
        return this.props.isAuth ? app : redirectToLogin
    }
}

export default Auth