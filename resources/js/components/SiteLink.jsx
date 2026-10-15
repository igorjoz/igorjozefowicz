import { Link } from '@inertiajs/react';
import { isPortfolioHref } from '@/utils/siteNavigation';

export default function SiteLink({ href, target, download, ...props }) {
    const downloadable = download !== undefined && download !== false;
    const Component = !downloadable && (!target || target === '_self') && isPortfolioHref(href) ? Link : 'a';
    return <Component href={href} target={target} download={download} {...props} />;
}
