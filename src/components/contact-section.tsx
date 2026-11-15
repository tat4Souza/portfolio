import { MdOutlineAlternateEmail } from "react-icons/md";
import CustomButton from "./custom-button";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function ContactSection() {
  return (
    <section
      id="contact"
      className="h-min-[95vh] h-[95vh] flex flex-col  w-[75%] gap-10 bg-[radial-gradient(52.78%_52.78%_at_50%_9.42%,rgba(184,56,49,0.26)_0%,rgba(59,4,12,0.00)_100%)] relative"
    >
      <div className="absolute left-[37%] z-0 top-35">
        <img src="/star.svg" alt="Estrela decorativa" />
      </div>
      <div className="flex flex-col items-center justify-center h-full z-10">
        <h3 className="font-mono text-4xl text-primary mb-3">Contato</h3>
        <p className="dark:text-primary-foreground w-[30%] text-center mb-6">
          Entre em contato comigo para trabalharmos juntos.
        </p>
        <span className="bg-card border p-3 text-primary rounded-xl mb-4 flex gap-2 items-center">
          <MdOutlineAlternateEmail />
          taiss.fernandes.souza@gmail.com
        </span>

        <div className="flex gap-3">
          <CustomButton>
            <FaGithub className="size-5" />
          </CustomButton>
          <CustomButton>
            <FaLinkedin className="size-5" />
          </CustomButton>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
