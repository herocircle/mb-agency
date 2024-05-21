'use client';
import Cta from '@/app/ui/Cta';
import Div from '@/app/ui/Div';
import FunFact from '@/app/ui/FunFact';
import Hero from '@/app/ui/Hero';
import LogoList from '@/app/ui/LogoList';
import MovingText from '@/app/ui/MovingText';
import SectionHeading from '@/app/ui/SectionHeading';
import PortfolioSlider from '@/app/ui/Slider/PortfolioSlider';
import PostSlider from '@/app/ui/Slider/PostSlider';
import TeamSlider from '@/app/ui/Slider/TeamSlider';
import TestimonialSlider from '@/app/ui/Slider/TestimonialSlider';
import TimelineSlider from '@/app/ui/Slider/TimelineSlider';
import Spacing from '@/app/ui/Spacing';
import VideoModal from '@/app/ui/VideoModal';
import Card from './ui/Card';

// Hero Social Links
const heroSocialLinks = [
  {
    name: 'Behance',
    links: '/',
  },
  {
    name: 'Twitter',
    links: '/',
  },
];
// FunFact Data
const funfaceData = [
  {
    title: 'Satisfied Clients',
    factNumber: '100+',
  },
  {
    title: 'Projects Completed',
    factNumber: '120+',
  },
  {
    title: 'Years of Experience',
    factNumber: '25+',
  },
  {
    title: 'Portfolio Valuation',
    factNumber: '$1M+',
  },
];
// Portfolio Data
const portfolioData = [
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_1.jpeg',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_2.jpeg',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_0.jpg',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_3.jpeg',
  },
];

export default function Home() {
  return (
    <>
      {/* Start Hero Section */}
      <Hero
  title="Innovative Solutions <br/> for a Digital World"
  subtitle="MBTech offers top-tier development services from scripts to full-scale websites, delivering exceptional results for all your digital needs."
  btnText="Get a Quote"
  btnLink="/contact"
  scrollDownId="#service"
  socialLinksHeading="Follow Us"
  heroSocialLinks={heroSocialLinks}
  bgImageUrl="/images/hero_bg.jpeg"
/>
      {/* End Hero Section */}

      {/* Start FunFact Section */}
      <div className="container">
      <FunFact
variant="cs-type1"
title="Our Success Stories"
subtitle="Trusted by clients worldwide, we pride ourselves on delivering excellence and innovative solutions."
  data={funfaceData}
/>
      </div>
      {/* End FunFact Section */}

      {/* Start Service Section */}
      <Spacing lg="150" md="80" />
      <Div id="service">
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
            <SectionHeading
  title="Our Expertise"
  subtitle="Services We Provide"
  btnText="Discover All Services"
  btnLink="/service"
/>
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              <Div className="row">
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                <Card
  title="UI/UX Design"
  link="/service/service-details"
  src="/images/service_1.jpeg"
  alt="Service"
/>
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                <Card
  title="React.js Development"
  link="/service/service-details"
  src="/images/service_2.jpeg"
  alt="Service"
/>
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6">
                <Card
  title="Custom Software Development"
  link="/service/service-details"
  src="/images/service_3.jpeg"
  alt="Service"
/>
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                <Card
  title="AI & Big Data Solutions"
  link="/service/service-details"
  src="/images/service_4.jpeg"
  alt="Service"
/>
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Service Section */}

      {/* Start Portfolio Section */}
      <Spacing lg="150" md="50" />
      <Div>
        <Div className="container">
        <SectionHeading
  title="Our Work"
  subtitle="Latest Projects"
  variant="cs-style1 text-center"
/>
          <Spacing lg="90" md="45" />
        </Div>
        <PortfolioSlider data={portfolioData} />
      </Div>
      {/* End Portfolio Section */}

      {/* Start Awards Section */}
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_2">
        <Div className="cs-shape_2">
          <Div />
        </Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
            <SectionHeading
  title="Award-Winning Excellence"
  subtitle="Our Achievements"
  variant="cs-style1"
/>
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <TimelineSlider />
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Awards Section */}

      {/* Start Video Block Section */}
      <Spacing lg="130" md="70" />
      <Div className="container">
      <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
  Embrace Agile Development: Adapting to Change with Precision.
</h2>
        <Spacing lg="70" md="70" />
        <VideoModal
  videoSrc="https://www.youtube.com/watch?v=VcaAVWtP48A"
  bgUrl="/images/video_bg.jpeg"
/>

      </Div>
      {/* End Video Block Section */}

      {/* Start Team Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
      <SectionHeading
  title="Meet Our <br/> Talented Team"
  subtitle="Our Professionals"
  variant="cs-style1"
/>
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End Team Section */}

      {/* Start Testimonial Section */}
      <TestimonialSlider />
      {/* End Testimonial Section */}

      {/* Start Blog Section */}
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
            <SectionHeading
  title="Insights & Updates"
  subtitle="Our Blog"
  btnText="Read More"
  btnLink="/blog"
/>
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <Div className="cs-half_of_full_width">
                <PostSlider />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Blog Section */}

      {/* Start MovingText Section */}
      <Spacing lg="125" md="70" />
      <MovingText text="Our Esteemed Global Partners" />
      <Spacing lg="105" md="70" />
      {/* End MovingText Section */}

      {/* Start LogoList Section */}
      <Div className="container">
        <LogoList />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End LogoList Section */}

      {/* Start CTA Section */}
      <Div className="container">
      <Cta
  title="Ready to Start Your Project? <br /> Let's Create Something <i>Extraordinary</i> Together"
  btnText="Schedule a Meeting"
  btnLink="/contact"
  bgSrc="/images/cta_bg.jpeg"
/>
      </Div>
      {/* End CTA Section */}
    </>
  );
}
