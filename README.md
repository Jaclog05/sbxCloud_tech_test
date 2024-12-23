# Cocktail Restaurant App 🍹

This application allows you to explore cocktails, view details and ingredients, and manage users via registration and login. It was developed using **React JS** and follows modern front-end development practices.

## Main features

- **Authentication**: Registration and login for users.
- **Cocktail browsing**:
  - List of popular cocktails and search for specific cocktails.
  - Details of each cocktail, including ingredients and instructions.
- **User management**:
  - Support for local authentication (users stored in `localStorage`).
  - Optional integration with DummyJSON API for authentication.

## Technologies used

- **React JS**: User interface development.
- **React Router**: Routing management in the application.
- **Fetch API**: External APIs consumption.
- **LocalStorage**: Simulation of authentication and data persistence.
- **Pure CSS**: Basic application styling.

## APIs used

1. **[TheCocktailDB API](https://www.thecocktaildb.com/)**.
   - Getting cocktail and ingredient related data.
   - Use of endpoints for cocktail lookups and details.
2. **[DummyJSON Auth API](https://dummyjson.com/docs/auth)**
   - Handling authentication via login endpoints.

## Prerequisites

Before running the application, make sure you have installed:

- **Node.js** (version 14 or higher).
- **npm** (Node.js package manager).

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Jaclog05/sbxCloud_tech_test.git
   cd sbxCloud_tech_test
   ```

2. Install the dependencies
    ```bash
    npm install
    ```

## Execution

To start the application in development mode, run the following command:

    npm run dev

This will open the application in the browser at the default URL: http://localhost:5173.

## Using the application

1. Login:

- Use a valid email and password either registered locally or authenticated via the DummyJSON API.

2. Registration:
- Register a new user. The data is stored in localStorage along with a randomly generated token.

3. Cocktail browsing:
- Browse cocktail lists, search for ingredients and view details.

## Credits

Developed by **[Jaclog05](https://github.com/Jaclog05)**.
Based on requirements provided by **Sbxcloud** company.