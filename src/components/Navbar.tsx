"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home, Info, Contact, Briefcase } from "lucide-react"; // Import ikon Briefcase
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile"; // Tetap gunakan hook ini jika diperlukan untuk penyesuaian styling lain

const navLinks = [
  { href: "/", label: "Beranda", icon: <Home /> },
  { href: "/about", label: "Tentang", icon: <Info /> },
  { href: "/contact", label: "Kontak", icon: <Contact /> },
];

const Navbar = () => {
  const isMobile = useIsMobile(); // Hook ini masih bisa berguna untuk penyesuaian styling detail
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  if (isMobile === undefined) {
    // Placeholder untuk menghindari pergeseran layout selama hook diinisialisasi
    return <header className="h-16" />; // Ketinggian default untuk top bar
  }

  // Desktop/Tablet Top Navbar (Sekarang akan dirender untuk semua ukuran layar)
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-primary text-primary-foreground">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo Digisol dengan ikon dan ukuran font lebih besar */}
        <Link to="/" className="mr-6 flex items-center space-x-2">
          <Briefcase className="h-6 w-6" /> {/* Menambahkan ikon */}
          <span className="font-bold text-xl">Digisol</span> {/* Mengubah ukuran font menjadi text-xl */}
        </Link>
        
        {/* Main navigation links for wider screens (md and up) */}
        <nav className="hidden md:flex items-center">
          {navLinks.map((link) => (
            <Button
              key={link.label}
              variant="ghost"
              asChild
              className="mx-1 text-base font-medium"
            >
              <Link to={link.href} className="flex items-center px-2 py-1">
                {React.cloneElement(link.icon as React.ReactElement, { className: "h-4 w-4 mr-2" })}
                {link.label}
              </Link>
            </Button>
          ))}
        </nav>

        {/* Hamburger menu for narrower screens (md:hidden) */}
        <div className="md:hidden"> {/* Div ini hanya tampil di layar < md */}
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              {/* Memastikan warna default primary-foreground dan hover:text-black */}
              {/* Menambahkan hover:border-primary-foreground untuk menjaga border saat hover */}
              <Button variant="outline" size="icon" className="text-secondary-foreground border-primary-foreground hover:text-black hover:border-primary-foreground">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Buka menu</span>
              </Button>
            </SheetTrigger>
            {/* Menggunakan side="right", bg-primary, dan sm:max-w-xs */}
            <SheetContent side="right" className="w-full sm:max-w-xs bg-primary text-primary-foreground flex flex-col" onOpenAutoFocus={(e) => e.preventDefault()}>
              {/* Sheet Header dengan judul saja, tombol tutup ikon 'X' sudah dihapus */}
              <SheetHeader className="px-4 pt-4 pb-2"> {/* Menyesuaikan padding */}
                <SheetTitle className="flex items-center justify-between text-primary-foreground">
                   {/* Logo Digisol dengan ikon dan ukuran font lebih besar di header sheet */}
                   <div className="flex items-center space-x-2">
                     <Briefcase className="h-6 w-6" /> {/* Menambahkan ikon */}
                     <span className="font-bold text-xl">Digisol</span> {/* Mengubah ukuran font */}
                   </div>
                </SheetTitle>
              </SheetHeader>
              {/* Navigasi Links */}
              <nav className="flex flex-col space-y-1 px-4 py-2 flex-grow"> {/* Menambahkan padding horizontal dan flex-grow */}
                {navLinks.map((link) => (
                  <Button
                    key={link.label}
                    variant="ghost"
                    asChild
                    className="w-full justify-start text-lg font-medium p-3 text-primary-foreground hover:bg-primary-foreground/10"
                    onClick={() => setIsSheetOpen(false)} // Menutup sheet saat link diklik
                  >
                    <Link to={link.href} className="flex items-center">
                      {React.cloneElement(link.icon as React.ReactElement, { className: "h-5 w-5 mr-3" })}
                      {link.label}
                    </Link>
                  </Button>
                ))}
              </nav>
              {/* Menambahkan tombol Close di bagian bawah */}
              <div className="p-4"> {/* Padding di sekitar tombol close */}
                 {/* Menghapus SheetClose asChild dan menambahkan onClick langsung ke Button */}
                 <Button
                    className="w-full bg-yellowGloves text-gray-900 hover:bg-yellowGloves/90" // Menggunakan warna kuning kustom
                    onClick={() => setIsSheetOpen(false)} // Menutup sheet saat diklik
                 >
                    Close
                 </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;