import { Link as ScrollLink } from 'react-scroll';
import resumePDF from '../assets/Zubair_Sarki.pdf';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 fixed w-full top-0 z-10 flex justify-between items-center flex-wrap relative">
      <h1 className="text-2xl font-bold md:text-4xl lg:text-5xl mb-2">ZUBI</h1>
      <ul className="flex flex-col w-full items-center gap-2 mt-4 md:flex-row md:w-auto md:mt-0 md:gap-6">
        <li>
          <a
            href={resumePDF}
            download
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
