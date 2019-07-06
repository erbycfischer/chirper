const express = require('express');
const path = require('path');
const cors = require('cors');

const passport = require('passport');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/public')));

passport.serializeUser((id, cb) => {
  cb(null, user.id);
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
mongoose.connect('mongodb+srv://guest:thisisapassword@hackathon-db-jf8oa.gcp.mongodb.net/test?retryWrites=true&w=majority');

const Schema = mongoose.Schema;
const UserDetail = new Schema({
  username: String,
  password: String
}, { collection: "chirperUserInfo"});

const ChirpDetail = new Schema({
    title: String,
    text: String,
    user: String
});

const UserDetails = mongoose.model('chirperUserInfo', UserDetail, 'chirperUserInfo');
const ChirpDetails = mongoose.model("chirperChirpInfo", ChirpDetail, 'chirperChirpInfo');

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

app.use(cors());
app.get('/success', (req, res) => res.send("Welcome "+req.query.username+"!!"));
app.get('/error', (req, res) => res.send("error logging in"));
app.get('/feed', (req, res) => {
  res.send(JSON.stringify(ChirpDetails.find().exec()));
});

app.post('/feed', cors(), (req, res) => {
  ChirpDetails.insertMany([{'title':req.title, 'text':req.text, 'user':req.user}],
    (err, docs) => {
      if (err) {
        res.send(err);
      }

      res.send(JSON.stringify(docs));
    });
});

app.post('/',
  passport.authenticate('local', { failureRedirect: '/error' }),
  function(req, res) {
    res.redirect('/feed?username='+req.user.username);
  });


const port = process.env.PORT || 8080;
app.listen(port);

console.log('App is listening on port ' + port);
