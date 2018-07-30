# Microsoft Graph Playground

You can use this app as a way to experiment with the [Microsoft Graph API](https://developer.microsoft.com/graph). It is based on the [Angular + ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/client-side/spa/angular) Template, it uses [MSAL](https://github.com/AzureAD/microsoft-authentication-library-for-js) to authenticate against both consumer and business accounts.

There are two ways that it can make calls to the graph:

1. Through the [Graph SDK](https://github.com/microsoftgraph/msgraph-sdk-javascript) (see `services/graph-sdk.service.ts` in the source code):
2. Through the [angular http client](https://angular.io/guide/http) (see `services/graph.service.ts` in the source code):

It also uses the [microsoft-graph-types](https://www.npmjs.com/package/@microsoft/microsoft-graph-types) library to provide strong typing for the objects returned from the graph.

## Installation Instructions

Prerequisites: [DOT.NET Core](https://www.microsoft.com/net), [NPM](https://www.npmjs.com/get-npm) or [Yarn](https://yarnpkg.com/en/), and the [Angular CLI](https://cli.angular.io/)

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
    dotnet run
    ```

Note: you'll need to run the app from https://localhost:5001/ (for dotnet) or http://localhost:4200 (for the angular CLI development server) in order to log in correctly.