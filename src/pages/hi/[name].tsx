const Name = () => {
  const { name } = useParams<Record<'name', string>>()
  const navigate = useNavigate()

  return (
    <div>
      <div className="i-carbon-pedestrian text-4xl inline-block"/>

      <p>
        Hi, {name}
      </p>
      <p className="text-sm op50">
        <em>Dynamic route!</em>
      </p>

      <div>
        <button
          className="btn m-3 text-sm mt-8"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
    </div>
  )
}

export default Name
