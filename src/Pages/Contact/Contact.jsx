import Button from "../../Components/Utilitys/Button";
import Hero from "../../Components/Utilitys/Hero";
import contact from "../../assets/contact.svg";
import Form from "./Form";

const Contact = () => {
  return (
    <div>
      <Hero title="Get In Touch " image={contact} />
      <Form/>
    </div>
  );
};

export default Contact;
