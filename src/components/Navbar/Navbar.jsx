import React, { useState, useEffect } from 'react';
import { bio } from '../../data/constant';
import router from 'react-scroll';
import {Link} from 'react-router-dom';

function Navbar() {
  const textStyle =
    'text-lg font-medium hover:text-FE7BE5 transition ease-in-out delay-150 cursor-pointer';

  const [mobileResponsive, setMobileResponsive] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobileResponsive(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed top-0 z-50 w-full">
      {/* Desktop View */}
      {!mobileResponsive ? (
        <div
          className="flex items-center justify-evenly text-white pt-5 pb-4"
          style={{ gap: '15rem', backgroundColor: '#313866' }}
        >
          <h1 className="text-3xl font-bold">Portfolio</h1>
          <div className="flex gap-6">
            <router.Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className={textStyle}
            >
              About
            </router.Link>
            <router.Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className={textStyle}
            >
              Skills
            </router.Link>
            <router.Link
              to="experience"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className={textStyle}
            >
              Experience
            </router.Link>
            <router.Link
              to="education"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              className={textStyle}
            >
              Education
            </router.Link>
            <Link to="/blog" className={textStyle}>
            Blog
            </Link>
            <router.Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              className={textStyle}
            >
              Contact
            </router.Link>
          </div>

          <div>
            <button className="border-2 border-FE7BE5 w-40 p-2 rounded-3xl text-FE7BE5 transition ease-in-out delay-150 hover:bg-FE7BE5 hover:text-white">
              <a className="text-lg font-medium " href={bio.github}>
                GitHub Profile
              </a>
            </button>
          </div>
        </div>
      ) : (
        // Mobile View
        <div className="bg-[#313866] p-4 text-white">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Portfolio</h1>
            <button
              className="text-xl focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? '✖️' : '☰'}
            </button>
          </div>
          {menuOpen && (
            <div className="flex flex-col gap-4 mt-4">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className={textStyle}
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className={textStyle}
                onClick={() => setMenuOpen(false)}
              >
                Skills
              </Link>
              <Link
                to="experience"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className={textStyle}
                onClick={() => setMenuOpen(false)}
              >
                Experience
              </Link>
              <Link
                to="education"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                className={textStyle}
                onClick={() => setMenuOpen(false)}
              >
                Education
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                className={textStyle}
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href={bio.github}
                className="text-lg font-medium text-FE7BE5 border-t border-gray-400 pt-2 mt-2"
              >
                GitHub Profile
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Navbar;
