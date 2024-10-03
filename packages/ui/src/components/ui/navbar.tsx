import React from 'react';
import "@repo/ui/globals.css";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <a href="/" className="text-blue-600">Tab 1</a>
        </li>
        <li>
          <a href="/tab2" className="text-white hover:underline">Tab 2</a>
        </li>
        <li>
          <a href="/tab3" className="text-white hover:underline">Tab 3</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
