const mongoose = require('mongoose');
//链接mongo 并且使用imooc这个集合
const DB_URL = 'mongodb://119.29.231.160:27017/imooc-chat'
mongoose.connect(DB_URL, {
  useMongoClient: true,
  /* other options */
});
mongoose.connection.on('connected', () => {
    console.log('mongo connect success')
})
//新建app
//类似mysql的表 mongo有文档 字段的概念
const models = {
    user: {
        'user': {type: String, require: true},
        'pwd': {type: String, require: true},
        'type': {type: String, require: true},
        //头像
        'avatar': {type: String},
        //个人简介
        'desc': {type: String},
        //职位名称
        'title': {type: String},
        //如果是boss还需要公司和工资字段
        'companyName': {type: String},
        'money': {type: String}
    },
    chat: {
        'chatid': {type: String, require: true},
        'from': {type: String, require: true},
        'to': {type: String, require: true},
        'read': {type: Boolean, default: false},
        'content': {type: String, require: true, default: ''},
        'create_time': {type: Number, default: new Date().getTime()}
    }
}

for(let m in models) {
    mongoose.model(m, new mongoose.Schema(models[m]))
}
module.exports = {
    getModel: function(name) {
        return mongoose.model(name)
    }
}
// const User = mongoose.model('imooc', new mongoose.Schema({
//     user: {type: String, require: true},
//     age:{type: Number, require: true}
// }));