

import { useState } from "react"
import { MapPin, Clock, Facebook, Twitter, Instagram } from "lucide-react"
 
import aboutStyles from "../../assets/dummystyles"
import AboutUsImage from "../../assets/AboutUsImage.png"
import { apstats, apteamMembers, apbranches } from '../../assets/dummydata'
 
 
const AboutUsPage = () => {
  const [activeTeamMember, setActiveTeamMember] = useState(null)
 
  return (
    <div className={aboutStyles.container}>
      {/* Section Héros */}
      <section className={aboutStyles.section}>
        <div className={aboutStyles.innerContainer}>
          <div className={aboutStyles.headingWrapper}>
            <div className="relative inline-block">
              <h1 className={aboutStyles.heading}>Façonner l'avenir<br />littéraire</h1>
              <div className={aboutStyles.underline} />
            </div>
            <p className={aboutStyles.subText}>
              Préparer le prochain chapitre du récit mondial. Nous relions l’imagination à l’innovation à travers des expériences littéraires modernes.
            </p>
          </div>
        </div>
      </section>
 
      {/* Statistiques */}
      <section className={aboutStyles.statsSection}>
        <div className={aboutStyles.innerContainer}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {apstats.map((stat, index) => (
              <div key={index} className={aboutStyles.statCard}>
                <div className={aboutStyles.statIconWrapper}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className={aboutStyles.statValue}>{stat.value}</h3>
                <p className={aboutStyles.statLabel}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* Présentation */}
      <section className={aboutStyles.aboutSection}>
        <div className={aboutStyles.innerContainer}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={aboutStyles.aboutImageWrapper}>
              <img src={AboutUsImage} alt="À propos" className={aboutStyles.aboutImage} />
              <div className={aboutStyles.aboutOverlay} />
              <div className={aboutStyles.aboutCaption}>
                <h3 className={aboutStyles.aboutTitle}>Depuis 2015</h3>
                <p className={aboutStyles.aboutSubtitle}>Pionniers de la littérature numérique</p>
              </div>
            </div>
            <div className={aboutStyles.aboutTextSection}>
              <div className={aboutStyles.aboutHeadingSection}>
                <h2 className={aboutStyles.aboutHeading}>Redéfinir la narration</h2>
                <p className={aboutStyles.aboutParagraph}>
                  Nous avons transformé l'édition traditionnelle en un écosystème numérique dynamique...
                </p>
              </div>
              <div className={aboutStyles.aboutBoxGrid}>
                <div className={aboutStyles.aboutBox}>
                  <h4 className={aboutStyles.aboutBoxHeading}>Notre vision</h4>
                  <p className={aboutStyles.aboutBoxText}>Créer un réseau mondial d'accès littéraire...</p>
                </div>
                <div className={aboutStyles.aboutBox}>
                  <h4 className={aboutStyles.aboutBoxHeading}>Notre mission</h4>
                  <p className={aboutStyles.aboutBoxText}>Soutenir les créateurs et inspirer les lecteurs...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* Équipe */}
      <section className={aboutStyles.teamSection}>
        <div className={aboutStyles.innerContainer}>
          <div className="text-center mb-20">
            <h2 className={aboutStyles.sectionTitle}>Rencontrez notre équipe</h2>
            <div className={aboutStyles.sectionUnderline} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {apteamMembers.map((member) => (
              <div
                key={member.id}
                className={aboutStyles.teamCard}
                onMouseEnter={() => setActiveTeamMember(member.id)}
                onMouseLeave={() => setActiveTeamMember(null)}
              >
                <div className={aboutStyles.teamImageWrapper}>
                  <img src={member.image} alt={member.name} className={aboutStyles.teamImage} />
                  <div className={aboutStyles.teamOverlay} />
                </div>
                <h3 className={aboutStyles.teamName}>{member.name}</h3>
                <p className={aboutStyles.teamPosition}>{member.position}</p>
                <div className="flex justify-center space-x-4">
                  {[Facebook, Twitter, Instagram].map((Icon, i) => (
                    <button key={i} className={aboutStyles.socialIcon}>
                      <Icon className="h-6 w-6" />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* Agences/Bibliothèques */}
      <section className={aboutStyles.branchSection}>
        <div className={aboutStyles.innerContainer}>
          <div className="text-center mb-20">
            <h2 className={aboutStyles.sectionTitle}>Nos bibliothèques partenaires</h2>
            <div className={aboutStyles.sectionUnderline} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {apbranches.map((branch, index) => (
              <div key={index} className={aboutStyles.branchCard}>
                <div className={aboutStyles.branchImageWrapper}>
                  <img src={branch.image} alt={branch.location} className={aboutStyles.branchImage} />
                  <div className={aboutStyles.branchOverlay} />
                </div>
                <div className={aboutStyles.branchInfoWrapper}>
                  <div className={aboutStyles.branchLocationWrapper}>
                    <MapPin className="h-6 w-6 text-[#43C6AC]" />
                    <h3 className={aboutStyles.branchLocation}>{branch.location}</h3>
                  </div>
                  <div className={aboutStyles.branchHours}>
                    <Clock className="h-6 w-6 text-[#43C6AC]" />
                    <p>{branch.hours}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
 
export default AboutUsPage
 