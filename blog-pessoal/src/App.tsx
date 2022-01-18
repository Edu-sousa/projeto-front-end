import React from 'react';
import { Grid } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import './App.css';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
          <Route exact path='/'>
            <Login />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/home'>
            <Home />
          </Route>

      </Switch>
      <Footer />
    </Router>

  );
}

export default App;













/*
<Grid container spacing={3}>
  <Grid item xs={12} sm={12}>
    <Home />
  </Grid>
  <Grid item xs={12} sm={6}>
    <Home />
  </Grid>
  <Grid item xs={12} sm={6}>
    <Home />
  </Grid>
  <Grid item xs={12} sm={3}>
    <Home />
    </Grid>
  <Grid item xs={12} sm={3}>
    <Home />
    </Grid>
  <Grid item xs={12} sm={3}>
    <Home />
    </Grid>
  <Grid item xs={12} sm={3}>
    <Home />
    </Grid>

</Grid>
*/
