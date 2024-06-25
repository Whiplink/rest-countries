'use client'

import { useRouter } from "next/navigation"

export default function BackBtn() {
  const router = useRouter()

  const handleBtn = () => {
    router.back()
  }

  return (
    <div className="mb-16">
      <button onClick={handleBtn} className="flex gap-2 shadow-md py-1 px-5">
        <span>(arrow)</span>
        <p>Back</p>
      </button>
    </div>
  )
}