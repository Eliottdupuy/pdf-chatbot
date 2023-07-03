# AI-Powered Document Interaction Application

This is a web application that allows users to interact with their documents using an AI chatbot. The app is able to parse and understand the content of the documents, respond to user queries, and offer customization options for the chatbot's responses.

## Technologies

- AI/NLP: OpenAI API
- Frontend: Next.js with React
- Backend: Supabase
- Deployment: Vercel

## Setup

1. Clone the repository
2. Install the dependencies with `npm install`
3. Copy the `.env.local.example` file to `.env.local` and fill in your Supabase credentials
4. Start the development server with `npm run dev`

## Project Structure

- `pages`: This directory contains all the pages of our application.
- `components`: This directory contains all the React components used across different pages.
- `lib`: This directory contains utility functions and configurations for Supabase and OpenAI API.
- `styles`: This directory contains all the CSS modules used in the project.
- `public`: This directory contains static files like images.

## Features

- User Authentication: Users can sign up and sign in to the application.
- Document Interaction: Users can upload their documents and interact with them using the AI chatbot.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)