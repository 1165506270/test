const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRouter = require('./user')
const models = require('./model')
const Chat = models.getModel('chat')


const app = express();

//使用中间件
app.use(express.static('../build'));
const server = require('http').Server(app);  
const io = require('socket.io')(server);  
io.on('connection', (socket) => {      
    socket.on('sendmsg', (data) => {
        const {from, to, msg} = data
        const chatid = [from, to].sort().join('_')
        Chat.create({chatid, from, to, create_time: new Date().getTime(), content: msg}, (err, doc) => {
            io.emit('recvmsg', doc)
        })
        console.log(data);
        
    })
})
app.use(cookieParser());
app.use(bodyParser.json());
app.use('/user', userRouter);

//新建一条数据
// User.create({
//     user: '小米',
//     age: 16
// }, (err, doc) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(doc);
//     }
// });
//更新数据
// User.update({'age': '16'}, {'$set': {user: '小红'}}, (err, doc) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(doc);
//     }
// })


app.get('/', function(req, res) {
    res.send('hello word');
})
app.get('/data', (req, res) => {
    //查找
    // User.findOne({}, (err, doc) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         res.json(doc);
    //     }
    // });
    //删除
    // User.remove({age: 18}, (err, doc) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         res.json(doc);
    //     }
    // });
})
server.listen(9093, function() {
    console.log('start 9093')
})