const Introduction = () => {
  return (
    <section className='bg-cover bg-no-repeat space-y-2'>
      <div className='flex gap-2 text-2xl lg:text-3xl font-medium font-sora'>
        <h1>Hi, I&apos;m Ryan</h1>{' '}
        <div className='ml-1 animate-waving-hand'>👋</div>
      </div>

      <div className='space-y-4'>
        <>
          <ul className='flex flex-col lg:flex-row gap-1 lg:gap-8 ml-5 list-disc text-neutral-700 dark:text-neutral-400'>
            <li>life-long learner</li>
            <li>
              Based in Jakarta <span className='ml-1'>🇮🇩</span>
            </li>
          </ul>
        </>
        <p className='leading-[1.8] md:leading-loose text-neutral-800 dark:text-neutral-300'>
          Seasoned Software Engineer especially in Frontend side, with a passion
          for creating pixel-perfect web experiences. I work with JavaScript and
          specialize in all-things web. I thrive on collaborating with teams to
          deliver efficient, scalable, and visually appealing web applications.
        </p>
      </div>
    </section>
  );
};

export default Introduction;
