import type { HTMLAttributes } from 'react'
import { Logo } from '../Logo'
import { classNames } from '../../utils/classNames'
import './Footer.css'
export interface FooterLink { label:string; href:string }
export interface FooterColumn { title:string; links:FooterLink[] }
export interface FooterProps extends HTMLAttributes<HTMLElement> { description?:string; columns?:FooterColumn[]; legalLinks?:FooterLink[]; copyright?:string }
const defaultColumns:FooterColumn[]=[{title:'Explore',links:[{label:'Guides',href:'#'},{label:'Itineraries',href:'#'},{label:'Maps',href:'#'},{label:'Hotels',href:'#'}]},{title:'Company',links:[{label:'Our Story',href:'#'},{label:'Sustainability',href:'#'},{label:'Careers',href:'#'},{label:'Press',href:'#'}]},{title:'Social',links:[{label:'Instagram',href:'#'},{label:'X (Twitter)',href:'#'},{label:'VSCO',href:'#'},{label:'Pinterest',href:'#'}]}]
const defaultLegalLinks:FooterLink[]=[{label:'Privacy Policy',href:'#'},{label:'Terms of Service',href:'#'}]
export function Footer({ description = 'A platform helping global travelers find their next mindful, slow-paced adventure. Handcrafted by local guides worldwide.', columns=defaultColumns, legalLinks=defaultLegalLinks, copyright='© 2026 Earthling Travel Inc. Mindful explorations forever.', className, ...props }:FooterProps){return <footer className={classNames('earthing-footer',className)} {...props}><div className="earthing-footer__top"><div className="earthing-footer__brand"><Logo compact/><p>{description}</p></div><div className="earthing-footer__columns">{columns.map(column=><div key={column.title}><h3>{column.title}</h3>{column.links.map(link=><a key={`${column.title}-${link.label}`} href={link.href}>{link.label}</a>)}</div>)}</div></div><div className="earthing-footer__bottom"><span>{copyright}</span><div>{legalLinks.map(link=><a key={link.label} href={link.href}>{link.label}</a>)}</div></div></footer>}
