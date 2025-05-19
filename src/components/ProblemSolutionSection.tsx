import { Separator } from "@/components/ui/separator";
import { CheckCircle } from "lucide-react"; // Menggunakan ikon untuk bullet points

const ProblemSolutionSection = () => {
  return (
    <section className="bg-gray-50 text-foreground py-12 md:py-16"> {/* Mengurangi padding */}
      <div className="container mx-auto px-4 md:px-6">
        {/* Mengganti judul */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Tantangan & Solusi</h2>
        <Separator className="mb-12" />

        {/* Kotak putih rounded yang membungkus konten */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md"> {/* Menambahkan styling kotak putih */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Bagian Teks Masalah & Solusi */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-4">Apakah Anda menghadapi masalah ini?</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Banyak bisnis kesulitan dalam membangun kehadiran digital yang kuat, menjangkau audiens yang tepat, dan mengelola teknologi yang terus berkembang. Mungkin Anda merasa tertinggal, atau investasi teknologi Anda tidak memberikan hasil yang diharapkan.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Solusi Kami</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Kami hadir untuk membantu Anda mengatasi tantangan tersebut. Dengan pendekatan yang berfokus pada inovasi dan kebutuhan pasar, kami menyediakan solusi digital yang efektif dan skalabel.
              </p>

              {/* Bullet Points Fitur Utama */}
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>Pengembangan produk digital yang disesuaikan.</span>
                </li>
                <li className="flex items-start">
                   <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>Strategi pemasaran digital yang terarah.</span>
                </li>
                <li className="flex items-start">
                   <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>Dukungan teknis dan pemeliharaan berkelanjutan.</span>
                </li>
                <li className="flex items-start">
                   <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>Desain UI/UX yang berpusat pada pengguna.</span>
                </li>
              </ul>
            </div>

            {/* Placeholder untuk Gambar/Ilustrasi */}
            <div className="hidden md:flex justify-center">
              {/* Mengganti div placeholder dengan tag img */}
              <img
                src="/images/solusi.png" // Ganti URL ini dengan gambar Anda
                alt="Ilustrasi Masalah dan Solusi"
                className="w-full max-w-md object-cover rounded-lg shadow-md" // Menghapus h-64, mempertahankan w-full, max-w-md, object-cover
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;