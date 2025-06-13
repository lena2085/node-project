const mongoose = require('mongoose');
function connectToDatabase()
{
mongoose.connect('mongodb+srv://lena2085:sunglass2085@cluster0.zmy44mm.mongodb.net/form')
.then(()=>{
    console.log('Connected to MongoDB')
})
}
module.exports= connectToDatabase