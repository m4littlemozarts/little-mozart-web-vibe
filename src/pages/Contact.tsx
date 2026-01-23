import { useState } from "react";
import Layout from "@/components/Layout";
import DecorativeDivider from "@/components/DecorativeDivider";
import { MapPin, Mail, Send, CheckCircle } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner"; // Using sonner for toast notifications

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmittedSuccessfully(false); // Reset submission status on new attempt

    try {
      const response = await fetch("https://voinvnkprtnirrpilwry.supabase.co/functions/v1/send-contact-email", { // Updated URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        const errorMessage = result.error?.message || "Failed to send message. Please try again.";
        toast.error(errorMessage);
        return;
      }

      toast.success("Your message has been sent successfully!");
      setIsSubmittedSuccessfully(true);
      reset(); // Clear form fields only on successful submission
    } catch (error) {
      console.error("Network or unexpected error:", error);
      toast.error("Could not connect to the server. Please check your internet connection and try again.");
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-container text-center pb-8">
        <h1 className="section-heading text-4xl sm:text-5xl">Contact Us</h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
          We'd love to hear from you! Whether you have questions about our program, 
          want to schedule a visit, or are ready to enroll your little musician, 
          reach out anytime.
        </p>
      </section>

      <DecorativeDivider className="mb-8" />

      <section className="section-container pt-0">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
              Send Us a Message
            </h2>

            {isSubmittedSuccessfully ? (
              <div className="paper-card text-center py-12">
                <CheckCircle className="w-16 h-16 text-sage mx-auto mb-4" />
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  Thank You!
                </h3>
                <p className="font-body text-muted-foreground">
                  Your message has been received. We'll get back to you soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block font-heading font-medium text-foreground mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name")}
                    className={`w-full px-4 py-3 rounded-lg border-2 bg-cream font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-golden/50 transition-colors ${
                      errors.name ? "border-destructive" : "border-border focus:border-golden"
                    }`}
                    placeholder="Jane Smith"
                  />
                  {errors.name && (
                    <p className="mt-1 font-body text-sm text-destructive">{errors.name.message}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block font-heading font-medium text-foreground mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    className={`w-full px-4 py-3 rounded-lg border-2 bg-cream font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-golden/50 transition-colors ${
                      errors.email ? "border-destructive" : "border-border focus:border-golden"
                    }`}
                    placeholder="jane@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 font-body text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block font-heading font-medium text-foreground mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register("message")}
                    className={`w-full px-4 py-3 rounded-lg border-2 bg-cream font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-golden/50 transition-colors resize-none ${
                      errors.message ? "border-destructive" : "border-border focus:border-golden"
                    }`}
                    placeholder="Tell us about your child and what you're looking for in a music program..."
                  />
                  {errors.message && (
                    <p className="mt-1 font-body text-sm text-destructive">{errors.message.message}</p>
                  )}
                </div>

                <button 
                  type="submit" 
                  className="btn-primary inline-flex items-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
              Visit Our Studio
            </h2>

            <div className="paper-card mb-6">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-golden/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-golden" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      Location
                    </h3>
                    <p className="font-body text-muted-foreground">
                      <a 
                        href="https://www.google.com/maps/search/?api=1&query=500+E+Moana+Ln,+Reno,+NV+89502" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:underline hover:text-golden transition-colors"
                      >
                        Steinway Piano Gallery of Reno, NV
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-dusty-rose/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-dusty-rose" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      Email
                    </h3>
                    <a 
                      href="mailto:m4littlemozarts@gmail.com" 
                      className="font-body text-golden hover:underline"
                    >
                      m4littlemozarts@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-cream rounded-lg border-2 border-border p-6">
              <h3 className="font-heading font-semibold text-foreground mb-3">
                Class Schedule
              </h3>
              <p className="font-body text-muted-foreground text-sm mb-4">
                Classes are held on weekday afternoons and Saturday mornings. 
                Contact us for current availability and session dates.
              </p>
              <h3 className="font-heading font-semibold text-foreground mb-3">
                What to Bring
              </h3>
              <p className="font-body text-muted-foreground text-sm">
                Just bring your child and their curiosity! All materials are 
                provided. Students will receive their own lesson books to take home.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;