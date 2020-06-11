const express = require ('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

app.post('/api/form', (req,res) => {
    console.log(req.body.mailState);

    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h3>Contact Details</h3>
        <ul>
        <li>Name: ${req.body.mailState.name}
        <li>Email: ${req.body.mailState.email}
        </ul>
        <h3>Message</h3>
        <p>${req.body.mailState.message}</p>
        `

        // const transporter = nodemailer.createTransport({
        //     host: 'smtp.ethereal.email',
        //     port: 587,
        //     auth: {
        //         user: 'carole.nicolas@ethereal.email',
        //         pass: 'tS8wxkC1qC6QRNBYgg'
        //     }
        // });

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            auth: {
              user:'valvarius1@gmail.com',
              pass: 'vrnvlr83e14h501u'
            }
          });

          var mailOptions = {
            from: 'valvarius1@gmail.com',
            to: 'notitiami@gmail.com',
            subject: 'Sending Email using Node.js[nodemailer]',
            html: htmlEmail
          };

        // const mailOptions = {
        //     from: 'test@testaccount.com',
        //     to:'carole.nicolas@ethereal.email',
        //     replyTo: 'test@testaccount.com',
        //     subject: 'New Message',
        //     html: htmlEmail
        // }

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err);
                
            }

            console.log('Message sent: %s', info.accepted);
            console.log('Message URL: %s', nodemailer.getTestMessageUrl(info));
            
            res.send(info)
        })


    })
    
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () =>{
    console.log(`Server listening on port ${PORT}`);
    
})