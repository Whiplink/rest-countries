'use client'
import { Moon } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function DarkModeBtn() {
  const [darkmode, setDarkmode] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const getSearch = searchParams.get('search')
  const getDm = searchParams.get('dm')

  const search = getSearch? `search=${getSearch}`:''
  const dm = getDm? '':`dm=true`


  const handleBtn = () => {
    setDarkmode((prev) => !prev)

    // router.push(`?${[search,dm].join('&')}`)
  }
  return (
    <button onClick={handleBtn} className="flex items-center gap-3">
      <Moon size={18}/>
      <p>Dark Mode</p>
      <p>{darkmode? "yes": "no"}</p>
    </button>
  )
}