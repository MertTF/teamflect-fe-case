import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';

const MenuItem = ({ href, icon, children }) => {
  const { pathname } = useRouter();
  const active = useMemo(
    () =>
      href === pathname || (href !== '/' && href && pathname.startsWith(href)),
    [pathname, href]
  );

  const MenuContent = useCallback(
    () => (
      <div
        className={clsx(
          'flex h-10 flex-shrink-0 items-center gap-4 border-l-4 border-transparent py-1 pl-4 pr-1 text-base text-payne-gray',
          {
            '!border-navy-blue font-semibold !text-navy-blue': active,
          }
        )}
      >
        {icon && <span>{icon}</span>}
        <div className='line-clamp-1 hidden md:block'>{children}</div>
      </div>
    ),
    [icon, active, children]
  );

  if (typeof href === 'undefined') {
    return <MenuContent />;
  }

  return (
    <Link href={href}>
      <MenuContent />
    </Link>
  );
};

export default MenuItem;
