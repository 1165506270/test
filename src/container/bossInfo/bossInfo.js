import React from 'react'
import { NavBar, Icon, InputItem, TextareaItem, Button } from 'antd-mobile';
import AvatarSelector from '../../component/avatar-selector/avatar-selector'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { update } from '../../redux/user.redux'
@connect(
    state=>state.user,
    {update}
)
class BossInfo extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            companyName: '',
            money: '',
            desc: '',
            avatar: ''
        }
    }
    handleChange(key, val) {
        this.setState({
            [key]: val
        })
    }
    render() {
        const path = this.props.location.pathname
        const redirectTo = this.props.redirectTo
        return (
            <div>
                { redirectTo && redirectTo !== path ? <Redirect to={redirectTo}></Redirect> : null}
                <NavBar mode="dark">NavBar</NavBar>
                <AvatarSelector
                    selectAvatar = {(imgname) => {
                        this.setState({
                            avatar: imgname
                        })
                    }}
                ></AvatarSelector>
                <InputItem onChange = { v => this.handleChange('title', v)}>
                    招聘职位
                </InputItem>
                <InputItem onChange = { v => this.handleChange('companyName', v)}>
                    公司名称
                </InputItem>
                <InputItem onChange = { v => this.handleChange('money', v)}>
                    职位薪资
                </InputItem>
                <TextareaItem 
                    onChange = { v => this.handleChange('desc', v)}
                    rows = {3}
                    autoHeight
                    title= '职位要求'/>
                <Button 
                    onClick = {() => {this.props.update(this.state)}}
                type='primary'>保存</Button>    
            </div>
        )
    }
}
export default BossInfo