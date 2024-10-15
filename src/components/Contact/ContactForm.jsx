import React, { useState, useEffect } from "react";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState("");
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  useEffect(() => {
    let timer;
    if (submitResult) {
      setIsMessageVisible(true);
      timer = setTimeout(() => {
        setIsMessageVisible(false);
        setTimeout(() => setSubmitResult(""), 300); // Clear message after fade out
      }, 3700); // 300ms for fade out + 3s for message visibility
    }
    return () => clearTimeout(timer);
  }, [submitResult]);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitResult("");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Simulated success message
    setIsSubmitting(false);
    setSubmitResult("Message envoyé avec succès!");
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl mb-4">CONTACT</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1 text-sm">
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
            className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-red-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 text-sm">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
            className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-red-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 text-sm">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-red-500"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`flex items-center justify-center w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? (
            "Envoi en cours..."
          ) : (
            <>
              <Send size={18} className="mr-2" />
              Envoyer
            </>
          )}
        </button>
      </form>
      {submitResult && (
        <div
          className={`mt-4 p-3 bg-green-800 text-green-100 rounded transition-opacity duration-300 ${
            isMessageVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {submitResult}
        </div>
      )}
    </div>
  );
};

export default ContactForm;
