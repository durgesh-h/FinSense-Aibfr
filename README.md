# 🔸FinSense-Main-Dev🔸

- Explore the Secure Transactions with FinSense
- Seamlessly manage transactions, track expenses, and gain insights—securely, anytime & anywhere.
<p align="center">
 <img src="https://github.com/user-attachments/assets/08a3319d-b756-4efa-bf74-5bf52fa7a55c" width="500" height="150">
</p>

![RBAC_Finance_DFD_Square](https://github.com/user-attachments/assets/f51dd2e3-7f53-4e6e-ae86-f791585b4024)

# 🔺About the Project

FinSense is a secure and efficient financial management system that leverages Role-Based Access Control (RBAC) to manage user roles, permissions, and transactions in a structured workflow. The project integrates modern design principles, responsive layouts, and comprehensive transaction tracking.

# 🔺 Live Demo

- https://finance-backend-oeqh.onrender.com <br>

# 🔺Key Roles and Their Functionalities

## Roles in the System

### 1.User

- Default role for any newly created account.
- TestEmail: User@mail.com | Password: User
- Redirected to a Basic User Dashboard with limited access.

### 2.Admin

- TestEmail: Admin@mail.com | Password: Admin
- Redirected to the Admin Dashboard.
- Full control over all functionalities:
- Assign roles to users.
- Manage user permissions (CRUD operations).
- View, edit, delete, and manage all users and roles.

### 3.Accountant

- TestEmail: Acc@mail.com | Password: Acc
- Redirected to the Accountant Dashboard.
- Core responsibilities:
- Create, edit, and delete transactions (income/expenses).
- Forward transactions to the next stage (Pending → Verified).
- Download transactions as PDFs (e.g., pay vouchers, note sheets).
- Recreate rejected transactions.

### 4.Bursar

- TestEmail: Bursar@mail.com | Password: Bursar
- Redirected to the Bursar Dashboard.
- Core responsibilities:
- Verify transactions forwarded by the Accountant.
- Reject transactions if required.
- View and download transactions in PDF format.

### 5.Principal

- TestEmail: Principal@mail.com | Password: Principal
- Redirected to the Principal Dashboard.
- Core responsibilities:
- Approve or reject verified transactions.
- View and download transaction details.

# 🔺Workflow of the Application

## 1. Role Assignment (Admin Role)

- Admin logs in and assigns roles to newly created users (default is User).
- Admin can manage users (add, edit, delete) and their permissions dynamically.

## 2. Transaction Lifecycle (Handled by Accountant, Bursar, and Principal)

### Create Transactions:

- The Accountant creates income/expense transactions and forwards them in a Pending state to the Bursar.
- Accountants can edit or delete transactions at this stage.

### Verification (Bursar):

- The Bursar reviews the pending transactions and either verifies or rejects them.
- Verified transactions proceed to the Principal; rejected transactions return to the Accountant for correction.

### Approval (Principal):

- The Principal reviews verified transactions and either approves or rejects them.
- Approved transactions proceed to the Completed stage.

### Completion (Accountant):

- The Accountant finalizes approved transactions, marking them as Completed.
- Rejected transactions return to the Accountant for recreation or further edits.

# 🔺Key Features

## Role-Based Access Control (RBAC)

- Dynamic role assignment and permission management.
- Role-specific dashboards for Admin, Accountant, Bursar, and Principal.

## Transaction Management

- Multi-stage transaction lifecycle (Pending → Verified → Approved → Completed).
- Comprehensive transaction tracking with options to edit, delete, and download.

## Advanced Features

- Search/Sort and Filter Functionality: Quickly locate users, roles, or transactions with a powerful search/sort and filtering mechanism.
- Recurring Transactions: Automate regular entries such as monthly bills or salary income.
- All roles (Accountant, Bursar, Principal) can download transaction details in PDF format, such as pay vouchers and note sheets, at any stage.
- Data Visualization: Interactive graphs and charts to track spending and savings patterns.

# 🔺What technologies were used?

## Frontend:

- React: For building a dynamic and efficient user interface.
- React DOM: To render React components in the DOM.
- React Router DOM: For managing client-side routing seamlessly.
- ## Styling:
  - Animate.css: For adding smooth CSS animations.
  - Tailwind CSS: Utility-first CSS framework for modern and responsive styling.
  - Framer Motion: For smooth and attractive animations.
  - Scroll Lock: To manage scrolling behavior in the UI.

## State Management:

- React Redux: To manage global state effectively.
- Redux Persist: To persist and rehydrate Redux state.

## Notifications and Alerts:

- React Hot Toast: For toast notifications with easy-to-use APIs.
- React Toastify: For additional, customizable notification options.

## Data Visualization:

- Recharts: A library for rendering customizable charts.

## File Management and Exporting:

- html2canvas: For capturing screenshots of HTML elements.
- html2pdf.js: To generate PDF documents from HTML.
- jsPDF: To create and customize PDF files.
- XLSX: For handling spreadsheet data and exports.

## Utilities:

- MVC: (Model-View-Controller) Architecture is used for Backend.
- Axios: For making HTTP requests to the backend.
- dotenv: For managing environment variables securely.
- env: A lightweight module to parse .env files.

## Icons and Components:

- Lucide React: Icon library for adding beautiful SVG icons.
- React Just Parallax: For adding parallax scrolling effects.
- React Modal: To create and manage modals in the application.

This is a [Vite.js](https://vitejs.dev) project bootstrapped with [`$create vite@latest`](https://vitejs.dev/guide/) which is a React.js tool for building Web Applications.

# 🔺Getting Started

First, Fork this repo:
Head over to the backend directory to run the server.

```bash
cd backend
```

Then, Install NPM:

```bash
npm install
```

Then, start the server:

```bash
nodemon start
# or
npm start
```

On [http://localhost:4000](http://localhost:4000) your server will be started.

Now, open new terminal
Then, head to the clients directory for the Frontend.

```bash
cd client
```

Then, Install NPM:

```bash
npm install
```

Then, start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

You can start editing the page by modifying `src/main.jsx`. The page auto-updates as you edit the file.
</br>

### To Login into the Application use the above Rolewise Test Email-Password.

## 📸 ScreenShots

![image](https://github.com/user-attachments/assets/f856723b-87f1-401d-9cc5-693c122bc1bc)
![image](https://github.com/user-attachments/assets/295573b5-8067-41a7-88b2-121271ddc4b8)
![image](https://github.com/user-attachments/assets/9d5b37b6-5a2f-4dd1-af39-99b3ae0f44c2)
![image](https://github.com/user-attachments/assets/f1eab5a3-ebef-4088-9a50-5c66fedbf982)
![image](https://github.com/user-attachments/assets/82e3f53d-fb31-4557-887f-d2d9ddcb971f)
![image](https://github.com/user-attachments/assets/b99c1556-b8f8-48f1-89ce-f3738afbc610)
