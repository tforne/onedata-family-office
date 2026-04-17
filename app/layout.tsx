import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OneData Family Office',
  description:
    'Plataforma para gestionar patrimonio familiar, activos inmobiliarios, ownership y reporting financiero sobre Microsoft Dynamics 365 Business Central.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
