mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/todo', {useNewUrlParser: true, useUnifiedTopology:true}, (err)=>{
    if(!err)console.log("MongoDB connection succesful");
    else console.log("There is an error " + err);
});

var TodoSchema = new mongoose.Schema({
    item:{
        type: String,
        required: 'The field is most important'
    }
});

mongoose.model('Todo', TodoSchema);