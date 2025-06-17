# PrimeroMiComercio

## Description

This web application project was developed as part of the **ISIS2007 Diseño de Productos e Innovación en TI** course at _Universidad de Los Andes_. Primero mi Comercio was designed to empower small business owners to take full control of their finances, improve cost efficiency, and maximize profitability. 

Users can create an account, securely log in, and immediately access a built-in Dialogflow chatbot that provides real-time analysis, answers questions on demand, and delivers tailored recommendations for pricing strategies, expense reduction, and “what-if” forecasting. Whether you’re tracking historical trends or exploring future scenarios, it offers clear, conversational insights that helps users make smarter, data-driven decisions every day.

<img src="public/images/landing page.jpg" alt="Landing preview" width="700"/>

## Visit the website

[Launch Primero mi Comercio Web App](https://page-pmc.onrender.com)

## Project Documentation

[Project Pitch Presentation](https://www.canva.com/design/DAGqdGC5agU/fW2DqXZrm3aKBlXuERm8_w/edit?utm_content=DAGqdGC5agU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

## Tech Stack

- **Backend:** Next.js, NextAuth.js and Typescript
- **Frontend:** Next.js and React
- **Data Persistence:** Implemented using MongoDB, a NoSQL document-oriented database.
- **Agent:** Google Cloud and Vertex AI

## Prerequisites

Before running the project, make sure you have the following installed and set up:

- **Node.js** v16.x or higher, check with
```bash
  node --version
  ```
- **npm** (included with Node.js)
```bash
  npm install
  ```
- Create a file `.env.local` in the project's root with the following variable
```bash
  # MongoDB Atlas connection URI
  MONGODB_URI="mongodb+srv://<user>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority"
  ```
- The Database must have a collection named `"Users"`

## How to run 

1. Clone the repository
```bash
  git clone https://github.com/Dav1d10/PrimeroMiComercio.git
  ```
2. Open a terminal and navigate to the main directory
```bash
  cd PrimeroMiComercio
  ```
3. Run the application
```bash
  npm run dev
  ```
4. The application will start on `http://localhost:3000`

## Collaborators

- Kevin Hernandez
- Ariadna Vargas
- Alejandro Abril
- Mauricio Martinez
- Juan Diego Diaz
