import { useState, useEffect } from 'react'

const DARK_NAME = 'dark'

export type SetState<S extends Record<string, any>> = <K extends keyof S>(
  state: Pick<S, K> | null | ((prevState: Readonly<S>) => Pick<S, K> | S | null),
) => void

export const useDark = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    return !!Array.from(document.documentElement.classList).includes(DARK_NAME)
  })

  useEffect(() => {
    if (isDark) document.documentElement.classList.add(DARK_NAME)
    else document.documentElement.classList.remove(DARK_NAME)
  }, [isDark])

  return {
    isDark,
    setIsDark
  }
}

export const useToggleDark = () => {
  const { isDark, setIsDark } = useDark()

  const toggle = () => { setIsDark(pre => !pre) }

  return {
    toggle,
    isDark
  }
}
