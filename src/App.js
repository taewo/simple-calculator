import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import styled, { createGlobalStyle } from 'styled-components';
import { keyboards } from './keyboards';


class App extends Component {
  state = {
    displayNum: 0,
    keyboards
  }

  _clickNumberButton = (number) => {
    console.log('clickNumberButton', number)
  }

  _clickButton = (buttonInfo) => {
    console.log('_clickButton', buttonInfo)
    if (buttonInfo.type == "number") {
      this._handleNumberClick(buttonInfo)
    } else {
      this._handleOperator(buttonInfo)
    }
  }

  _handleNumberClick = (param) => {
    console.log('숫자==>', param)
  }

  _handleOperator = (param) => {
    console.log('연산자==>', param)
  }


  render() {
    const { displayNum, keyboards } = this.state;
    console.log(1, keyboards)
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
          {keyboards ? keyboards.map((keyboard, index) => {
            if (index == 16) {
              return (
                <Grid item xs={6} key={index} onClick={() => {this._clickButton(keyboard)}}>
                  <Button>{keyboard.txt}</Button>
                </Grid>
              )
            } else {
              return (
                <Grid item xs={3} key={index} onClick={() => {this._clickButton(keyboard)}} >
                  <Button>{keyboard.txt}</Button>
                </Grid>
              )
            }
          }) : ""}
        </Grid>
   
      </React.Fragment>
    );
  }
}

export default App;
