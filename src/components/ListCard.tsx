import { Avatar } from '@nextui-org/react';
import * as React from 'react';

export interface IListCardProps {
    title: string;
    description: string;
    date: string;
    avatarUrl?: string;
}

export const ListCard: React.FC<IListCardProps> = ({ title, description, date, avatarUrl }) => {
    return (
        <div className='w-full py-2 flex items-center gap-2'>
            <div>
                <Avatar src={avatarUrl ?? undefined} name={title} size='sm' />
            </div>
            <div className='w-full'>
                <h3 className='font-semibold text-sm dark:text-neutral-300'>{title}</h3>
                <p className='text-xs text-slate-600 dark:text-neutral-400'>{description}</p>
            </div>
            <div className='pl-4'>
                <p className='text-xs text-nowrap dark:text-neutral-400'>{date}</p>
            </div>
        </div>
    );
}
