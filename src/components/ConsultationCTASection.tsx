import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react"; // Menggunakan ikon untuk tombol

const ConsultationCTASection = () => {
  return (
    <section className="bg-tanBackground text-foreground py-16 md:py-24"> {/* Menggunakan warna tanBackground kustom */}
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Masih Bingung? Mari Kita Diskusi!</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-muted-foreground"> {/* Menggunakan muted-foreground atau foreground */}
          Setiap bisnis unik. Dapatkan solusi digital yang paling sesuai dengan kebutuhan spesifik Anda melalui konsultasi gratis dengan tim ahli kami.
        </p>
        
        {/* Tombol untuk Konsultasi */}
        <Button
          size="lg" // Ukuran tombol lebih besar
          className="bg-yellowGloves text-gray-900 hover:bg-yellowGloves/90 text-lg px-8 py-6" // Warna kuning kustom, padding lebih besar
          // Anda bisa menambahkan link atau fungsi onClick di sini, misalnya membuka dialog atau mengarahkan ke halaman kontak
          onClick={() => {
            // Placeholder action, bisa diganti dengan navigasi ke halaman kontak atau membuka modal
            console.log("Tombol Konsultasi diklik!");
            // Contoh: window.location.href = '/contact';
          }}
        >
          <MessageSquare className="mr-3 h-6 w-6" /> Jadwalkan Konsultasi Gratis
        </Button>
      </div>
    </section>
  );
};

export default ConsultationCTASection;