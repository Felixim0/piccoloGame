import express from 'express';

const app = express();

app.use(express.static('client', { extensions: ['html'] }));

app.listen(3000);
