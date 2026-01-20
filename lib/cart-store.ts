'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Product, CartItem } from './products'
import { calculatePrice } from './products'

interface CartStore {
  items: CartItem[]
  addItem: (product: Product, weight: number) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  updateWeight: (id: string, weight: number) => void
  clearCart: () => void
  getTotal: () => number
  getItemCount: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (product: Product, weight: number) => {
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.id === product.id && item.weight === weight
          )
          
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === product.id && item.weight === weight
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            }
          }
          
          return {
            items: [...state.items, { ...product, quantity: 1, weight }],
          }
        })
      },
      
      removeItem: (id: string) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }))
      },
      
      updateQuantity: (id: string, quantity: number) => {
        if (quantity < 1) {
          get().removeItem(id)
          return
        }
        
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        }))
      },
      
      updateWeight: (id: string, weight: number) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, weight } : item
          ),
        }))
      },
      
      clearCart: () => {
        set({ items: [] })
      },
      
      getTotal: () => {
        return get().items.reduce((total, item) => {
          return total + calculatePrice(item.price, item.weight) * item.quantity
        }, 0)
      },
      
      getItemCount: () => {
        return get().items.reduce((count, item) => count + item.quantity, 0)
      },
    }),
    {
      name: 'maharaja-cart',
    }
  )
)
