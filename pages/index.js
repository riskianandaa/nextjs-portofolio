import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import ProfileSection from '@/components/profile-section'
import ProjectSection from '@/components/project-section'
import SkillSection from '@/components/skill-section'

export default function Home() {
  return (
    <>
      <Hero />
      <ProfileSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </>
  )
}
