import React, {useState} from 'react';



export default function Navbar({sendDataToParent}) {
    const [active, setActive] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    
    const handleLinkClick = (index) => {
      setActive(index);
      setMenuOpen(false);
      sendDataToParent(false);
    };
  
    const handleMenu = () => {
      const newMenuState = !menuOpen;
      setMenuOpen(newMenuState);
      sendDataToParent(newMenuState);
    };
  
   return (
    <>
    <div className="container mx-auto flex justify-between items-center pt-8 mb-12 max-[426px]:mb-6 max-[426px]:block">
        <div className="title max-[426px]:flex max-[426px]:justify-between max-[426px]:items-center">     
            <a href="/">
            <h1 className={`text-3xl max-[426px]:text-base italic text-[#7e9342] hover:text-blue signature`} onClick={() => handleLinkClick(0)}>Emma Cunningham</h1>
            </a>     
          <button className="text-3xl hidden max-[426px]:block" onClick={() => handleMenu()}></button>
        </div>
        <nav className={`flex gap-10 max-[426px]:flex-col max-[426px]:mt-10 ${menuOpen ? "max-[426px]:flex" : "max-[426px]:hidden"} `}>
            <a href="#about" className={`text-[#7e9342] hover:text-black pb-1 hover:border-b text-lg transition-all ${active === 0 ? "active" : "deactive"}`} onClick={() => handleLinkClick(0)}>
              About
            </a>
            <a href="#skills" className={`text-[#7e9342] hover:text-black pb-1 hover:border-b text-lg transition-all ${active === 1 ? "active" : "deactive"}`} onClick={() => handleLinkClick(1)}>
              Skills
            </a>
            <a href="#projects" className={`text-[#7e9342] hover:text-black pb-1 hover:border-b text-lg transition-all ${active === 2 ? "active" : "deactive"}`} onClick={() => handleLinkClick(2)}>
              Portfolio
            </a>
            <a href="#contact" className={`text-[#7e9342] hover:text-green-500 pb-1 hover:border-b text-lg transition-all ${active === 3 ? "active" : "deactive"}`} onClick={() => handleLinkClick(3)}>
              Contact Me
            </a>
        </nav>  
        
    </div>
    </>
   )
}
