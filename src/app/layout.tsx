import Footer from './components/footer';
import Navbar from './components/navbar';
import './globals.css';
export const metadata = {
  title: 'Playrr',
  description:
    'Playrr: Tu nueva app en Buenos Aires para conectar con deportistas locales y encontrar partidos de fútbol, baloncesto y voleibol en tu área. Regístrate, únete a partidos, juega y conecta con la comunidad. Con Playrr, nunca te quedarás sin jugar. ¡Descubre tu próxima gran aventura deportiva con nosotros!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-black">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
