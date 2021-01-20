# Authentication

## Login

To connect to the application, the user must exist in the database, and provide his university password to connect via the CAS.

If all user data is correct, the API provides a token, which will be needed for future authenticated requests.

-> See [Login endpoint](#post-login).

![Login system diagram](./assets/AuthLoginDiagram.svg)

_Diagram made with [sequencediagram.org](https://sequencediagram.org/) ([source](./assets/AuthLoginDiagramSource.txt))._

## Authenticated requests

To send authenticated requests, you need to set the Authorization header as follows :

```json
Authorization: Bearer <token>
```

Our client application automatically sets this header for all requests when the user is logged in.
