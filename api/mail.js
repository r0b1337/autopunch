const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const nodemailer = require('nodemailer');
const user = process.env.MAIL;
const pass = process.env.MAIL_PASSWORD;
console.log('user :>> ', user);
console.log('pass :>> ', pass);
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user,
        pass,
    },
});
transporter.verify(console.log);

app.use(cors());

app.use(bodyParser.json());

app.post('/', async (req, res) => {
    const from = process.env.MAIL;
    const to = process.env.DEST;
    console.log('to :>> ', to);
    console.log('from :>> ', from);
    const message = {
        from,
        to,
        subject: `Nouvelle demande de ${req.body.name} / ${req.body.email} - Autopunch`,
        text: req.body.message,
    };
    const result = await transporter.sendMail(message);

    res.send(result);
});

module.exports = app;
