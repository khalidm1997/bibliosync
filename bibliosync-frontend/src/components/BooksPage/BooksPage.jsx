import { useState } from "react"
import { ShoppingBag, Plus, Minus, Star, Search } from "lucide-react"
import { useCart } from "../../CartContext/CartContext"
import { useLocation } from "react-router-dom"
import { booksPageStyles as styles } from "../../assets/dummystyles"
import BP1 from "../../assets/Book1.png"
import BP2 from "../../assets/Book2.png"
import BP3 from "../../assets/Book3.png"
import BP4 from "../../assets/Book4.png"
import BP5 from "../../assets/Book5.png"
import BP6 from "../../assets/Book6.png"
import BP7 from "../../assets/Book7.png"
import BP8 from "../../assets/Book8.png"
import BP9 from "../../assets/BP9.png"
import BP10 from "../../assets/BP10.png"
import BP11 from "../../assets/BP11.png"
import BP12 from "../../assets/BP12.png"
import BP13 from "../../assets/BP13.png"
import BP14 from "../../assets/BP14.png"
import BP15 from "../../assets/BP15.png"
import BP16 from "../../assets/BP16.png"

const BooksPage = () => {
  const { cart, dispatch } = useCart()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const searchFromURL = queryParams.get("search") || ""

  const [searchTerm, setSearchTerm] = useState(searchFromURL)
  const [sortBy, setSortBy] = useState("title")
  const [filterCategory, setFilterCategory] = useState("all")

  const books = [
    { id: 1, image: BP1, title: "L'Écho Silencieux", author: "Sarah Mitchell", price: 20.5, rating: 4.5, category: "Mystère", description: "Une histoire hantée de secrets et de révélations à travers le temps." },
    { id: 2, image: BP2, title: "Forteresse Digitale", author: "James Cooper", price: 19, rating: 4.2, category: "Thriller", description: "À l'ère de la guerre numérique, aucun secret n'est à l'abri." },
    { id: 3, image: BP3, title: "La Dernière Orbite", author: "Emily Zhang", price: 20, rating: 4.7, category: "Science-Fiction", description: "Le dernier voyage de l'humanité dans les étoiles révèle des vérités inattendues." },
    { id: 4, image: BP4, title: "Au-Delà des Étoiles", author: "Michael Chen", price: 20, rating: 4.3, category: "Science-Fiction", description: "Une odyssée spatiale épique qui remet en question notre compréhension de l'existence." },
    { id: 5, image: BP5, title: "Rivière Mystique", author: "Dennis Lehane", price: 18, rating: 4.8, category: "Drame", description: "Une histoire puissante d'amitié, de traumatismes et du prix des secrets." },
    { id: 6, image: BP6, title: "L'Alchimiste", author: "Paulo Coelho", price: 16, rating: 4.9, category: "Philosophie", description: "Un voyage mystique de découverte de soi et de poursuite de rêves." },
    { id: 7, image: BP7, title: "Habitudes Atomiques", author: "James Clear", price: 20.3, rating: 4.6, category: "Développement Personnel", description: "Transformez votre vie grâce à la puissance de petits changements constants." },
    { id: 8, image: BP8, title: "Système 1 / Système 2", author: "Daniel Kahneman", price: 21.75, rating: 4.4, category: "Psychologie", description: "Découvrez les deux systèmes qui dirigent notre pensée et nos décisions." },
    { id: 9, title: "La Conception des Livres", author: "Debbie Bern", price: 37.9, description: "Un récit gothique de science et de conséquences...", image: BP9 },
    { id: 10, title: "La Traversée", author: "Jason Mott", price: 42.5, description: "Une exploration psychologique de la culpabilité et de la rédemption...", image: BP10 },
    { id: 11, title: "Le Phénix du Destin", author: "Geronimo Stilton", price: 49.25, description: "Une aventure fantastique à travers la Terre du Milieu...", image: BP11 },
    { id: 12, title: "L'Auteur", author: "Raj Siddhi", price: 40, description: "Une vision dystopique d'une société scientifiquement modifiée...", image: BP12 },
    { id: 13, title: "Le Docteur", author: "Oscar Patton", price: 54.5, description: "Un voyage épique à travers l'Enfer, le Purgatoire et le Paradis...", image: BP13 },
    { id: 14, title: "Les Ténèbres s'Amassent", author: "Emma Elliot", price: 32.5, description: "Une histoire tumultueuse de passion et de vengeance...", image: BP14 },
    { id: 15, title: "Gitanjali", author: "RabindraNath Tagore", price: 44.5, description: "Le poème épique sur la guerre de Troie et la rage d'Achille...", image: BP15 },
    { id: 16, title: "Les Réticents", author: "John Hart", price: 39, description: "Les aventures d'un noble qui s'imagine chevalier...", image: BP16 }
  ]

  const isInCart = (id) => cart?.items?.some(item => item.id === id && item.source === "booksPage")
  const getCartQuantity = (id) => cart?.items?.find(item => item.id === id && item.source === "booksPage")?.quantity || 0

  const handleAddToCart = (book) => dispatch({ type: "ADD_ITEM", payload: { ...book, quantity: 1, source: "booksPage" } })
  const handleIncrement = (id) => dispatch({ type: "INCREMENT", payload: { id, source: "booksPage" } })
  const handleDecrement = (id) => dispatch({ type: "DECREMENT", payload: { id, source: "booksPage" } })

  const filteredBooks = books.filter(book => {
    const matchCategory = filterCategory === "all" || book.category === filterCategory
    const lowerSearch = searchTerm.toLowerCase()
    const matchSearch = searchTerm === "" || book.title.toLowerCase().includes(lowerSearch) || book.author.toLowerCase().includes(lowerSearch)
    return matchCategory && matchSearch
  })

  const sortedBooks = [...filteredBooks].sort((a, b) => {
    switch (sortBy) {
      case "price-low": return a.price - b.price
      case "price-high": return b.price - a.price
      case "rating": return b.rating - a.rating
      default: return a.title.localeCompare(b.title, undefined, { sensitivity: 'base', numeric: true })
    }
  })

  const categories = ["all", ...new Set(books.map(book => book.category).filter(Boolean))]

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.headerWrapper}>
          <h1 className={styles.headerTitle}>Univers Littéraire</h1>
          <p className={styles.headerSubtitle}>Explorez notre collection soigneusement sélectionnée de genres et de perspectives</p>
        </div>

        <div className={styles.searchWrapper}>
          <div className={styles.searchInputWrapper}>
            <div className={styles.searchIconWrapper}>
              <Search className="h-5 w-5 md:h-6 md:w-6 text-gray-400 group-focus-within:text-[#43C6AC]" />
            </div>
            <input
              type="text"
              placeholder="Rechercher un titre, un auteur..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
          </div>

          <div className={styles.filterRow}>
            <div className={styles.selectGroup}>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className={styles.selectBox}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "all" ? "Tous les genres" : category}
                  </option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className={styles.selectBox}
              >
                <option value="title">Trier par titre</option>
                <option value="price-low">Prix : croissant</option>
                <option value="price-high">Prix : décroissant</option>
                <option value="rating">Les mieux notés</option>
              </select>
            </div>
            <div className={styles.resultText}>Affichage de {sortedBooks.length} résultats</div>
          </div>
        </div>

        <div className={styles.booksGrid}>
          {sortedBooks.map(book => {
            const inCart = isInCart(book.id)
            const qty = getCartQuantity(book.id)

            return (
              <div key={book.id} className={styles.bookCard}>
                <div className={styles.imageWrapper}>
                  <img
                    src={book.image}
                    alt={book.title}
                    className={styles.imageStyle}
                  />
                </div>
                <h3 className={styles.title}>{book.title}</h3>
                <p className={styles.author}>par {book.author}</p>
                <div className={styles.ratingWrapper}>
                  {[...Array(Number.isFinite(book.rating) ? Math.floor(book.rating) : 0)].map((_, index) => (
                    <Star key={index} className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                  ))}
                  <span>({Number.isFinite(book.rating) ? book.rating.toFixed(1) : "N/A"})</span>
                </div>

                <p className={styles.description}>{book.description}</p>
                <div className={styles.priceCartWrapper}>
                  <span className={styles.price}>${book.price.toFixed(2)} CAD</span>
                  <div className={styles.cartButtons}>
                    {!inCart ? (
                      <button onClick={() => handleAddToCart(book)}>
                        <ShoppingBag className="w-5 h-5 text-white" />
                      </button>
                    ) : (
                      <div className="flex items-center gap-1">
                        <button onClick={() => handleDecrement(book.id)}>
                          <Minus className="w-4 h-4 text-white" />
                        </button>
                        <span>{qty}</span>
                        <button onClick={() => handleIncrement(book.id)}>
                          <Plus className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default BooksPage;
