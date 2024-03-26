import Breakline from '@/common/components/elements/Breakline'

import BlogPreview from './BlogPreview'
import Introduction from './Introduction'
import Services from './Services'

const Home = () => {
  return (
    <>
      <Introduction />
      <Breakline className='mb-7 mt-8' />
      <BlogPreview />
      <Breakline className='my-8' />
      <Services />
    </>
  )
}

export default Home
