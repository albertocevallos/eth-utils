import enUS from './metadata-en-us.json'
export type Sides = {
  name: string
  url?: string
  localeName?: string
  children?: Sides | Array<Sides>
}
export interface MultipleLocaleMetaInformation {
  [key: string]: Sides[]
}

const Metadata: MultipleLocaleMetaInformation = {
  'en-us': enUS,
}

export default Metadata
