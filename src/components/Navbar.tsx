import  { useState, useEffect ,  } from 'react';
import { Building2, Menu, X } from 'lucide-react';
import "./Navbar.css"


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg ' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8  text-black" />
            <span id='logoname' className="text-2xl font-bold  font-sarif text-black"> Deepa Construction</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
         
            <a href="#home" className="text-black  transition-colors">Home</a>
            <a href="#projects" className="text-black  transition-colors">Projects</a>
            <a href="#testimonials" className="text-black  transition-colors">Testimonials</a>
            <a href="#contact" className="text-black   transition-colors">Contact</a>

          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 h-64' : 'opacity-0 h-0'
      } overflow-hidden bg-white`}>
        <div className="px-4 pt-2 pb-3 space-y-1">
          <a href="#home" className="block px-3 py-2 text-gray-900 hover:text-blue-600">Home</a>
          <a href="#projects" className="block px-3 py-2 text-gray-900 hover:text-blue-600">Projects</a>
          <a href="#testimonials" className="block px-3 py-2 text-gray-900 hover:text-blue-600">Testimonials</a>
          <a href="#contact" className="block px-3 py-2 text-gray-900 hover:text-blue-600">Contact</a>
        </div>
      </div>
    </nav>
  );
}