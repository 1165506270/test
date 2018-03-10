import React from 'react'
import {connect} from 'react-redux'
import {List, InputItem, NavBar, Icon, Grid} from 'antd-mobile'
import {getMsgList, sendMsg, recvMsg, readMsg} from '../../redux/chat.redux'
import {getChatId} from '../../util'
const emojis = '😀 😁 😂 🤣 😃 😄 😅 😆 😉 😊 😋 😎 😍 😘 😗 😙 😚 ☺️ 🙂 🤗 🤩 🤔 🤨 😐 😑 😶 🙄 😏 😣 😥 😮 🤐 😯 😪 😫 😴 😌 😛 😜 😝 🤤 😒 😓 😔 😕 🙃 🤑 😲 ☹️ 🙁 😖 😞 😟 😤 😢 😭 😦 😧 😨 😩 🤯 😬 😰 😱 😳 🤪 😵 😡 😠 🤬 😷 🤒 🤕 🤢 🤮 🤧 😇 🤠 🤡 🤥 🤫 🤭 🧐 🤓 😈 👿 👹 👺 💀 👻 👽 🤖 💩 😺 😸 😹 😻 😼 😽 🙀 😿 😾'
@connect(
    state => state,
    {getMsgList, sendMsg, recvMsg, readMsg}
)
class Chat extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            msg: [],
            showEmoji: false
        }
    }
    componentDidMount() {
        if( !this.props.chat.recvMsgEd) {
            this.props.getMsgList()
            this.props.recvMsg()
        }
    }
    componentWillUnmount() {
        const to = this.props.match.params.user
        this.props.readMsg(to)
    }
    fixCarousel() {
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'))
        }, 0)
    }
    handleSubmit() {
        // socket.emit('sendmsg', this.state.text);
        
        const from = this.props.user._id,
                to = this.props.match.params.user,
                msg = this.state.text
        
        this.props.sendMsg({from, to, msg})
        this.setState({text: ''})
    }
    render() {
        const emojis = '😀 😁 😂 🤣 😃 😄 😅 😆 😉 😊 😋 😎 😍 😘 😗 😙 😚 🙂 🤗 🤔 😐 😑 😶 🙄 😏 😣 😥 😮 🤐 😯 😪 😫 😴 😌 😛 😜 😝 🤤 😒 😓 😔 😕 🙃 🤑 😲 ☹️ 🙁 😖 😞 😟 😤 😢 😭 😦 😧 😨 😩 😬 😰 😱 😳 😵 😡 😠 😷 🤒 🤕 🤢 🤧 😇 🤠 🤡 🤥 🤓 😈 👿 👹 👺 💀 👻 👽 🤖 💩 😺 😸 😹 😻 😼 😽 🙀 😿 😾'
                        .split(' ')
                        .filter(v => v)
                        .map(v => ({text: v}))
        const userId = this.props.match.params.user
        const Item = List.Item
        const users = this.props.chat.users
        if ( !users[userId] ) {
            return null
        }
        const chatid = getChatId(userId, this.props.user._id)
        const chatmsgs = this.props.chat.chatmsg.filter(v => v.chatid === chatid)
        console.log(chatmsgs, chatid)
        return (
            <div id = "chat-page">
                <NavBar 
                    mode = 'dark'
                    className='fixd-header'
                    icon={<Icon type="left" />}
                    onLeftClick = {
                        () => this.props.history.goBack()
                    }
                >
                    {users[userId].name}
                </NavBar>
                <div style={{marginTop: 45, marginBottom: this.state.showEmoji ? 228 : 45}}>
                    {
                        chatmsgs.map((v) => {
                            const avatar = require(`../img/${users[v.from].avatar}.png`)
                            return v.from === userId ? (
                            <List key = {v._id} >
                                <Item 
                                    thumb = {avatar}
                                >
                                    {v.content}
                                </Item>
                            </List>
                            ) : (
                                <List key = {v._id}  thumb = {avatar}  className = "chat-me">
                                    <Item  
                                        extra = {<img src = {avatar} />}
                                    >
                                        {v.content}
                                    </Item>
                                </List>
                            )
                        })
                    }
                </div>
                <div className = "stick-footer">
                    <List>
                        <InputItem 
                            placeholer = "请输入"
                            value = {this.state.text}
                            onChange = {
                                v => this.setState({text: v})
                            }
                            extra = {
                                <div>
                                    <span
                                        onClick = {() => {
                                            this.setState({showEmoji: !this.state.showEmoji})
                                            this.fixCarousel()
                                        }}
                                        style = {{marginRight: 15, height: 24, display: 'line-block'}}
                                    >😀</span>
                                    <span onClick = {() => this.handleSubmit()}>发送</span>
                                </div>
                            }
                        ></InputItem>
                    </List>
                    {
                        this.state.showEmoji ? (
                            <Grid 
                                data = {emojis}
                                columnNum = {9}
                                carouselMaxRow = {4}
                                isCarousel = {true}
                                onClick = {el => {
                                    this.setState({
                                        text: this.state.text + el.text
                                    })
                                }}
                            />
                        ) : null
                    }
                </div>
            </div>
        )
    }
}

export default Chat