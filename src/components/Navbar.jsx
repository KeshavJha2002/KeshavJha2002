import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sm:px-4 px-6 w-full flex items-center py-3 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-12 h-12 object-contain rounded-[50%]' />
        </Link>

        <div className='sm:flex gap-5'>
          <div
              className={`underline ${"text-secondary"
              } hover:text-white text-[15px] font-medium cursor-pointer`}
            >
              <a href="https://drive.google.com/drive/folders/13YGuvdkXQdyFzfuJd3YdUaG99dhCPz22?pli=1" target="_blank">Resume</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar