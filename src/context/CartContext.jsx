import { createContext, useContext, useEffect, useState } from 'react'
import { products } from '../data/products'

const CartContext = createContext(null)
const storageKey = 'sorveteria-cart'

const readCart = () => {
  if (typeof window === 'undefined') return []

  try {
    const savedItems = JSON.parse(window.localStorage.getItem(storageKey) || '[]')

    if (!Array.isArray(savedItems)) return []

    return savedItems
      .map((savedItem) => {
        if (
          !savedItem ||
          !Number.isInteger(savedItem.quantity) ||
          savedItem.quantity < 1
        ) {
          return null
        }

        const product = products.find((item) => item.id === savedItem.productId)

        return product ? { product, quantity: savedItem.quantity } : null
      })
      .filter((item) => item !== null)
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(readCart)

  useEffect(() => {
    try {
      const savedItems = items.map((item) => ({
        productId: item.product.id,
        quantity: item.quantity,
      }))

      window.localStorage.setItem(storageKey, JSON.stringify(savedItems))
    } catch {}
  }, [items])

  const addToCart = (product) => {
    const selectedProduct = products.find((item) => item.id === product.id)

    if (!selectedProduct) return

    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.product.id === selectedProduct.id,
      )

      if (!existingItem) {
        return [...currentItems, { product: selectedProduct, quantity: 1 }]
      }

      return currentItems.map((item) =>
        item.product.id === selectedProduct.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      )
    })
  }

  const increaseQuantity = (productId) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    )
  }

  const decreaseQuantity = (productId) => {
    setItems((currentItems) =>
      currentItems
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const removeFromCart = (productId) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.product.id !== productId),
    )
  }

  const clearCart = () => setItems([])

  const totalItems = items.reduce((total, item) => total + item.quantity, 0)
  const subtotal = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  )

  return (
    <CartContext.Provider
      value={{
        items,
        totalItems,
        subtotal,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)

  if (context === null) {
    throw new Error('useCart deve ser usado dentro de CartProvider')
  }

  return context
}
