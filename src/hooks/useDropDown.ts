import { useEffect, useRef, useState } from 'react'

const useDropDown = () => {
  const [dropped, setDropped] = useState(false)
  const dropRef = useRef<HTMLDivElement>(null)

  const dropToggle = () => {
    setDropped(prev => !prev)
  }

  const dropClose = (event: MouseEvent) => {
    const path = event.composedPath()

    if (dropRef.current && !path.includes(dropRef.current)) {
      setDropped(prev => !prev)
    }
  }

  useEffect(() => {
    if (dropped) {
      document.addEventListener('click', dropClose)
    }

    return () => {
      document.removeEventListener('click', dropClose)
    }
  }, [dropped])

  return {
    dropToggle,
    dropped,
    dropRef,
  }
}

export default useDropDown
