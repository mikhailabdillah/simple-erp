import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Provider;
