import { create } from 'zustand'

export const useUserStore = create((set, get) => ({
  id: null,
  userName: null,
  email: null,
  password: null,
  token: null,
  logged: false,
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
}))
