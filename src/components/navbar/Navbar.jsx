import { useState } from "react";
import { Menu } from "lucide-react";
import { navigation } from "../../data/navigation";
import MobileMenu from "./MobileMenu";
import NavDropdown from "./NavDropdown";
import assets from "../../assets/assets";
import { FaArrowRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation()
  return (
    <>
      <nav className="sticky top-0  shadow z-30 py-2 bg-gray-100">
        <div className="w-[95%] mx-auto px-0 md:px-4">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <div className="text-xl font-bold">
              <img src={assets.centerForGuid} alt="Logo" className="xl:h-24 lg:h-16 h-13 w-60 xl:w-auto" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) =>
                item.children ? (
                  <NavDropdown
                    key={item.title}
                    item={item}
                    className={`hover:text-blue-600 ${
                      location.pathname === item.path
                        ? "text-blue-700 font-semibold"
                        : "text-black"
                    }`}
                  />
                ) : (
                  <Link
                    key={item.title}
                    to={item.path}
                    className={`hover:text-blue-600 ${
                      location.pathname === item.path
                        ? "text-blue-700 font-semibold"
                        : "text-black"
                    }`}
                  >
                    {item.title}
                  </Link>
                )
              )}
            </div>
             <Link
              to="https://htain-mis.icmr.org.in/login"
              target="_blank"
              className="hidden  hero-btn 2xl:inline-flex items-center gap-3 rounded-full bg-blue-800 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-700"
            >
            
             Guidelines Submission Portal
              <FaArrowRight />
            </Link>
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        navigation={navigation}
      />
    </>
  );
};

export default Navbar;