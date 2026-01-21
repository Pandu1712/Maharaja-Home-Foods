'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Product, CartItem } from './products'
import { calculatePrice } from './products'

interface CartStore {
  items: CartItem[]
  addItem: (product: Product, weight: number) => void
  removeItem: (id: string, weight: number) => void
  updateQuantity: (id: string, weight: number, quantity: number) => void
  updateWeight: (id: string, oldWeight: number, newWeight: number) => void
  clearCart: () => void
  getTotal: () => number
  getItemCount: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      /* ✅ ADD ITEM */
      addItem: (product, weight) => {
        set((state) => {
          const existing = state.items.find(
            (item) => item.id === product.id && item.weight === weight
          )

          if (existing) {
            return {
              items: state.items.map((item) =>
                item.id === product.id && item.weight === weight
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            }
          }

          return {
            items: [...state.items, { ...product, weight, quantity: 1 }],
          }
        })
      },

      /* ✅ REMOVE SINGLE VARIANT */
      removeItem: (id, weight) => {
        set((state) => ({
          items: state.items.filter(
            (item) => !(item.id === id && item.weight === weight)
          ),
        }))
      },

      /* ✅ UPDATE QUANTITY (PER VARIANT) */
      updateQuantity: (id, weight, quantity) => {
        if (quantity < 1) {
          get().removeItem(id, weight)
          return
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.id === id && item.weight === weight
              ? { ...item, quantity }
              : item
          ),
        }))
      },

      /* ✅ UPDATE WEIGHT (PER VARIANT) */
      updateWeight: (id, oldWeight, newWeight) => {
        set((state) => {
          // If same variant already exists → merge
          const exists = state.items.find(
            (item) => item.id === id && item.weight === newWeight
          )

          if (exists) {
            return {
              items: state.items
                .map((item) => {
                  if (item.id === id && item.weight === oldWeight) return null
                  if (item.id === id && item.weight === newWeight) {
                    return { ...item, quantity: item.quantity + 1 }
                  }
                  return item
                })
                .filter(Boolean) as CartItem[],
            }
          }

          return {
            items: state.items.map((item) =>
              item.id === id && item.weight === oldWeight
                ? { ...item, weight: newWeight }
                : item
            ),
          }
        })
      },

      /* ✅ CLEAR CART */
      clearCart: () => set({ items: [] }),

      /* ✅ TOTAL PRICE */
      getTotal: () =>
        get().items.reduce(
          (total, item) =>
            total + calculatePrice(item.price, item.weight) * item.quantity,
          0
        ),

      /* ✅ TOTAL ITEM COUNT */
      getItemCount: () =>
        get().items.reduce((count, item) => count + item.quantity, 0),
    }),
    {
      name: 'maharaja-cart',
    }
  )
)
