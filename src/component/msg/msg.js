import React from 'react'
import { connect } from 'react-redux'
import {List} from 'antd-mobile';
import Badge from '../../../node_modules/_antd-mobile@2.1.3@antd-mobile/lib/badge';
@connect(
    state => state
)
class Msg extends React.Component{
    constructor(props) {
        super(props)
    }
    getLastItem(arr) {
        return arr[arr.length - 1]
    }
    render() {
        const Item = List.Item
        const Brief = Item.Brief
        const msgGroup = {}
        this.props.chat.chatmsg.forEach(item => {
            msgGroup[item.chatid] = msgGroup[item.chatid]  || []
            msgGroup[item.chatid].push(item)
        });
        const chatList = Object.values(msgGroup).sort( (a, b) => {
            //给消息列表排序
            let a_lastItem = this.getLastItem(a)
            let b_lastItem = this.getLastItem(b)
            return  b_lastItem.create_time - a_lastItem.create_time
        })
        return (
            <div>
                
                    {chatList.map(v => {
                        const lastItem = this.getLastItem(v);
                        const targetId = lastItem.to === this.props.user._id ? lastItem.from : lastItem.to
                        const avatar = require(`../img/${this.props.chat.users[targetId].avatar}.png`)
                        const unreadNum = v.filter(k => !k.read && k.to === this.props.user._id).length
                        return (<List  key = {targetId}>
                            <Item
                            extra = {<Badge  text={unreadNum}  ></Badge>  }
                            thumb = {avatar} 
                            arrow = "horizontal"
                            onClick = {() => {
                                this.props.history.push(`/chat/${targetId}`)
                            }}
                            >
                                <Brief>{this.props.chat.users[targetId].name}</Brief>
                                {lastItem.content}
                            </Item> 
                        </List>)   
                    })}
                
            </div>
        )
            
    }
}

export default Msg