import Link from 'next/link'
import React from 'react'

const LinkBtn = ({url, btntext, extraAttr}:any) => {
  return (
    <Link href={`${url}`} className="custom-btn btn-13 w-fit">{btntext}</Link>
  )
}

export default LinkBtn