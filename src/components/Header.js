import React from 'react';
import { Link } from 'react-router-dom';
import { navigation } from 'constants.js';

function Header() {
  return (
    <header className="bg-gray-100 shadow-md py-4 text-gray-900 mb-4 header">
      <div className="container flex justify-between items-center lg:px-5">
        <h1 className="uppercase font-bold">App Thingy</h1>
        <nav>
          <ul className="flex">
            {navigation.map((item) => (
              <li
                className="px-2 hover:text-purple-600 trans trans-op"
                key={item.id}
              >
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
