
import React from 'react'

export default function loading() {
  return (
    <div className="relative top-6 left-10">
      <span className="loading loading-dots loading-lg"></span>
    </div>
  )
}

// import Image from 'next/image'

// export default function Loading() {
//   return (
//         <button className="relative top-4 left-10 w-[200px] h-[200px]" disabled={true}>
//         <Image className="animate-spin text-cyan-600" src="/loading.png" alt="loading..." width={100} height={100}/>
//         </button>
//   )
// }
