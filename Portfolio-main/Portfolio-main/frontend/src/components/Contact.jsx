const Contact = () => {
    return (
      <section className="h-screen flex flex-col justify-center items-center text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-300">Let's connect and create something amazing.</p>
        <a
          href="mailto:naveen@example.com"
          className="mt-6 px-6 py-3 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-300 transition"
        >
          Email Me
        </a>
      </section>
    );
  };
  
  export default Contact;
  