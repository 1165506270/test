import React from 'react'
import PropTypes from 'prop-types'
import {WingBlank, Card, WhiteSpace} from 'antd-mobile'
import { withRouter } from 'react-router-dom'
@withRouter
class UserCard extends React.Component{
    static propTypes = {
        userlist: PropTypes.array.isRequired
    }
    handleClick(v) {
        this.props.history.push(`/chat/${v._id}`)
    }
    render() {
        return (
            <WingBlank>
                <WhiteSpace></WhiteSpace>
                {this.props.userlist.map(v => {
                    return v.avatar ? (
                        <Card 
                            onClick = {() => this.handleClick(v)}
                            key = {v._id}>
                            <Card.Header
                                title = {v.user}
                                thumb = {require(`../img/${v.avatar}.png`)}
                                extra = {<span>{v.title}</span>}
                            ></Card.Header>
                            <Card.Body>
                            {v.type === 'boss' ? <div>公司： {v.companyName}</div> : null}
                            {v.desc && v.desc.split('\n').map(k => (
                                <div key = {k}>{k}</div>
                            ))}
                            {v.type === 'boss' ? <div>薪资： {v.money}</div> : null}
                            </Card.Body>
                        </Card>)  : null
                    })}
            </WingBlank>
        )
    }
}
export default UserCard