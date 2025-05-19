import React from 'react'; // Import React untuk useState
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Check, Mail } from "lucide-react"; // Menggunakan ikon Check dan Mail
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"; // Import Dialog components
import { Input } from "@/components/ui/input"; // Import Input
import { Label } from "@/components/ui/label"; // Import Label

// Data placeholder untuk paket harga jasa
const pricingPlans = [
  {
    title: "Paket Startup",
    price: "Rp 7.500.000",
    description: "Cocok untuk bisnis yang baru memulai kehadiran digital.",
    features: [
      "Website Landing Page",
      "Desain Responsif",
      "Integrasi Dasar Media Sosial",
      "Dukungan Email",
    ],
    buttonText: "Pilih Paket Startup",
  },
  {
    title: "Paket Bisnis",
    price: "Rp 15.000.000",
    description: "Solusi komprehensif untuk pertumbuhan bisnis online.",
    features: [
      "Website Multi-halaman",
      "Desain UI/UX Kustom",
      "Optimasi SEO Dasar",
      "Integrasi E-commerce (Opsional)",
      "Dukungan Prioritas",
    ],
    buttonText: "Pilih Paket Bisnis",
    isFeatured: true, // Menandai paket unggulan
  },
  {
    title: "Paket Enterprise",
    price: "Hubungi Kami",
    description: "Solusi skala besar yang disesuaikan dengan kebutuhan kompleks.",
    features: [
      "Pengembangan Aplikasi Kustom",
      "Integrasi Sistem Eksternal",
      "Strategi Pemasaran Digital Lanjutan",
      "Dukungan Teknis 24/7",
      "Manajer Akun Khusus",
    ],
    buttonText: "Konsultasi Gratis",
  },
];

const PricingSection = () => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [userName, setUserName] = React.useState("");
  const [userEmail, setUserEmail] = React.useState("");
  const [selectedPlanTitle, setSelectedPlanTitle] = React.useState("");

  const handleInquirySubmit = () => {
    console.log("Inquiry Submitted:", {
      name: userName,
      email: userEmail,
      plan: selectedPlanTitle,
    });
    // Di sini Anda akan mengirim data ke backend atau layanan email
    // Untuk saat ini, kita hanya log ke konsol dan menutup dialog
    setIsDialogOpen(false);
    setUserName(""); // Reset input
    setUserEmail(""); // Reset input
    setSelectedPlanTitle(""); // Reset selected plan
    // Tampilkan toast sukses jika perlu
  };

  return (
    <section className="bg-gray-50 text-foreground py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Pilihan Paket Jasa Kami</h2>
        <Separator className="mb-12" />

        {/* Grid untuk menampilkan kartu harga */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`flex flex-col ${plan.isFeatured ? 'border-primary border-2 shadow-lg' : 'shadow-md'}`} // Menambahkan border dan shadow untuk paket unggulan
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold">{plan.title}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-4xl font-bold mb-6">{plan.price}</div>
                <ul className="space-y-3 text-left text-muted-foreground">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-4">
                 {/* Wrap button with DialogTrigger */}
                 <Dialog open={isDialogOpen && selectedPlanTitle === plan.title} onOpenChange={(open) => {
                    setIsDialogOpen(open);
                    if (!open) { // Reset state when dialog closes
                      setUserName("");
                      setUserEmail("");
                      setSelectedPlanTitle("");
                    }
                 }}>
                   <DialogTrigger asChild>
                     <Button
                       className={`w-full ${plan.isFeatured ? 'bg-primary text-primary-foreground hover:bg-primary/90' : ''}`}
                       onClick={() => {
                         setSelectedPlanTitle(plan.title);
                         setIsDialogOpen(true);
                       }}
                     >
                       {plan.buttonText}
                     </Button>
                   </DialogTrigger>
                   {/* Dialog Content - Rendered once, but state controls visibility */}
                   {selectedPlanTitle === plan.title && ( // Only render content if this plan's dialog is open
                     <DialogContent className="sm:max-w-[425px]">
                       <DialogHeader>
                         <DialogTitle>Ajukan Pertanyaan tentang {selectedPlanTitle}</DialogTitle>
                         <DialogDescription>
                           Isi formulir di bawah ini dan kami akan segera menghubungi Anda.
                         </DialogDescription>
                       </DialogHeader>
                       <div className="grid gap-4 py-4">
                         <div className="grid grid-cols-4 items-center gap-4">
                           <Label htmlFor="name" className="text-right">
                             Nama Anda
                           </Label>
                           <Input
                             id="name"
                             value={userName}
                             onChange={(e) => setUserName(e.target.value)}
                             className="col-span-3"
                             placeholder="Masukkan nama Anda"
                           />
                         </div>
                         <div className="grid grid-cols-4 items-center gap-4">
                           <Label htmlFor="email" className="text-right">
                             Email Anda
                           </Label>
                           <Input
                             id="email"
                             type="email"
                             value={userEmail}
                             onChange={(e) => setUserEmail(e.target.value)}
                             className="col-span-3"
                             placeholder="Masukkan email Anda"
                           />
                         </div>
                       </div>
                       <DialogFooter>
                         <Button type="button" onClick={handleInquirySubmit}>
                            <Mail className="mr-2 h-4 w-4" /> Kirim Inquiry
                         </Button>
                       </DialogFooter>
                     </DialogContent>
                   )}
                 </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;