import { create } from "zustand";

export const useUserStore = create((set) => ({
  id: null,
  name: null,
  logged: false,

  setLogged: () => set( state =>({
    logged: !state.logged
  })),

  setUser: () => set(state => ({
    id: state.id = 1,
    name:state.name = "Fernando",
  })),

  logoutUser: () => set( state => ({
    id: state.id = null,
    name:state.name = null,
  }) )
}))