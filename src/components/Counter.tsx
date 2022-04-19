export default function Counter({ initial = 0 }: { initial: number }) {
  const [count, setCount] = useState(initial)
  return (
    <div>
      {count}
      <button className="inc" onClick={() => setCount(pre => pre + 1)}>
      +
      </button>
      <button className="dec" onClick={() => setCount(pre => pre - 1)}>
      -
      </button>
    </div>
  )
}
