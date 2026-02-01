const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'

export const api = {
  // Products
  async getProducts() {
    const res = await fetch(`${API_URL}/products/`)
    if (!res.ok) throw new Error('Failed to fetch products')
    return res.json()
  },

  async getProduct(id) {
    const res = await fetch(`${API_URL}/products/${id}/`)
    if (!res.ok) throw new Error('Failed to fetch product')
    return res.json()
  },

  async getFeaturedProducts() {
    const res = await fetch(`${API_URL}/products/featured/`)
    if (!res.ok) throw new Error('Failed to fetch featured products')
    return res.json()
  },

  // Categories
  async getCategories() {
    const res = await fetch(`${API_URL}/categories/`)
    if (!res.ok) throw new Error('Failed to fetch categories')
    return res.json()
  },

  // Quotes
  async submitQuote(quoteData) {
    const res = await fetch(`${API_URL}/quotes/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(quoteData),
    })
    if (!res.ok) throw new Error('Failed to submit quote')
    return res.json()
  },
}