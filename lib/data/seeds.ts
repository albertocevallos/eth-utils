import enUS from './seeds-en-us.json'

export type Seed = {
  name: string
  url: string
  group?: string
}

export type Seeds = Array<Seed>

const SEEDS = {
  'en-us': enUS as Seeds,
}

export default SEEDS
