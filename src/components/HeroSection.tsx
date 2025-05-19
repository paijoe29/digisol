import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gray-50 text-foreground pt-16 md:pt-24 pb-8 md:pb-8"> {/* Mengurangi padding bawah */}
      <div className="container mx-auto px-4 md:px-6">
        {/* Kotak putih rounded yang membungkus konten */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Konten Teks */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Membangun Produk & Merek Digital.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Di sini kami fokus pada pasar di mana teknologi, inovasi, dan modal dapat membuka nilai jangka panjang dan mendorong pertumbuhan ekonomi.
              </p>
              
              {/* Form Input Email */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-sm mx-auto md:mx-0">
                <div className="relative flex-grow">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="Masukkan email Anda"
                    className="pl-10 pr-4 py-2 w-full"
                  />
                </div>
                <Button type="submit" className="w-full sm:w-auto">
                  Coba Gratis
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground mt-4">
                Pendaftaran instan. Tidak perlu kartu kredit. <a href="#" className="underline hover:text-primary">Ketentuan Layanan</a> dan <a href="#" className="underline hover:text-primary">Kebijakan Privasi</a>.
              </p>
            </div>

            {/* Placeholder untuk Gambar/Ilustrasi */}
            <div className="hidden md:flex justify-center">
              {/* Mengganti div placeholder dengan tag img */}
              <img
                src="/images/hero-section.png" // Ganti URL ini dengan gambar Anda
                alt="Ilustrasi Hero Section"
                className="w-full max-w-md object-cover rounded-lg shadow-md" // Menghapus h-64, mempertahankan w-full, max-w-md, object-cover
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;