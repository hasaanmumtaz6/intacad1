import Link from 'next/link'
import React from 'react'
import { FaAnglesRight } from 'react-icons/fa6'

const PagesBanner = ({bannerTitle, visitName}:any) => {
  return (
    <div className="pages-banner sections-box services-banner-box">
      <h2 className="text-8xl font-bold text-white cursor-context-menu services-title-banner">{bannerTitle}</h2>
      {/* <div className="bread-crumbs-box flex items-center gap-4">
        <Link href="/#" className="font-bold">HOME</Link>
        <b><FaAnglesRight /></b>
        <b className="text-[#00b869]">{visitName}</b>
      </div> */}
    </div>
  )
}

export default PagesBanner