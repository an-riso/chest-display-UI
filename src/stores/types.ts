interface BatteryData {
  list: { id: number; level: number }[]
  percentages: number[]
}

interface AIData {
  selected: string[]
}

interface ServiceData {
  speaker: string | null
  microphone: string | null
  language: string
}

interface AlarmData {
  critical: number
  errors: number
  warnings: number
}

interface MissionData {
  list: { id: number; name: string; status: string }[]
}

interface WifiData {
  networks: { ssid: string; signal: number }[]
}

interface HomeData {
  nameRobot: string
}

interface PageData {
  home: HomeData
  battery: BatteryData
  ai: AIData
  service: ServiceData
  alarms: AlarmData
  mission: MissionData
  wifi: WifiData
}

interface GlobalState {
  navigation: { active: boolean; value: string }
  gesture: { active: boolean; value: string }
  battery: { charging: boolean; value: number }
  user: string | null
  wifiStatus: 'connected' | 'disconnected'
  lang: string
  status: 'online' | 'offline' | 'error'
}

interface AppState extends GlobalState {
  pageData: PageData
}
