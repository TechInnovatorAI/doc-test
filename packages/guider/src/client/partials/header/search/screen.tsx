import Link from 'next/link';
import { Combobox } from '@headlessui/react';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import classNames from 'classnames';
import { Icon } from '../../../components/icon';
import type { SearchResult } from './content';
import { useSearch } from './content';

const iconMap = {
  page: 'tabler:file-filled',
  section: 'majesticons:text',
} as const;

function SearchMessage(props: { title: string; text: string; icon: string }) {
  return (
    <div className="gd-py-12 gd-text-center gd-flex gd-flex-col gd-items-center gd-border-t gd-border-bgLightest">
      <div className="gd-flex gd-flex-none gd-items-center gd-transition-colors gd-duration-100 gd-justify-center gd-h-6 gd-w-6 gd-rounded-md gd-bg-bgLightest gd-text-textLight">
        <Icon icon={props.icon} />
      </div>
      <h2 className="gd-text-textHeading gd-text-sm gd-font-bold gd-mt-3 gd-mb-1">
        {props.title}
      </h2>
      <p className="gd-text-text gd-text-sm">{props.text}</p>
    </div>
  );
}

function SearchResults(props: {
  results: SearchResult[];
  onClose?: () => void;
}) {
  return (
    <div className="gd-p-2 gd-space-y-2 gd-max-h-[22rem] gd-overflow-y-auto">
      {props.results.map((v) => {
        let title = v.pageTitle ? `${v.pageTitle} / ${v.title}` : v.title;
        if (v.pageTitle === v.title) title = v.title;
        return (
          <Combobox.Option key={v.id} value={v} as="article">
            {({ active }) => (
              <Link
                href={v.url}
                key={v.id}
                onClick={props.onClose}
                className={classNames(
                  'gd-p-3 gd-group gd-rounded-lg gd-flex gd-gap-4 gd-items-center gd-relative',
                  {
                    '': active,
                  },
                )}
              >
                <div
                  className={classNames(
                    'gd-flex gd-flex-none gd-items-center gd-justify-center gd-h-6 gd-w-6 gd-rounded-md gd-bg-bgLightest gd-text-textLight',
                    {
                      '': active,
                    },
                  )}
                >
                  <Icon icon={iconMap[v.type]} />
                </div>
                <div className="gd-pr-4">
                  <h2 className="gd-text-text gd-line-clamp-1 gd-text-sm gd-font-bold">
                    {title}
                  </h2>
                  <p
                    className={classNames(
                      'gd-transition-colors gd-duration-100 gd-text-text gd-line-clamp-1 gd-text-sm',
                      { '': active },
                    )}
                  >
                    {v.content}
                  </p>
                </div>
                <div
                  className={classNames({
                    'gd-inset-y-0 gd-absolute gd-right-1 gd-flex gd-translate-x-1 gd-items-center gd-opacity-0 gd-transition-[transform,opacity]':
                      true,
                    '':
                      true,
                    '': active,
                  })}
                >
                  <Icon
                    icon="flowbite:chevron-right-outline"
                    className="gd-text-textHeading gd-text-xl"
                  />
                </div>
              </Link>
            )}
          </Combobox.Option>
        );
      })}
    </div>
  );
}

export function SearchScreen(props: {
  searchKey: string;
  onClose?: () => void;
}) {
  const router = useRouter();
  const { error, loading, results, query, setQuery } = useSearch(
    props.searchKey,
  );

  const onChange = useCallback(
    (e?: SearchResult) => {
      if (e) void router.push(e.url);
      props.onClose?.();
    },
    [router, props.onClose],
  );

  return (
    <Combobox value={null} onChange={onChange}>
      <div className="dark:gd-bg-[#0A0B10] gd-bg-white gd-border gd-border-gray-200 dark:gd-border-white/10 gd-rounded-2xl gd-p-2 ">
        <div className="gd-w-full gd-h-14 gd-relative">
          <Combobox.Input
            className="gd-border gd-rounded-xl gd-border-gray-200 gd-w-full gd-pl-16 gd-h-full gd-text-textHeading gd-bg-transparent focus:gd-outline-none dark:placeholder:gd-text-[#99A1B1] dark:focus:gd-border-gray-300 dark:gd-border dark:gd-border-white/10 placeholder:gd-text-opacity-75"
            placeholder="Search for anything you wish to know..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            type="text"
            autoFocus
          />
          <div className="gd-absolute gd-left-6 gd-w-4 gd-inset-y-0 gd-flex gd-justify-center gd-items-center">
            <Icon
              icon="mingcute:search-2-fill"
              className="gd-text-lg gd-opacity-50"
            />
          </div>
        </div>
        <Combobox.Options static as="div">
          {loading ? (
            <p className="gd-py-12 gd-text-center gd-border-t gd-border-bgLightest">
              Loading...
            </p>
          ) : error ? (
            <SearchMessage
              icon="fa6-solid:exclamation"
              title="Couldn't load search data"
              text="Try again later"
            />
          ) : query.length > 0 && results && results.length === 0 ? (
            <SearchMessage
              icon="fa6-solid:question"
              title="Found no results"
              text="Try some different keywords"
            />
          ) : query.length > 0 && results ? (
            <SearchResults results={results} onClose={props.onClose} />
          ) : null}
        </Combobox.Options>
      </div>
    </Combobox>
  );
}
