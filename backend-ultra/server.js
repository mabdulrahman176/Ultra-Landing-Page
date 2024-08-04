import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import UltraModel from './models/Ultra.js';

const app = express();
const PORT = 5000;



app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/ultralandingpage')

  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));


  app.post('/signIn', (req, res) => {
    const { email, password } = req.body; 
    UltraModel.findOne({ email: email })
      .then(user => {
        if (user) {
          if (user.password === password) {
            res.json("success");
            
          } else {
            res.json("The password is incorrect");
          }
        } else {
          res.json("Your Email in incorrect");
        }
      })
      .catch(err => {
        console.error('Error finding user:', err);
        res.status(500).json("Internal server error");
      });
  });
app.post('/signUpForm', (req, res) => {
  UltraModel.create(req.body)
    .then(ultras => res.json(ultras))
    .catch(err => res.json(err));
});

app.post('/logout', (req, res) => {
  const userId = req.body.userId;
  User.findByIdAndDelete(userId, (err) => {
    if (err) {
      return res.status(500).send('Error deleting user');
    }
    res.send('User logged out and deleted');
  });
});


app.get('/', (req, res) => {
  res.send('Welcome to the backend server!');
});

app.get('/getData', (req, res) => {
  res.json({ message: '' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
