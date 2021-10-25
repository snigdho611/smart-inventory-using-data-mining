import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Inventory from './components/Inventory';
import Association from './components/Association';
import Restock from './components/Restock';
import app from "./base";



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
      >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
          </Box>
          )}
      </div>
      );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
        }}
        {...props}
        />
        );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Header() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>



      <div className="container">




        <div class="col-3 ml-auto text-right py-4 mx-5">

          <button onClick={() => app.auth().signOut()}>Sign out</button>
           
        </div>

        <div class="d-flex justify-content-center pb-5">
          <h1 class="font-weight-light display-4">SMART INVENTORY</h1>  
        </div>


        <AppBar position="static" style={{ background: 'white' }}>
          <Tabs

            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            aria-label="nav tabs example"
            centered

            >
            <LinkTab label="Inventory" href="" {...a11yProps(0)} />
            <LinkTab label="Associations" href="" {...a11yProps(1)} />
            <LinkTab label="Restock" href="" {...a11yProps(2)} />
       
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Inventory />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Association />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Restock />
          
        </TabPanel>
        
      </div>
      </div>
      );
}
