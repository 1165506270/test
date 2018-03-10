import React from 'react'
import {TabBar, NavBar} from 'antd-mobile'
import NavLinkBar from '../navLinkBar/navLinkBar'
import { connect } from 'react-redux'
import { Switch, Route} from 'react-router-dom'
import Boss from '../boss/boss'
import Genius from '../genius/genius'
import UserInfo from '../userInfo/userInfo'
import Msg from '../msg/msg'
import {getMsgList, recvMsg} from '../../redux/chat.redux'

// function Boss () {
//     return (
//         <div> Boss首页</div>
//     )
// }
// function Genius () {
//     return (
//         <div> Genius首页</div>
//     )
// }
// function Msg () {
//     return (
//         <div> 消息列表</div>
//     )
// }
// function Me () {
//     return (
//         <div> 个人中心</div>
//     )
// }
@connect(
    state => state,
    {getMsgList, recvMsg}
)
class Dashboard extends React.Component{
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        if(!this.props.chat.recvMsgEd) {
            this.props.recvMsg()
            this.props.getMsgList()
        }
        
    }
    render() {
        const {pathname} = this.props.location
        const type = this.props.user.type
        const navList = [
            {
                path: '/boss',
                text: '牛人',
                icon: 'boss',
                title: '牛人列表',
                component: Boss,
                hide: type === 'genius'
            },
            {
                path: '/genius',
                text: 'BOSS',
                icon: 'job',
                title: 'BOSS列表',
                component: Genius,
                hide: type === 'boss'
            },
            {
                path: '/msg',
                text: '消息',
                icon: 'msg',
                title: '消息列表',
                component: Msg,
            },
            {
                path: '/userInfo',
                text: '我',
                icon: 'user',
                title: '个人中心',
                component: UserInfo,
            }
        ]
        return (
            <div>
                <NavBar  className='fixd-header' mode='dard'>{navList.find(item => pathname === item.path).title}</NavBar>
                <div style={{marginTop: 45}}>
                    <Switch>
                        {navList.map(v => (
                            <Route key = {v.path} path = {v.path} component = {v.component}></Route>
                        ))}
                    </Switch>
                </div>
                <NavLinkBar data = {navList}></NavLinkBar>
            </div>
        )
    }
}
export default Dashboard