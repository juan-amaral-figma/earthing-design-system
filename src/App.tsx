import { useState, type ReactNode } from 'react'
import './foundations/index.css'
import { ArrowLink, Button, CtaBanner, DestinationGuideCard, Footer, HeroSection, Icon, ItineraryCard, Logo, NavBar, NavLink, NewsletterSection, SectionHeader, Tag, TextInput, TravelImage } from './components'
import { primitiveColors, type EarthingTheme } from './foundations/tokens'
import './App.css'

const typeStyles = ['display-hero','display-destination','display-hero-mobile','heading-1','heading-2','heading-3','heading-4','brand-logo','body-large','body-large-bold','body-default','body-default-semibold','body-card','body-small','body-small-semibold','body-small-medium','label-tag','label-stat','label-caption','label-uppercase']

function App() {
  const [theme, setTheme] = useState<EarthingTheme>('light')
  return <div className="catalog earthing-theme" data-earthing-theme={theme}>
    <aside className="catalog-sidebar"><Logo/><p>Design System</p><nav><a href="#foundations">Foundations</a><a href="#typography">Typography</a><a href="#primitives">Primitives</a><a href="#cards">Cards</a><a href="#sections">Sections</a></nav><Button variant="secondary" onClick={()=>setTheme(theme === 'light' ? 'dark' : 'light')}>{theme === 'light' ? 'Dark' : 'Light'} mode</Button></aside>
    <main className="catalog-main">
      <header className="catalog-header"><div><span>EARTHING / REACT</span><h1>Component library</h1><p>Production-ready foundations and components extracted from the Earthing Figma library.</p></div><code>v0.1.0</code></header>
      <section id="foundations" className="catalog-section"><SectionHeader kicker="Foundations" title="Color tokens"/><div className="token-group"><h3>Forest</h3><div className="token-grid">{Object.entries(primitiveColors.forest).map(([name,value])=><div className="token" key={name}><i style={{background:value}}/><span>{name}</span><code>{value}</code></div>)}</div></div><div className="token-group"><h3>Neutral</h3><div className="token-grid">{Object.entries(primitiveColors.neutral).map(([name,value])=><div className="token" key={name}><i style={{background:value}}/><span>{name}</span><code>{value}</code></div>)}</div></div></section>
      <section id="typography" className="catalog-section"><SectionHeader kicker="Foundations" title="Typography"/><div className="type-table">{typeStyles.map(style=><div key={style}><code>{style}</code><span className={`earthing-${style}`}>{style.startsWith('label') ? 'LABEL TEXT' : 'The quick brown fox'}</span></div>)}</div></section>
      <section id="primitives" className="catalog-section"><SectionHeader kicker="Components" title="Primitives"/>
        <Specimen title="Button"><div className="catalog-row"><Button>Button Label</Button><Button variant="secondary">Button Label</Button><Button disabled>Disabled</Button></div></Specimen>
        <Specimen title="Tag, navigation and links"><div className="catalog-row"><Tag>Cultural Guide</Tag><NavLink href="#">Nav Link</NavLink><ArrowLink href="#">Start exploring</ArrowLink></div></Specimen>
        <Specimen title="Input"><div className="catalog-input"><TextInput label="Email address" placeholder="Enter your email"/></div></Specimen>
        <Specimen title="Icons"><div className="catalog-row"><Icon name="arrow-right"/><Icon name="chevron-right"/><Icon name="double-arrow"/><Icon name="microphone"/></div></Specimen>
        <Specimen title="Travel images"><div className="catalog-images">{(['rome','hilo','nice','scenic-roadtrips','tropical-retreats','savannah-safaris','off-the-grid','rest-and-reset','the-alps'] as const).map(name=><TravelImage key={name} name={name} alt={name.replaceAll('-',' ')}/>)}</div></Specimen>
      </section>
      <section id="cards" className="catalog-section"><SectionHeader kicker="Components" title="Cards"/><div className="catalog-cards"><DestinationGuideCard destination="Rome" description="Our advice — visit Rome in the offseason, it is the only way to go"/><ItineraryCard title="Scenic Roadtrips" description="Epic drives winding through rugged coastlines, mountain passes, and hidden valleys." imageAlt="A scenic coastal road through mountains"/></div></section>
      <section id="sections" className="catalog-section catalog-section--full"><SectionHeader kicker="Components" title="Sections"/><Specimen title="Navigation"><NavBar/></Specimen><Specimen title="Hero"><HeroSection/></Specimen><Specimen title="Newsletter"><NewsletterSection onSubmit={event=>event.preventDefault()}/></Specimen><Specimen title="CTA banner"><CtaBanner onSubmit={event=>event.preventDefault()}/></Specimen><Specimen title="Footer"><Footer/></Specimen></section>
    </main>
  </div>
}

function Specimen({title,children}:{title:string;children:ReactNode}) { return <article className="specimen"><div className="specimen-title"><h3>{title}</h3><code>React</code></div><div className="specimen-canvas">{children}</div></article> }
export default App
