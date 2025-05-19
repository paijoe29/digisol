import { Link } from "react-router-dom";
import { Briefcase, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"; // Import ikon untuk logo dan media sosial

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Kontainer utama footer */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Bagian Kiri: Logo Digisol */}
          <div className="flex items-center space-x-2 md:w-1/4 justify-center md:justify-start">
            <Link to="/" className="flex items-center space-x-2">
              <Briefcase className="h-7 w-7" /> {/* Ukuran ikon sedikit lebih besar */}
              <span className="font-bold text-2xl">Digisol</span> {/* Ukuran font lebih besar */}
            </Link>
          </div>

          {/* Bagian Tengah: Navigasi Footer */}
          <nav className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 md:w-1/2">
            {/* Mengubah text-sm menjadi text-base */}
            <Link to="/" className="text-base hover:underline">Beranda</Link>
            <Link to="/about" className="text-base hover:underline">Tentang</Link>
            <Link to="/contact" className="text-base hover:underline">Kontak</Link>
            {/* Tambahkan link lain jika ada */}
          </nav>

          {/* Bagian Kanan: Ikon Media Sosial & Hak Cipta */}
          <div className="flex flex-col items-center md:items-end md:w-1/4">
            {/* Ikon Media Sosial */}
            <div className="flex space-x-4 mb-4"> {/* Mengurangi jarak antar ikon */}
              <a href="#" aria-label="Facebook" className="hover:text-primary-foreground/80"><Facebook className="h-5 w-5" /></a>
              <a href="#" aria-label="Twitter" className="hover:text-primary-foreground/80"><Twitter className="h-5 w-5" /></a>
              <a href="#" aria-label="Instagram" className="hover:text-primary-foreground/80"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-primary-foreground/80"><Linkedin className="h-5 w-5" /></a>
            </div>
            {/* Hak Cipta */}
            {/* Mengubah text-sm menjadi text-base */}
            <p className="text-base text-primary-foreground/80 text-center md:text-right">
              &copy; {new Date().getFullYear()} Digisol. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;