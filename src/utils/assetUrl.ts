import hilo from '../assets/earthing/hilo.png'
import logoFooter from '../assets/earthing/logo-footer.svg'
import logo from '../assets/earthing/logo.svg'
import microphone from '../assets/earthing/microphone.svg'
import nice from '../assets/earthing/nice.png'
import offTheGrid from '../assets/earthing/off-the-grid.png'
import restAndReset from '../assets/earthing/rest-and-reset.png'
import rome from '../assets/earthing/rome.png'
import savannahSafaris from '../assets/earthing/savannah-safaris.png'
import scenicRoadtrips from '../assets/earthing/scenic-roadtrips.png'
import theAlps from '../assets/earthing/the-alps.png'
import tropicalRetreats from '../assets/earthing/tropical-retreats.png'

export const logoUrl = logo
export const footerLogoUrl = logoFooter
export const microphoneUrl = microphone

const travelImages = {
  hilo,
  nice,
  'off-the-grid': offTheGrid,
  'rest-and-reset': restAndReset,
  rome,
  'savannah-safaris': savannahSafaris,
  'scenic-roadtrips': scenicRoadtrips,
  'the-alps': theAlps,
  'tropical-retreats': tropicalRetreats,
} as const

export function travelImageUrl(name: keyof typeof travelImages) {
  return travelImages[name]
}
