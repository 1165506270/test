import React from 'react'
import Logo from './../../component/logo/logo'
import { WingBlank, WhiteSpace, List, InputItem, Button, Radio } from 'antd-mobile';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { regisger } from './../../redux/user.redux'
import imoocForm from '../../component/imocc-form/imocc-form'
@connect(
    state=>state.user,
    {regisger}
)
@imoocForm
class Register extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.handleChange('type', 'genius')
    }
    login() {
        this.props.history.push('/login')
    }
    hanldeRigiter() {
        this.props.regisger(this.props.state)
    }
    render() {
        const RadioItem = Radio.RadioItem
        return (
        <div>
            {this.props.msg}
            {this.props.redirectTo ? <Redirect to={this.props.redirectTo}></Redirect> : null}
            <Logo></Logo>
            <h2>注册</h2>
            <WingBlank>
                <List>
                    <InputItem
                        onChange={v=> this.props.handleChange('user', v)}
                    >用户</InputItem>
                    <InputItem
                        onChange={v=> this.props.handleChange('pwd', v)}
                    >密码</InputItem>
                    <InputItem
                        onChange={v=> this.props.handleChange('repeatpwd', v)}
                    >确认密码</InputItem>
                    <WhiteSpace />
                    {/* <RadioItem 
                        checked={this.props.state.type === 'genius'}
                        onChange={()=> this.props.handleChange('type', 'genius')}
                    >
                        牛人
                    </RadioItem>
                    <RadioItem 
                        checked={this.props.state.type === 'boss'}
                        onChange={()=> this.props.handleChange('type', 'boss')}
                    >
                        BOSS
                    </RadioItem> */}
                </List>
                <WhiteSpace />
                <Button type="primary" onClick={() => this.hanldeRigiter()}>注册</Button>
            </WingBlank>
        </div>)
    }
}

export default Register