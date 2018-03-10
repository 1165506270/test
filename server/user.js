const express = require('express')
const utils = require('utility')
const Router = express.Router()
const models = require('./model')
const User = models.getModel('user')
const Chat = models.getModel('chat')
const _filter = {'pwd': 0, '__v': 0}

Router.post('/register', (req, res) => {
    console.log(req.body)
    const {user, pwd, type} = req.body
    
    User.findOne({user}, (err, doc) =>{
        if (doc) {
            return res.json({code: 1, msg: '用户名重复'})
        }
        const userModel = new User({user, type, pwd: md5Pwd(pwd)})
        userModel.save((err, doc) => {
            if (err) {
                return res.json({code:1, msg: '后端出错'})
            } else {
                const {user, type, _id} = doc
                res.cookie('userId', doc._id)
                return res.json({code:0, msg: '操作成功', data: {user, type, _id}})
            }
        })
        // User.create({user, type, pwd: md5Pwd(pwd)}, (err, doc) => {
        //     if(err) {
        //         return res.json({code:1, msg: '后端出错'})
        //     } else {
        //         console.log(doc)
        //        return res.json({code:0, msg: '操作成功', data: doc})
        //     }
        // })
    })
})
Router.post('/login', (req, res) => {
    console.log(req.body)
    const {user, pwd} = req.body
    User.findOne({user, pwd: md5Pwd(pwd)}, _filter, (err, doc) => {
        if(!doc) {
            return res.json({code: 1, msg: '用户名不存在，或者密码错误'})
        } else {
            console.log(doc)
            res.cookie('userId', doc._id)
            return res.json({code: 0, msg: '登录成功', data: doc})
        }
    })
})
Router.get('/info', (req, res) => {
    const {userId} = req.cookies
    if(!userId) {
        return res.json({code: 1})
    }
    User.findOne({_id: userId}, _filter, (err, doc) => {
        if(!doc) {
            return res.json({code: 1, msg : '服务端出错'})
        } else {
            console.log(doc)
            return res.json({code: 0, data: doc})
        }
    })
})
Router.post('/update', (req, res) => {
    const {userId} = req.cookies
    if(!userId) {
        return res.json({code: 1})
    }
    const body = req.body
    User.findByIdAndUpdate(userId, body, (err, doc) => {
        
        if(!doc) {
            return res.json({code: 1, msg : '服务端出错'})
        } else {
            const data = Object.assign({}, {
                user: doc.user,
                type:doc.type
                }, body)
            return res.json({code: 0, data})
        }
    })
})
Router.get('/list', (req, res) => {
    const {type} = req.query
    User.find({type})
        .then(doc => {
            return res.json({code: 0, data: doc})
        })
})
Router.get('/getmsglist', function(req, res) {
    const user = req.cookies.userId
    User.find({}, (err, doc) => {
        let users = {}
        doc.forEach(v => {
            users[v._id] = {name: v.user, avatar: v.avatar}
        });
        Chat.find({'$or': [{from: user}, {to: user}]}, (err, doc) => {
            if(!err) {
                return res.json({code: 0, msg: doc, users: users})
            }
        })
    })
    
})
Router.post('/readmsg', (req, res) => {
    const user = req.cookies.userId
    const from = req.body.from
    Chat.update({from, to: user, read: false}, {'$set': {read: true}},{'multi': true})
    .then(doc => {
        res.json({num: doc.nModified, code: 0})
    })
})
function md5Pwd(pwd) {
    const salt = 'imooc_is_good_395@#~~JDJD'
    return utils.md5(utils.md5(pwd + salt))
}
module.exports = Router