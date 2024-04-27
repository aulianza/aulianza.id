import clsx from 'clsx';
import {
  BiChevronLeft as PrevIcon,
  BiChevronRight as NextIcon,
} from 'react-icons/bi';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const renderPageNumbers = () => {
    const visiblePages = 3;
    const firstPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    const lastPage = Math.min(totalPages, firstPage + visiblePages - 1);

    const pageNumbers: (number | '...')[] = [];

    if (firstPage > 1) {
      pageNumbers.push(1, '...');
    }

    for (let i = firstPage; i <= lastPage; i++) {
      pageNumbers.push(i);
    }

    if (lastPage < totalPages) {
      pageNumbers.push('...', totalPages);
    }

    return pageNumbers.map((page, index) => (
      <button
        key={index}
        onClick={() =>
          onPageChange(typeof page === 'number' ? page : currentPage)
        }
        className={clsx(
          'mx-1 items-center rounded px-4 py-1.5',
          page === '...' && '!cursor-default !bg-transparent',
          currentPage === page
            ? 'bg-sky-600 text-white'
            : 'bg-neutral-200 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200',
        )}
      >
        {page}
      </button>
    ));
  };

  if (!totalPages) {
    return null;
  }

  return (
    <div className='flex justify-center pt-5 '>
      {currentPage !== 1 && (
        <button
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          className='mx-1 rounded bg-neutral-200 px-2 py-1.5 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200'
          disabled={currentPage === 1}
        >
          <PrevIcon size={24} />
        </button>
      )}

      <div className='hidden sm:flex'>{renderPageNumbers()}</div>

      {currentPage !== totalPages && (
        <button
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          className='mx-1 rounded bg-neutral-200 px-2 py-1.5 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200'
          disabled={currentPage === totalPages}
        >
          <NextIcon size={24} />
        </button>
      )}
    </div>
  );
};

export default Pagination;
