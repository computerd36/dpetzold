import { Chip } from '@nextui-org/react';
import * as React from 'react';

export interface ITechChipProps {
    title: string;
}

export const TechChip: React.FC<ITechChipProps> = ({ title }) => {
    return (
        <Chip variant='bordered' color='default' size='sm'>{title}</Chip>
    );
}
