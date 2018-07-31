# Microsoft Graph Playground

You can use this app to experiment with the [Microsoft Graph API](https://developer.microsoft.com/graph) in the context of a modern web app. It is hosted at https://graphplayground.z22.web.core.windows.net/. 

## Architecture

The app is based on the [Angular CLI](https://cli.angular.io/), with the [Angular Material Table Component](https://material.angular.io/components/table/overview) and some structure stolen from the [Angular + ASP.NET Core Template](https://docs.microsoft.com/en-us/aspnet/core/client-side/spa/angular). It uses [MSAL](https://github.com/AzureAD/microsoft-authentication-library-for-js) to authenticate against both consumer and business accounts.

There are two ways that it can make calls to the graph:

1. Through the [Graph SDK](https://github.com/microsoftgraph/msgraph-sdk-javascript) (see `services/graph-sdk.service.ts` in the source code):
2. Through the [angular http client](https://angular.io/guide/http) (see `services/graph.service.ts` in the source code):

It also uses the [microsoft-graph-types](https://www.npmjs.com/package/@microsoft/microsoft-graph-types) library to provide strong typing for the objects returned from the graph.

## Installation Instructions

Prerequisites: [NPM](https://www.npmjs.com/get-npm) or [Yarn](https://yarnpkg.com/en/) and the [Angular CLI](https://cli.angular.io/)

1. Clone this repo:
    ```
    git clone https://github.com/astegmaier/graph-playground.git
    ```
2. Go to the `ClientApp` folder and restore the client-side packages:
    ```
    yarn install
    ``` 
    or 
    ```
    npm install
    ```

3. Go to the root folder and run:
    ```
    ng serve
    ```
    This will use the Angular CLI development server to host the site at http://localhost:4200.

This will allow you to tweak the app locally and experiment. If you would like to deploy your creation publicly to share with others, you can follow [these steps](deployment_steps.md).