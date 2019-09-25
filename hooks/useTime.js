import { useState, useEffect } from 'react'

const useTime = currentDate => {
  const [date, setDate] = useState(currentDate)

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000)
    return () => clearInterval(timerID)
  })

  const tick = () => setDate(new Date())

  return date
}

export default useTime
