import React from "react";
import App, {Container} from "next/app";
import {observer} from "mobx-react-lite";


export default class Myapp extends App {
  render(){
    const { Component,pageProps} = this.props;
        return(
            <Container>
              <Component {...pageProps} />
            </Container>
        )
  }
}