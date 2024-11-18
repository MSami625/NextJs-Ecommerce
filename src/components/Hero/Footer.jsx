import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaPinterest, FaSnapchat, FaTelegram } from "react-icons/fa";
import { SiQuora } from "react-icons/si";
import { BsTwitter, BsPaypal, BsCreditCard } from "react-icons/bs";
import { RiVisaLine } from "react-icons/ri";
import { FaCcMastercard, FaCcAmex } from "react-icons/fa";

const Footer = () => {
  const shopLinks = [
    "New Arrivals",
    "Tops",
    "Flats & Flatforms",
    "T-Shirts",
    "Trousers",
    "Oxfords & Boots",
    "Heels & Platforms",
    "Matching Sets",
    "Best Selling",
  ];

  const supportLinks = [
    { name: "Exchanges", url: "/support/exchanges" },
    { name: "Exchange Policy", url: "/support/exchange-policy" },
    { name: "Privacy Policy", url: "/support/privacy-policy" },
    { name: "FAQ", url: "/support/faq" },
    { name: "Support", url: "/support" },
    { name: "Shipping", url: "/support/shipping" },
    { name: "Terms of Service", url: "/support/terms-of-service" },
  ];

  return (
    <footer className="bg-[#333333] text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-wrap justify-between">
        {/* Shop Links */}
        <div>
          <h3 className="text-yellow-500 font-semibold  text-lg mb-4">Shop</h3>
          <ul>
            {shopLinks.map((link) => (
              <li key={link} className="mb-2">
                <a
                  href={`/collection/${link.toLowerCase().replace(/ & | /g, "-")}`}
                  className="hover:text-yellow-500"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-yellow-500 font-semibold text-lg mb-4">Support</h3>
          <ul>
            {supportLinks.map(({ name, url }) => (
              <li key={name} className="mb-2">
                <a href={url} className="hover:text-yellow-500">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-bold mb-4">© Littlebox India 2022</h3>
          <div className="flex space-x-4 mb-4">
            <BsTwitter className="text-xl hover:text-orange-500" />
            <FaFacebookF className="text-xl hover:text-orange-500" />
            <FaYoutube className="text-xl hover:text-orange-500" />
            <FaInstagram className="text-xl hover:text-orange-500" />
            <FaPinterest className="text-xl hover:text-orange-500" />
            <FaWhatsapp className="text-xl hover:text-orange-500" />
            <SiQuora className="text-xl hover:text-orange-500" />
            <FaTelegram className="text-xl hover:text-orange-500" />
            <FaSnapchat className="text-xl hover:text-orange-500" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#1E1E1E] py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            © 2024 Good Limited. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <RiVisaLine className="text-2xl hover:text-orange-500" />
            <FaCcMastercard className="text-2xl hover:text-orange-500" />
            <BsPaypal className="text-2xl hover:text-orange-500" />
            <FaCcAmex className="text-2xl hover:text-orange-500" />
            <BsCreditCard className="text-2xl hover:text-orange-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
