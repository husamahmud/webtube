import logo from '../assets/play.png'

export function Logo() {
  return (
    <a href="/"
       className="flex items-center">
      <img src={logo}
           className="h-6 mr-2"
           alt="logo" />
      <span className="font-bold">YouTube</span>
    </a>
  )
}
