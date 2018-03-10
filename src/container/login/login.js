import React from 'react'
import Logo from './../../component/logo/logo'
import { WingBlank, WhiteSpace, List, InputItem, Button } from 'antd-mobile';
import { loginfn } from '../../redux/user.redux'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import imoocForm from '../../component/imocc-form/imocc-form'
@connect(
    state=>state.user,
    {loginfn}
)
@imoocForm
class Login extends React.Component{
    constructor(porps){
        super(porps)
        this.handleLogin = this.handleLogin.bind(this)
    }
    register() {
        this.props.history.push('/register')
    }
    handleLogin() {
        this.props.loginfn(this.props.state)
    }
    render() {
        return (
        <div>
             {this.props.msg}
             {this.props.redirectTo && this.props.redirectTo !== '/login' ? <Redirect to={this.props.redirectTo}></Redirect> : null}
            <Logo></Logo>
            <h2>登录</h2>
            <WingBlank>
                <List>
                    <InputItem
                        onChange = {v=>this.props.handleChange('user', v)}
                    >用户</InputItem>
                    
                    <InputItem
                        onChange = {v=>this.props.handleChange('pwd', v)}
                    >密码</InputItem>
                </List>
                <WhiteSpace />
                <Button type="primary" onClick={this.handleLogin}>登录</Button>
                <WhiteSpace />
                <Button type="primary" onClick={() => this.register()}>注册</Button>
            </WingBlank>
        </div>)
    }
}

export default Login