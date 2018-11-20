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
    },
    {
        english: 'Are you fond of music?',
        chinese: '你喜欢音乐吗?'
    },
    {
        english: 'As is known to all， China is the largest developing country in the world today.',
        chinese: '众所周知，中国是当今世界上最大的发展中国家。'
    },
    {
        english: 'Bill hit his car into a wall last night.',
        chinese: '昨晚比尔开车时，车撞到了墙上。'
    },
    {
        english: 'Both Ann and Mary are suitable for the job.',
        chinese: '安妮和玛丽都很适合干这项工作。'
    },
    {
        english: 'Could you tell me where the post office is?',
        chinese: '请问邮局在哪里?'
    },
    {
        english: 'Do you have access to the Internet?',
        chinese: '你能上网吗?'
    },
    {
        english: 'Do you think you can do it by yourself?',
        chinese: '你认为你自己可以单独完成这件事吗'
    },
    {
        english: 'Each time history repeats itself, the price goes up.',
        chinese: '历史每重演一次，代价就增加一分。'
    },
    {
        english: 'Fred was such a hardworking student he soon came out first in the class.',
        chinese: '弗瑞德是一个学习十分用功的学生，所以不久他就成了班里学习最好的学生。'
    },
    {
        english: 'Have you seen Tom recently?',
        chinese: '最近你看见汤姆了吗?'
    },
    {
        english: 'He didn’t need to attend the meeting.',
        chinese: '他没必参加那个会议。'
    },
    {
        english: 'He has a foreign friend who lives in America.',
        chinese: '他有一个住在美国的外国朋友。'
    },
    {
        english: 'He has taught English in this university ever since he moved to this city.',
        chinese: '他自从移居到这座城市以来就一直 在这所大学教英语。'
    },
    {
        english: 'He prefers coffee to tea.',
        chinese: '与茶相比，他更喜欢咖啡。'
    },
    {
        english: 'He was very happy to hear from his old friend.',
        chinese: '他很高兴收到老朋友的来信。'
    },
    {
        english: 'How are you doing these days?',
        chinese: '近来你过得怎么样?'
    },
    {
        english: 'I hope we can have some snow this winter.',
        chinese: '我希望今年冬天能下点雪。?'
    },
    {
        english: 'I hurried to my office.',
        chinese: '我匆忙赶到了办公室。'
    },
    {
        english: 'I knocked on his door but nobody came to answer it.',
        chinese: '我敲了他的门，但没人来开门。?'
    },
    {
        english: 'I rang your house last night but your mother answered the phone.',
        chinese: '我昨夜给你家打电话，但接电话的是你母亲。?'
    },
    {
        english: 'I read the local newspaper with great interest every evening.',
        chinese: '每晚我怀着极大的兴趣读当地报纸。'
    },
    {
        english: 'I slept soundly all night.',
        chinese: '我整晚睡得很香。'
    },
    {
        english: 'I was having a nap when suddenly the telephone rang.',
        chinese: '我在睡觉时，电话铃突然响了。'
    },
    {
        english: 'I would appreciate it if you would just let me deal with this case.',
        chinese: '如果你能让我独自处理这粧案件，我将不胜感激。'
    },
    {
        english: `I' m thinking about a visit to Paris.`,
        chinese: '我在考虑去巴黎旅游。'
    },
    {
        english: 'If you decided to learn a new language, you would have to devote all your efforts to the cause.',
        chinese: '如果你决定学一门新的语言，你必须全力以赴。'
    },
    {
        english: `In an age of plenty, we feel spiritual hunger.`,
        chinese: '在这个物质财富充裕的时代，我们感到精神上的饥渴。'
    },
    {
        english: `In no other country in the world can you find such plants as this one.`,
        chinese: '像这种植物在世界上的其他任何一个国家中都找不到。'
    },
    {
        english: `It normally takes a semester for a college freshman to adjust to his college life.`,
        chinese: '大学新生一般需要花一个学期来适应大学生活。'
    },
    {
        english: `It's very important to maintain your current weight through exercise and healthy eating.`,
        chinese: '通过锻炼和健康饮食来保持你目前的体重是非常重要的。'
    },
    {
        english: `I’ve lost interest in my work.`,
        chinese: '我对这份工作己经失去了兴趣。'
    },
    {
        english: `John and his brother differ in personality even if their differences in age are not significant.`,
        chinese: '尽管约翰和他哥哥在年纪上相差不大，但他们的个性却不相同。'
    },
    {
        english: `Life is meaningless without a purpose.`,
        chinese: '没有目标的生活是毫无意义的。'
    },
    {
        english: `Look out the window it's still raining today!`,
        chinese: '看窗外，今天还在下雨。'
    },
    {
        english: `Most students feel satisfied with the progress they've made.`,
        chinese: '大多数学生对自己所取得的进步感到满意。'
    },
    {
        english: `My classmate is much cleverer than I.`,
        chinese: '我的同学比我聪明多了。'
    },
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
