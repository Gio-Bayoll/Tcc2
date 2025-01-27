import React from 'react';
import { Separator } from './ui/separator';

interface SectionProps {
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
    return (
        <div className="section">
            <Separator />
            {children}
            <Separator />
        </div>
    );
};

export default Section;