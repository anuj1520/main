
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import 'tachyons' ;
import './Skills.css';
function LinearProgressWithLabel(props) {
  return (
    <Box className=' flex items-center' >
      <Box className='w-50 pa3 mr2  '  >
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
  root: {
    width: '50%',
  },
});

const Skills=({details})=> {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
       <div className='main3-container'>
       <div className='vs3'>
          <div className='post3'>
              <h1 className='tc f1 lh-title'>Skills</h1>
              <div className= 'pa3'>
        		<h1 className='f3 lh-title'>{details[0].skill1}</h1>
              <LinearProgressWithLabel className={classes.root}value={50} />
            </div>
             <div className= 'pa3'>
        		<h1 className='f3 lh-title'>{details[0].skill2}</h1>
              <LinearProgressWithLabel className={classes.root}value={50} />
            </div>
             <div className= 'pa3'>
        		<h1 className='f3 lh-title'>{details[0].skill3}</h1>
              <LinearProgressWithLabel className={classes.root}value={50} />
            </div>
             <div className= 'pa3'>
        		<h1 className='f3 lh-title'>{details[0].skill4}</h1>
              <LinearProgressWithLabel className={classes.root}value={50} />
            </div>
            <div className= 'pa3'>
            <h1 className='f3 lh-title'>{details[0].skill5}</h1>
              <LinearProgressWithLabel className={classes.root}value={50} />
            </div>
            <div className= 'pa3'>
            <h1 className='f3 lh-title'>{details[0].skill6}</h1>
              <LinearProgressWithLabel className={classes.root}value={50} />
            </div>


           </div> 
        </div>
        </div>
  );
}
export default Skills;