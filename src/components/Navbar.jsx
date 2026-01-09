import { CartWidget } from './CartWidget.jsx';

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-sm bg-white">
      <div className="text-2xl font-black text-blue-600">
        <h1>BOURY</h1>
      </div>

      <ul className="flex gap-10 font-semibold text-gray-600">
        <li><a href="#" className="hover:text-blue-600 transition-all">Cuadros</a></li>
        <li><a href="#" className="hover:text-blue-600 transition-all">Posters</a></li>
        <li><a href="#" className="hover:text-blue-600 transition-all">Tazas</a></li>
        <li><a href="#" className="hover:text-blue-600 transition-all">Stickers</a></li>
      </ul>

      <CartWidget />
      
    </nav>
  );
};


