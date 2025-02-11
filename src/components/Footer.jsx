import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-8 fixed bottom-0 w-full shadow-top">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold">Contact Us</h2>
            <p className="mt-2">312 E Main St, Bozeman, MT 59715</p>
            <p>(406) 587-3973</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://www.facebook.com/NovaCafe/"
              className="text-gray-600 hover:text-gray-800"
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a
              href="https://x.com/novacafe"
              className="text-gray-600 hover:text-gray-800"
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a
              href="https://www.instagram.com/thenovacafe/?hl=en"
              className="text-gray-600 hover:text-gray-800"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-gray-300 mt-6 pt-4 text-center text-sm text-gray-500">
          <a href="#" className="hover:text-gray-800">
            Privacy Policy
          </a>{" "}
          <a href="#" className="mx-4 hover:text-gray-800">
            Terms of Service
          </a>{" "}
          <a href="#" className="hover:text-gray-800">
            Help
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
