// import express from 'express'
const express = require('express');
const path = require('path');
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 5000;
require('dotenv').config();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);


const sendMessageWithSendGrid = async (req, res) => {
    console.log('inside the send request')
    let message = req.body.message  
    console.log(message)  
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
        to: 'anismemon096@gmail.com',
        from: 'anis.memon@codeforbtv.org',
        subject: 'Hi again!',
        text: message
    };
    // sgMail.send(msg)

    sgMail.send(msg).then(() => {
        console.log('Message sent')
    }).catch((error) => {
        console.log(error.response.body)
        // console.log(error.response.body.errors[0].message)
    })
}


app.post('/post', sendMessageWithSendGrid)



// const msg = {
//     to: 'Rachael.Montesano@uvm.edu',
//     from: 'anis.memon@codeforbtv.org',
//     subject: 'Hi Rachael...',
//     text: "I'm trying this out. Please send me a text if you receive this email. You probaby can't believe that it's taken me this long to get this stuff sorted out, but I think I've found the problem and and a solution. Thanks!"
// };
//     sgMail.send(msg).then(() => {
//         console.log('Message sent')
//     }).catch((error) => {
//         console.log(error.response.body)
//         // console.log(error.response.body.errors[0].message)
//     })


// mailgun messaging

// const mailgun = require('mailgun-js')
// const mg=mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN })
// const data = {
//     from: 'Rachael <Rachael.Montesano@uvm.edu>',
//     to: 'anismemon@yahoo.com',
//     subject: "Luca's soccer",
//     text: "Hey Anis, I am writing to let you know that we are setting up a little kid's soccer event. It will probably start towards the end of the month. Most likely Monday and / or Thursday evenings at 5:30pm. Place to be decided. I'm sure Luca is really excited to get back to playing soccer!"
// };

// mailgun.messages().send(data, (error, body) => {
//     console.log(body)
// })

// mg.messages().send(data).then(() => {
//     console.log(data)
// }).catch((error) => {
//     console.log(error.response.body)
// })


app.use(express.static(path.resolve('./client/build')))

app.get('*', (request, response) => {
    response.sendFile(path.resolve('./client/public/index.html'))
})

app.listen(port, () => {
    console.log('Listening on port: ', port)
})

