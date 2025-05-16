# **Group Project: Employee Management System**

## TEAM MEMBERS

PIZON
TUNDAG
CUDILLO
SALAGUNTING

## **Overview**

This project is an **Employee Management System** that allows the management of employees, departments, workflows, and requests, with a focus on **role-based access control (RBAC)**.

### **Key Features:**

1. **Authentication & Authorization**:

   * User login, registration, and email verification.
   * JWT-based authentication with refresh tokens.
   * Role-based access (Admin and Employee roles).

2. **Employee Management**:

   * CRUD operations for employees (create, read, update, delete).
   * Employee transfer between departments.

3. **Department Management**:

   * CRUD operations for departments.
   * Employee assignment to departments.

4. **Workflows**:

   * Create and track workflows for employee tasks (e.g., onboarding).
   * Update workflow statuses (Pending, Approved, Rejected).

5. **Requests**:

   * Employees can submit requests (e.g., leave, equipment).
   * Admins can view, approve, or reject requests.

---

## **Technologies Used:**

* **Backend**: Node.js, Express.js
* **Database**: PostgreSQL (via TypeORM ORM)
* **Authentication**: JWT (JSON Web Tokens)
* **Environment**: dotenv for managing environment variables

---

## **Project Structure:**

Here is a breakdown of the project folder structure:

```
├── accounts/                # User account management
│   ├── account.controller.ts
│   ├── account.service.ts
│   ├── account.routes.ts
│   ├── account.entity.ts
│   └── account.schema.ts
├── employees/               # Employee management
│   ├── employee.controller.ts
│   ├── employee.service.ts
│   ├── employee.routes.ts
│   ├── employee.entity.ts
│   └── employee.schema.ts
├── departments/             # Department management
│   ├── department.controller.ts
│   ├── department.service.ts
│   ├── department.routes.ts
│   ├── department.entity.ts
│   └── department.schema.ts
├── workflows/               # Workflow management
│   ├── workflow.controller.ts
│   ├── workflow.service.ts
│   ├── workflow.routes.ts
│   ├── workflow.entity.ts
│   └── workflow.schema.ts
├── requests/                # Employee requests management
│   ├── request.controller.ts
│   ├── request.service.ts
│   ├── request.routes.ts
│   ├── request.entity.ts
│   └── request.schema.ts
├── auth/                    # Authentication routes and services
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   ├── auth.routes.ts
│   ├── auth.entity.ts
├── utils/                   # Helper utilities
│   └── role.ts              # Enum for roles (Admin, Employee)
├── data-source.ts           # TypeORM Data Source (DB configuration)
├── middleware/              # Middleware for validation, authorization, error handling
│   ├── authorize.ts
│   └── validate-request.ts
├── app.ts                   # Entry point for Express application
├── .env                     # Environment variables (database URL, JWT secret)
├── README.md                # Project documentation
└── package.json             # Project dependencies and scripts
```

---

## **API Endpoints**

### **🔐 Authentication (`/auth/`)**

| Method | Endpoint              | Description                | Authentication |
| ------ | --------------------- | -------------------------- | -------------- |
| POST   | `/auth/login`         | User login, returns tokens | None           |
| POST   | `/auth/refresh-token` | Issue new access token     | Authenticated  |
| POST   | `/auth/revoke-token`  | Revoke a refresh token     | Authenticated  |
| POST   | `/auth/logout`        | Log out and clear token    | Authenticated  |

### **👤 Accounts (`/accounts/`)**

| Method | Endpoint                  | Description                          | Authentication |
| ------ | ------------------------- | ------------------------------------ | -------------- |
| POST   | `/accounts/register`      | Register with email & password       | None           |
| POST   | `/accounts/verify-email`  | Verify email via token               | None           |
| POST   | `/accounts/authenticate`  | Authenticate user and get JWT tokens | None           |
| POST   | `/accounts/refresh-token` | Refresh JWT token                    | Authenticated  |
| POST   | `/accounts/revoke-token`  | Revoke refresh token                 | Authenticated  |
| GET    | `/accounts`               | Get all accounts (Admin only)        | Admin          |
| GET    | `/accounts/:id`           | Get single account                   | Authenticated  |
| PUT    | `/accounts/:id`           | Update email/password                | Authenticated  |
| DELETE | `/accounts/:id`           | Delete an account (Admin only)       | Admin          |

---

### **🧑‍💼 Employees (`/employees/`)**

| Method | Endpoint                  | Description                         | Authentication |
| ------ | ------------------------- | ----------------------------------- | -------------- |
| POST   | `/employees`              | Create employee (Admin only)        | Admin          |
| GET    | `/employees`              | List all employees                  | Authenticated  |
| GET    | `/employees/:id`          | Get single employee                 | Authenticated  |
| PUT    | `/employees/:id`          | Update employee info                | Admin          |
| DELETE | `/employees/:id`          | Remove employee (Admin only)        | Admin          |
| POST   | `/employees/:id/transfer` | Transfer employee to new department | Admin          |

---

### **🏢 Departments (`/departments/`)**

| Method | Endpoint           | Description                    | Authentication |
| ------ | ------------------ | ------------------------------ | -------------- |
| POST   | `/departments`     | Create department (Admin only) | Admin          |
| GET    | `/departments`     | List all departments           | Authenticated  |
| GET    | `/departments/:id` | Get one department             | Authenticated  |
| PUT    | `/departments/:id` | Update department              | Admin          |
| DELETE | `/departments/:id` | Delete department              | Admin          |

---

### **🔄 Workflows (`/workflows/`)**

| Method | Endpoint                          | Description                               | Authentication |
| ------ | --------------------------------- | ----------------------------------------- | -------------- |
| POST   | `/workflows`                      | Create workflow (Admin only)              | Admin          |
| GET    | `/workflows/employee/:employeeId` | Get workflows for an employee             | Authenticated  |
| PUT    | `/workflows/:id/status`           | Update status (Pending/Approved/Rejected) | Admin          |
| POST   | `/workflows/onboarding`           | Initiate employee onboarding              | Admin          |

---

### **📥 Requests (`/requests/`)**

| Method | Endpoint        | Description                             | Authentication |
| ------ | --------------- | --------------------------------------- | -------------- |
| POST   | `/requests`     | Create request (leave, equipment, etc.) | Authenticated  |
| GET    | `/requests`     | Admin: view all requests                | Admin          |
| GET    | `/requests/my`  | Employee: view own requests             | Authenticated  |
| GET    | `/requests/:id` | Get request by ID                       | Authenticated  |
| PUT    | `/requests/:id` | Admin: update status/items              | Admin          |
| DELETE | `/requests/:id` | Delete request (Admin only)             | Admin          |

---

## **Setting Up the Project**

### 1. **Clone the Repository**

```bash
git clone <repository-url>
cd <project-directory>
```

### 2. **Install Dependencies**

```bash
npm install
```

### 3. **Set up Environment Variables**

Copy `.env.example` to `.env` and configure the following:

```
JWT_SECRET=your_jwt_secret_key
APP_PORT=4000
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your_db_username
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
```

### 4. **Run the Development Server**

```bash
npm run dev
```

### 5. **Testing the API**

You can now test the API endpoints using **Postman** or **cURL**. Here are a few examples:

#### **POST /accounts/register**

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "password": "Password123!"
}
```

---




# 📘 LET Mastery Angular Project Task Board
> 🧵 Branching Strategy:  
- Base Branch: `develop`  
- Main Release Branch: `main`  
- All features branched from `develop`  
- Naming Convention: `feature/<module-name>-<task>`

---

## 📂 General Setup
- [x] `ng new let-mastery-frontend --style=scss`
- [x] Set base branch to `develop`
- [x] Install routing and SCSS support
- [ ] Setup global layout (shell: sidebar, header, footer)
- [ ] Setup shared module for reusable components

> **Git Branch:** `feature/layout-shell`

---

## 🔐 Accounts Module (Registration, Login, Auth)
- [ ] Register page
- [ ] Login page
- [ ] Email verification
- [ ] JWT handling (access/refresh)
- [ ] Role-based access (Admin, User)
- [ ] Guard setup (AuthGuard, RoleGuard)

> **Git Branch:** `feature/accounts-auth`

---

## 👥 Employees Module
- [ ] Employee list
- [ ] Add/Edit employee form
- [ ] Employee details page
- [ ] Transfer employee to another department

> **Git Branch:** `feature/employees-crud`

---

## 🏢 Departments Module
- [ ] Department list
- [ ] Add/Edit department
- [ ] Department details

> **Git Branch:** `feature/departments-crud`

---

## 🔄 Workflows Module
- [ ] Create onboarding workflow
- [ ] Assign workflows to employee
- [ ] Update workflow status

> **Git Branch:** `feature/workflows-onboarding`

---

## 📨 Requests Module
- [ ] Submit request (user)
- [ ] Admin view all requests
- [ ] View requests by employee
- [ ] Update/Delete requests (admin)

> **Git Branch:** `feature/requests-crud`

---

## 🛠 Shared & Core
- [ ] Shared UI components (button, card, modal, spinner)
- [ ] Error page / Not Found
- [ ] Core services (API, Auth, Token, Toast)
- [ ] Interceptors (Auth, Error)
- [ ] Guards

> **Git Branch:** `feature/core-shared`

---

## 🧪 Testing and Final Touches
- [ ] Protect routes by role
- [ ] Responsive layout
- [ ] Basic unit tests
- [ ] Polish UI and animations
- [ ] Final bug fixes
- [ ] Merge develop into main

> **Git Branch:** `release/v1.0.0`

---

## 🧾 Git Flow Summary
```bash
# create base branch
git checkout -b develop

# create a feature branch
git checkout -b feature/<module-task>

# after committing to feature
git push origin feature/<module-task>

# when done
gh pr create --base develop

# merge and clean
git checkout develop
git merge feature/<module-task>
git branch -d feature/<module-task>
