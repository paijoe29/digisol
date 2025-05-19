import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Target, Users, Handshake } from "lucide-react"; // Ikon placeholder untuk nilai
import { Button } from "@/components/ui/button"; // Import Button

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section - About */}
      <section className="bg-primary text-primary-foreground py-20 md:py-32 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Tentang Kami</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Kami adalah tim yang bersemangat dalam membangun solusi digital inovatif untuk mendorong pertumbuhan bisnis Anda.
          </p>
        </div>
      </section>

      {/* Our Story/Mission Section */}
      <section className="bg-gray-50 text-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
           <div className="bg-white p-6 md:p-8 rounded-lg shadow-md"> {/* Kotak putih */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Teks */}
                <div className="text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Kisah Kami & Misi Kami</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Dimulai dari visi sederhana untuk membantu bisnis lokal beradaptasi dengan era digital, Digisol telah berkembang menjadi mitra terpercaya dalam transformasi digital. Misi kami adalah memberdayakan klien kami dengan teknologi mutakhir dan strategi digital yang efektif.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Kami percaya bahwa setiap bisnis, besar atau kecil, berhak mendapatkan solusi digital berkualitas tinggi yang dapat membuka potensi penuh mereka di pasar yang kompetitif.
                  </p>
                </div>
                {/* Placeholder Gambar/Ilustrasi */}
                <div className="flex justify-center">
                  {/* Mengganti div placeholder dengan tag img */}
                  <img
                    src="/placeholder-story-mission.jpg" // Ganti URL ini dengan gambar Anda
                    alt="Ilustrasi Kisah dan Misi"
                    className="w-full max-w-sm object-cover rounded-lg shadow-md" // Menghapus h-64, mempertahankan w-full, max-w-sm, object-cover
                  />
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-tanBackground text-foreground py-16 md:py-24"> {/* Menggunakan warna kustom */}
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Nilai-Nilai Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-4 text-center">
              <CardHeader className="flex flex-col items-center pb-4">
                <Lightbulb className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-xl font-semibold">Inovasi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Terus mencari cara baru dan lebih baik untuk menyelesaikan masalah.
                </p>
              </CardContent>
            </Card>
             <Card className="p-4 text-center">
              <CardHeader className="flex flex-col items-center pb-4">
                <Target className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-xl font-semibold">Fokus Klien</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Menempatkan kebutuhan dan kesuksesan klien sebagai prioritas utama.
                </p>
              </CardContent>
            </Card>
             <Card className="p-4 text-center">
              <CardHeader className="flex flex-col items-center pb-4">
                <Handshake className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-xl font-semibold">Integritas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Beroperasi dengan kejujuran, transparansi, dan etika yang tinggi.
                </p>
              </CardContent>
            </Card>
             <Card className="p-4 text-center">
              <CardHeader className="flex flex-col items-center pb-4">
                <Users className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-xl font-semibold">Kolaborasi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Bekerja sama secara efektif, baik internal maupun dengan klien.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section (Placeholder) */}
       <section className="bg-gray-50 text-foreground py-16 md:py-24 text-center">
        <div className="container mx-auto px-4 md:px-6">
           <div className="bg-white p-6 md:p-8 rounded-lg shadow-md"> {/* Kotak putih */}
              <h2 className="text-3xl md:text-4xl font-bold mb-12">Tim Kami</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Kami memiliki tim profesional yang berpengalaman dan berdedikasi.
              </p>
              {/* Placeholder untuk grid foto tim */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                 {/* Mengganti div placeholder dengan tag img */}
                 <img src="/placeholder-team-1.jpg" alt="Anggota Tim 1" className="w-full object-cover rounded-lg shadow-sm" /> {/* Menghapus h-40 */}
                 <img src="/placeholder-team-2.jpg" alt="Anggota Tim 2" className="w-full object-cover rounded-lg shadow-sm" /> {/* Menghapus h-40 */}
                 <img src="/placeholder-team-3.jpg" alt="Anggota Tim 3" className="w-full object-cover rounded-lg shadow-sm" /> {/* Menghapus h-40 */}
                 <img src="/placeholder-team-4.jpg" alt="Anggota Tim 4" className="w-full object-cover rounded-lg shadow-sm" /> {/* Menghapus h-40 */}
              </div>
           </div>
        </div>
      </section>

      {/* Simple CTA */}
       <section className="bg-primary text-primary-foreground py-12 md:py-16 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Siap Memulai Proyek Anda?</h2>
          <Button size="lg" className="bg-yellowGloves text-gray-900 hover:bg-yellowGloves/90">
            Hubungi Kami
          </Button>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default About;