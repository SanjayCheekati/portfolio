import { useState } from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Sanjay Cheekati
          </h1>
          <p className="text-xl text-gray-300">
            Software Development Engineer | MERN Stack & Machine Learning
          </p>
        </header>
        
        <main className="max-w-4xl mx-auto">
          <section className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl">
            <h2 className="text-3xl font-bold mb-4 text-cyan-400">Welcome to My Portfolio</h2>
            <p className="text-gray-300 mb-4">
              This is a placeholder for your portfolio content. Replace this with your actual components and content.
            </p>
            <p className="text-gray-400 text-sm">
              Built with React, Vite, and Tailwind CSS
            </p>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
