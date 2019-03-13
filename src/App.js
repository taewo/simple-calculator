import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import styled, { createGlobalStyle } from 'styled-components';


class App extends Component {
  state = {
    spacing: '0',
  }
  render() {
    const GlobalStyle = createGlobalStyle`
      body {
        padding: 0;
        margin: 0;
      }
    `;

    const Button = styled.button`
      border: 1px solid black;
      width: 100%;
      height: 100px;
    `
    return (
      <div>
        <GlobalStyle/> 
        <Grid container>
          <Grid item xs={12}>
            1
          </Grid>
          <Grid item xs={3}>
            <Button>3</Button>
          </Grid>
          <Grid item xs={3}>
            <Button>3</Button>
          </Grid>
          <Grid item xs={3}>
            <Button>3</Button>
          </Grid>
          <Grid item xs={3}>
            <Button>3</Button>
          </Grid>
          <Grid item xs={3}>
            <Button>3</Button>
          </Grid>
          <Grid item xs={3}>
            <Button>3</Button>
          </Grid>
          <Grid item xs={3}>
            <Button>3</Button>
          </Grid>
          <Grid item xs={3}>
            <Button>3</Button>
          </Grid>
          <Grid item xs={3}>
            <Button>3</Button>
          </Grid>
          <Grid item xs={3}>
            <Button>3</Button>
          </Grid>
          <Grid item xs={3}>
            <Button>3</Button>
          </Grid>
          <Grid item xs={3}>
            <Button>3</Button>
          </Grid>
          <Grid item xs={3}>
            <Button>3</Button>
          </Grid>
          <Grid item xs={3}>
            <Button>3</Button>
          </Grid>
          <Grid item xs={3}>
            <Button>3</Button>
          </Grid>
          <Grid item xs={3}>
            <Button>3</Button>
          </Grid>
          <Grid item xs={3}>
            <Button>3</Button>
          </Grid>
          <Grid item xs={3}>
            <Button>3</Button>
          </Grid>
          <Grid item xs={3}>
            <Button>3</Button>
          </Grid>
          <Grid item xs={3}>
            <Button>3</Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
