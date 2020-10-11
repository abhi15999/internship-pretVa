
import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';



const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  root: {
    width: 300,
  }
});

const submitHandler = () =>{
  fetch()
}

function Sidebar() {
    const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  






  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
    >
       <Typography variant="h6" gutterBottom align="center">
            Filters
       </Typography>
       <form onSubmit={submitHandler}>
           <strong>Filter by Name</strong><br/>
           <label style={{display:'flex'}}>
                Name:<input name='name' type='text'></input><SearchIcon/>
           </label>
       </form>
       <br/>
      <Divider />
      <form>
           <strong>Filter by Requirements</strong><br/>
           <label>
                <b>Product</b>
                </label><br/>
                {['Sweater','Blazer','Raincoat','Skirt','Dress','T-Shirts','Trousers','Jacket'].map((p)=>{
                  return(
                  <div>
                    <input type='checkbox' id='Product' name={p} value={p}/><label>{p}</label>
                  </div>)
                })}<br/>
            
            <label><b>Weight: </b></label>
            <input type="text" name="weight" placeholder="Ex:150"/><br/>
            <div style={{display:"flex",marginTop:"10px"}}>
            <label><b>Lead Time: </b></label>
            <input style={{width:"20%",height:"15px"}}  type="text" name="time_min" placeholder="Ex:2"/><p>&nbsp;</p><input style={{width:"20%",height:"15px"}}  type="text" name="time_max" placeholder="Ex:2"/>
            </div>
            <div style={{display:"flex"}}>
            <label><b>Price: </b></label>
            <input style={{width:"20%",height:"15px"}}  type="text" name="price_min" placeholder="Ex:1000"/><p>&nbsp;</p><input style={{width:"20%",height:"15px"}}  type="text" name="price_max" placeholder="Ex:2000"/>
            </div>
            <div style={{alignItems:"center"}}>
            <Button variant="outlined" color="primary" >
              Apply Filters
            </Button>
            </div>
       </form>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>Filters</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}

       
    </div>
  );
}

export default Sidebar

