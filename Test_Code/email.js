////////////Email////////////
var nodemailer = require('nodemailer');
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'msd.dblp.team10@gmail.com',
        pass: 'myPassword'
    },
    tls: {
        rejectUnauthorized: false
    },
    secureConnection: true,
    port: 587,
});

var mailOptions = {
    from: 'msd.dblp.team10@gmail.com',
    to: 'harshilvasani03@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
/////////////////////////////