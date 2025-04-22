"use client";

import { contactConfig } from "app/config/contact-config";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";

export default function FormSection() {
  // this file is in the contact/[[...service]] folder
  // get the service from the URL if it exists
  const params = useParams();
  const service = params.service ? params.service[0] : null;
  const query = useSearchParams();
  const passthroughNote = query.get("note");
  const hiddenNote = query.get("ref");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    service: contactConfig.validServices.find((s) => s.slug === service)?.name || "",
    passthroughNote: passthroughNote || "",
    hiddenNote: hiddenNote || "",
  });
  const router = useRouter();

  if (service && !contactConfig.validServices.some((s) => s.slug === service)) {
    router.replace("/contact");
  }
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<keyof typeof errors, string> = {
      name: "",
      email: "",
      message: "",
    };
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    console.log("Submitting form with data:", formData);
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.values(validationErrors).some((error) => error)) {
      console.log("Validation errors:", validationErrors);
      return;
    } else {
      console.log("No validation errors, proceeding to submit the form.");
      setIsSubmitting(true);
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
            subject: `Contact Form Submission from ${formData.name}`,
            from_name: formData.name,
            hidden_note: formData.hiddenNote,
            ...formData,
          }),
        });

        if (response.ok) {
          setIsSuccess(true);
        } else {
          console.error("Failed to send message.");
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center bg-gray-50 px-6 py-12 text-black">
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8">
          <div className="text-green-600 mb-4">
            <FaCheckCircle size={48} />
          </div>
          <h1 className="text-3xl font-bold text-green-600 mb-4">Message Sent!</h1>
          <p className="text-lg text-gray-700 text-center">Thank you for reaching out. I'll get back to you soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
      <div className={`flex flex-col ${service || passthroughNote ? "justify-start" : "justify-center"}`}>
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">Contact Me</h1>
        <p className="text-base text-gray-700 mb-2">
          I'd love to hear from you! Fill out the form and I'll get back to you as soon as possible.
        </p>
        <p className="text-base text-gray-700 mb-6">
          You can also email me directly at{" "}
          <a href="mailto:hello@kalinpatel.me" className="text-indigo-600 hover:underline">
            hello@kalinpatel.me
          </a>
          .
        </p>
        {(service || passthroughNote) && (
          <div className="border-t border-gray-300 mt-4 pt-4 mb-2">
            <p className="text-base text-gray-700 mb-1 font-bold">Additional Information:</p>
            <p className="text-sm text-gray-500 mb-2">This information will be included in your message.</p>
          </div>
        )}
        {service && (
          <p className="text-base text-gray-700 mb-2">
            You are contacting me about: <span className="font-semibold text-indigo-600">{formData.service}</span>
          </p>
        )}
        {passthroughNote && (
          <p className="text-base text-gray-700 mb-2">
            Relevant Information:{" "}
            <span className="font-semibold text-indigo-600">{decodeURIComponent(passthroughNote)}</span>
          </p>
        )}
      </div>
      <div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
          <input type="hidden" name="service" value={formData.service} />
          <input type="hidden" name="passthroughNote" value={formData.passthroughNote} />
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              disabled={isSubmitting}
              className={`mt-1 w-full p-3 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-indigo-500 focus:border-indigo-500`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
              className={`mt-1 w-full p-3 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-indigo-500 focus:border-indigo-500`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message"
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
              className={`mt-1 w-full p-3 border ${
                errors.message ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-indigo-500 focus:border-indigo-500 h-32`}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-indigo-600 text-white cursor-pointer p-3 rounded-lg hover:bg-indigo-700 transition duration-200 ease-in-out ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <AiOutlineLoading className="animate-spin mr-2" />
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
