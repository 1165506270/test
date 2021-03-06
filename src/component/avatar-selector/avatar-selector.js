import React from 'react'
import { Grid, List } from 'antd-mobile'
import PropTypes from 'prop-types'

class AvatarSelector extends React.Component{
    static propTypes = {
        selectAvatar: PropTypes.func.isRequired
    }
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const avatarList = 'boy,girl,man,woman,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra'
                            .split(',')
                            .map(v => ({
                                icon: require(`../img/${v}.png`),
                                text: v
                            }))
        const GridHeader = this.state.text
                            ? (<div>
                                <span>已选择头像</span>
                                <img src = {this.state.icon} alt="" style = {{width: 20}}/>
                            </div>) : null                                   
        return (
            <div>
                <List renderHeader = { GridHeader }>
                    <Grid 
                        data = {avatarList} 
                        columnNum = {5} 
                        onClick = {elm => {
                            this.setState(elm)
                            this.props.selectAvatar(elm.text)
                        }}
                    />
                </List>
                
               头像选择
            </div>
        )
    }
}
export default AvatarSelector