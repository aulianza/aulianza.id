const Footer = () => {
  return (
    <footer className='relative bottom-0 mx-8 w-[-webkit-fill-available] max-w-[790px] space-y-5 border-t border-gray-300 py-8 text-[15px] dark:border-neutral-700 dark:text-neutral-400'>
      <div className='flex justify-between'>
        <div>© {new Date().getFullYear()}</div>
        <div>Built with Next.js</div>
      </div>
    </footer>
  );
};

export default Footer;
