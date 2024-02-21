import { type ReactNode } from 'react';
import { Icon } from '../components/icon';
import type { MetaConf } from '../types';
import { GuiderSidebar } from '../components/sidebar';
import { useGuider } from './use-guider';
import { GuiderLayoutContext } from './context';

export function GuiderLayout(props: { children?: ReactNode; meta?: MetaConf }) {
  const { directory, layout, site, layoutSettings } = useGuider(props.meta);

  return (
    <GuiderLayoutContext.Provider value={props.meta}>
      <div>
        <GuiderSidebar />
        <hr />
        <Icon icon="house" />
        <p>Site: {site.id}</p>
        <p>Layout: {layout.id}</p>
        <p>Settings: {JSON.stringify(layoutSettings)}</p>
        <p>Directory: {JSON.stringify(directory.id)}</p>
        <hr />
        {props.children}
      </div>
    </GuiderLayoutContext.Provider>
  );
}
