import { Navbar } from "app/components/nav";
import FormSection from "./form";
import Footer from "app/components/footer";

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
