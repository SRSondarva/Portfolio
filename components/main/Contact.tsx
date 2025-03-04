"use client";
import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import FormButton from "../sub/FormButton";
import toast from "react-hot-toast";

const Contact: React.FC = () => {
  const handleSubmit = useCallback(async (formData: FormData) => {
    const { data, error } = await sendEmail(formData);

    if (error) {
      toast.error(error);
      return;
    }

    toast.success("Email sent successfully!");
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] z-10 flex flex-col self-center items-center mt-20 px-5"
      id="contact"
    >
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <p className="text-gray-700 text-center mb-6">
        Please contact me directly at{" "}
        <a href="mailto:meetlimbani23@gmail.com" className="underline">
          letsmailsunny9@gmail.com
        </a>{" "}
        or through this form
      </p>

      <form
        className="w-full flex flex-col opacity-60 text-black/70"
        action={handleSubmit}
      >
        <input
          name="senderEmail"
          required
          maxLength={500}
          placeholder="Your Email"
          className="px-4 h-14 rounded-lg border border-black/10 mb-4"
          type="email"
        />
        <textarea
          name="message"
          required
          maxLength={5000}
          placeholder="Your Message"
          className="h-52 rounded-lg border border-black/10 p-4 mb-4"
        />
        <FormButton />
      </form>
    </motion.div>
  );
};

export default React.memo(Contact);
