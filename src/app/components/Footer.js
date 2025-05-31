import Image from "next/image";

//rafce = react function component, lo hace con el nombre del archivo
const Footer = () => {
  return (
    <div className="footer_container">
      <p>Nuestras redes sociales</p>
      <div className="logos">
        <a href="#">
          <Image
            src="/assets/facebook-svgrepo.svg"
            width={20}
            height={30}
            alt="Logo Facebook"
          />
        </a>
        <a href="#">
          <Image
            src="/assets/instagram-svgrepo.svg"
            width={20}
            height={30}
            alt="Logo Instagram"
          />
        </a>
        <a href="#">
          <Image
            src="/assets/gmail-svgrepo.svg"
            width={20}
            height={30}
            alt="Logo Gmail"
          />
        </a>
        <a href="#">
          <Image
            src="/assets/youtube-svgrepo.svg"
            width={20}
            height={30}
            alt="Logo Youtube"
          />
        </a>
        <a href="#">
          <Image
            src="/assets/whatsapp-svgrepo.svg"
            width={20}
            height={30}
            alt="Logo WhatsApp"
          />
        </a>
      </div>
      <div className="copyright">
        © Copyright 2025 | Todos los estudiantes reservados
      </div>
    </div>
  );
};

export default Footer;
