import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import styled, { createGlobalStyle } from 'styled-components';


class App extends Component {
  state = {
    displayNum: 0,
    keyboards: [
      {
        txt: "C"
      }, 
      {
        txt: "+/-"
      },
      {
        txt: "%"
      },
      {
        txt: "/"
      },
      {
        txt: "7"
      },
      {
        txt: "8"
      },
      {
        txt: "9"
      },
      {
        txt: "x"
      },
      {
        txt: "4"
      },
      {
        txt: "5"
      },
      {
        txt: "6"
      },
      {
        txt: "-"
      },
      {
        txt: "1"
      },
      {
        txt: "2"
      },
      {
        txt: "3"
      },
      {
        txt: "+"
      },
      {
        txt: "0"
      },
      {
        txt: "."
      },
      {
        txt: "="
      }
    ]
  }

  _clickNumberButton = (number) => {
    console.log('clickNumberButton', number)
  }

  render() {
    const { displayNum, keyboards } = this.state;
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
      <React.Fragment>
        <GlobalStyle/> 
        {displayNum}
        <Grid container>
        {keyboards.map((calDom, index) => {
          return (
            <Grid item xs={3}>
              <Button>{calDom.txt}/// {index}</Button>
            </Grid>
          )
        })}
        </Grid>
   
      </React.Fragment>
    );
  }
}

export default App;
