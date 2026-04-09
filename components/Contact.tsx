import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const inputClass =
    "flex h-10 w-full rounded-md border-2 border-border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 transition-colors";

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "neurotech-org@ncsu.edu",
      link: "mailto:neurotech-org@ncsu.edu",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "North Carolina State University, Raleigh, NC",
      link: null,
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl md:text-4xl">Contact Us</h2>
          <div className="mx-auto h-1 w-24 bg-primary mb-6"></div>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Have questions about our projects? Interested in collaborating or volunteering?
            We'd love to hear from you!
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6">
                <h3 className="mb-4">Send us a Message</h3>
              </div>
              <div className="p-6 pt-0">
                {submitted ? (
                  <div className="rounded-lg bg-primary/10 p-8 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                        <Send className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h4 className="mb-2">Thank you for your message!</h4>
                    <p className="text-muted-foreground">
                      We'll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your.email@example.com"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject *</label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="What is this about?"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us more..."
                        className={`${inputClass} min-h-[150px] h-auto`}
                      />
                    </div>

                    <button type="submit" className="w-full inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6">
                <h4 className="mb-4">Get in Touch</h4>
              </div>
              <div className="p-6 pt-0 space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <p className="mb-1 text-sm text-muted-foreground">
                        {info.title}
                      </p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p>{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6">
                <h4 className="mb-4">Meeting Hours</h4>
                <div className="space-y-4 text-sm">
                  <div className="rounded-lg border border-border/80 bg-muted/30 px-4 py-3">
                    <div className="flex justify-between gap-2">
                      <span className="font-medium">Wednesday</span>
                      <span className="shrink-0 text-muted-foreground">7PM – 9PM</span>
                    </div>
                    <p className="mt-1 text-muted-foreground">
                      Engineering Building 3, Room 2236 · Centennial Campus, NC State
                    </p>
                  </div>
                  <div className="rounded-lg border border-border/80 bg-muted/30 px-4 py-3">
                    <div className="flex justify-between gap-2">
                      <span className="font-medium">Friday</span>
                      <span className="shrink-0 text-muted-foreground">4PM – 6PM</span>
                    </div>
                    <p className="mt-1 text-muted-foreground">
                      Engineering Building 2, Room 1227 · Centennial Campus, NC State
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}