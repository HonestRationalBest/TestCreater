const express = require('express');
const config = require('config');
const mongoose = require('mongoose')
const app = express()

app.use(express.static('public'));
app.use(express.json({ limit: '50mb', extended: true }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));


app.use('/api/auth', require('./routes/auth.routes'))


const PORT =
    config.get('port') ||
    3001


async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}`))
    } catch (e) {
        console.log('Server Error', e.message);
    }
}

start()
