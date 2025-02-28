import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { FaEnvelope, FaTicketAlt } from 'react-icons/fa';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const recaptchaValue = recaptchaRef.current?.getValue();
    if (!recaptchaValue) {
      toast({
        title: "Error",
        description: "Please complete the reCAPTCHA verification",
        variant: "destructive",
        duration: 5000,
      });
      setIsLoading(false);
      return;
    }

    try {
      const result = await emailjs.sendForm(
        'service_dxfc8q2', // You'll need to replace this
        'template_35v2ea9', // You'll need to replace this
        form.current!,
        'ZMJ2Q0zEGxVezJZIR' // You'll need to replace this
      );

      if (result.text === 'OK') {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully. We'll get back to you soon!",
          duration: 5000,
        });
        form.current?.reset();
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
      recaptchaRef.current?.reset();
    }
  };

  return (
    <main className="min-h-screen bg-background flex flex-col mt-12">
    <Navigation />
    <div className="flex-1 py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90 backdrop-blur-xl" />
      <div className="relative max-w-md mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-center mb-6 text-white glow">
          Contattaci
          </h2>
          <p className="mt-2 text-sm text-gray-400">
          Hai domande sui nostri servizi o su un ordine? Contattaci senza esitazione! Ti rispondiamo entro 24 ore, festivi inclusi.
          </p>
          <p className="mt-2 text-sm text-gray-400">
    Scrivici a   <a href="mailto:supporto@glowlikes.it" className="inline-flex items-center">
      <FaEnvelope className="mr-1 text-xs" />supporto@glowlikes.it
    </a>, 
    apri un ticket dalla tua area cliente <a href="https://app.glowlikes.it/ticket" className="inline-flex items-center">
      <FaTicketAlt className="mr-1 text-xs" />un ticket
      </a>  o compila il modulo qui sotto. Scegli tu!
  </p>
        </div>

        <form ref={form} onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="from_name" className="sr-only">
              Nome
              </label>
              <input
                id="name"
                name="from_name"
                type="text"
                required
                className="relative block w-full rounded-md border-0 bg-background/50 backdrop-blur-sm py-2.5 px-4 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                placeholder="Nome"
              />
            </div>
            <div>
              <label htmlFor="reply_to" className="sr-only">
              Numero Ordine
              </label>
              <input
                className="relative block w-full rounded-md border-0 bg-background/50 backdrop-blur-sm py-2.5 px-4 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                placeholder="Numero Ordine"
              />
            </div>
            <div>
              <label htmlFor="reply_to" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="reply_to"
                type="email"
                required
                className="relative block w-full rounded-md border-0 bg-background/50 backdrop-blur-sm py-2.5 px-4 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="relative block w-full rounded-md border-0 bg-background/50 backdrop-blur-sm py-2.5 px-4 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                placeholder="Messaggio"
              />
            </div>
          </div>

          <div className="flex justify-center mb-4">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LfNVNsqAAAAAF7SXwMAwz4V4Oh7ziha-nl5rKpy"
              theme="dark"
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 shadow-lg hover:shadow-primary/20"
          >
            {isLoading ? "Invia" : "Invia"}
          </Button>
        </form>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Contact;
