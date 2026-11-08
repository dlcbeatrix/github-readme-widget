# ⚡ GitHub Profile Pikachu Pet Widget

A dynamic SVG widget for GitHub profile READMEs that tracks live commit streaks and changes the pet's state based on daily activity.

Built with **Next.js**, **TypeScript**, **GitHub GraphQL API**, and **SVG Base64 Data URLs**.

---

## 📸 Overview

The widget fetches real-time contribution data via GitHub's GraphQL API and generates an SVG on demand. 
- **Streak > 0**: Pikachu is awake and active.
- **Streak = 0**: Pikachu goes to sleep.

---

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **API:** GitHub GraphQL API
- **Deployment:** Vercel

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone [https://github.com/dlcbeatrix/github-readme-widget.git](https://github.com/dlcbeatrix/github-readme-widget.git)
cd github-readme-widget

```

### 2. Install dependencies

```bash
npm install

```

### 3. Environment Setup

Create a `.env` file in the root directory and add your fine-grained GitHub Personal Access Token:

```env
GITHUB_TOKEN=your_github_personal_access_token

```

### 4. Run locally

```bash
npm run dev

```

Open `http://localhost:3000/api/pet` in your browser to inspect the SVG output.

---

## 📜 Credits & Acknowledgments

This project was built following the tutorial **"Create a GitHub Profile Pet with GraphQL"** created by [vishalya](https://www.codedex.io/@vishyyyyyyyyy) on **[Codédex](https://www.codedex.io/)**.
