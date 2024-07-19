import Tooltip from '@/components/Tooltip';
import Link from 'next/link';
import { useCallback } from 'react';

const MenuItem = ({ href, icon, title, hideTooltip }) => {
  const MenuContent = useCallback(() => {
    if (typeof href === 'undefined') {
      return icon;
    }

    return <Link href={href}>{icon}</Link>;
  }, [href, icon]);

  return (
    <Tooltip content={title} hidden={hideTooltip}>
      <MenuContent />
    </Tooltip>
  );
};

export default MenuItem;
