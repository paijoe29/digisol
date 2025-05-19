import React from 'react';
import { cn } from '@/lib/utils'; // Utility untuk menggabungkan class Tailwind
import { useIsMobile } from "@/hooks/use-mobile"; // Import hook useIsMobile
import { Button } from "@/components/ui/button"; // Import Button
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
import { MessageSquare } from 'lucide-react'; // Mengganti import ikon SquareWhatsapp menjadi MessageSquare

interface ServiceProductItemProps {
  title: string;
  description: string;
  icon: React.ReactNode; // Menerima ikon sebagai prop
  imageUrl?: string; // Placeholder for now
  isReversed?: boolean; // Untuk menentukan tata letak zig-zag
}

const WHATSAPP_NUMBER = "6281234567890"; // Ganti dengan nomor WhatsApp Anda

const ServiceProductItem = ({ title, description, icon, imageUrl, isReversed = false }: ServiceProductItemProps) => {
  const isMobile = useIsMobile();
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [userName, setUserName] = React.useState("");

  if (isMobile === undefined) {
    // Placeholder atau loading state jika diperlukan
    return null;
  }

  const handleWhatsappClick = () => {
    const message = `Halo, saya ${userName || 'Pengguna'}, saya tertarik dengan jasa ${title}.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsDialogOpen(false); // Tutup dialog setelah membuka WhatsApp
    setUserName(""); // Reset input nama
  };

  // Wrapper box applied to both mobile and desktop layouts
  // Menggunakan DialogTrigger di sekitar konten yang bisa diklik
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        {/* Konten item yang bisa diklik */}
        <div className="border rounded-lg p-4 md:p-6 shadow-sm bg-white cursor-pointer hover:shadow-md transition-shadow"> {/* Added cursor-pointer and hover effect */}
          {isMobile ? (
            // Tampilan Mobile: Zig-zag dengan kotak ikon/judul
            <div className={cn(
              "flex flex-row items-center gap-4", // Selalu flex-row di mobile untuk zig-zag
              isReversed ? "flex-row-reverse" : "" // Membalik urutan di mobile
            )}>
              {/* Bagian Kotak Ikon/Judul */}
              <div className="w-1/2 flex justify-center">
                <div className="border rounded-lg p-4 flex flex-col items-center text-center w-full max-w-[150px] shadow-sm"> {/* Kotak kecil (inner) */}
                  {React.cloneElement(icon as React.ReactElement, { className: "h-8 w-8 text-primary mb-2" })} {/* Menampilkan ikon */}
                  <h3 className="text-sm font-semibold line-clamp-2">{title}</h3> {/* Judul kecil */}
                </div>
              </div>

              {/* Bagian Placeholder Kosong atau Ilustrasi Kecil */}
              <div className="w-1/2 flex justify-center">
                 {/* Mengganti div placeholder dengan tag img */}
                 {imageUrl ? (
                   <img
                     src={imageUrl}
                     alt={`Ilustrasi ${title}`}
                     className="w-full max-w-[150px] object-cover rounded-lg shadow-sm" // Menghapus h-24, mempertahankan w-full, max-w-[150px], object-cover
                   />
                 ) : (
                   <div className="w-full max-w-[150px] h-24 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-xs">
                     Ilustrasi
                   </div>
                 )}
              </div>
            </div>
          ) : (
            // Tampilan Desktop/Tablet: Zig-zag standar
            <div className={cn(
              "flex flex-col md:flex-row items-center gap-8 md:gap-12", // Removed vertical padding here as it's on the outer wrapper
              isReversed ? "md:flex-row-reverse" : "" // Membalik urutan di layar medium ke atas
            )}>
              {/* Bagian Gambar/Ilustrasi */}
              <div className="w-full md:w-1/2 flex justify-center">
                {/* Mengganti div placeholder dengan tag img */}
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt={`Ilustrasi ${title}`}
                    className="w-full max-w-sm object-cover rounded-lg shadow-md" // Menghapus h-64, mempertahankan w-full, max-w-sm, object-cover
                  />
                ) : (
                  <div className="w-full max-w-sm h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm shadow-md">
                    Placeholder Ilustrasi/Gambar
                  </div>
                )}
              </div>

              {/* Bagian Teks */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                {/* Add icon next to title */}
                <div className="flex items-center justify-center md:justify-start mb-4"> {/* Center on mobile, start on desktop */}
                  {React.cloneElement(icon as React.ReactElement, { className: "h-8 w-8 text-primary mr-3" })}
                  <h3 className="text-3xl font-bold">{title}</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-6"> {/* Add margin bottom */}
                  {description}
                </p>
                {/* Add WhatsApp button */}
                {/* The DialogTrigger is already around the outer div, so clicking the button will also trigger it */}
                <Button onClick={() => setIsDialogOpen(true)}> {/* Explicitly open dialog on button click */}
                  <MessageSquare className="mr-2 h-4 w-4" /> Pesan via WhatsApp
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogTrigger>

      {/* Dialog Pop-up */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle> {/* Judul dialog adalah judul jasa/produk */}
            <DialogDescription>
              {description} {/* Menampilkan deskripsi lengkap di sini */}
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
          </div>
          <DialogFooter>
            <Button type="button" onClick={handleWhatsappClick}>
               <MessageSquare className="mr-2 h-4 w-4" /> Pesan via WhatsApp
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Dialog>
  );
};

export default ServiceProductItem;