import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

class PostChirp extends React.Component {

    postChirp() {
        let title = document.getElementById("titleinput").nodeValue;
        let text = document.getElementById("textinput").nodeValue;

        fetch("http://localhost:8080/feed", {method: "POST"})
            .then(res => res.json())
            .then(res => {
                res.send(200);
            });
    }

    render() {

        return (
            <Card className="post-chirp" style={{maxWidth: 345}}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Title: <input id="titleinput" type="text"></input>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Text <input id="textinput" type="text"></input>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Post
              </Button>
            </CardActions>
        </Card>
        )
    }
  }

  export default PostChirp;