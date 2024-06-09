# Personal Expense Tracker App

The Personal Expense Tracker App is a comprehensive financial management tool designed to help individuals track their income, expenses, subscriptions, and financial products. This app provides a user-friendly interface for managing transactions, generating reports, and gaining insights into spending habits.

## Features

- **Transaction Management**: Easily add, edit, and delete transactions with details such as amount, currency, date, category, and description.
- **Multi-Currency Support**: Handle transactions in multiple currencies and perform real-time currency conversions.
- **Category Management**: Create, edit, and delete expense and income categories for better organization and analysis.
- **Subscription Tracking**: Keep track of subscriptions, including their start and end dates, frequency, and associated costs.
- **Financial Products**: Manage various financial products such as savings accounts and credit cards, each with its own currency and balance.
- **Reporting and Analytics**: Generate reports and visualizations for income, expenses, and balance over specific periods, as well as category-wise spending breakdown.
- **Data Import and Export**: Import transaction data from external sources and export data and reports for backup or sharing purposes.
- **User Authentication and Authorization**: Secure user accounts with authentication and authorization mechanisms to ensure data privacy.
- **Command-Line Interface (CLI)**: Interact with the app through a powerful CLI for quick and convenient access to features and data management.

## Tech Stack

- **Backend**: TypeScript, Node.js, Express.js
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JSON Web Tokens (JWT)
- **API Documentation**: Swagger
- **Testing**: Jest, Supertest
- **Containerization**: Docker
- **CI/CD**: GitHub Actions

## Getting Started

### Prerequisites

- Node.js (version X.X.X)
- PostgreSQL (version X.X.X)
- Docker (optional)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Install the dependencies:

```bash
pnpm install
```

3. Set up the PostgreSQL database:

```bash
docker run -d --name postgres -e POSTGRES_PASSWORD=<password> -p 5432:5432 postgres
```

4. Create a `.env` file in the root directory with the following content:

```bash
DATABASE_URL=postgres://<username>:<password>@localhost:5432/<database-name>
```

5. Run database migrations:

```bash
npx prisma migrate dev
```

6. Start the development server:

```bash
npx prisma db push
npx prisma db seed
npm run dev
```

---

File structure:

```
src/
├── modules/
│   ├── users/
│   │   ├── controllers/
│   │   │   └── userController.ts
│   │   ├── services/
│   │   │   └── userService.ts
│   │   ├── repositories/
│   │   │   └── userRepository.ts
│   │   ├── domain/
│   │   │   ├── user.ts
│   │   │   └── userErrors.ts
│   │   └── routes/
│   │       └── userRoutes.ts
│   ├── transactions/
│   │   ├── controllers/
│   │   │   └── transactionController.ts
│   │   ├── services/
│   │   │   └── transactionService.ts
│   │   ├── repositories/
│   │   │   └── transactionRepository.ts
│   │   ├── domain/
│   │   │   ├── transaction.ts
│   │   │   └── transactionErrors.ts
│   │   └── routes/
│   │       └── transactionRoutes.ts
│   ├── categories/
│   │   ├── controllers/
│   │   │   └── categoryController.ts
│   │   ├── services/
│   │   │   └── categoryService.ts
│   │   ├── repositories/
│   │   │   └── categoryRepository.ts
│   │   ├── domain/
│   │   │   ├── category.ts
│   │   │   └── categoryErrors.ts
│   │   └── routes/
│   │       └── categoryRoutes.ts
│   └── financialProducts/
│       ├── controllers/
│       │   └── financialProductController.ts
│       ├── services/
│       │   └── financialProductService.ts
│       ├── repositories/
│       │   └── financialProductRepository.ts
│       ├── domain/
│       │   ├── financialProduct.ts
│       │   └── financialProductErrors.ts
│       └── routes/
│           └── financialProductRoutes.ts
├── shared/
│   ├── database/
│   │   ├── prisma/
│   │   │   └── schema.prisma
│   │   └── database.ts
│   ├── authentication/
│   │   ├── authService.ts
│   │   └── jwtStrategy.ts
│   ├── errors/
│   │   └── appError.ts
│   └── logger/
│       └── logger.ts
├── infrastructure/
│   ├── httpServer.ts
│   ├── cliServer.ts
│   └── dependencyInjection.ts
├── tests/
│   ├── unit/
│   ├── integration/
│   └── ...
└── app.ts
```

1. `modules/`: Contains the main domains of the application, each organized into its own module folder.

   - Each module folder (e.g., `users/`, `transactions/`, `categories/`, `financialProducts/`) contains:
     - `controllers/`: Handles incoming HTTP requests and delegates business logic to services.
     - `services/`: Contains the business logic and interacts with repositories for data access.
     - `repositories/`: Provides an abstraction layer for data access and persistence.
     - `domain/`: Contains core entities, value objects, and domain-specific errors.
     - `routes/`: Defines the routes for the module.

2. `shared/`: Contains shared components and utilities used across the application.

   - `database/`: Contains the Prisma schema and database configuration.
   - `authentication/`: Contains the authentication service and JWT strategy.
   - `errors/`: Contains custom error classes for consistent error handling.
   - `logger/`: Contains the logging utility.

3. `infrastructure/`: Contains the setup for the HTTP server, CLI server, and dependency injection configuration.

   - `httpServer.ts`: Sets up the HTTP server and configures middleware.
   - `cliServer.ts`: Sets up the CLI server and defines CLI commands.
   - `dependencyInjection.ts`: Configures dependency injection for the application.

4. `app.ts`: The entry point for the HTTP server, where the application is initialized and started.
