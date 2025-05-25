  <h1 align="center">Build a Modern Social Media Website</h1>
  <div>
    <img src="https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/-Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
    <img src="https://img.shields.io/badge/-TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  </div>
  <br />
</div>

## ⚙️ Tech Stack

- **React** for building the user interface
- **Vite** for fast development and build processes
- **TypeScript** for type safety and modern JavaScript features
- **Supabase** for backend services including authentication, real-time data, and storage
- **Tailwind CSS** for rapid and responsive styling

## ⚡️ Features

- **User Authentication via GitHub:**  
  Securely sign in with GitHub and display user avatars and usernames across the site.

- **Post Creation with Image Uploads:**  
  Create posts with rich content and optional image uploads, complete with the creator’s profile picture.

- **Dynamic Voting System:**  
  Thumbs up and thumbs down buttons with subtle white glow effects to indicate your vote.

- **Robust Commenting System:**  
  Engage in threaded discussions with nested replies, each showing the commenter’s username and timestamp.

- **Community & Category Support:**  
  Build a Reddit-like experience where posts are organized by communities, with posts displayed in a responsive grid.

- **Real-Time Data Updates:**  
  All interactions (posting, voting, commenting) update in real time using Supabase and React Query.

## 👌 Quick Start

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

### Cloning the Repository

Run the following commands in your terminal:

```bash
git clone
cd social-media
```

### Installation

Install the dependencies:

```bash
npm install
```

### Environment Variables

Create a file named `.env` in the project root and add your Supabase credentials and other configuration values:

```env
VITE_SUPABASE_URL=https://your-supabase-url.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### Running the Project

Start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.
