import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-cyan-600 text-white py-10">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-1/3 px-4">
          <h2 className="text-lg mb-4">Subscribe to Our Newsletter</h2>
          <form>
            <div className="flex items-center mb-4">
              <label className="sr-only" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="bg-gray-800 rounded-lg py-2 px-4 text-white w-full"
              />
              <button
                type="submit"
                className="bg-green-500 rounded-lg py-2 px-4 ml-2"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="w-full md:w-1/3 px-4">
          <h2 className="text-lg mb-4">Follow Us</h2>
          <div className="flex items-center">
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 mr-4"
            >
              <FaFacebook />
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 mr-4"
            >
              <FaTwitter />
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-4">
          <h2 className="text-lg mb-4">Contact Us</h2>
          <p className="mb-4">1234 Main St</p>
          <p className="mb-4">Anytown, USA 12345</p>
          <p className="mb-4">Phone: (123) 456-7890</p>
          <p className="mb-4">Email: info@example.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
