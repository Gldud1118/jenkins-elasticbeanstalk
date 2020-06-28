import React from "react";
import App, {Container} from "next/app";
import {Provider} from "context-q";
import MainLayout from "../components/layouts/MainLayout";

//To override the default App, create the file ./pages/_app.js as shown below:
class myApp extends App {
  render(){
    const { Component,pageProps} = this.props;
        return(
            <Container>
                <Provider> 
                   <MainLayout>
                        <Component {...pageProps} />
                    </MainLayout> 
                </Provider>
            </Container>
        )
  }
}

export default myApp;

