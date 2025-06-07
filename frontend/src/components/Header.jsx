import { useState, useRef, useEffect } from "react";
import { Logo } from "./Logo";
import { FaSun, FaOpencart, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RiMenu4Line } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/Theme";

export function Header() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const { theme } = useSelector((state => state.theme))

  const handleLinkClick = () => setOpen(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    function handleScroll() {
      setOpen(false);
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  return (
    <div className="flex justify-between border border-t-0 border-slate-700 rounded-lg py-2 px-5 items-center">
      <div className="flex justify-center items-center gap-2 md:gap-4">
        <div className="md:hidden md:mr-5 relative">
          <button onClick={() => setOpen((prev) => !prev)}>
            <RiMenu4Line size={26} className="cursor-pointer text-slate-400" />
          </button>
          <AnimatePresence>
            {open && (
              <motion.div
                ref={dropdownRef}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute -left-3 top-10 mt-0 z-[9999] flex flex-col p-2 backdrop-blur supports-backdrop-blur:bg-white/95 text-gray-100 rounded-lg shadow-md w-40 border border-gray-700"
              >
                <a href="#home" onClick={handleLinkClick} className="text-slate-400 py-1 hover:text-cyan-500">Home</a>
                <a href="#men" onClick={handleLinkClick} className="text-slate-400 py-1 hover:text-cyan-500">Men</a>
                <a href="#women" onClick={handleLinkClick} className="text-slate-400 py-1 hover:text-cyan-500">Women</a>
                <a href="#accessory" onClick={handleLinkClick} className="text-slate-400 py-1 hover:text-cyan-500">Accessories</a>
                <a href="#about" onClick={handleLinkClick} className="text-slate-400 py-1 hover:text-cyan-500">About</a>
                <a href="#contact" onClick={handleLinkClick} className="text-slate-400 py-1 hover:text-cyan-500">Contact</a>
                <Link to="/sign-in">
                  <button className="py-1 px-3 flex bg-cyan-600 justify-center items-center border border-slate-500 rounded-lg w-full mt-2">
                    Sign in
                  </button>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <Logo />
      </div>
      <div className="hidden md:flex justify-between items-center gap-2 mr-5">
        <a className="!text-slate-400 !text-sm !font-thin !cursor-pointer button !hover:text-cyan-400" href="#home">Home</a>
        <a className="!text-slate-400 !text-sm !font-thin !cursor-pointer button !hover:text-cyan-400" href="#men">Men</a>
        <a className="!text-slate-400 !text-sm !font-thin !cursor-pointer button !hover:text-cyan-400" href="#women">Women</a>
        <a className="!text-slate-400 !text-sm !font-thin !cursor-pointer button !hover:text-cyan-400" href="#accessories">Accessories</a>
        <a className="!text-slate-400 !text-sm !font-thin !cursor-pointer button !hover:text-cyan-400" href="#kids">Kids</a>
        <a className="!text-slate-400 !text-sm !font-thin !cursor-pointer button !hover:text-cyan-400" href="#about">About</a>
        <a className="!text-slate-400 !text-sm !font-thin !cursor-pointer button !hover:text-cyan-400" href="#conatct">Contact</a>

      </div>
      <div className="flex justify-between items-center gap-4">
        <button onClick={()=>dispatch(toggleTheme())} className="rounded-full border border-slate-500 p-1.5">
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
        <button className="flex justify-center items-center text-lg">
          <FaOpencart />
        </button>
        <Link to="/sign-in">
          <button onClick={()=>setOpen(false)} className="py-1 px-3 hidden  md:flex justify-center items-center border border-slate-500 rounded-lg">
            Sign in
          </button>
        </Link>
      </div>
    </div>
  )
}
