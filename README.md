# Next.js Authentication Test App

This project is a simple authentication system using **Next.js** and **NextAuth.js** with **Credentials Provider** & **ShadCN UI**.

## Features

- User login and registration with **NextAuth.js**
- Authentication using **Credentials Provider**
- Protected **Dashboard** page
- UI components built with **React & Tailwind CSS**


## Project Structure

```
nextauth-trial/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── [...nextauth]/route.js
│   │   ├── register/
│   │   │   ├── route.js
│   ├── dashboard/
│   │   ├── page.js
│   ├── login/
│   │   ├── page.js
│   ├── register/
│   │   ├── page.js
│   │   ├── layout.js
│   │   ├── globals.css
│   ├── images/
│   │   ├── user.png
│   ├── layout.js
│   ├── page.js
│
├── components/
│   ├── ui/
        ├── button.jsx
        ├── input.jsx
│   ├── NavBar.jsx
│   ├── react-toast.js
│
├── config/
│   ├── db.js
│   ├── lib/
│
├── models/
│   ├── User.js
│
├── utils/
│   ├── SessionProvider.js
│
├── .gitignore
├── package.json
├── postcss.config.mjs
├── next.config.mjs
├── eslint.config.mjs
├── README.md
```


## Tech Stack

- **Next.js**
- **NextAuth.js (Credentials Provider)**
- **MongoDB** (via `db.js` in `config/`)
- **NextAuth**
- **UI Libraries**: Tailwind CSS, ShadCN UI
- **Bcryptjs**: I used it for password hashing
- **react-toastify**: For better notifications alert box



