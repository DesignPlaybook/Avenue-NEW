import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function NotFound({ title = 'Page not found', soon = false }) {
  return (
    <section className="bg-lilac py-32 text-center">
      <Seo title={title} />
      <div className="container-x">
        <p className="text-7xl font-extrabold text-orange">{soon ? '…' : '404'}</p>
        <h1 className="mt-4 text-3xl text-plum">{title}</h1>
        <p className="mx-auto mt-3 max-w-md text-ink/70">
          {soon ? 'This page is built in the next step.' : "The page you're looking for doesn't exist or has moved."}
        </p>
        <Link to="/" className="btn-primary mt-8">Back to home</Link>
      </div>
    </section>
  )
}
