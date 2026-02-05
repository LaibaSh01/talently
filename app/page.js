"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Client1 from "@/public/images/Client1.avif";
import Client2 from "@/public/images/Client2.avif";
import Client3 from "@/public/images/Client3.avif";
import Client4 from "@/public/images/Client4.avif";
import Client5 from "@/public/images/Client5.avif";
import Client6 from "@/public/images/Client6.avif";
import Client7 from "@/public/images/Client7.avif";
import Company1 from "@/public/images/Company1.png";
import Company2 from "@/public/images/Company2.png";
import Company3 from "@/public/images/Company3.png";
import Company4 from "@/public/images/Company4.png";
import Feature1 from "@/public/images/Feature1.avif";
import Feature2 from "@/public/images/Feature2.avif";
import Feature3 from "@/public/images/Feature3.avif";
import Feature4 from "@/public/images/Feature4.avif";
import ArrowLeft from "@/public/icons/ArrowLeft";
import ArrowRight from "@/public/icons/ArrowRight";
import Button from "./components/ui/Button/Button";

const features = [
  {
    title: "Role posting.",
    desc: "Post your job and access a curated pool of skilled tech candidates, from software development to data science.",
    image: Feature1,
  },
  {
    title: "Pre-screening interviews.",
    desc: "Talently simplifies hiring with pre-screen interviews, ensuring candidates fit your technical and cultural needs.",
    image: Feature2,
  },
  {
    title: "Onboarding support.",
    desc: "Talently ensures a smooth transition with onboarding support, handling paperwork and remote setup so your team is productive from day one.",
    image: Feature3,
  },
  {
    title: "Diversify recruitment.",
    desc: "Build an inclusive team with our diversity recruitment, sourcing skilled professionals from underrepresented groups.",
    image: Feature4,
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={`${styles.talently}`}>
      <Header />
      <main className={`${styles.main}`}>
        <section className={`${styles.hero}`}>
          <div className={`${styles.heroContent}`}>
            <div className={`${styles.heroTop}`}>
              <div className={`${styles.heading}`}>
                <h1>Your gatway to remote tech carrers.</h1>
                <p>
                  Connect with top companies and explore roles suited to your
                  skills and career goals.
                </p>
              </div>

              <div className={styles.actionButtons}>
                <Button variant="primary">Explore Roles</Button>
                <Button>Hire talent</Button>
              </div>
            </div>

            <div className={`${styles.marqueeWrapper}`}>
              <Marquee speed={30}>
                <div className={styles.heroTestimonial}>
                  <div className={styles.clientInfoContainer}>
                    <Image src={Client1} alt="client avatar" />
                    <div className={styles.clientInfoText}>
                      <h5>Jon Bell</h5>
                      <p>Data Scientist</p>
                    </div>
                  </div>
                  <p>
                    The team at Talently understood my career goals and helped
                    me secure a fantastic role.
                  </p>

                  <div className={styles.clientCompany}>
                    <div className={styles.left}>
                      <Image src={Company1} alt="company logo" />
                      <h5>Code Solutions</h5>
                    </div>
                    <div className={styles.rating}>
                      <h2>9/10</h2>
                      <p>Job Satisfaction</p>
                    </div>
                  </div>
                </div>

                <div className={styles.heroTestimonial}>
                  <div className={styles.clientInfoContainer}>
                    <Image src={Client2} alt="client avatar" />
                    <div className={styles.clientInfoText}>
                      <h5>Tim Chen</h5>
                      <p>Senior Software Engineer</p>
                    </div>
                  </div>
                  <p>
                    Talently helped me land my dream remote developer job in
                    just a few weeks.{" "}
                  </p>

                  <div className={styles.clientCompany}>
                    <div className={styles.left}>
                      <Image src={Company4} alt="company logo" />
                      <h5>ABC Solutions</h5>
                    </div>
                    <div className={styles.rating}>
                      <h2>9/10</h2>
                      <p>Job Satisfaction</p>
                    </div>
                  </div>
                </div>

                <div className={styles.heroTestimonial}>
                  <div className={styles.clientInfoContainer}>
                    <Image src={Client3} alt="client avatar" />
                    <div className={styles.clientInfoText}>
                      <h5>Sarah Maplas</h5>
                      <p>Lead UX Designer</p>
                    </div>
                  </div>
                  <p>
                    Thanks to Talently, I found a perfect remote tech role that
                    matches my skills and lifestyle.
                  </p>

                  <div className={styles.clientCompany}>
                    <div className={styles.left}>
                      <Image src={Company2} alt="company logo" />
                      <h5>Creative Studios</h5>
                    </div>
                    <div className={styles.rating}>
                      <h2>8/10</h2>
                      <p>Job Satisfaction</p>
                    </div>
                  </div>
                </div>

                <div className={styles.heroTestimonial}>
                  <div className={styles.clientInfoContainer}>
                    <Image src={Client4} alt="client avatar" />
                    <div className={styles.clientInfoText}>
                      <h5>Eniola Bakare</h5>
                      <p>Full Stack Developer</p>
                    </div>
                  </div>
                  <p>
                    From start to finish, talently made the recruitment process
                    super simple. Highly recommend!
                  </p>

                  <div className={styles.clientCompany}>
                    <div className={styles.left}>
                      <Image src={Company3} alt="company logo" />
                      <h5>Abstract Studio</h5>
                    </div>
                    <div className={styles.rating}>
                      <h2>10/10</h2>
                      <p>Job Satisfaction</p>
                    </div>
                  </div>
                </div>
              </Marquee>
            </div>

            <div className={styles.heroGlow}></div>
          </div>
        </section>

        <section id="process" className={`${styles.process}`}>
          <div className="container">
            <div className={styles.processContent}>
              <div className={styles.sectionTop}>
                <div className={styles.left}>
                  <div className={styles.heading}>
                    <p>PROCESS</p>
                    <h2>Your path to the perfect remote tech job.</h2>
                  </div>
                  <p>
                    Discover top remote tech opportunities and land your next
                    role with ease, through our streamlined process.
                  </p>
                </div>
                <Button variant="primary">View open roles</Button>
              </div>

              <Swiper
                modules={[Navigation]}
                spaceBetween={15}
                slidesPerView={2}
                // speed={1000}
                // resistanceRatio={0.85}
                // touchRatio={1.2}
                 onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                }}
                className={styles.swiper}
              >
                <SwiperSlide>
                  <div className={styles.processCard}>
                    <div className={styles.top}>
                      <p>STEP 01</p>
                      <h3>Browse remote jobs.</h3>
                    </div>

                    <p>
                      Explore a curated selection of remote tech job listings
                      that match your expertise and career goals.
                    </p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={styles.processCard}>
                    <div className={styles.top}>
                      <p>STEP 02</p>
                      <h3>Apply for role.</h3>
                    </div>

                    <p>
                      Submit applications, knowing you're connecting with
                      companies actively seeking remote tech talent like you.
                    </p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={styles.processCard}>
                    <div className={styles.top}>
                      <p>STEP 03</p>
                      <h3>Meet Talently.</h3>
                    </div>

                    <p>
                      Have a quick chat with our team to ensure your skills and
                      career goals align with the best remote job opportunities.
                    </p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={styles.processCard}>
                    <div className={styles.top}>
                      <p>STEP 04</p>
                      <h3>Land your dream role.</h3>
                    </div>

                    <p>
                      After the final interview process, secure your next remote
                      tech job and start working with top companies.
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>

              <div className={styles.navigation}>
                <div ref={prevRef} className={styles.arrow}>
                  <ArrowLeft />
                </div>
                <div ref={nextRef} className={styles.arrow}>
                  <ArrowRight />
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </section>

        <section id="recruiting" className={`${styles.recruiting}`}>
          <div className="container">
            <div className={styles.recruitingContent}>
              <div className={styles.sectionTop}>
                <div className={styles.left}>
                  <div className={styles.heading}>
                    <p>RECRUITING</p>
                    <h2>Select from the best.</h2>
                  </div>
                  <p>
                    We know finding the right hire is challenging, which is why
                    we approve only highly skilled professionals on our
                    platform.
                  </p>
                </div>

                <Button variant="primary">Hire now</Button>
              </div>

              <div className={styles.recruitingFeaturesGrid}>
                <div className={styles.featuresAccordionContainer}>
                  {features.map((item, index) => (
                    <div key={index}>
                      <div
                        className={`${styles.featureAccordionItem} ${
                          activeIndex === index ? styles.active : ""
                        }`}
                        onClick={() => setActiveIndex(index)}
                      >
                        <h3>{item.title}</h3>

                        <div className={styles.answer}>
                          <p>{item.desc}</p>
                        </div>
                      </div>

                      {index !== features.length - 1 && (
                        <div className={styles.divider} />
                      )}
                    </div>
                  ))}
                </div>

                {/* Image */}
                <div className={styles.imageWrapper}>
                  <Image
                    key={activeIndex}
                    src={features[activeIndex].image}
                    alt="feature"
                    width={1280}
                    height={896}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="roles" className={`${styles.roles}`}>
          <div className="container">
            <div className={styles.rolesContent}>
              <div className={styles.sectionTop}>
                <div className={styles.heading}>
                  <p>FEATURED ROLES</p>
                  <h2>Find your next role.</h2>
                </div>
                <p>Browse, apply and land your dream remote job.</p>
              </div>
              <div className={styles.featuredRoles}>
                <div className={styles.featuredRoleCard}>
                  <div className={styles.featuredRoleInfo}>
                    <div className={styles.companyInfo}>
                      <div className={styles.left}>
                        <div className={styles.companyLogo}>
                          <Image src={Company4} alt="company logo" />
                        </div>
                        <h4>Code Solutions</h4>
                      </div>
                      <div className={styles.featuredChip}>
                        <p>FEATURED</p>
                      </div>
                    </div>

                    <div className={styles.divider}></div>

                    <div className={styles.roleInfo}>
                      <h5>Head of Development</h5>
                      <p>Full-time</p>
                    </div>
                  </div>

                  <div className={styles.action}>
                    <Button variant="primary" fullWidth>
                      View details
                    </Button>
                    <p>Posted on Nov 26, 2024</p>
                  </div>
                </div>

                <div className={styles.featuredRoleCard}>
                  <div className={styles.featuredRoleInfo}>
                    <div className={styles.companyInfo}>
                      <div className={styles.left}>
                        <div className={styles.companyLogo}>
                          <Image src={Company3} alt="company logo" />
                        </div>
                        <h4>ABC Studios</h4>
                      </div>
                      <div className={styles.featuredChip}>
                        <p>FEATURED</p>
                      </div>
                    </div>

                    <div className={styles.divider}></div>

                    <div className={styles.roleInfo}>
                      <h5>UI/UX Designer</h5>
                      <p>Full-time</p>
                    </div>
                  </div>

                  <div className={styles.action}>
                    <Button variant="primary" fullWidth>
                      View details
                    </Button>
                    <p>Posted on Dec 20, 2024</p>
                  </div>
                </div>

                <div className={styles.featuredRoleCard}>
                  <div className={styles.featuredRoleInfo}>
                    <div className={styles.companyInfo}>
                      <div className={styles.left}>
                        <div className={styles.companyLogo}>
                          <Image src={Company2} alt="company logo" />
                        </div>
                        <h4>Design Spark</h4>
                      </div>
                      <div className={styles.featuredChip}>
                        <p>FEATURED</p>
                      </div>
                    </div>

                    <div className={styles.divider}></div>

                    <div className={styles.roleInfo}>
                      <h5>Lead Product Designer</h5>
                      <p>Full-time</p>
                    </div>
                  </div>

                  <div className={styles.action}>
                    <Button variant="primary" fullWidth>
                      View details
                    </Button>
                    <p>Posted on Dec 30, 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className={`${styles.testimonial}`}>
          <div className="container">
            <div className={styles.testimonialContent}>
              <div className={styles.sectionTop}>
                <div className={styles.heading}>
                  <p>TESTIMONIALS</p>
                  <h2>Securing talent's dream roles.</h2>
                </div>
                <p>
                  Hear from professionals who've found their perfect role
                  through us. Their success is our motivation.
                </p>
              </div>
              <div className={styles.testimonialContainer}>
                <div className={styles.testimonialCard}>
                  <div className={styles.clientInfoContainer}>
                    <Image src={Client1} alt="client avatar" />
                    <div className={styles.clientInfoText}>
                      <h5>Jon Bell</h5>
                      <p>Data Scientist</p>
                    </div>
                  </div>
                  <p>
                    The team at Talently understood my career goals and helped
                    me secure a fantastic role.
                  </p>

                  <div className={styles.clientCompany}>
                    <div className={styles.left}>
                      <Image src={Company1} alt="company logo" />
                      <h5>Code Solutions</h5>
                    </div>
                    <div className={styles.rating}>
                      <h2>9/10</h2>
                      <p>Job Satisfaction</p>
                    </div>
                  </div>
                </div>

                <div className={styles.testimonialCard}>
                  <div className={styles.clientInfoContainer}>
                    <Image src={Client2} alt="client avatar" />
                    <div className={styles.clientInfoText}>
                      <h5>Tim Chen</h5>
                      <p>Senior Software Engineer</p>
                    </div>
                  </div>
                  <p>
                    Talently helped me land my dream remote developer job in
                    just a few weeks.{" "}
                  </p>

                  <div className={styles.clientCompany}>
                    <div className={styles.left}>
                      <Image src={Company4} alt="company logo" />
                      <h5>ABC Solutions</h5>
                    </div>
                    <div className={styles.rating}>
                      <h2>9/10</h2>
                      <p>Job Satisfaction</p>
                    </div>
                  </div>
                </div>

                <div className={styles.testimonialCard}>
                  <div className={styles.clientInfoContainer}>
                    <Image src={Client3} alt="client avatar" />
                    <div className={styles.clientInfoText}>
                      <h5>Sarah Maplas</h5>
                      <p>Lead UX Designer</p>
                    </div>
                  </div>
                  <p>
                    Thanks to Talently, I found a perfect remote tech role that
                    matches my skills and lifestyle.
                  </p>

                  <div className={styles.clientCompany}>
                    <div className={styles.left}>
                      <Image src={Company2} alt="company logo" />
                      <h5>Creative Studios</h5>
                    </div>
                    <div className={styles.rating}>
                      <h2>8/10</h2>
                      <p>Job Satisfaction</p>
                    </div>
                  </div>
                </div>

                <div className={styles.testimonialCard}>
                  <div className={styles.clientInfoContainer}>
                    <Image src={Client4} alt="client avatar" />
                    <div className={styles.clientInfoText}>
                      <h5>Eniola Bakare</h5>
                      <p>Full Stack Developer</p>
                    </div>
                  </div>
                  <p>
                    From start to finish, talently made the recruitment process
                    super simple. Highly recommend!
                  </p>

                  <div className={styles.clientCompany}>
                    <div className={styles.left}>
                      <Image src={Company3} alt="company logo" />
                      <h5>Abstract Studio</h5>
                    </div>
                    <div className={styles.rating}>
                      <h2>10/10</h2>
                      <p>Job Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="recruiters" className={`${styles.recruiters}`}>
          <div className="container">
            <div className={styles.recruitersContent}>
              <div className={styles.sectionTop}>
                <div className={styles.heading}>
                  <p>RECRUITERS</p>
                  <h2>Meet your recruiter.</h2>
                </div>
                <p>
                  With our combined, extensive experience, we ensure we'll help
                  you land your perfect role.
                </p>
              </div>
              <div className={styles.featuredRecruiters}>
                <div className={styles.featuredRecruiterCard}>
                  <div className={styles.top}>
                    <Image src={Client5} alt="client avatar" />
                    <div className={styles.clientInfo}>
                      <h5>Amber Stewart</h5>
                      <p>BASED IN AMSTERDAM</p>
                    </div>
                  </div>

                  <div className={styles.recruiterBackground}>
                    <div className={styles.recruiterBgInfo}>
                      <h4>10y</h4>
                      <p>Experience</p>
                    </div>
                    <div className={styles.recruiterBgInfo}>
                      <h4>25</h4>
                      <p>Placements</p>
                    </div>
                    <div className={styles.recruiterBgInfo}>
                      <h4>98%</h4>
                      <p>Satisfaction</p>
                    </div>
                  </div>
                  <Button variant="primary" fullWidth>
                    View profile
                  </Button>
                </div>

                <div className={styles.featuredRecruiterCard}>
                  <div className={styles.top}>
                    <Image src={Client6} alt="client avatar" />
                    <div className={styles.clientInfo}>
                      <h5>Jake Mullock</h5>
                      <p>BASED IN BERLIN</p>
                    </div>
                  </div>

                  <div className={styles.recruiterBackground}>
                    <div className={styles.recruiterBgInfo}>
                      <h4>5y</h4>
                      <p>Experience</p>
                    </div>
                    <div className={styles.recruiterBgInfo}>
                      <h4>13</h4>
                      <p>Placements</p>
                    </div>
                    <div className={styles.recruiterBgInfo}>
                      <h4>95%</h4>
                      <p>Satisfaction</p>
                    </div>
                  </div>

                  <Button variant="primary" fullWidth>
                    View profile
                  </Button>
                </div>

                <div className={styles.featuredRecruiterCard}>
                  <div className={styles.top}>
                    <Image src={Client7} alt="client avatar" />
                    <div className={styles.clientInfo}>
                      <h5>Jennifer Belle</h5>
                      <p>BASED IN IRELAND</p>
                    </div>
                  </div>

                  <div className={styles.recruiterBackground}>
                    <div className={styles.recruiterBgInfo}>
                      <h4>8y</h4>
                      <p>Experience</p>
                    </div>
                    <div className={styles.recruiterBgInfo}>
                      <h4>17</h4>
                      <p>Placements</p>
                    </div>
                    <div className={styles.recruiterBgInfo}>
                      <h4>96%</h4>
                      <p>Satisfaction</p>
                    </div>
                  </div>

                  <Button variant="primary" fullWidth>
                    View profile
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
