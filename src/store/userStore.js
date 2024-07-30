import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
export const useUserStore = create(
  persist(
    (set) => ({
      id: null,
      userName: null,
      email: null,
      password: null,
      token: null,
      logged: false,
      userShortBio: '',
      userAvatar: null,
      role: [],

      setLogged: () =>
        set((state) => ({
          logged: !state.logged
        })),

      setUser: (id, nombre, correo, token) =>
        set((state) => ({
          id: (state.id = id),
          userName: (state.userName = nombre),
          email: (state.email = correo),
          token: (state.token = token),
          logged: (state.logged = true)
        })),

      logoutUser: () =>
        set((state) => ({
          id: (state.id = null),
          userName: (state.userName = null),
          email: (state.email = null),
          token: (state.token = null),
          logged: (state.logged = false)
        }))
    }),
    {
      name: 'userState',
      storage: createJSONStorage(() => localStorage), // Default es 'localStorage'
      partialize: (state) => ({
        userName: state.userName,
        id: state.id,
        logged: state.logged
      })
    }
  )
)
