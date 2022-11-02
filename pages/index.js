import HTMLReactParser from "html-react-parser";
import About from "components/views/About";
import Experience from "components/views/Experience";
import Hero from "components/views/Hero";
import Skill from "components/views/Skill";
import Layout from "layouts/Layout";
import SectionHeader from "layouts/SectionHeader";
import Contact from "components/views/Contact";


export default function Home() {
  return (
    <Layout 
      main={
        <>
          <Hero />
          <SectionHeader
            id="about" 
            title={HTMLReactParser('About&nbsp;<br />Me')} 
            component={<About />} 
            />
          <SectionHeader
            id="skill"
            title={HTMLReactParser('Skill&nbsp;<br />Set')}
            component={<Skill />}
          />
          <SectionHeader
            id="contact"
            title={HTMLReactParser('Contact&nbsp;<br />Me')}
            component={<Contact />}
          />
        </>
      }
    />
  )
}
