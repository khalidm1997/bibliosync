import { Link } from "react-router-dom"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import logo from "../../assets/logoicon.png"
import { footerStyles as styles } from "../../assets/dummystyles"
 
import { socialLinks, quickLinks } from '../../assets/dummydata'
 
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.logoBlock}>
            <Link to="/" className={styles.logoLink}>
              <img src={logo} alt="Logo" className={styles.logoImg} />
              <h1 className={styles.logoText}>BiblioSync</h1>
            </Link>
            <p className={styles.aboutText}>
              Votre passerelle vers des aventures littéraires. Découvrez, explorez et plongez-vous dans le monde des livres.
            </p>
            <div className={styles.socialWrap}>
              {socialLinks.map(({ Icon, url }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialButton}
                  aria-label={`Visitez notre page ${Icon.name}`}
                >
                  <Icon className={styles.socialIcon} />
                </a>
              ))}
            </div>
          </div>
 
          <div className={styles.quickLinksBlock}>
            <h3 className={styles.quickLinksTitle}>Quick Links</h3>
            <ul className={styles.quickLinksList}>
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.url} className={styles.quickLinkItem}>
                    <span className={styles.quickLinkDot}></span>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
 
          <div className={styles.newsletterBlock}>
            <h3 className={styles.newsletterTitle}>Restez informé</h3>
            <p className={styles.newsletterText}>
              Abonnez-vous à notre newsletter pour recevoir les dernières nouveautés et offres exclusives.
            </p>
            <form className={styles.formWrap}>
              <input
                type="email"
                placeholder="Entrez votre courriel"
                className={styles.input}
              />
              <button type="submit" className={styles.button}>
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
 
          <div className={styles.contactBlock}>
            <h3 className={styles.contactTitle}>Contactez-nous</h3>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <MapPin className={styles.contactIcon} />
                <span>123 rue Littéraire, Bookville, BK 12345</span>
              </div>
              <div className={styles.contactRow}>
                <Phone className={styles.contactIconInline} />
                <span>+1 (234) 567-8901</span>
              </div>
              <div className={styles.contactRow}>
                <Mail className={styles.contactIconInline} />
                <span>contact@bibliosync.com</span>
              </div>
            </div>
          </div>
        </div>
 
        <div className={styles.copyrightWrap}>
          <p className={styles.copyrightText}>
            &copy; {new Date().getFullYear()} BiblioSync. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
 
export default Footer