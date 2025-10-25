# 🎟️ TicketApp (React Version)
Frontend Stage 2 Task – Multi-Framework Ticket Web App  
Built with **React + Vite**

---

## 🚀 Overview
**TicketApp** is a ticket management web application that allows users to create, view, edit, and delete support tickets.  
This version is implemented using **React**, as part of the Stage 2 “Multi-Framework Ticket App” challenge, which also requires equivalent versions in **Vue.js** and **Twig**.

Each version shares the **same design language**, **layout structure**, and **feature set** for consistency.

---

## 🧩 Features

### 🏠 Landing Page
- Hero section with **wavy background (SVG/CSS clip-path)**
- Decorative circles and responsive box sections
- Call-to-Action buttons: “Login” and “Get Started”
- Fully responsive (mobile, tablet, desktop)
- Consistent footer and centered layout (`max-width: 1440px`)

### 🔐 Authentication
- Login and Signup pages with **form validation**
- Inline error messages and toast notifications for invalid inputs
- **Authentication simulation** using `localStorage`
  - Key: `ticketapp_session`
- Redirects to dashboard on successful login
- Unauthorized users are automatically redirected to `/login`

### 📊 Dashboard
- Displays ticket statistics:
  - Total Tickets
  - Open Tickets
  - Resolved Tickets
- Navigation link to ticket management screen
- Logout button clears session and redirects to login

### 🎫 Ticket Management (CRUD)
- Create new tickets (form validation included)
- View existing tickets as **cards**
- Edit or Delete tickets with confirmation prompts
- Validation rules:
  - `title` and `status` are mandatory
  - `status` only accepts: `"open"`, `"in_progress"`, `"closed"`
- Inline/toast messages for all actions
- Real-time updates reflected in UI

### ⚙️ Additional Features
- Protected routes (Dashboard & Tickets require session)
- Session token stored in localStorage
- Consistent layout and design across all screens
- Color-coded status tags:
  - 🟢 `open`
  - 🟡 `in_progress`
  - ⚫ `closed`

---

## 🧱 Tech Stack

| Tool | Purpose |
|------|----------|
| **React (Vite)** | Frontend framework |
| **React Router DOM** | Routing and protected routes |
| **React Icons** | SVG icons |
| **CSS3 / Flexbox / Grid** | Styling and responsive layout |
| **LocalStorage** | Auth simulation |
| **Toast / Inline Messages** | Feedback for actions |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/ticketapp-react.git
cd ticketapp-react

2️⃣ Install Dependencies
npm install

3️⃣ Run the Development Server
npm run dev

4️⃣ Build for Production
npm run build

The app will start locally (usually at http://localhost:5173)

🧭 Navigation Routes
Route	Description
/	Landing Page
/login	Login Page
/signup	Signup Page
/dashboard	Protected Dashboard
/tickets	Ticket Management Screen

Unauthorized users trying to access /dashboard or /tickets are redirected to /login.

👤 Example Credentials

Use any valid email/password combination during signup.
After signing up, log in with the same credentials.

Stored locally in localStorage under the key:
ticketapp_session

♿ Accessibility Notes

Semantic HTML elements used (nav, main, footer, etc.)

Buttons and links have aria-labels

High color contrast maintained

Focus outlines visible for keyboard navigation

Alt text added to images and decorative shapes ignored via aria-hidden="true"

🧠 State Management Overview

React’s built-in useState and useEffect manage UI and data state.

Tickets are stored in localStorage for persistence.

Components communicate via props (no external state library).

🧪 Known Issues

Data persistence is limited to browser localStorage (resets if cleared).

Toast messages depend on internal state — not a third-party system.

🌐 Live Demo

🔗 Live React App on Netlify

🪴 Related Projects
Framework	Repository	Live Demo
React ⚛️	ticketapp-react
	Live Link

Vue.js 🧩	ticketapp-vue
	Live Link

Twig 🪶	ticketapp-twig
	Live Link
👨‍💻 Author

Khalid Misbaudeen
Software Developer & UI Enthusiast
📧 khalidmisbaudeen04@gmail.com