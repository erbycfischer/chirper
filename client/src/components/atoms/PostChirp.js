import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class PostChirp extends React.Component {
    render() {
        // const useStyles = makeStyles({
        //     card: {
        //       maxWidth: 345,
        //     }
        // });

        // const classes = useStyles();

        // function requestToAdd() {
        //     let title = document.getElementById("titleinput").nodeValue;
        //     let text = document.getElementById("textinput").nodeValue;
        // }

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