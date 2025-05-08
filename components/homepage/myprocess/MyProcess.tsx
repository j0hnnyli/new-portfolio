import SectionLabel from '@/components/SectionLabel'
import React from 'react'
import MyProcessContent from './MyProcessContent'

const MyProcess = () => {
  return (
    <section className="py-10 px-5 flex flex-col md:flex-row justify-between gap-5 max_width overflow-x-hidden">
      <SectionLabel
        label="My Process"
        title="My Creative Flow"
      />

      <MyProcessContent />
    </section>
  )
}

export default MyProcess