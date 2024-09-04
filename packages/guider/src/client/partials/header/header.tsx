import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { Sun, Moon } from 'lucide-react';
import { GuiderLayoutContext } from '../../page/context';
import { useGuider } from '../../hooks/use-guider';
import { GithubDisplay } from '../../components/github';
import { GuiderLogo } from '../logo';
import { HeaderTabs } from './tabs';
import { HeaderNav } from './nav';
import { HeaderDropdown } from './dropdown';
import { SidebarMobileNav } from './sidebar-mobile-nav';
import { TopMobileNav } from './top-mobile-nav';
import { HeaderSearch } from './search';

export function HeaderInternal() {
  const ctx = useContext(GuiderLayoutContext);
  const [isDark, setIsDark] = useState(false);
  const { site, settings } = useGuider(ctx?.meta);

  useEffect(() => {
    // Apply theme based on state
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const [isScrolledFromTop, setIsScrolledFromTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolledFromTop(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={classNames(
        'gd-sticky gd-z-50 gd-top-0 gd-transition-colors gd-duration-300 gd-mb-8',
        isScrolledFromTop ? 'gd-bg-opacity-100' : 'gd-bg-opacity-0',
        { 'gd-dark': isDark, 'gd-light': !isDark }
      )}
    >
      <header
        className={classNames(
          'gd-max-w-[1480px] gd-mx-auto',
          'gd-py-3 gd-px-8 gd-border-b gd-border-line',
          isScrolledFromTop ? 'gd-bg-opacity-100' : 'gd-bg-opacity-0'
        )}
      >
        <div className="gd-fixed neato-guider-overlay gd-transition-opacity gd-duration-150 gd-opacity-0 gd-inset-0 gd-bg-gradient-to-b gd-from-black/80 gd-to-transparent gd-z-[60] gd-pointer-events-none" />
        <div className="gd-flex gd-justify-between gd-items-center">
          <div>
            <GuiderLogo />
          </div>
          <HeaderSearch />
          <div className='gd-flex gd-items-center gd-space-x-6'>
           <h4 className='gd-text-sm gd-text-gray-600 gd-font-normal hover:gd-text-gray-900 gd-cursor-pointer'>Email Support</h4>
              <a href="https://polymarket.com" target={'_blank'} className='hover:gd-bg-[#426CFF] gd-flex gd-gap-2 gd-items-center gd-text-sm dark:gd-bg-transparent dark:gd-border dark:gd-border-[#2E5CFF] dark:gd-bg-[#0E1226] dark:gd-text-[#2E5CFF] gd-bg-[#2E5CFF] gd-text-white gd-py-1 gd-px-4 gd-rounded-full'>Polymarket <svg width="3" height="24" viewBox="0 -9 3 24" class="h-5 rotate-0 overflow-visible text-white/90 dark:text-primary-light"><path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></a>
            {isDark ?
              <Moon onClick={() => setIsDark(false)} className='gd-cursor-pointer gd-w-5 gd-opacity-50 hover:gd-opacity-100'/> :
              <Sun onClick={() => setIsDark(true)} className='gd-cursor-pointer gd-w-5 gd-opacity-50 hover:gd-opacity-100'/>
            }
          </div>
          <div className="gd-flex md:gd-hidden gd-items-center">
            {site.navigation.length > 0 || site.github ? (
              <TopMobileNav
                items={site.navigation}
                github={{
                  org: site.github?.split('/')[0],
                  repo: site.github?.split('/', 2)[1],
                }}
              />
            ) : null}
          </div>
        </div>
        <div className="gd-hidden md:gd-block">
          {site.tabs.length > 0 ? <HeaderTabs tabs={site.tabs} /> : null}
        </div>
        <div className="gd-block md:gd-hidden gd-border-t gd-border-line gd-px-6 -gd-mx-6">
          {site.tabs.length > 0 || settings.sidebarState ? (
            <SidebarMobileNav tabs={site.tabs} />
          ) : null}
        </div>
      </header>
    </div>
  );
}
