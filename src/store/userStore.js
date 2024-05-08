import { create } from 'zustand'

export const useUserStore = create((set, get) => ({
  id: null,
  name: null,
  email: null,
  password: null,
  logged: false,

  setLogged: () =>
    set((state) => ({
      logged: !state.logged
    })),

  getLogged: () =>
    get((state) => ({
      logged: state.logged
    })),

  setUser: (nombre, correo, contra) =>
    set((state) => ({
      id: (state.id = 1),
      name: (state.name = nombre),
      email: (state.email = correo),
      password: (state.password = contra)
    })),

  logoutUser: () =>
    set((state) => ({
      id: (state.id = null),
      name: (state.name = null),
      logged: (state.logged = false)
    }))
}))
