import Button from '@/components/Button';
import NoGoal from '@/components/Icons/NoGoal';
import Link from 'next/link';

const NoGoals = () => {
  return (
    <div className='flex flex-1 flex-col items-center gap-2 py-16 md:py-48'>
      <div className='flex size-12 items-center justify-center'>
        <NoGoal />
      </div>
      <div className='flex flex-col gap-1 text-center text-jackson-purple'>
        <div className='text-xl font-semibold'>No goals found</div>
        <div className='text-sm'>Adjust your filters or create a new goal.</div>
        <div className='text-xs'>
          Need help? Check out how it works for more tips or send us a message
        </div>
        <Link href='/goals/create' className='mt-4'>
          <Button>New goal</Button>
        </Link>
      </div>
    </div>
  );
};

export default NoGoals;
