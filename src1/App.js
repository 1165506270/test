import React from 'react'
import { Button, List } from 'antd-mobile';
import { connect } from 'react-redux'
import {addGUN, removeGUN, addGunAsync} from './index.redux'

@connect(
  state=>({num: state.counter}),
  {addGUN, removeGUN, addGunAsync}
)
class App extends React.Component{
  render() {
    // const num = store.getState()
    return <div>
      <h2>现在有机枪{this.props.num}</h2>
      <Button onClick={this.props.addGUN}>申请武器</Button>
      <Button onClick={this.props.removeGUN}>上交武器</Button>
      <Button onClick={this.props.addGunAsync}>拖两天再给</Button>
    </div>
  }
}

export default App