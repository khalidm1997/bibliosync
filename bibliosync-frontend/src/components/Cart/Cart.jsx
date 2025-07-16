import { useEffect } from "react"
import { useCart } from "../../CartContext/CartContext"
import { Link } from "react-router-dom"
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight, BookOpen } from "lucide-react"
import { styles } from "../../assets/dummystyles"

const CartPage = () => {
  const { cart, dispatch } = useCart()
  const total = cart.items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const getImageSource = (item) => {
    if (typeof item.image === "string") return item.image
    return item.image?.default
  }

  const inc = (item) => dispatch({ type: "INCREMENT", payload: { id: item.id, source: item.source } })
  const dec = (item) => dispatch({ type: "DECREMENT", payload: { id: item.id, source: item.source } })
  const remove = (item) => dispatch({ type: "REMOVE_ITEM", payload: { id: item.id, source: item.source } })

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            <ShoppingBag className={styles.titleIcon} />
            Panier
          </h1>
          <p className={styles.subtitle}>
            {cart.items.length} article{cart.items.length !== 1 && 's'} dans votre panier
          </p>
        </div>

        {cart.items.length === 0 ? (
          <div className={styles.emptyCard}>
            <div className={styles.emptyIconWrapper}>
              <ShoppingBag className={styles.emptyIcon} />
            </div>
            <h2 className={styles.emptyTitle}>Votre panier est vide</h2>
            <p className={styles.emptyDescription}>
              Découvrez notre collection de livres et commencez votre aventure de lecture.
            </p>
            <Link to="/books" className={styles.browseBtn}>
              <BookOpen className={styles.browseIcon} />
              Parcourir la collection
            </Link>
          </div>
        ) : (
          <div className={styles.cartGrid}>
            <div className={styles.cartItems}>
              {cart.items.map((item) => (
                <div key={`${item.source}-${item.id}`} className={styles.cartItemCard}>
                  <div className={styles.cartItemContent}>
                    <img
                      src={getImageSource(item)}
                      alt={item.title}
                      className={styles.cartItemImage}
                    />
                    <div className="flex-1">
                      <div className={styles.cartItemTop}>
                        <div>
                          <h3 className={styles.itemTitle}>{item.title}</h3>
                          <p className={styles.itemAuthor}>{item.author}</p>
                        </div>
                        <button onClick={() => remove(item)} className={styles.removeBtn}>
                          <Trash2 className={styles.removeIcon} />
                        </button>
                      </div>
                      <div className={styles.quantityPriceWrapper}>
                        <div className={styles.quantityControls}>
                          <div className={styles.quantityBox}>
                            <button onClick={() => dec(item)} className={styles.qBtn}>
                              <Minus className={styles.qIcon} />
                            </button>
                            <span className={styles.quantityValue}>{item.quantity}</span>
                            <button onClick={() => inc(item)} className={styles.qBtn}>
                              <Plus className={styles.qIcon} />
                            </button>
                          </div>
                          <span className={styles.itemTotal}>
                            ${ (item.price * item.quantity).toFixed(2) } CAD
                          </span>
                        </div>
                        <span className={styles.pricePerItem}>
                          ${ item.price.toFixed(2) } CAD par unité
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.summaryCard}>
              <h2 className={styles.summaryTitle}>Résumé de la commande</h2>
              <div className={styles.summaryBreakdown}>
                <div className={styles.summaryRow}>
                  <span className={styles.summaryLabel}>
                    Sous-total ({cart.items.length} articles)
                  </span>
                  <span className={styles.summaryValue}>${total.toFixed(2)} CAD</span>
                </div>
                <div className={styles.summaryRow}>
                  <span className={styles.summaryLabel}>Livraison</span>
                  <span className={styles.summaryShipping}>Gratuite</span>
                </div>
                <div className={styles.summaryRow}>
                  <span className={styles.summaryLabel}>Taxes</span>
                  <span className={styles.summaryValue}>Calculées lors du paiement</span>
                </div>
              </div>

              <div className={styles.summaryTotalSection}>
                <div className={styles.totalRow}>
                  <span className={styles.totalLabel}>Total</span>
                  <span className={styles.totalAmount}>${total.toFixed(2)} CAD</span>
                </div>
              </div>

              <button className={styles.checkoutBtn}>
                Commander maintenant
                <ArrowRight className={styles.checkoutIcon} />
              </button>

              <Link to="/books" className={styles.continueBtn}>
                <BookOpen className={styles.continueIcon} />
                Continuer vos achats
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CartPage
