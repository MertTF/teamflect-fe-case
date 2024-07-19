import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href=''>
      <Image
        src='/assets/images/teamflect.png'
        width={141}
        height={34}
        alt='Teamflect'
      />
    </Link>
  );
};

export default Logo;
