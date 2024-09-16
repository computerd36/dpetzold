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
                <h3 className='font-semibold text-sm'>{title}</h3>
                <p className='text-xs text-slate-600'>{description}</p>
            </div>
            <div className='pl-4'>
                <p className='text-xs text-nowrap'>{date}</p>
            </div>
        </div>
    );
}
