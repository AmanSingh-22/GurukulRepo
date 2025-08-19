import { Link } from "react-router-dom";

const Footer = () => {
  const gurukulLocations = [
    { name: "Bangalore", link: "bangalore" },
    { name: "Bodhgaya", link: "bodhgaya" },
    { name: "Chamba", link: "chamba" },
    { name: "Cuttack", link: "cuttack" },
    { name: "Dhubri", link: "dhubri" },
    { name: "Farukhabad", link: "farukhabad" },
    { name: "Jabalpur", link: "jabalpur" },
    { name: "Nagpur", link: "nagpur" },
    { name: "Omkareshwar", link: "omkareshwar" },
    { name: "Pune", link: "pune" },
    { name: "Rishikesh", link: "rishikesh" },
    { name: "Vasad", link: "vasad" },
  ];

  // Split locations into 3 columns
  const column1 = gurukulLocations.slice(0, 4);
  const column2 = gurukulLocations.slice(4, 8);
  const column3 = gurukulLocations.slice(8, 12);

  return (
    <>
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" 
      />
      <footer className="bg-[#FAF9F6] py-6 px-4 lg:py-8 lg:px-5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-0">
            {/* Footer Left - Navigation and Copyright */}
            <div className="w-full lg:w-2/5">
              {/* Top Navigation Links */}
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-10 mb-3">
                  <Link to="/" className="text-black text-sm no-underline hover:text-[#F6CB62] transition-colors">
                    Home
                  </Link>
                  <Link to="/about-us" className="text-black text-sm no-underline hover:text-[#F6CB62] transition-colors">
                    About Us
                  </Link>
                  <Link to="/gurukuls" className="text-black text-sm no-underline hover:text-[#F6CB62] transition-colors">
                    Locations
                  </Link>
                  <Link to="/donate" className="text-black text-sm no-underline hover:text-[#F6CB62] transition-colors">
                    Donate
                  </Link>
                  <Link to="/blog" className="text-black text-sm no-underline hover:text-[#F6CB62] transition-colors">
                    Blog
                  </Link>
                </div>
                
                {/* Policy Links */}
                <div className="flex flex-wrap gap-1 text-xs sm:text-sm">
                  <Link to="/privacy-policy" className="text-black no-underline hover:text-[#F6CB62] transition-colors">
                    Privacy Policy
                  </Link>
                  <span className="text-black mx-1">|</span>
                  <Link to="/cookie-policy" className="text-black no-underline hover:text-[#F6CB62] transition-colors">
                    Cookie Policy
                  </Link>
                  <span className="text-black mx-1">|</span>
                  <Link to="/terms-of-use" className="text-black no-underline hover:text-[#F6CB62] transition-colors">
                    Terms of Use
                  </Link>
                </div>
              </div>

              {/* Copyright */}
              <div>
                <p className="text-[#F6CB62] m-0 text-sm">
                  © 2025 <span>Sri Sri Gurukul</span>
                </p>
              </div>
            </div>

            {/* Footer Centers - Our Centers */}
            <div className="w-full lg:w-[30%]">
              <h4 className="text-[#F6CB62] m-0 mb-4 text-base lg:text-[15px]">Our Centers</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-6 xl:gap-10">
                <ul className="list-none p-0 m-0">
                  {column1.map((location) => (
                    <li key={location.link} className="mb-3 text-sm">
                      <Link 
                        to={`/gurukuls/${location.link}`}
                        className="text-black font-normal no-underline transition-colors hover:text-[#F6CB62]"
                      >
                        {location.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="list-none p-0 m-0">
                  {column2.map((location) => (
                    <li key={location.link} className="mb-3 text-sm">
                      <Link 
                        to={`/gurukuls/${location.link}`}
                        className="text-black font-normal no-underline transition-colors hover:text-[#F6CB62]"
                      >
                        {location.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="list-none p-0 m-0 hidden sm:block">
                  {column3.map((location) => (
                    <li key={location.link} className="mb-3 text-sm">
                      <Link 
                        to={`/gurukuls/${location.link}`}
                        className="text-black font-normal no-underline transition-colors hover:text-[#F6CB62]"
                      >
                        {location.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Third column items for mobile (when hidden above) */}
              <div className="grid grid-cols-2 gap-4 mt-0 sm:hidden">
                <ul className="list-none p-0 m-0">
                  {column3.slice(0, 2).map((location) => (
                    <li key={location.link} className="mb-3 text-sm">
                      <Link 
                        to={`/gurukuls/${location.link}`}
                        className="text-black font-normal no-underline transition-colors hover:text-[#F6CB62]"
                      >
                        {location.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="list-none p-0 m-0">
                  {column3.slice(2).map((location) => (
                    <li key={location.link} className="mb-3 text-sm">
                      <Link 
                        to={`/gurukuls/${location.link}`}
                        className="text-black font-normal no-underline transition-colors hover:text-[#F6CB62]"
                      >
                        {location.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer Right - Social Media */}
            <div className="w-full lg:w-[30%] flex justify-center lg:justify-end items-center">
              <div className="flex justify-center lg:justify-end gap-6 lg:gap-6">
                <a 
                  href="https://www.instagram.com/artofliving/" 
                  className="text-white no-underline rounded-full w-10 h-10 lg:w-7 lg:h-7 flex items-center justify-center transition-all duration-500"
                  aria-label="Instagram"
                >
                  <i className="fa-brands fa-instagram text-3xl lg:text-2xl text-[#e95950] transition-all duration-500 hover:text-[#ccc]"></i>
                </a>
                <a 
                  href="https://www.facebook.com/theartoflivingglobal/" 
                  className="text-white no-underline rounded-full w-10 h-10 lg:w-7 lg:h-7 flex items-center justify-center transition-all duration-500"
                  aria-label="Facebook"
                >
                  <i className="fa-brands fa-facebook text-3xl lg:text-2xl text-[#2a77f2] transition-all duration-500 hover:text-[#ccc]"></i>
                </a>
                <a 
                  href="https://x.com/artofliving" 
                  className="text-white no-underline rounded-full w-10 h-10 lg:w-7 lg:h-7 flex items-center justify-center transition-all duration-500"
                  aria-label="X (Twitter)"
                >
                  <i className="fa-brands fa-x-twitter text-3xl lg:text-2xl text-[#000000] transition-all duration-500 hover:text-[#ccc]"></i>
                </a>
                <a 
                  href="https://www.youtube.com/@artofliving-official/videos" 
                  className="text-white no-underline rounded-full w-10 h-10 lg:w-7 lg:h-7 flex items-center justify-center transition-all duration-500"
                  aria-label="YouTube"
                >
                  <i className="fa-brands fa-youtube text-3xl lg:text-2xl text-[#ff0000] transition-all duration-500 hover:text-[#ccc]"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
