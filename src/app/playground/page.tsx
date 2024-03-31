import Container from '@/common/components/elements/Container'
import Playground from '@/modules/playground'
import React from 'react'

const PlaygroundPage = () => {
  return (
    <>
      <Container className='!mt-0 pt-20 md:pt-0' data-aos='fade-up'>
        <Playground id='playground' isHeading />
      </Container>
    </>
  )
}

export default PlaygroundPage
