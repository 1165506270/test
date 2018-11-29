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
    {
        english: `Our textbooks are very different from theirs.`,
        chinese: '我们的教材与他们的很不一样。'
    },
    {
        english: `People all over the world are trying to help people in the quake-striken areas.`,
        chinese: '全世界的人们都在尽力帮助地震灾区的人民。'
    },
    {
        english: `She likes to help anyone who is in difficulty.`,
        chinese: '她乐意帮助任何一个有困难的人。'
    },
    {
        english: `Ted and William have lived under the same roof for five years.`,
        chinese: '泰德和威廉己经在同一个屋檐下生活了五年了。'
    },
    {
        english: `The doctor had no choice but reach out to their colleagues across the nation.`,
        chinese: '那个医生别无选择，只能向全国的同行求助。'
    },
    {
        english: `The doctor told me to have more water.`,
        chinese: '医生让我多喝些水。'
    },
    {
        english: `The friend saw everything but did not say a single word.`,
        chinese: '这位朋友看到了一切，但一言不发。'
    }, 
    {
        english: `The more passions we have, the more happiness we are likely to experience.`,
        chinese: '我们的激情越多，我们有可能体验到的快乐就越多。'
    }, 
    {
        english: `The Olympic Games is an international sports event that takes place every four years.`,
        chinese: '奥林匹克运动会是一项国际性的体育盛会，每四年举办一次。'
    }, 
    {
        english: `The People，s Republic of China (PRC), founded on October 1，1949，covers an area of 9.6 million square kilometers.`,
        chinese: '中华人民共和国成立于1949年10月1日，国土面积约960万平方公里。'
    }, 
    {
        english: `The students are encouraged by their teacher to do more listening, reading and writing.`,
        chinese: '老师鼓励学生多听，多读，多写。'
    },
    {
        english: `The traffic jams during morning and afternoon rush hours are a headache in big cities now.`,
        chinese: '上下班高峰期的交通拥堵问题是大城市目前的一个棘手问题。'
    }, 
    {
        english: `There is a large amount of energy wasted due to friction (摩檫）.`,
        chinese: '由于摩檫而损耗了大量的能量。'
    }, 
    {
        english: `They thought that there must be something wrong with their TV set.`,
        chinese: '他们认为电视机一定出毛病了。'
    }, 
    {
        english: `This box can hold more books than that one.`,
        chinese: '这个箱子比那个箱子能装更多的书。'
    }, 
    {
        english: `This new country hopes to establish friendly relations with all its neighbours`,
        chinese: '这个新成立的国家希望和所有邻国建立友好关系。'
    }, 
    {
        english: `This place has plentiful material resources.`,
        chinese: '这个地方的物质资源非常丰富。'
    }, 
    {
        english: `Transistors are small in size and light in weight.`,
        chinese: '晶体管的体积小，重量轻。'
    }, 
    {
        english: `Trees need water to grow.`,
        chinese: '树木有水才能成长。'
    }, 
    {
        english: `Various substances differ widely in their magnetic characteristics.`,
        chinese: '不同材料的磁性有很大的差别。'
    }, 
    {
        english: `We must take some measures to control the pollution.`,
        chinese: '我们必须采取措施来控制污染。'
    }, 
    {
        english: `We should encourage him to have confidence in himself.`,
        chinese: '我们应该鼓励他对自己要有信心。'
    }, 
    {
        english: `What kind of life do most people enjoy?`,
        chinese: '大多数人喜欢什么样的生活?'
    }, 
    {
        english: `What time do you go swimming every day?`,
        chinese: '你每天何时去游泳?'
    }, 
    {
        english: ` Who can help me clean the room?`,
        chinese: '谁能帮我打扫房间?'
    }, 
    {
        english: ` Would you mind closing the window for me?`,
        chinese: '能帮我关一下窗户吗??'
    }, 
    {
        english: ` Would you please help me with this heavy box?`,
        chinese: '你能帮我抬一下这个沉箱子吗??'
    }, 
    {
        english: ` You and your team can discover the answers to problems together.`,
        chinese: '你和你的团队能够一起找出问题的答案。?'
    }, 
    {
        english: ` You needn' t go there anymore. He already knows about it.`,
        chinese: '你不必去了，他已经知道那件事了。?'
    }, 
    {
        english: ` You’d better do that again.`,
        chinese: '你最好再做一遍。'
    }, 
    {
        english: `A dog is always well-known as a clever and friendly animal.`,
        chinese: '众所周知，狗是聪明而友好的动物。'
    }, 
    {
        english: `A dolphin is always well known as a clever and friendly animal.`,
        chinese: '众所周知，海豚是聪明而友好的动物。'
    }, 
    {
        english: `A good memory is a great help in learning a language.`,
        chinese: '好的记忆力在学习一门语言时很有帮助。'
    }, 
    {
        english: `A man who believes he is incapable cannot make a real effort.`,
        chinese: '一个认为自己没有能力的人不会做出真正的努力。'
    }, 
    {
        english: `A teacher should have patience in his work.`,
        chinese: '教师在工作中应该有耐心。'
    },
    {
        english: `About half of the fruit is ripe.`,
        chinese: '大约一半的水果熟了。'
    }, 
    {
        english: `Air pollution is more serious than water pollution.`,
        chinese: '空气污染比水污染更严重。'
    }, 
    {
        english: `Are you willing to denote more for the poor people?`,
        chinese: '你愿意为穷人多捐一点吗?'
    }, 
    {
        english: `As long as there is water, plant won' t die quickly.`,
        chinese: '只要有水，植物不会很快死亡。'
    },
    {
        english: `Because there was heavy traffic, we were ten minutes late.`,
        chinese: '因为交通拥堵，我们迟到了10 分钟。'
    },
    {
        english: `Before leaving the classroom, please turn off the li ghts.`,
        chinese: '离开教室之前，请关灯。'
    },
    {
        english: `Beijing 0lympics can make Chinese people work harder.`,
        chinese: '北京奥运会能让中国人工作更努力。'
    },
    {
        english: `Bob and Peter found out that they were twin brothers.`,
        chinese: '鲍勃和皮特发现他们是双胞胎兄弟。'
    },
    {
        english: `But I’ve got room for only two of you in the house. `,
        chinese: '但是我房子里的空间只够你们中的两个人。'
    },
    {
        english: `But it looks like something I would never buy.`,
        chinese: '但是这看起来像是那种我永远都不会买的东西。'
    },
    {
        english: `By 1900， states had laws against selling cigarettes to young people.`,
        chinese: '到1900年，美国已经有了法律禁止向年轻人销售香烟。'
    },
    {
        english: `Can I download this material without paying any money?`,
        chinese: '我能不花钱下载这些资料吗?'
    },
    {
        english: `Can you express yourself clearly in English?`,
        chinese: '你能用英语清晰地表达自己吗?'
    },
    {
        english: `China is the largest developing country in the world.`,
        chinese: '中国是世界上最大的发展中国家。'
    },
    {
        english: `China will build up a space station in ten years.`,
        chinese: '中国将会在十年内建立一个空间站。'
    },
    {
        english: `Christmas is the most important festival in the west.`,
        chinese: '圣诞节是西方最重要的节日。'
    },
    {
        english: `Did you get that Email from me?`,
        chinese: '你收到我的那封电子邮件了吗?'
    },
    {
        english: `Could you give me a cup of coffee， please?`,
        chinese: '请你给我-杯咖啡?'
    },
    {
        english: `Did you go fishing with your friend last Sunday?`,
        chinese: '你上周日和朋友去钓鱼了吗?'
    },
    {
        english: `Do you go swimming every day?`,
        chinese: '你每天都去游泳吗?'
    },
    {
        english: `Do you mind my opening the window?`,
        chinese: '你介意我打开窗户吗?'
    },
    {
        english: `Do you mind my smoking here?`,
        chinese: '您介意我在这里吸烟吗?'
    },
    {
        english: `Do you often do your washing in the evening?`,
        chinese: '你常常晚上洗衣服吗?'
    },
    {
        english: `Do you still have anything that you don’t understand?`,
        chinese: '你还有什么不明白的吗??'
    },
    {
        english: `Do you think students should do a part-time job?`,
        chinese: '你认为学生应该做兼职吗?'
    },
    {
        english: `Does the computer have instructions on it?`,
        chinese: '电脑_上有说明吗?'
    },
    {
        english: `Don’t trust him no matter what he says.`,
        chinese: '不管他说什么都别相信他。'
    },
    {
        english: `Each year some of his money is given to the best scientists and writers of the world.`,
        chinese: '每年他的一部分钱都用于奖励全世界最优秀的科学家和作家。'
    },
    {
        english: `Eastern culture is different from western.`,
        chinese: '东方文化与西方文化不同。'
    },
    {
        english: `Everyone was in bed except me.`,
        chinese: '除了我，每个人都上床睡了。'
    },
    {
        english: `Excuse me，where is the nearest police station?`,
        chinese: '对不起(打扰一下)，最近的警察局在哪儿?'
    },
    {
        english: `Excuse me. Could you tell me how to get to the cinema?`,
        chinese: '劳驾，你能告诉我如何去电影院吗?'
    },
    {
        english: `Few of them believe you.`,
        chinese: '他们当中很少有人相信你.'
    },
    {
        english: `Fewer high school students are smoking now than a few years ago.`,
        chinese: '现在吸烟的高中生比几年前少了。'
    },
    {
        english: `Fires may do more damage than the earthquakes.`,
        chinese: '火灾可能比地震造成更大的破坏。'
    },
    {
        english: `Five days is too long for me to wait. Do you want to wait?`,
        chinese: '五天的等待对我来说太久了，你想等吗?'
    },
    {
        english: `Flight 220 is scheduled to arrive at 10:30 pm.`,
        chinese: '220次航班预计在晚上十点半到达。'
    },
    {
        english: `From the East Coast to the West Coast it is about 3,000 miles wide.`,
        chinese: '从东海岸到西海岸大约3,000英里宽。'
    },
    {
        english: `Give us a few more minutes to decide.`,
        chinese: '再给我们几分钟来做决定。'
    },
    {
        english: `Go down this street until you reach the second traffic lights.`,
        chinese: '沿着这条街一直走到第二个红绿灯。'
    },
    {
        english: `Good health is an essential part of good life.`,
        chinese: '健康的身体是好生活的重要部分。'
    },
    {
        english: `He called the doctor and made sure that they would meet at five.`,
        chinese: '他给医生打电话确认五点见面。'
    },
    {
        english: `He doesn’t know what life means to him.`,
        chinese: '他不知道生活对他意味着什么。'
    },
    {
        english: `He doesn’ t like the way you talk to him.`,
        chinese: '他不喜欢你和他说话的方式'
    },
    {
        english: `He wanted to help all the wounded people no matter which side they were fighting for.`,
        chinese: '他想帮助所有的伤员，无论他们是为哪一方而战。'
    },
    {
        english: `He was pleased with the fine weather.`,
        chinese: '他对这样的好天气很满意。'
    },
    {
        english: `He was satisfied with his new car, and drove to work in it the very next day.`,
        chinese: '他对他的新车很满意，第二天就开着上班去了。'
    },
    {
        english: `He was too tired to go on reading.`,
        chinese: '他太累了，无法继续阅读。'
    },
    {
        english: `He’s growing more like his father now.`,
        chinese: '他现在长得更像他的父亲了。'
    },
    {
        english: `How did you spend your holiday?`,
        chinese: '你的假期怎么过的?'
    },
    {
        english: `How do you spell your last name?`,
        chinese: '你怎么拼写你的姓?'
    },
    {
        english: `How long have you been collecting stamps?`,
        chinese: '你集邮多久了?'
    },
    {
        english: `How long will it take us to get there?`,
        chinese: '我们多久能到那儿?'
    },
    {
        english: `How long will you be staying in China?`,
        chinese: '你将在中国待多久?'
    },
    {
        english: `How much does a parrot like this cost?`,
        chinese: '像这样的一只鹦鹉值多少钱?'
    },
    {
        english: `I am finishing my second years of study.`,
        chinese: '我正在完成第二年的学业。'
    },
    {
        english: `I am very familiar with his name.`,
        chinese: '我很熟悉他的名字。'
    },
    {
        english: `I am writing this letter to complain about the service in your hotel.`,
        chinese: '我写这封信是要投诉你们宾馆的服务。'
    },
    {
        english: `I came back because of rain.`,
        chinese: '因为下雨，我回来了。'
    },
    {
        english: `I came here at least once a month.`,
        chinese: '我每月至少来这一次。'
    },
    {
        english: `I can't go with you today because I’m too busy.`,
        chinese: '我今天不能跟你一起去， 因为我太忙。'
    },
    {
        english: `I could hardly agree to what you said just now.`,
        chinese: '我几乎无法同意你刚才说的。'
    },
    {
        english: `I do want to know what really happened.`,
        chinese: '我很想知道发生了什么事。'
    },
    {
        english: `I came here at least once a month.`,
        chinese: '我每月至少来这一次。'
    },
    {
        english: `He had a traffic accident last Sunday.`,
        chinese: '他上周日出了交通事故。'
    },
    {
        english: `He had a traffic accident last week.`,
        chinese: '他_上周发生了交通事故。'
    },
    {
        english: `He had to leave early yesterday.`,
        chinese: '他昨天必须早走。'
    },
    {
        english: `He has sympathy for all poor people.`,
        chinese: '他对所有穷人都有同情心。'
    },
    {
        english: `He has the habit of making notes while reading.`,
        chinese: '他有一边阅读一边记笔记的习惯。'
    },
    {
        english: `He is a world famous pop star.`,
        chinese: '他是一个世界著名的明星。'
    },
    {
        english: `He is a worldwide famous scientist.`,
        chinese: '他是一个世界著名的科学家。'
    },
    {
        english: `He is always looking for excuses for being late.`,
        chinese: '他总是为迟到找借口。'
    },
    {
        english: `He is always very active in student activities.`,
        chinese: '他在学生活动中总是很积极。'
    },
    {
        english: `He is one of the greatest writers in the world.`,
        chinese: '他是世界上最伟大的作家之--。'
    },
    {
        english: `He is sweating all over.`,
        chinese: '他全身都是汗。'
    },
    {
        english: `He keeps looking at himself in the mirror.`,
        chinese: '他不停地照镜子。'
    },
    {
        english: `He likes to help anyone who is in difficulty.`,
        chinese: '他喜欢帮助任何有困难的人。'
    },
    {
        english: `He lives in a small room with only one small window. `,
        chinese: '他住在一间只带--个小窗户的小屋里。'
    },
    {
        english: `He looks much older than his age.`,
        chinese: '他看起来比实际年龄老。'
    },
    {
        english: `He offered to help us with our work.`,
        chinese: '他主动帮助我们干活。'
    },
    {
        english: `He often went from town to town giving lectures.`,
        chinese: '他常常从一个城镇到另一个城镇作演讲。'
    },
    {
        english: `He shows a great interest in learning English.`,
        chinese: '他对英语学习表现出很大的兴趣。'
    },
    {
        english: `He stopped smoking.`,
        chinese: '他不再吸烟了。/ 他戒烟了'
    },
    {
        english: `He stopped to smoke.`,
        chinese: '他停下来去抽烟。'
    },
    {
        english: `I don’t think he can operate the new type of computer. `,
        chinese: '我认为他不会操作这种新型电脑。'
    },
    {
        english: `I enjoyed this meal thoroughly. `,
        chinese: '我非常喜欢这顿饭。'
    },
    {
        english: `I feel lonely without you.`,
        chinese: '没有你，我感到孤独。'
    },
    {
        english: `I feel satisfied with my life.`,
        chinese: '我对我的生活很满意。'
    },
    {
        english: `I got married ten years ago.`,
        chinese: '我十年前结的婚。'
    },
    {
        english: `I got there by plane late at night. `,
        chinese: '我深夜乘飞机到达那里。'
    },
    {
        english: `I got to the library by bus.`,
        chinese: '我乘公共汽车去图书馆。'
    },
    {
        english: `I had no choice.`,
        chinese: '我别无选择。'
    },
    {
        english: `I have a foreign friend who lives in America.`,
        chinese: '我有一个住在美国的外国朋友。'
    },
    {
        english: `I have no interest in what they say about me.`,
        chinese: '我对他们怎么说我没有兴趣。'
    },
    {
        english: `I hope you will change your mind tomorrow.`,
        chinese: '我希望你明天会改变你的想法。'
    },
    {
        english: `I look forward to hearing from you.`,
        chinese: '我期待收到你的来信。'
    },
    {
        english: `I looked for the book on the desk but it was nowhere.`,
        chinese: '我在桌_上找那本书，但是哪儿也找不到。'
    },
    {
        english: `I met one of my old friends on my way home yesterday evening.`,
        chinese: '我昨天晚上在回家的路上遇见了一个老朋友。'
    },
    {
        english: `I need to buy some 50-cent stamps.`,
        chinese: '我需要买一些50分的邮票。'
    },
    {
        english: `I need you to fill out the top portion of the form first.`,
        chinese: '我需要你先把这个表格的上部填上。'
    },
    {
        english: `I picked up the bag to protect my face from the smoke and heat.`,
        chinese: '我拿起包保护我的脸，以免被烟热伤到。'
    },
    {
        english: `I play football with my classmates.`,
        chinese: '我和同学们一起踢足球。'
    },
    {
        english: `I prefer tea to coffee.`,
        chinese: '与咖啡相比，我更喜欢茶。'
    },
    {
        english: `I reached Beijing early in the morning. `,
        chinese: '我今天早上到的北京。'
    },
].reverse();

178. 

179. 

180. 

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
