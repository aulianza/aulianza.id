const Introduction = () => {
  return (
    <section className='bg-cover bg-no-repeat '>
      <div className='space-y-3'>
        <div className='flex gap-2 font-sora text-2xl font-medium lg:text-3xl'>
          <h1>Hi, I&apos;m Ryan</h1>{' '}
          <div className='ml-1 animate-waving-hand'>👋</div>
        </div>
        <div className='space-y-4'>
          <ul className='ml-5 flex list-disc flex-col gap-1 text-neutral-700 dark:text-neutral-400 lg:flex-row lg:gap-10'>
            <li>
              Based in Jakarta, Indonesia <span className='ml-1'>🇮🇩</span>
            </li>
            <li>Working remotely</li>
          </ul>
        </div>
      </div>

      <p className='mt-6 leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose'>
        Seasoned Software Engineer especially in Frontend side, with a passion
        for creating pixel-perfect web experiences. I work with JavaScript and
        specialize in all-things web. I thrive on collaborating with teams to
        deliver efficient, scalable, and visually appealing web applications.
      </p>
    </section>
  )
}

export default Introduction
