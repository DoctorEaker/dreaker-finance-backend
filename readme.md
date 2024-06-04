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
