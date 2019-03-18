import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import styled, { createGlobalStyle } from 'styled-components';
import { keyboards } from './keyboards';


class App extends Component {
  state = {
    current_displayNum: 0,
    prev_displayNum: null,
    isNumberClick: true,
    operator: null,
    keyboards,
  }

  _operator = (operatorType) => {
    const { prev_displayNum, current_displayNum } = this.state;
    if (operatorType == '/') {
      console.log(33, prev_displayNum / current_displayNum)
      this.setState({
        current_displayNum: prev_displayNum / current_displayNum
      })
    }
  }

  _clickButton = (buttonInfo) => {
    if (buttonInfo.type == "number") {
      this._handleNumberClick(buttonInfo)
    } else {
      this._handleOperator(buttonInfo)
    }
  }

  _handleNumberClick = (param) => { // 숫자 보여주기만.
    const { prev_displayNum, current_displayNum, isNumberClick, operator } = this.state;
    console.log('숫자==>', param)

    if (!isNumberClick) { this.setState({isNumberClick: true}) };
    if (isNumberClick) {  //  연산자 클릭되고서 숫자 클릭 되었을때.
      this.setState({
        current_displayNum: parseInt(String(current_displayNum) + String(param.val))
      })
    } else {
      this.setState({
        prev_displayNum: current_displayNum,
        current_displayNum: parseInt(param.val),
      })
    }
  }

  _handleOperator = (param) => {  // 계산, 연산자 처리
    console.log('연산자==>', param)
    console.log('연산자==>', this.state.current_displayNum)

    this.setState({
      isNumberClick: false,
    });
    if (param.val == "C") {
      this.setState({
        current_displayNum: 0,
        prev_displayNum: null,
      })
    } else if (param.val == "+/-") {
      this.setState({
        current_displayNum: this.state.current_displayNum * (-1)
      })
    } else if (param.val == "%") {
      this.setState({
        current_displayNum: this.state.current_displayNum * (0.01)
      })
    } 

    
    
    else if (param.val == "/") {
        this._operator('/');
    }
  }


  render() {
    const { current_displayNum, keyboards } = this.state;
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
        {current_displayNum}
        <Grid container>
          {keyboards ? keyboards.map((keyboard, index) => {
            if (index == 16) {
              return (
                <Grid item xs={6} key={index} onClick={() => {this._clickButton(keyboard)}}>
                  <Button>{keyboard.val}</Button>
                </Grid>
              )
            } else {
              return (
                <Grid item xs={3} key={index} onClick={() => {this._clickButton(keyboard)}} >
                  <Button>{keyboard.val}</Button>
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
