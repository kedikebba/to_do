const mongoose = require('mongoose')

const ToDoListSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true,
        enum = ['High', 'Medium', 'Low']
    }
})

module.exports.getAllLists = (callback) => {
    ToDoList.find(callback);
}

const ToDoList = module.exports = mongoose.model('ToDoListCollection', ToDolistSchema );