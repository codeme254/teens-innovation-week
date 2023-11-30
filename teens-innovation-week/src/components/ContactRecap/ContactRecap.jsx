import { IoLogoLinkedin } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { TbPhoneCall } from "react-icons/tb";
import { GrInstagram } from "react-icons/gr";
import { IoLogoTiktok } from "react-icons/io5";
const ContactRecap = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Get in touch</h2>
      <div className="social-container">
        <div className="video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/TNO75X-ecfY?si=tjjM3bvA8TJkM5nr"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            listtype="playlist"
            rel="0"
          ></iframe>
        </div>
        <div className="social-media-container">
          <a
            href="https://www.linkedin.com/company/steamlabs-africa/"
            target="_blank"
            className="social-media"
          >
            <IoLogoLinkedin />
          </a>
          <a
            href="https://twitter.com/wearesteamlabs"
            target="_blank"
            className="social-media"
          >
            <BsTwitterX />
          </a>
          <a
            href="https://wa.me/+254719802456"
            target="_blank"
            className="social-media"
          >
            <IoLogoWhatsapp />
            <p className="social-media__value">+254719802456</p>
          </a>
          <a
            href="https://www.facebook.com/WeAreSTEAMLabs"
            target="_blank"
            className="social-media"
          >
            <IoLogoFacebook />
          </a>
          <a href="tel:+254719802456" target="_blank" className="social-media">
            <TbPhoneCall />
            <p className="social-media__value">+254719802456</p>
          </a>
          <a
            href="https://www.instagram.com/wearesteamlabs"
            target="_blank"
            className="social-media"
          >
            <GrInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@wearesteamlabs"
            target="_blank"
            className="social-media"
          >
            <IoLogoTiktok />
          </a>
        </div>
      </div>
    </section>
  );
};
export default ContactRecap;
