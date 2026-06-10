# Playwright Unified Automation Framework

## Overview

A Hybrid Test Automation Framework built using Playwright and JavaScript following Page Object Model (POM) design principles.

The framework demonstrates UI automation, API-driven test data setup, service layer integration, and CI/CD execution through Azure DevOps pipelines.

This project represents a scalable enterprise automation architecture where test data is created through APIs, background services are triggered, and business workflows are validated through UI automation.

---

## Technology Stack

- Playwright
- JavaScript
- Node.js
- Page Object Model (POM)
- REST API Testing
- Azure DevOps Pipelines
- GitHub
- CI/CD Automation

---

## Framework Architecture

```text
Login
↓
Navigate to Application
↓
Create Test Data via APIs
↓
Execute Background Service
↓
Validate Data Through UI
↓
Generate Reports
↓
Execute via Pipeline
```

## Project Structure

```text
playwright-unified-automation-framework
│
├── apis
│
├── fixtures
│
├── pages
│
├── pipelines
│
├── services
│
├── tests
│   ├── smoke
│   └── regression
│
├── utils
│
├── package.json
│
└── README.md
```

## Features

### Smoke Suite

- Login validation
- Navigation validation
- Page availability checks
- Critical workflow validation

### Regression Suite

- End-to-end workflow validation
- API-driven test data creation
- Service execution validation
- Business flow verification

### API Layer

Reusable APIs for:

- Building creation
- Floor creation
- Site creation
- Space creation
- User creation

### Service Layer

Reusable services for:

- Background job execution
- Container job orchestration
- External process integration

---

## Design Patterns

### Page Object Model

Each page contains:

- Locators
- Actions
- Validations

This improves:

- Reusability
- Maintainability
- Scalability

---

## Pipeline Integration

Framework supports CI/CD execution using Azure DevOps YAML pipelines.

Example pipeline flow:

```text
Install Dependencies
↓
Execute Smoke Tests
↓
Execute Regression Tests
↓
Generate Reports
↓
Publish Results
```

---

## Test Execution

Run all tests:

```bash
npx playwright test
```

Run smoke tests:

```bash
npx playwright test tests/smoke
```

Run regression tests:

```bash
npx playwright test tests/regression
```

---

## Future Enhancements

- Cross-browser execution
- Parallel execution
- API mocking
- Test reporting dashboards
- Docker integration
- GitHub Actions integration

---

## Author

Diwas Dixit

Automation Engineer

Playwright | JavaScript | API Automation | Azure DevOps | CI/CD