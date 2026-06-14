<div align="center">
  <img src="/frontend/public/screenshot-for-readme.png" alt="Productify Demo App" width="100%" style="border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />

  <br />
  <br />

  <h1>✨ Productify - Next-Gen E-Commerce Platform ✨</h1>

  <p>
    <strong>A blazing fast, beautifully designed, full-stack product marketplace.</strong>
  </p>

  <p>
    <a href="#features">Features</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#quick-start">Quick Start</a> •
    <a href="#environment-variables">Configuration</a> •
    <a href="#contributing">Contributing</a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/React-19.0-blue.svg?style=for-the-badge&logo=react" alt="React" />
    <img src="https://img.shields.io/badge/Vite-7.0-purple.svg?style=for-the-badge&logo=vite" alt="Vite" />
    <img src="https://img.shields.io/badge/Node.js-20.x-green.svg?style=for-the-badge&logo=node.js" alt="Node" />
    <img src="https://img.shields.io/badge/PostgreSQL-16-blue.svg?style=for-the-badge&logo=postgresql" alt="Postgres" />
    <img src="https://img.shields.io/badge/Tailwind-4.1-38B2AC.svg?style=for-the-badge&logo=tailwind-css" alt="Tailwind" />
  </p>
</div>

---

## 🚀 About Productify

Productify is a premium, high-performance web application designed for creators and sellers to showcase their products to the world. It provides a seamless, immersive user experience with instant loading times, optimistic UI updates, and an elegant responsive design.

Whether you're looking for an enterprise-ready architecture or a beautiful template for your next big idea, Productify sets the standard.

## ✨ High-Impact Features

- 🛒 **Full-Stack Marketplace:** Complete end-to-end flow from browsing to creating products.
- 🎨 **Gorgeous UI/UX:** Crafted with Tailwind CSS v4 and DaisyUI for an immersive, modern aesthetic.
- ⚡ **Lightning Fast:** Powered by Vite & TanStack Query for instantaneous data fetching and caching.
- 🔐 **Secure Authentication:** Enterprise-grade security out-of-the-box using Clerk.
- 🗄️ **Robust Database:** Fully typed PostgreSQL interactions using Drizzle ORM.
- 📱 **Mobile First:** Flawless responsive design that looks stunning on any device.
- 💬 **Interactive Comments:** Real-time engagement system built right in.

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS v4 + DaisyUI
- **Data Fetching:** TanStack React Query v5
- **Icons:** Lucide React
- **Routing:** React Router v7

### Backend
- **Runtime:** Node.js + Express
- **Language:** TypeScript
- **Database:** PostgreSQL
- **ORM:** Drizzle ORM
- **Authentication:** Clerk Express Middleware

---

## ⚡ Quick Start

Follow these steps to get your local development environment up and running in minutes!

### 1. Clone the Repository
```bash
git clone https://github.com/santhoshkumar7507/PERM-Stack-App.git
cd PERM-Stack-App
```

### 2. Install Dependencies
We use separate package managers for the backend and frontend to keep things clean.
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 3. Environment Setup
Create a `.env` file in both the `backend` and `frontend` directories using the templates below.

---

## 🔐 Environment Variables

### Backend (`/backend/.env`)
```bash
PORT=3000
DATABASE_URL=postgresql://user:password@localhost:5432/productify
NODE_ENV=development

# Clerk Authentication Keys
CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_publishable_key
CLERK_SECRET_KEY=sk_test_your_clerk_secret_key

FRONTEND_URL=http://localhost:5173
```

### Frontend (`/frontend/.env`)
```bash
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_publishable_key
VITE_API_URL=http://localhost:3000/api
```

---

## 🏃‍♂️ Running the Application

Open two terminal windows to run the frontend and backend simultaneously.

**Terminal 1 (Backend Server):**
```bash
cd backend
npm run db:push  # Sync your database schema
npm run dev      # Start the API server on port 3000
```

**Terminal 2 (Frontend Client):**
```bash
cd frontend
npm run dev      # Start the Vite dev server on port 5173
```

🎉 Open `http://localhost:5173` in your browser and enjoy the magic!

---

## 🤝 Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<div align="center">
  <p>Made with ❤️ by the community</p>
</div>
