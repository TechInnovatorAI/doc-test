import classNames from 'classnames';
import { useContext, useMemo } from 'react';
import { GuiderLayoutContext, type MdxHeadings } from '../../page/context';
import { useToc } from '../../hooks/use-toc';
import { ScrollPageHeight } from '../../components/utils/scrollpageheight';

function TocLink(props: {
  heading: MdxHeadings;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <p>
      <a
        onClick={(e) => {
          e.preventDefault();
          const url = new URL(window.location.href.toString());
          url.hash = props.heading.data.id;
          history.pushState({}, '', url);
          props.onClick?.();
        }}
        href={`#${props.heading.data.id}`}
        className={classNames({
          'gd-text-primary': props.active,
        })}
      >
        {props.heading.value}
      </a>
    </p>
  );
}

export function TocInternal() {
  const ctx = useContext(GuiderLayoutContext);
  const headings = useMemo(
    () => [...(ctx?.headings ?? [])].slice(1).filter((v) => v.depth <= 2),
    [ctx?.headings],
  );
  const ids = useMemo(() => headings.map((v) => v.data.id), [headings]);
  const { activeId, scrollTo } = useToc(ids);

  return (
    <ScrollPageHeight>
      <div className="gd-flex gd-flex-col">
        <div className="gd-space-y-1">
          {headings.map((heading, i) => (
            <TocLink
              key={i}
              active={heading.data.id === activeId}
              heading={heading}
              onClick={() => scrollTo(heading.data.id)}
            />
          ))}
        </div>
      </div>
    </ScrollPageHeight>
  );
}
