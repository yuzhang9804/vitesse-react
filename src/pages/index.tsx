const Index = () => {
  const [name, setName] = useState('')

  const navigate = useNavigate()

  const go = () => {
    if (name)
      navigate(`/hi/${encodeURIComponent(name)}`)
  }

  return (
    <div>
      <div className="i-carbon-campsite text-4xl inline-block" />
      <p>
        <a rel="noreferrer" href="https://github.com/yuzhang9804/vitesse-lite-react" target="_blank">
          Vitesse Lite
        </a>
      </p>
      <p>
        <em className="text-sm op75">Opinionated Vite Starter Template For React</em>
      </p>

      <div className="py-4"/>

      <input
        type="text"
        placeholder="What's your name?"
        autoComplete="false"
        className="px-4 py-2 w-250px text-center bg-transparent border border-rounded border-gray-200 dark:text-gray-700 outline-none outline-active:none"
        onKeyUp={({ key }) => key === 'Enter' && go()}
        onChange={e => { setName(e.target.value) }}
      />

      <div>
        <button
          value={name}
          className="m-3 text-sm btn"
          disabled={!name}
          onClick={go}
        >
          Go
        </button>
      </div>
    </div>
  )
}

export default Index
