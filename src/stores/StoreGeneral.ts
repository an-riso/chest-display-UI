import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    navigation: { active: true, value: 'ready' },
    gesture: { active: true, value: 'ready' },
    battery: { charging: true, value: 80 },
    user: 'pippo',
    wifiStatus: 'disconnected',
    lang: 'EN',
    status: 'offline',

    pageData: {
      home: { nameRobot: 'Rx' },
      battery: { list: [], percentages: [] },
      ai: { selected: [] },
      service: { speaker: null, microphone: null, language: 'EN' },
      alarms: { critical: 3, errors: 5, warnings: 2 },
      mission: { list: [] },
      wifi: { networks: [] },
    },
  }),

  actions: {
    updateGlobalData<K extends keyof GlobalState>(key: K, value: GlobalState[K]) {
      ;(this as unknown as GlobalState)[key] = value
    },
    //TODO usage ---> store.updatePageData('alarms', { critical: 1, errors: 2, warnings: 3 })
    updatePageData<K extends keyof PageData>(section: K, data: PageData[K]) {
      this.pageData[section] = data
    },

    addItemToPageData<K extends keyof PageData>(
      section: K,
      item: PageData[K] extends Array<infer U> ? U : never,
    ) {
      if (
        this.pageData[section] &&
        'list' in this.pageData[section] &&
        Array.isArray(this.pageData[section].list)
      ) {
        ;(
          this.pageData[section].list as Array<PageData[K] extends Array<infer U> ? U : never>
        ).push(item)
      }
    },
  },
})
