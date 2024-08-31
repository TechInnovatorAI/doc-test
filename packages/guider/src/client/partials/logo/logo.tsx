import Link from 'next/link.js';
import { useGuiderPage } from '../../hooks/use-guider-page';

const lightLogo = 'https://mintlify.s3-us-west-1.amazonaws.com/polymarket/logo/light.svg';
const darkLogo = 'https://mintlify.s3-us-west-1.amazonaws.com/polymarket/logo/dark.svg';

export function LogoInternal() {
  const { site } = useGuiderPage();

  const logoSrc =  darkLogo

  const content = (
    <span className="gd-text-base gd-font-bold gd-text-textHeading">
      <img src={logoSrc} alt={site.logo.name ?? 'Guider'} style={{ height: 'auto', maxHeight: '50px' }} />
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
