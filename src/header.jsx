import React from 'react'

function Header({ onNavigate }) {
  const menuItems = [
    { label: 'HOME', page: 'home' },
    { label: 'ABOUT', page: 'about' },
    { label: 'SKILLS', page: 'skills' },
    { label: 'PROJECT', page: 'project' },
    { label: 'CONTACT', page: 'contact' },
  ];
  return (
    <header className="bg-gray-900 text-white shadow-md px-8 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold tracking-wide">DIP KALE</h1>
      <nav className="flex space-x-8">
        {menuItems.map(item => (
          <div
            key={item.page}
            className="cursor-pointer hover:text-teal-400 transition"
            onClick={() => onNavigate && onNavigate(item.page)}
          >
            {item.label}
          </div>
        ))}
      </nav>
    </header>
  )
}

export default Header