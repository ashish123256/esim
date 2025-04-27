import './globals.css';
import Header from '@/components/Header'; 

export const metadata = {
  title: 'eSIM Manager',
  description: 'Manage your eSIM plans easily.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-100">
        <Header />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
