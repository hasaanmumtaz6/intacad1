import React from 'react'
import SectionsHead from './SectionsHead'
import sectionIcon  from '@/public/image/moreway.png'
import skype from '@/public/image/skype.png'
import gmeet from '@/public/image/gmeet.png'
import zoom from '@/public/image/zoom.png'
import Image from 'next/image'
import Link from 'next/link'
import LinkBtn from './LinkBtn'
import MeetCard from './MeetCard'

const MoreWayContact = () => {
  return (
    <div>
      <SectionsHead
        SectionTitle="Try A Meet"
        sectionIcon={sectionIcon}
        sectionAltText="more-ways-meeeting-section-icon"
      />
      <div className='moreway-meet-container'>
        <MeetCard plateform={"ZOOM"} picSrc={zoom} />
        <MeetCard plateform={"Google"} picSrc={gmeet} />
        <MeetCard plateform={"Skype"} picSrc={skype} />
      </div>
    </div>
  )
}

export default MoreWayContact