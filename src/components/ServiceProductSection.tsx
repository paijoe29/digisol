import React from 'react';
import ServiceProductItem from './ServiceProductItem';
import { Separator } from "@/components/ui/separator"; // Menggunakan komponen Separator dari shadcn/ui
import { Smartphone, Layout, ShoppingCart } from "lucide-react"; // Import ikon

// Data placeholder untuk jasa/produk dengan ikon dan placeholder imageUrl
const items = [
  {
    id: 1,
    title: "Pengembangan Aplikasi Mobile",
    description: "Kami membangun aplikasi mobile yang responsif dan berperforma tinggi untuk iOS dan Android, disesuaikan dengan kebutuhan bisnis Anda.",
    icon: <Smartphone className="h-8 w-8 text-primary" />, // Menambahkan ikon
    imageUrl: "/images/tes.png", // Ganti dengan URL gambar asli Anda
  },
  {
    id: 2,
    title: "Desain UI/UX Inovatif",
    description: "Menciptakan pengalaman pengguna yang intuitif dan antarmuka yang menarik secara visual untuk meningkatkan kepuasan pelanggan.",
    icon: <Layout className="h-8 w-8 text-primary" />, // Menambahkan ikon
    imageUrl: "/images/tes.png", // Ganti dengan URL gambar asli Anda
  },
  {
    id: 3,
    title: "Solusi E-commerce Lengkap",
    description: "Mulai dari toko online sederhana hingga platform e-commerce kompleks, kami menyediakan solusi yang aman dan skalabel.",
    icon: <ShoppingCart className="h-8 w-8 text-primary" />, // Menambahkan ikon
    imageUrl: "/images/tes.png", // Ganti dengan URL gambar asli Anda
  },
];

const ServiceProductSection = () => {
  return (
    <section className="pt-8 md:pt-8 pb-12 md:pb-16 bg-gray-50"> {/* Mengurangi padding atas dan bawah */}
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Jasa & Produk Kami</h2>
        <Separator className="mb-12" />
        <div className="flex flex-col">
          {items.map((item, index) => (
            <React.Fragment key={item.id}>
              <ServiceProductItem
                title={item.title}
                description={item.description}
                icon={item.icon}
                imageUrl={item.imageUrl} // Meneruskan imageUrl ke komponen ServiceProductItem
                isReversed={index % 2 !== 0}
              />
              {index < items.length - 1 && (
                <Separator className="my-8 md:my-12" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProductSection;