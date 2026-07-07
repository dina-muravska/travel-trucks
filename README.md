# 🚐 TravelTrucks — Camper Rental Web Application

Modern web application for discovering, filtering, and booking camper rentals. 
This project focuses on building a robust frontend architecture with complex asynchronous data fetching, dynamic server-side filtering via query parameters, and modular component design.
The website showcases an extensive catalog of campers with detailed specifications, user reviews, and an interactive booking system.

---

## 🖼️ Preview

<img width="1861" height="780" alt="image" src="https://github.com/user-attachments/assets/50646cdc-a456-499f-8fe2-c3bf222f1694" />


---

## 🚀 Live Demo

- 🔗 Live Site: https://travel-trucks-rosy-one.vercel.app/
- 🔗 Repository: https://github.com/dina-muravska/travel-trucks

---

## ✨ Features

- 🖥️ Pixel-Perfect Desktop Layout – designed strictly according to the provided Figma design
- 🔄 Server-Side Filtering – dynamic search via query parameters for location, vehicle type, engine, and transmission type
- 📥 Infinite Scroll / Load More – seamless pagination that loads 4 more items at a time while preserving active filters
- 🗂️ Multitab Details Page – displays full camper specifications and user reviews (with a 5-star rating scale) in a separate browser tab
- 🖼️ Thumbnails Image Gallery – dynamic loop gallery for camper photos powered by Swiper.js
- 📅 Interactive Booking System – functional booking form with instant successful reservation notifications
- ⚡ Fast & Optimized – image optimization and efficient state management using TanStack Query (React Query)

---

## 🛠 Technologies Used

- **Next.js 14+ (App Router)**
- **TypeScript**
- **Data Fetching & State Management**
  - **Axios** – clean, instance-based HTTP requests
  - **TanStack React Query v5** – cached client-side queries and `useInfiniteQuery` pagination
- **UI & Styling**
  - **CSS Modules** – scoped, maintainable component styling
  - **React Icons (Remix Icons, Tabler Icons, Bootstrap Icons)** – pixel-perfect design matching
  - **Swiper.js** – loop gallery with thumbnail previews

---

## 🎨 Website Sections

- **Home Page** – introductory section with a CTA button ("View Now") leading to the catalog
- **Catalog Page** – split-screen layout with a filtering sidebar and an endless camper list
- **Camper Details Tab** – full specifications, structural breakdown, and review metrics

---

## 📦 Installation

1. Clone the repository:
```bash
git clone 
Install dependencies:

Bash
npm install
Set up your environment variables:
Create a .env.local file in the root directory and add the API endpoint:

Bash
npm run dev
Open http://localhost:3000 with your browser to see the result.

## 👨‍💻 Author

**Dina Muravska**

GitHub: https://github.com/dina-muravska

---

