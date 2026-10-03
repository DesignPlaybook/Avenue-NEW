import { useEffect } from 'react'

export default function Seo({ title, description }) {
  useEffect(() => {
    document.title = title ? `${title} | Avenue Group` : 'Avenue Group | Creating Values Through Trust'
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }
    meta.content = description || 'Avenue Group is a diversified conglomerate in packaging, agriculture, real estate and automotive.'
  }, [title, description])
  return null
}
