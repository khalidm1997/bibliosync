import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import img from '../../assets/banner1.png';

import { words } from '../../assets/dummydata';
import {
  container, glassBox, geometricOverlay, wordWrapper, wordClass, headerText, subHeader, paragraphText,
  formContainer, inputWrapper, inputField, searchButton, statsContainer, statBox, statNumber, statLabel,
  imageSection, imageWrapper, imageStyle, overlayEffect, scrollTextSection, scrollText
} from "../../assets/dummystyles";

const Banner = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentWord, setCurrentWord] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
    navigate(`/books?search=${encodeURIComponent(searchQuery.trim())}`);

     }
  };

  return (
    <div className={container}>
      <div className={glassBox}>
        <div className={geometricOverlay}>
          <div className="absolute -top-10 -right-10 md:-top-20 md:-right-20 w-48 h-48 md:w-96 md:h-96 bg-[#F8FFAE]/10 rounded-full blur-xl md:blur-3xl" />
          <div className="absolute -bottom-20 -left-20 md:-bottom-40 md:-left-40 w-40 h-40 md:w-80 md:h-80 bg-[#43C6AC]/10 rounded-full blur-xl md:blur-3xl" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Section Texte */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-6">
              <h1 className={headerText}>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2B5876] to-[#43C6AC]">
                  Lecture
                </span>
                <br />
                <span className={subHeader}>
                  Pleine Conscience
                </span>
              </h1>
              <p className={paragraphText}>
                Parcours de connaissances soigneusement sélectionnés pour remettre en question les perceptions et inspirer la croissance. 
                Découvrez du contenu transformateur conçu pour l’intellect moderne.
              </p>
            </div>

            {/* Rotation de mots animés */}
            <div className="flex items-center gap-3">
              <span className="text-gray-600 text-base md:text-lg font-medium">Explorer</span>
              <div className={wordWrapper}>
                {words.map((word, index) => (
                  <span
                    key={word}
                    className={`${wordClass} ${
                      index === currentWord ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
                    }`}
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>

            {/* Barre de recherche */}
            <form onSubmit={handleSearch} className="space-y-6 md:space-y-8">
              <div className={formContainer}>
                <div className={inputWrapper}>
                  <div className="absolute inset-0 bg-white/90 rounded-lg md:rounded-xl shadow-sm" />
                  <div className="relative flex items-center">
                    <Search className="ml-4 md:ml-5 w-5 h-5 md:w-6 md:h-6 text-gray-500 group-focus-within:text-[#2B5876]" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Rechercher auteurs, titres ou concepts..."
                      className={inputField}
                    />
                  </div>
                </div>
                <button type="submit" className={searchButton}>
                  <Search className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="sr-only">Rechercher</span>
                </button>
              </div>
            </form>

            {/* Statistiques */}
            <div className={statsContainer}>
              {[
                { number: "50k+", label: "Titres" },
                { number: "1,2M", label: "Lecteurs" },
                { number: "240+", label: "Sujets" }
              ].map((stat, i) => (
                <div key={i} className={statBox}>
                  <div className={statNumber}>{stat.number}</div>
                  <div className={statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Section image */}
          <div className={imageSection}>
            <div className={imageWrapper}>
              <img src={img} alt="Concept de lecture moderne" className={imageStyle} />
              <div className={overlayEffect} />
            </div>
          </div>
        </div>

        {/* Texte défilant */}
        <div className={scrollTextSection}>
          <div className={scrollText}>
            Collections sélectionnées • Auteurs primés • Analyses critiques • Perspectives culturelles
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;