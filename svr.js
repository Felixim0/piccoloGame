import express from 'express';

const app = express();

app.use(express.static('client', { extensions: ['html'] }));

console.log('Listening on port 3000!');

app.listen(3000);
