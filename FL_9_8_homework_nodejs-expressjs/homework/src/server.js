const expess = require('express');
const carRouter = require('./routes');
const app = expess();

app.use('/', carRouter);

app.listen(3000,()=>console.log('Listening to port: 3000'));

