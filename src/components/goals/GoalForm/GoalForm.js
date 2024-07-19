import Button from '@/components/Button';
import Card from '@/components/Card';
import Building from '@/components/Icons/Building';
import Close from '@/components/Icons/Close';
import LeftArrow from '@/components/Icons/LeftArrow';
import Input from '@/components/Input';
import Select from '@/components/Select';
import Textearea from '@/components/Textearea';
import { createGoal, updateGoal, useGoals } from '@/services/goals';
import { useUsers } from '@/services/users';
import { useRouter } from 'next/router';
import { useMemo, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Bounce, toast } from 'react-toastify';
import { mutate } from 'swr';

const GoalForm = ({ goal, mutateGoal }) => {
  const sendingForm = useRef(false);
  const router = useRouter();
  const { data: goals, isLoading: isLoadingGoals } = useGoals();
  const { data: users } = useUsers();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    setError,
  } = useForm();
  const parentGoals = useMemo(
    () => goals?.filter((goal) => !goal.parentId),
    [goals]
  );

  const onSubmit = async (data) => {
    if (sendingForm.current || isLoadingGoals) {
      return;
    }

    sendingForm.current = true;

    try {
      if (goal) {
        await updateGoal({
          ...goal,
          ...data,
          progress: `${data.progress}`,
        });

        if (goal.parentId !== data.parentId) {
          const childGoals = goals.filter(
            (goalItem) => goalItem.parentId === data.parentId
          );

          if (childGoals?.length) {
            await Promise.all(
              childGoals.map((childGoal) =>
                updateGoal({ ...childGoal, parentId: data.parentId })
              )
            );
          }
        }

        toast.success('Goal updated!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        });

        mutateGoal();

        router.push('/goals');

        return;
      }

      if (!data.ownerId) {
        setError('ownerId', {
          type: 'required',
        });

        return;
      }

      const createdGoal = await createGoal(data);

      router.push(`/goals/edit/${createdGoal.id}`);

      toast.success('Goal created!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
    } finally {
      mutate('goals');
      sendingForm.current = false;
    }
  };

  const onClickClose = () => {
    router.push('/goals');
  };

  const userLabelRenderer = (userId) => {
    const userToLabel = users?.find((user) => user.id === userId);

    if (!userToLabel) {
      return null;
    }

    return (
      <div className='flex items-center gap-[6px]'>
        <img
          src={userToLabel.img}
          alt={userToLabel.displayName}
          className='size-6  rounded'
          height={24}
          width={24}
          loading='lazy'
        />
        <div>{userToLabel.displayName}</div>
      </div>
    );
  };

  const parentGoalLabelRenderer = (goalId) => {
    const goalToLabel = goals?.find((goal) => goal.id === goalId);

    if (!goalToLabel) {
      return null;
    }

    return goalToLabel.title;
  };

  return (
    <div className='relative'>
      <div className='flex h-[60px] items-center justify-between bg-white py-3 pl-4 pr-6 shadow-[0px_1px_0px_0px_#EFF1F5]'>
        <div className='flex items-center gap-4'>
          <div
            className='cursor-pointer border-r border-r-hawkes-blue px-4 py-[6px]'
            onClick={onClickClose}
          >
            <LeftArrow />
          </div>
          <div className='line-clamp-2 text-lg font-semibold text-midnight'>
            {goal && <>Editing goal: {goal.title}</>}
            {!goal && <>Add new goal</>}
          </div>
        </div>
        <div className='cursor-pointer' onClick={onClickClose}>
          <Close />
        </div>
      </div>
      <div className="absolute inset-0 top-[60px] z-0 h-32 bg-[url('/assets/images/goals-header-bg.svg')] bg-cover bg-no-repeat" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className='relative z-10 mx-[150px] mt-8 flex flex-col gap-4'>
          <div className='flex items-center gap-3'>
            <Building />
            <div className='text-sm leading-4 text-payne-gray'>
              ORGANIZATIONAL GOAL TITLE
            </div>
          </div>
          <div>
            <Input
              id='title'
              placeholder='Add goal title'
              className='!border-b !border-b-hawkes-blue'
              defaultValue={goal?.title}
              error={errors.title}
              formRegisterer={register}
              formOptions={{ required: true }}
            />
          </div>
          <div>
            <Textearea
              id='description'
              placeholder='Add a description'
              className='!text-base'
              defaultValue={goal?.description}
              error={errors.description}
              formRegisterer={register}
              formOptions={{ required: true }}
            />
          </div>
        </Card>
        <Card className='relative z-10 mx-[150px] mb-20 mt-8 flex flex-col gap-4 text-base font-medium text-midnight'>
          <div>
            <div>Goal owner</div>
            <div>
              <Select
                selectedValue={watch('ownerId', goal?.ownerId)}
                items={users?.map((user) => ({
                  label: user.displayName,
                  value: user.id,
                }))}
                onChange={(selectedValue) => {
                  setValue('ownerId', selectedValue);
                }}
                placeholder='Select'
                error={errors.ownerId}
                labelRenderer={userLabelRenderer}
                itemRenderer={userLabelRenderer}
              />
            </div>
          </div>
          <div>
            <div>Timeline</div>
            <div className='flex gap-16'>
              <div className='items-start'>
                <Input
                  id='startDate'
                  className='text-sm'
                  type='date'
                  error={errors.startDate}
                  defaultValue={goal?.startDate}
                  formRegisterer={register}
                  formOptions={{ required: true }}
                />
              </div>
              <div>
                <Input
                  id='endDate'
                  className='text-sm'
                  type='date'
                  error={errors.endDate}
                  defaultValue={goal?.endDate}
                  formRegisterer={register}
                  formOptions={{ required: true }}
                />
              </div>
            </div>
          </div>
          <div>
            <div>Parent goal</div>
            <div>
              <Select
                selectedValue={watch('parentId', goal?.parentId)}
                items={parentGoals?.map((goal) => ({
                  label: goal.title,
                  value: goal.id,
                }))}
                onChange={(selectedValue) => {
                  setValue('parentId', selectedValue);
                }}
                placeholder='Select'
                labelRenderer={parentGoalLabelRenderer}
              />
            </div>
          </div>
          {goal && (
            <div className='flex flex-col items-start'>
              <div>Progress</div>
              <div className='flex items-center gap-1'>
                <Input
                  id='progress'
                  type='range'
                  min='0'
                  max='100'
                  step='0.1'
                  defaultValue={+goal?.progress || 0}
                  formRegisterer={register}
                />
                {watch('progress', +goal?.progress || 0)}%
              </div>
            </div>
          )}
        </Card>
        <div className='fixed bottom-0 left-20 right-0 z-50 mt-20 flex h-[72px] items-center justify-end bg-white p-4 shadow-[0px_-2px_8px_0px_#2330431A] md:left-60'>
          <Button type='submit'>{goal ? 'Save' : 'Publish'}</Button>
        </div>
      </form>
    </div>
  );
};

export default GoalForm;
