import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react"; // Ikon untuk info kontak
import React, { useState } from 'react'; // Import useState

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Formulir Kontak Dikirim:", formData);
    // Di sini Anda akan menambahkan logika untuk mengirim data formulir
    // Misalnya, menggunakan API atau layanan email pihak ketiga.
    // Untuk saat ini, data hanya dicetak di konsol.

    // Reset formulir setelah pengiriman (opsional)
    setFormData({ name: '', email: '', message: '' });

    // Tampilkan pesan sukses (opsional, bisa pakai toast)
    alert("Terima kasih! Pesan Anda telah terkirim.");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section - Contact */}
      <section className="bg-primary text-primary-foreground py-20 md:py-32 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Kontak Kami</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Kami siap membantu Anda. Hubungi kami melalui formulir di bawah atau informasi kontak kami.
          </p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="bg-gray-50 text-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md"> {/* Kotak putih */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Informasi Kontak</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Jangan ragu untuk menghubungi kami untuk pertanyaan, penawaran, atau sekadar diskusi.
                </p>
                <div className="space-y-4 text-muted-foreground text-lg">
                  <div className="flex items-center justify-center md:justify-start">
                    <Mail className="h-6 w-6 text-primary mr-3" />
                    <span>email@example.com</span> {/* Ganti dengan email asli */}
                  </div>
                  <div className="flex items-center justify-center md:justify-start">
                    <Phone className="h-6 w-6 text-primary mr-3" />
                    <span>+62 123 4567 890</span> {/* Ganti dengan nomor telepon asli */}
                  </div>
                  <div className="flex items-start justify-center md:justify-start">
                    <MapPin className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                    <span>Alamat Lengkap Perusahaan Anda, Kota, Kode Pos</span> {/* Ganti dengan alamat asli */}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">Kirim Pesan</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Nama Anda</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Masukkan nama Anda"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Anda</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Masukkan email Anda"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Pesan Anda</Label>
                    <Textarea
                      id="message"
                      placeholder="Tulis pesan Anda di sini..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-yellowGloves text-gray-900 hover:bg-yellowGloves/90">
                    Kirim Pesan
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;