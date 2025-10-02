import React, { useEffect, useState } from 'react'

function Credits() {

  const [plans, setPlans] = useState([])

  const fetchPlans = async () => {
    setPlans()
  }

  useEffect(() => {
    fetchPlans();
  }, [])
  

  return (
    <div>
      
    </div>
  )
}

export default Credits