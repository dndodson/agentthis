import Link from 'next/link';
import { Share2, Twitter, Facebook, Linkedin } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { buttonVariants } from '@/src/components/ui/button';

const footerLinks = [
  { href: "#", label: "Press" },
  { href: "#", label: "Contact" },
  { href: "#", label: "Imprint" },
  { href: "#", label: "Sitemap" },
  { href: "#", label: "Legal" },
  { href: "#", label: "Cookie Settings" },
];

export const Footer = () => (
  <footer className="bg-gray-800 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity mb-4">
            <Share2 className="h-8 w-8 text-white transform scale-x-[-1]" />
            <span className="text-xl font-bold text-white">AgentThis</span>
          </Link>
          <p className="text-sm text-gray-400 text-center md:text-left">
            Empowering content creators in the AI era.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                buttonVariants({ variant: 'link' }),
                'justify-start text-gray-400 hover:text-white p-0 h-auto font-normal'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
          <div className="flex space-x-4">
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current">
                <title>X</title>
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
              </svg>
              <span className="sr-only">X</span>
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current">
                <title>Facebook</title>
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="sr-only">Facebook</span>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current">
                <title>LinkedIn</title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-700 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} AgentThis. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
)