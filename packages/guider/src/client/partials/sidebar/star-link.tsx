import classNames from 'classnames';
import type { LinkComponent } from '../../../theme';
import { Icon } from '../../components/icon';
import ActiveLink from '../../components/utils/activelink';

export function SidebarStarLink(props: { link: LinkComponent }) {
  const link = props.link;
  return (
    <ActiveLink
      className="gd-flex gd-w-full gd-items-center gd-gap-3 gd-py-1.5 gd-text-sm gd-px-4 !gd-my-0 gd-group top-left-icon"
      activeClassName="gd-text-primary"
      exact={props.link.exact ?? true}
      inactiveClassName=""
      href={link.to}
      target={link.newTab ? '_blank' : undefined}
    >
      {({ isActive }) => (
        <>
          <span
            className={classNames({
              'gd-size-7 gd-flex gd-text-sm icons-left-sidebar gd-justify-center gd-items-center gd-rounded-md gd-transition-[background-color,color,border-color] gd-duration-100':
                true,
              '':
                true,
              '':
                isActive,
              '': !isActive,
            })}
          >
            {link.icon ? <Icon icon={link.icon} /> : null}
          </span>
          <span className="gd-flex-1 gd-transition-colors gd-duration-100">
            {link.title}
          </span>
        </>
      )}
    </ActiveLink>
  );
}
