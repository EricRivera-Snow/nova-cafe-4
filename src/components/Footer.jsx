import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-4 fixed bottom-0 w-full shadow-top text-sm">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h2 className="text-base font-semibold">Contact Us</h2>
          <p>312 E Main St, Bozeman, MT 59715</p>
          <p>(406) 587-3973</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a
            href="https://www.facebook.com/NovaCafe/"
            className="text-gray-600 hover:text-gray-800"
          >
            <FontAwesomeIcon icon={faFacebook} size="sm" />
          </a>
          <a
            href="https://x.com/novacafe"
            className="text-gray-600 hover:text-gray-800"
          >
            <FontAwesomeIcon icon={faTwitter} size="sm" />
          </a>
          <a
            href="https://www.instagram.com/thenovacafe/?hl=en"
            className="text-gray-600 hover:text-gray-800"
          >
            <FontAwesomeIcon icon={faInstagram} size="sm" />
          </a>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="border-t border-gray-300 mt-2 pt-2 text-center text-xs text-gray-500">
        <a href="#" className="hover:text-gray-800">
          Privacy Policy
        </a>
        <span className="mx-2">|</span>
        <a href="#" className="hover:text-gray-800">
          Terms of Service
        </a>
        <span className="mx-2">|</span>
        <a href="#" className="hover:text-gray-800">
          Help
        </a>
      </div>
    </footer>
  );
};

export default Footer;
