import { useToggleDark } from '~/hooks'

const Footer = () => {
  const { isDark, toggle } = useToggleDark()

  return (
    <nav className="text-xl mt-6 inline-flex gap-2">
      <button className="icon-btn !outline-none" onClick={toggle}>
      {
        isDark
          ? <div className="i-carbon-moon" />
          : <div className="i-carbon-sun" />
      }
      </button>

      <a
        className="icon-btn i-carbon-logo-github"
        rel="noreferrer"
        href="https://github.com/yuzhang9804/vitesse-lite-react"
        target="_blank"
        title="Github"
      />
    </nav>
  )
}

export default Footer
