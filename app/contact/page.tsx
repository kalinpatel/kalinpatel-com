import Footer from "app/components/footer";
import { Navbar } from "app/components/nav";
import FormSection from "./form";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6 py-12 text-black">
        <FormSection />
        <Footer />
      </div>
    </>
  );
}
