import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "tailwindcss";
import './index.css'



function Navbar() {
  return (
    <nav className="bg-orange-500 p-4 flex justify-around items-center text-white">
      <a href="#home" className="hover:underline"> Home</a>
      <a href="#about" className="hover:underline"> About</a>
      <a href="#contact" className="hover:underline"> Contact</a>
    </nav>
  )
}

function Card() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 flex flex-col">
      <div className="px-6 py-4 flex-grow">
        <div className="font-bold text-xl mb-2">Título de la Card</div>
        <p className="text-gray-700 text-base">
          Este es un texto dentro de la tarjeta. Aquí puedes poner cualquier contenido que quieras.
        </p>
      </div>
      <div className="px-6 py-4">
        <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
          Botón
        </button>
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <main className="flex justify-center items-center min-h-screen bg-gray-100">
        <Card />
      </main>
    </>
  )
}

export default App