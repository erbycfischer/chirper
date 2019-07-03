const express = require('express');
const path = require('path');

const passport = require('passport');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/public')));

passport.serializeUser((id, cb) => {
    UserDetails.findById(id, (err, user) => {
        cb(err, user);
    });
});

passport.deserializeUser((id, cb) => {
    UserDetails.findById(id, (err, user) => {
        cb(err, user);
    });
    // User.findById(id, (err, user) => {
    //     cb(err, user);
    // });
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/MyDatabase');

const Schema = mongoose.Schema;
const UserDetail = new Schema({
      username: String,
      password: String
    });
const UserDetails = mongoose.model('userInfo', UserDetail, 'userInfo');

const LocalStrategy = require("passport-local");
passport.use(new LocalStrategy(
    function(username, password, done) {
        UserDetails.findOne({
          username: username
        }, function(err, user) {
          if (err) {
            return done(err);
          }
  
          if (!user) {
            return done(null, false);
          }
  
          if (user.password != password) {
            return done(null, false);
          }
          return done(null, user);
        });
    }
  ));

app.get('/success', (req, res) => res.send("Welcome "+req.query.username+"!!"));
app.get('/error', (req, res) => res.send("error logging in"));

app.post('/',
  passport.authenticate('local', { failureRedirect: '/error' }),
  function(req, res) {
    res.redirect('/success?username='+req.user.username);
  });


const port = process.env.PORT || 8080;
app.listen(port);

console.log('App is listening on port ' + port);
