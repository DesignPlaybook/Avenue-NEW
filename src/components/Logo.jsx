import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="Avenue Group home">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-orange text-lg font-extrabold text-white">AG</span>
      <span className="text-lg font-bold text-plum">Avenue <span className="font-light text-violet">Group</span></span>
    </Link>
  )
}
