import Link from 'next/link.js';
import { useGuiderPage } from '../../hooks/use-guider-page';

const lightLogo = 'https://mintlify.s3-us-west-1.amazonaws.com/polymarket/logo/light.svg';
const darkLogo = 'https://mintlify.s3-us-west-1.amazonaws.com/polymarket/logo/dark.svg';

export function LogoInternal() {
  const { site } = useGuiderPage();

  const logoSrc =  darkLogo

  const content = (
    <span className="gd-text-base gd-font-bold gd-text-textHeading">
      <img className='dark:gd-block gd-hidden site-logo' src={logoSrc} alt={site.logo.name ?? 'Guider'} />
      <img className='dark:gd-hidden gd-block site-logo' src={"https://mintlify.s3-us-west-1.amazonaws.com/polymarket/logo/light.svg"} alt={site.logo.name ?? 'Guider'} />
    </span>
  );
  // const content = (
  //   <span className="gd-text-base gd-font-bold gd-text-textHeading">
  //     {site.logo.name ?? 'Guider'}
  //   </span>
  // );

  if (site.logo.to)
    return (
      <Link
        className="gd-flex gd-items-center gd-gap-3 hover:gd-bg-bgLightest gd-transition-colors gd-duration-100 gd-py-1.5 gd-px-2 -gd-mx-2 gd-rounded-lg"
        href={site.logo.to}
      >
        {content}
      </Link>
    );
  return <div className="gd-flex gd-items-center gd-gap-3">{content}</div>;
}
