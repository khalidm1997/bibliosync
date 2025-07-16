import { BookOpen, Award, Users, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import HomeAboutImage from "../../assets/HomeAboutImage.png"

import { homeAboutStyles as s } from "../../assets/dummystyles"
import { hastats, featuredBooks } from '../../assets/dummydata'

const HomeAbout = () => {
  return (
    <div className={s.wrapper}>
      <div className="absolute inset-0 overflow-hidden">
        <div className={s.bgBlur1}></div>
        <div className={s.bgBlur2}></div>
      </div>

      <div className={s.container}>
        <div className={s.aboutGrid}>
          <div className={s.imageWrapper}>
            <div className={s.imageGlow}></div>
            <div className={s.imageContainer}>
              <img src={HomeAboutImage} alt="À propos de BiblioSync" className={s.aboutImage} />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className={s.aboutHeader}>Notre voyage littéraire</h2>
              <div className={s.underline}></div>
            </div>

            <p className={s.aboutText}>
              Fondée avec une passion pour la littérature, BiblioSync est devenue un sanctuaire pour les amateurs de livres.
              Nous proposons des expériences de lecture exceptionnelles, reliant les lecteurs à des histoires qui inspirent,
              éduquent et transportent vers de nouveaux mondes.
            </p>

            <div className={s.statGrid}>
              {hastats.map((stat, index) => (
                <div key={index} className={s.statCard}>
                  <div className={s.statIconWrap}>
                    <stat.icon className={s.statIcon} />
                  </div>
                  <h3 className={s.statValue}>{stat.value}</h3>
                  <p className={s.statLabel}>{stat.label}</p>
                </div>
              ))}
            </div>

            <Link to="/about" className={s.aboutButton}>
              <span>En savoir plus sur nous</span>
              <ArrowRight className={s.arrowIcon} />
            </Link>
          </div>
        </div>

        <div className="mb-12 text-center">
          <h2 className={s.sectionHeader}>Ouvrages légendaires</h2>
          <div className={s.headerUnderline}></div>
          <p className={s.headerText}>
            Des recommandations sélectionnées par nos experts littéraires que vous ne voudrez pas manquer.
          </p>
        </div>

        <div className={s.bookGrid}>
          {featuredBooks.map((book, index) => (
            <div key={index} className={s.bookCardWrap}>
              <div className={s.bookCardGlow}></div>
              <div className={s.bookCard}>
                <div className={s.bookImageWrapper}>
                  <img src={book.image} alt={book.title} className={s.bookImage} />
                </div>
                <div className={s.bookContent}>
                  <h3 className={s.bookTitle}>{book.title}</h3>
                  <p className={s.bookAuthor}>{book.author}</p>
                  <p className={s.bookDesc}>{book.description}</p>
                  <Link to="/books" className={s.discoverLink}>
                    <span>Découvrir</span>
                    <ArrowRight className={s.arrowSmall} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeAbout