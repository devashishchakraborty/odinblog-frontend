# Blog Frontend

This repository contains the frontend application for the Blog project, allowing users to read blog posts and submit comments.

## Features

- **Responsive Design**: Ensures optimal viewing experience across devices.
- **Post Listing**: View all published blog posts.
- **Post Details**: Read full blog posts and view associated comments.
- **Comment Submission**: Users can submit comments on posts without requiring an account.

## Technologies Used

- **React.js**: JavaScript library for building user interfaces.
- **React Router**: For handling in-app routing.
- **JWT**: For secure admin authentication.
- **PicoCSS**: Lightweight CSS Library for styling.
- **react-markdown**: JS Library to parse Markdown content.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/devashishchakraborty/odinblog-frontend.git
   cd odinblog-frontend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root directory and add the following variable:

   ```env
   VITE_BEARER_TOKEN=
   ```
   Get the bearer token from your profile page of the [OdinBlog Dashboard](https://github.com/devashishchakraborty/odinblog-dashboard).

4. **Start the development server**:

   ```bash
   npm run dev
   ```

   The application will be accessible at `http://localhost:5173`.

