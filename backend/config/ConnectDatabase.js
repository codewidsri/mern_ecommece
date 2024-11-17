const mongoose = require('mongoose');
const connectDatabase =() =>{
mongoose.connect(process.env.db_url).then((con)=>{
    console.log('MongoDB connected to host: '+con.connection.host)
})
};
module.exports =connectDatabase;