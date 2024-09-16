import { Chip } from '@nextui-org/react';
import * as React from 'react';

export interface ISkillChipProps {
    title: string;
}

export const SkillChip: React.FC<ISkillChipProps> = ({ title }) => {
    return (
        <Chip variant='bordered' color='default' size='md'>{title}</Chip>
    );
}
