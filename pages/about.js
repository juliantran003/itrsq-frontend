// Packages
import Head from "next/head";
import Image from "next/image";

// Components
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

// Img
import aboutIcon from "../public/img/hero/about.svg";
import howIcon from "../public/img/about/how.svg";

const About = () => {
  return (
    <div className="core-page">
      <Head>
        <title>ITRSQ - About</title>
        <meta property="og:title" content="ITRSQ - About" key="title" />
      </Head>
      <div className="about-us-page">
        <HeroSection
          title={"About Us"}
          img={aboutIcon}
          topTitle={"Welcome to ITRSQ!"}
        />
        <div>
          <div className="aboutus-section">
            <div
              className="left-side"
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-once="true"
            >
              <div className="image-container-about">
                <Image src={howIcon} alt="how" />
              </div>
            </div>
            <div className="right-side">
              <div className="text-holder">
                <div
                  className="smol-title"
                  data-aos="fade-left"
                  data-aos-delay="100"
                  data-aos-once="true"
                >
                  About Us
                </div>
                <div
                  className="main-title"
                  data-aos="fade-left"
                  data-aos-delay="200"
                  data-aos-once="true"
                >
                  How we ensure your vision comes to life
                </div>
                <p
                  data-aos="fade-left"
                  data-aos-delay="300"
                  data-aos-once="true"
                >
                  We are an all rounder IT solutions company, based in London.
                  Started in 2017 and continously growing. We deal with anything
                  from supporting Phones to servers as well as Web Development.
                  We have a proactive team that are willing to go that extra
                  mile to cater to your needs. We believe in Value, Trust and
                  Transparency.
                </p>
              </div>
            </div>
          </div>
          <div className="expert-section">
            <div className="left-side">
              <div className="text-holder">
                <div
                  className="smol-title"
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-once="true"
                >
                  Our Expertise
                </div>
                <div
                  className="main-title"
                  data-aos="fade-left"
                  data-aos-delay="200"
                  data-aos-once="true"
                >
                  Bespoke solutions for your business
                </div>
                <p
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-once="true"
                >
                  Development, Communication, Support and Maintenance, ITRSQ
                  goes the extra mile to make sure your experience with us feels
                  completely tailored to your requirements. No matter what your
                  idea is, our engineers will make sure to bring your vision to
                  life. So don’t be shy, send us a message !
                </p>
              </div>
            </div>
            <div className="right-side">
              <div className="poggres-holder">
                <div
                  className="pogress"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-once="true"
                >
                  <div className="title">Development Experience</div>
                  <div className="bar">
                    <div className="inner" style={{ width: "87%" }}></div>
                  </div>
                </div>
                <div
                  className="pogress"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-once="true"
                >
                  <div className="title">IT Support Experience</div>
                  <div className="bar">
                    <div className="inner" style={{ width: "78%" }}></div>
                  </div>
                </div>
                <div
                  className="pogress"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-once="true"
                >
                  <div className="title">Marketing Experience</div>
                  <div className="bar">
                    <div className="inner" style={{ width: "69%" }}></div>
                  </div>
                </div>
                <div
                  className="pogress"
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-once="true"
                >
                  <div className="title">Consulting Experience</div>
                  <div className="bar">
                    <div className="inner" style={{ width: "65%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default About;
