import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="mt-16 flex flex-col items-center md:flex-row md:items-start bg-gray-800 p-8 rounded-lg md:justify-between gap-8 md:gap-0">
      <div className="flex flex-col gap-4 items-center md:items-start">
      <Link href="/" className="flex items-center gap-2">
                <Image 
                 src="/logo1.png"
                  alt="TrendLama"
                   width={30} 
                  height={30}
                   />

                <p className="hidden md:block text-md font-medium tracking-wider text-white">TrendLama</p>
            </Link>
            <p className="text-sm text-gray-400">© 2025 MyApp.</p>
            <p className="text-sm text-gray-400">All rights reserved.</p>
            </div>

            <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
              <p className="text-sm text-amber-50"> Links</p>
              <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
              <Link href="/" className="text-gray-300 hover:text-white">Contact</Link>
              <Link href="/" className="text-gray-300 hover:text-white">Terms of Services</Link>
              <Link href="/" className="text-gray-300 hover:text-white">Privacy Policy</Link>
            </div>
            <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
              <p className="text-sm text-amber-50"> Links</p>
              <Link href="/" className="text-gray-300 hover:text-white">All Products</Link>
              <Link href="/" className="text-gray-300 hover:text-white">New Arrivals</Link>
              <Link href="/" className="text-gray-300 hover:text-white">Best Sellers</Link>
              <Link href="/" className="text-gray-300 hover:text-white">Sale</Link>
            </div>
            <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
              <p className="text-sm text-amber-50"> Links</p>
              <Link href="/" className="text-gray-300 hover:text-white">About</Link>
              <Link href="/" className="text-gray-300 hover:text-white">Contact</Link>
              <Link href="/" className="text-gray-300 hover:text-white">Blog</Link>
              <Link href="/" className="text-gray-300 hover:text-white">Affiliate Program</Link>
            </div>
    </div>
  );
}

export default Footer;