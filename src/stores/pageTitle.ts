import { defineStore } from 'pinia'

export const usePageTitleStore = defineStore('pageTitle', {
  state: () => ({
    title: 'Home',
  }),
  actions: {
    setTitle(newTitle: string) {
      this.title = newTitle
    },
  },
})
