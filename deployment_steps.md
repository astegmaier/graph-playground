## Instrutions to deploy this app to Azure Storage

See prerequisites below before following these steps.

1. Create a production build with the Angular CLI:
    ```
    ng build --prod
    ```
2. Navigate to the folder containing the build output:
    ```
    cd dist/graph-playground
    ```
3. Log into the Azure CLI:
    ```
    az login
    ```
4. Upload the contents of the build output folder to azure storage:
    ```
    az storage blob upload-batch -s . -d $web --account-name graphplayground
    ```
    Replace `graphplayground` with the the name of your storage account.

### Prerequisites
1. Set up a [storage account in Azure](https://docs.microsoft.com/en-us/azure/storage/common/storage-quickstart-create-account?tabs=portal).
2. [Configure the storage account for static webpage hosting](https://azure.microsoft.com/en-us/blog/azure-storage-static-web-hosting-public-preview/).
3. [Install the Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest).
4. Register a new app on the Azure AD v2 Endpoint through the [Application Registration Portal](https://apps.dev.microsoft.com/) , and make note of the AppID.
5. Copy the AppID from the portal into the `clientId` property of `AuthService` class (in `src/app/service/auth.service.ts`).
6. Add a redirect URL to the registration portal that corresponds with the address where you're hosting the app (e.g. `https://graphplayground.z22.web.core.windows.net/`).