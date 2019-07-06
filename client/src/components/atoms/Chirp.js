import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class Chirp extends React.Component {
      
    render() {

        // const useStyles = makeStyles({
        //     card: {
        //       maxWidth: 345,
        //     },
        //     media: {
        //       height: 140,
        //     },
        //   });

        //   const classes = useStyles();

        return (
            <Card className="chirp" style={{maxWidth: 345}}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {this.props.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {this.props.text}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {this.props.user}
                </Typography>
              </CardContent>
            </CardActionArea>
        </Card>

        )
    }
  }

  export default Chirp;