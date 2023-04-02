// import { defineStore } from 'pinia'

// export const useGlobalStore = defineStore({
//   id: 'global',
//   state: () => ({
//     isMenuOpen: false,
//   }),
// })

import { defineStore } from 'pinia'

export const useGlobalStore = defineStore({
  id: 'global',
  state: () => ({
    isMenuOpen: false,
    oneMenu: true,
    isOpenContact: false,
  }),
  actions: {
    setIsMenuOpen(value) {
      this.isMenuOpen = value
    },
    setIsContactOpen(value){
      this.isOpenContact = value
    },
    setIsMenuOne(value){
      this.oneMenu = value
    }
  }
})