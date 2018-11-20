import React from 'react'
import { Card, WhiteSpace, Button } from 'antd-mobile';
const arr = [
    {
        english: 'A friend of mine from high school is working in England now.',
        chinese: '我高中的一个朋友目前在英格兰工作。'
    },
    {
        english: 'A lot of natural resources in the mountain area will be exploited and used.',
        chinese: '那个山区有许多自然资源有待于开发利用。'
    },
    {
        english: 'All that glitters is not gold.',
        chinese: '闪光的未必都是金子。'
    },
    {
        english: 'Apples here like water and sunshine.',
        chinese: '这里的苹果喜欢水和阳光。'
    }
]
class Learn extends React.Component{
    constructor() {
        super();
        this.state = {
            list: arr,
            index: 1,
            show: false
        }
    }
    next() {
        this.setState({
            index: this.state.index + 1,
            show: false
        })
    }
    prev() {
        this.setState({
            index: this.state.index - 1,
            show: false
        })
    }
    showchaninese() {
        this.setState({
            show: true
        })
    }
    render() {
    return(
        <div>
            <WhiteSpace size="lg" />
            <Card full>
            <Card.Header
                title={`第${this.state.index}题`}
            />
            <Card.Body>
                <div>{this.state.list[this.state.index - 1]&&this.state.list[this.state.index - 1].english}</div>
                {
                    this.state.show ? (<div>{this.state.list[this.state.index - 1].chinese}</div>) : ''
                }
            </Card.Body>
            </Card>
            <Button type="primary" onClick={() => this.showchaninese()}>显示中文</Button><WhiteSpace />
            <Button type="primary" disabled={this.state.index === 1} onClick={() => this.prev()}>上一题</Button><WhiteSpace />
            <Button type="primary" disabled={this.state.list.length === this.state.index}  onClick={() => this.next()}>下一题</Button><WhiteSpace />
        </div>
        )
    }
}
export default Learn;
