import classNames from 'classnames';
import type { MarkdownProps } from './headings';

export function MarkdownStrong(props: MarkdownProps) {
  return (
    <strong
      {...props.attrs}
      className={classNames(
        'gd-font-bold gd-text-textHeading',
        props.attrs.class,
      )}
    >
      {props.children}
    </strong>
  );
}

export function MarkdownItalic(props: MarkdownProps) {
  return (
    <em {...props.attrs} className={classNames('gd-italic', props.attrs.class)}>
      {props.children}
    </em>
  );
}

export function MarkdownStrike(props: MarkdownProps) {
  return (
    <del
      {...props.attrs}
      className={classNames('gd-line-through', props.attrs.class)}
    >
      {props.children}
    </del>
  );
}
