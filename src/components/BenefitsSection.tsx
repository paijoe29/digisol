import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Star, Zap, Shield, Rocket, Heart, Lightbulb } from "lucide-react"; // Import beberapa ikon placeholder

// Data placeholder untuk poin keunggulan
const benefits = [
  {
    icon: <Star className="h-8 w-8 text-primary" />,
    headline: "Kualitas Terjamin",
    description: "Kami mengutamakan kualitas dalam setiap proyek, memastikan hasil yang solid dan dapat diandalkan.",
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    headline: "Inovasi Berkelanjutan",
    description: "Selalu mengikuti tren teknologi terbaru untuk memberikan solusi yang relevan dan kompetitif.",
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    headline: "Keamanan Data",
    description: "Melindungi data Anda dengan standar keamanan tertinggi, memberikan ketenangan pikiran.",
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    headline: "Skalabilitas Tinggi",
    description: "Solusi kami dirancang untuk tumbuh bersama bisnis Anda, tanpa batasan.",
  },
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    headline: "Dukungan Responsif",
    description: "Tim kami siap membantu kapan pun Anda membutuhkan, dengan respon cepat dan solusi tepat.",
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    headline: "Pendekatan Kreatif",
    description: "Menemukan solusi unik dan kreatif untuk tantangan bisnis Anda.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="bg-gray-50 text-foreground py-12 md:py-16"> {/* Mengurangi padding */}
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Mengapa Memilih Kami?</h2> {/* Judul bagian */}
        <Separator className="mb-12" />

        {/* Kotak putih rounded yang membungkus konten */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md"> {/* Menambahkan styling kotak putih */}
          {/* Grid untuk menampilkan poin keunggulan */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4">
                <div className="mb-4">
                  {benefit.icon} {/* Menampilkan ikon */}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.headline}</h3> {/* Headline */}
                <p className="text-muted-foreground">{benefit.description}</p> {/* Penjelasan singkat */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;