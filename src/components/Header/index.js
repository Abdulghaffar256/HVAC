"use client";

import Head from "next/head";
import siteMetadata from "@/utils/siteMetaData";
import Link from "next/link";
import Logo from "./Logo";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { useState } from "react";
import { client } from "@/sanity/lib/client";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mode] = useThemeSwitch();
  const [isOpen, setIsOpen] = useState(false);
  const [certOpen, setCertOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCatOpen, setMobileCatOpen] = useState(false);
  const [mobileCertOpen, setMobileCertOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setCertOpen(false);
  };

  const toggleCertDropdown = () => {
    setCertOpen(!certOpen);
    setIsOpen(false);
  };

  const handleSearch = async (e) => {
    if (e.key === "Enter" && searchQuery.trim() !== "") {
      try {
        const results = await client.fetch(
          `*[_type in ["AI", "Eng", "equipment", "development", "dev", "energy", "waste","leed"] && title match $query]{
            _id,
            title,
            "slug": slug.current
          }`,
          { query: `*${searchQuery}*` }
        );
        if (results.length > 0) {
          router.push(`/results?query=${encodeURIComponent(searchQuery)}`);
        } else {
          alert("No results found.");
        }
      } catch (error) {
        console.error("Search error:", error);
      }
    }
  };
  
  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (mobileMenuOpen) {
      setMobileCatOpen(false);
      setMobileCertOpen(false);
    }
  };

  return (
    <>
      <Head>
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />
      </Head>

      <header className="w-full bg-white text-black shadow-md sticky top-0 z-50">
        <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Left: Logo + Mobile Toggle */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <Logo />
            <button
              className="md:hidden text-gray-700"
              onClick={handleMobileMenuToggle}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Center: Navigation (Desktop only) */}
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            <Link href="/" className="hover:text-pink-600 transition">
              Home
            </Link>

            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="hover:text-pink-600 transition flex items-center space-x-1"
              >
                <span>Articles</span>
                <span className="text-xs">▾</span>
              </button>
              {isOpen && (
                <div className="absolute left-0 mt-2 bg-white border rounded-md shadow-md p-2 w-56 z-50 space-y-1">
                  <Link href="/dev" className="block hover:text-pink-500">
                    Development
                  </Link>
                  <Link href="/equipment" className="block hover:text-pink-500">
                    Equipment
                  </Link>
                  <Link href="/ai" className="block hover:text-pink-500">
                    Artificial Intelligence
                  </Link>
                  <Link href="/eng" className="block hover:text-pink-500">
                    Designing
                  </Link>
                 
                  <Link href="/energy" className="block hover:text-pink-500">
                   Energy
                  </Link>
                  <Link href="/waste" className="block hover:text-pink-500">
                    Waste
                  </Link>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={toggleCertDropdown}
                className="hover:text-pink-600 transition flex items-center space-x-1"
              >
                <span>Certifications</span>
                <span className="text-xs">▾</span>
              </button>
              {certOpen && (
                <div className="absolute left-0 mt-2 bg-white border rounded-md shadow-md p-2 w-44 z-50 space-y-1">
                  <Link href="/mep" className="block hover:text-pink-500">
                    Revit MEP
                  </Link>
                  <Link href="/Leed" className="block hover:text-pink-500">
                    LEED
                  </Link>
                </div>
              )}
            </div>

            <Link href="/about" className="hover:text-pink-600 transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-pink-600 transition">
              Contact
            </Link>
          </nav>

          {/* Right: Search Bar (Desktop only) */}
          <div className="hidden md:flex items-center relative w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-2 text-sm text-gray-800 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            />
            <div className="absolute left-3 top-2.5 text-gray-400 pointer-events-none">🔍</div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white px-4 pb-6 pt-2 space-y-4 text-sm border-t">
            <Link href="/" className="block hover:text-pink-600">
              Home
            </Link>

            {/* Categories Dropdown (Mobile) */}
            <div>
              <button
                className="w-full flex justify-between items-center font-semibold mb-1"
                onClick={() => setMobileCatOpen(!mobileCatOpen)}
              >
                Articles <span className="text-xs">{mobileCatOpen ? "▴" : "▾"}</span>
              </button>
              {mobileCatOpen && (
                <div className="space-y-1 pl-4">
                    <Link href="/dev" className="block hover:text-pink-500">
                    Development
                  </Link>
                  <Link href="/equipment" className="block hover:text-pink-500">
                    Equipment
                  </Link>
                  <Link href="/ai" className="block hover:text-pink-500">
                    Artificial Intelligence
                  </Link>
                  <Link href="/eng" className="block hover:text-pink-500">
                    Designing
                  </Link>
                 
                  <Link href="/energy" className="block hover:text-pink-500">
                   Energy
                  </Link>
                  <Link href="/waste" className="block hover:text-pink-500">
                    Waste
                  </Link>
                </div>
              )}
            </div>

            {/* Certifications Dropdown (Mobile) */}
            <div>
              <button
                className="w-full flex justify-between items-center font-semibold mb-1"
                onClick={() => setMobileCertOpen(!mobileCertOpen)}
              >
                Certifications <span className="text-xs">{mobileCertOpen ? "▴" : "▾"}</span>
              </button>
              {mobileCertOpen && (
                <div className="space-y-1 pl-4">
                  <Link href="/mep" className="block">
                    Revit MEP
                  </Link>
                  <Link href="/Leed" className="block">
                    LEED
                  </Link>
                </div>
              )}
            </div>

            <Link href="/about" className="block hover:text-pink-600">
              About
            </Link>
            <Link href="/contact" className="block hover:text-pink-600">
              Contact
            </Link>

            {/* Mobile Search */}
            <div className="relative mt-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2 text-sm text-gray-800 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              />
              <div className="absolute left-3 top-2.5 text-gray-400 pointer-events-none">🔍</div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
