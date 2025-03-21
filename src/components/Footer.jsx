

import { Link } from "react-router-dom";
import { Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/praneshnikhar/",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/pranesh-nikhar/",
      label: "LinkedIn",
    },
  ];

  const footerSections = [
    // {
    //   title: "Quick Links",
    //   links: [
    //     { name: "Home", href: "/" },
    //     { name: "Projects", href: "https://github.com/praneshnikhar?tab=repositories" },
    //     { name: "Blog", href: "/blog" },
    //     { name: "About", href: "/about" },
    //   ],
    // },
    {
      title: "Contact",
      links: [
        { name: "Contact Me", href: "/contact" },
        { name: "Blogs", href: "https://medium.com/@praneshnikhar" },
      ],
    },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold text-ieee-blue dark:text-white"
              >
                Pranesh Nikhar
              </motion.span>
            </Link>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-ieee-blue dark:hover:text-white transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-ieee-blue dark:hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-gray-600 dark:text-gray-400 hover:text-ieee-blue dark:hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
