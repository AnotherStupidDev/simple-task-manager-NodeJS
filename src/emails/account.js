const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'scourge077@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'scourge077@gmail.com',
        subject: 'Why are you leaving..',
        text: `Pidoras ${name}`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}