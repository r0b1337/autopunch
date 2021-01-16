const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.MAIL,
        pass: process.env.MAIL_PASSWORD,
    },
});
transporter.verify(console.log);

app.use(cors());

app.use(bodyParser.json());

app.post('/', async (req, res) => {
    const message = {
        from: process.env.MAIL,
        to: process.env.DEST,
        subject: `Nouvelle demande de ${req.body.name} / ${req.body.email} - Autopunch`,
        text: req.body.message,
    };
    const result = await transporter.sendMail(message);

    res.send(result);
});

module.exports = app;
