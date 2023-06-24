import clsx from 'clsx';

import Progress from './Progress';

interface ItemProps {
  name: string;
  hours: number;
  minutes: number;
}

interface CodingActiveListProps {
  data?: {
    languages?: ItemProps[];
    categories?: ItemProps[];
  };
}

const sumTotalFromArray = <T extends { hours: number; minutes: number }>(
  data: T[],
  key: keyof T
) => {
  return (
    data.reduce(
      (previousValue, currentValue) =>
        previousValue + (currentValue[key] as number),
      0
    ) ?? 0
  );
};

const CodingActiveList = ({ data }: CodingActiveListProps) => {
  const getLanguagesTotalHours = sumTotalFromArray<ItemProps>(
    data?.languages || [],
    'hours'
  );
  const getLanguagesTotalMinutes = sumTotalFromArray<ItemProps>(
    data?.languages || [],
    'minutes'
  );
  const getLanguagesTotalTimeDisplay = `${
    Math.floor((getLanguagesTotalMinutes % 3600) / 60) + getLanguagesTotalHours
  } hrs ${getLanguagesTotalMinutes} mins`;

  const getEditorTotalHours = sumTotalFromArray<ItemProps>(
    data?.categories || [],
    'hours'
  );
  const getEditorTotalMinutes = sumTotalFromArray<ItemProps>(
    data?.categories || [],
    'minutes'
  );
  const getEditorTotalTimeDisplay = `${
    Math.floor((getEditorTotalMinutes % 3600) / 60) + getEditorTotalHours
  } hrs ${getEditorTotalMinutes} mins`;

  const actives = [
    {
      title: 'Languages',
      total: getLanguagesTotalTimeDisplay,
      data: data?.languages,
      styles: {
        bg: 'bg-gradient-to-r from-amber-400 to-rose-600',
      },
    },
    {
      title: 'Categories',
      total: getEditorTotalTimeDisplay,
      data: data?.categories,
      styles: {
        bg: 'bg-gradient-to-r from-blue-400 to-purple-600',
      },
    },
  ];

  return (
    <div className='mt-2 flex flex-col gap-6 sm:flex-row sm:gap-4'>
      {actives.map((item) => (
        <div
          key={item?.title}
          className={clsx(
            item?.styles?.bg,
            'relative flex flex-1 flex-col gap-2 rounded-lg p-[2px]'
          )}
        >
          <div className='h-full w-full rounded-lg bg-neutral-50 p-2 dark:bg-dark'>
            <p className='absolute -top-3 left-3 bg-neutral-50 px-2 dark:bg-dark'>
              {item?.title}
            </p>

            <ul className='flex flex-col py-3 px-4 gap-1'>
              {item?.data?.map((subItem) => (
                <li key={subItem?.name}>
                  <Progress data={subItem} className={item?.styles?.bg} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CodingActiveList;
