import React from 'react'
import axios from 'axios'
import {WingBlank, Card} from 'antd-mobile'
import { connect } from 'react-redux'
import { getUserList } from '../../redux/chatuser.redux'
import UserCard from '../userCard/userCard'
@connect(
    state => state.chartuser,
    {getUserList}
)
class Genius extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        this.props.getUserList('boss')
    }
    render() {
        return(
            <div>
                <UserCard userlist = {this.props.userlist}></UserCard>
            </div>
        )
    }
}
export default Genius