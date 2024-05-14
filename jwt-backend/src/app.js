const express=require('express');
const bodyParser=require('body-parser');
const signupRoute=require('./routes/signup');
const app=express();
const cors=require('cors');
const PORT=process.env.PORT||5000;
const createAdminAccount=require('./scripts/admin');
const loginRoute=require('./routes/login');
const userRoute=require('./routes/user');

app.use(bodyParser.json());
app.use(cors());

createAdminAccount();

app.use('/user',signupRoute);
app.use('/auth',loginRoute);
app.use('/api',userRoute);

app.listen(PORT,()=>{
    console.log(`PORT is listening at ${PORT}`);
})



