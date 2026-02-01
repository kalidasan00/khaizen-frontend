// Frontend: src/lib/api.js

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'

export const api = {
  // Products
  async getProducts() {
    try {
      const res = await fetch(`${API_URL}/products/`)
      if (!res.ok) return []
      return await res.json()
    } catch (error) {
      console.error('getProducts failed:', error)
      return []
    }
  },

  async getProduct(id) {
    try {
      const res = await fetch(`${API_URL}/products/${id}/`)
      if (!res.ok) return null
      return await res.json()
    } catch (error) {
      console.error('getProduct failed:', error)
      return null
    }
  },

  async getFeaturedProducts() {
    try {
      const res = await fetch(`${API_URL}/products/featured/`)
      if (!res.ok) return []
      return await res.json()
    } catch (error) {
      console.error('getFeaturedProducts failed:', error)
      return []
    }
  },

  // Categories
  async getCategories() {
    try {
      const res = await fetch(`${API_URL}/categories/`)
      if (!res.ok) return []
      return await res.json()
    } catch (error) {
      console.error('getCategories failed:', error)
      return []
    }
  },

  // Quotes
  async submitQuote(quoteData) {
    try {
      const res = await fetch(`${API_URL}/quotes/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(quoteData),
      })
      if (!res.ok) return null
      return await res.json()
    } catch (error) {
      console.error('submitQuote failed:', error)
      return null
    }
  },
}