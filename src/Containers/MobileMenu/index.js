import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import '../../App.css';

const styles = {
  root: {
    flexGrow: 1,
    maxWidth: 500,
  },
};

class IconLabelTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    if(this.props.authenticated) {
      return(
      <Paper square className={classes.root} className="mobileMenu">
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
        >
          <Tab  label="RECENTS" />
          <Tab  label="FAVORITES" />
          <Tab  label="NEARBY" />
        </Tabs>
      </Paper>
    )
    } else {
      return null;
    }
  }
}

IconLabelTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconLabelTabs);
