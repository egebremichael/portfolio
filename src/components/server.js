const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: 'https://efratagebremichael.com',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));

app.get('/', (req, res) => {
    res.send('Server is running!');
});


app.use(express.json());

app.post('/api/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'efgebremichael@gmail.com', 
            pass: 'dxjj pemv kclv hskc', 
        },
    });

    const mailOptions = {
        from: `${name} <${email}>`, 
        to: 'efgebremichael@gmail.com', 
        subject: `New message from ${name} <${email}>`,
        text: message             
    };
    

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error sending email. Please try again.' });
    }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
