/**
 * GROQ queries for each singleton document.
 *
 * Each query selects the single document of its type. Image fields are returned
 * as-is (asset reference + alt + objectPosition) and resolved to URLs in the
 * content layer via `urlForImage`.
 */
import { groq } from 'next-sanity'

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]`
export const homeQuery = groq`*[_type == "homePage"][0]`
export const aboutQuery = groq`*[_type == "aboutPage"][0]`
export const servicesQuery = groq`*[_type == "servicesPage"][0]`
export const faqQuery = groq`*[_type == "faqPage"][0]`
export const galleryQuery = groq`*[_type == "galleryPage"][0]`
export const contactQuery = groq`*[_type == "contactPage"][0]`

/** Cache tag applied to all content fetches; revalidated by the publish webhook. */
export const CONTENT_TAG = 'content'
