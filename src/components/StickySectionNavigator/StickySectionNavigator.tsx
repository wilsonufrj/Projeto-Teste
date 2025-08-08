import React, { useRef, useState } from 'react';
import {
    Box,
    Typography,
    Button,
    SxProps,
    Theme
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface Section {
    id: string;
    label: string;
}

interface StickySectionNavigatorProps {
    title?: string;
    sections: Section[];
    actionButton?: {
        label: string;
        onClick: () => void;
        disabled?: boolean;
    };
    sx?: SxProps<Theme>;
    children: React.ReactNode;
    widthMenuLateral?: number | string
}

const STICKY_HEADER_OFFSET = 168;

const StickySectionNavigator: React.FC<StickySectionNavigatorProps> = ({
    title,
    sections,
    actionButton,
    sx = {},
    children,
    widthMenuLateral
}) => {
    const sectionContainerRef = useRef<HTMLDivElement>(null);
    const [selectedSection, setSelectedSection] = useState<string>(sections[0]?.id || '');

    const scrollToSection = (sectionId: string) => {
        setSelectedSection(sectionId);
        const section = document.getElementById(sectionId);
        const offsetTop = STICKY_HEADER_OFFSET;

        if (section) {
            const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offsetTop;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <Box sx={{ ...sx }}>
            <Box display="flex">
                {/* Menu lateral */}
                <Box
                    sx={{
                        width: widthMenuLateral ?? '240px',
                        flexShrink: 0,
                        padding: 3,
                        borderRight: '1px solid #e0e0e0',
                        position: 'sticky',
                        top: `${STICKY_HEADER_OFFSET - 20}px`,
                        alignSelf: 'flex-start',
                        height: 'fit-content',
                    }}
                >
                    {title && (
                        <Typography variant="h2" sx={{ marginBottom: '25px' }}>
                            {title}
                        </Typography>
                    )}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: title ? '45px' : 0 }}>
                        {sections.map((section) => (
                            <Typography
                                key={section.id}
                                variant="body1"
                                sx={{
                                    cursor: 'pointer',
                                    color: selectedSection === section.id ? 'primary.main' : 'text.secondary',
                                    textDecoration: selectedSection === section.id ? 'underline' : 'none',
                                    fontWeight: selectedSection === section.id ? 600 : 400,
                                    whiteSpace: 'nowrap',
                                }}
                                onClick={() => scrollToSection(section.id)}
                            >
                                {section.label}
                            </Typography>
                        ))}
                    </Box>
                    {actionButton && (
                        <Box sx={{ marginTop: '40px' }}>
                            <Button
                                variant="contained"
                                onClick={actionButton.onClick}
                                disabled={actionButton.disabled}
                                sx={{
                                    textTransform: 'none',
                                    fontWeight: 'bold',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '3px',
                                }}
                            >
                                {actionButton.label}
                                <ArrowForwardIcon />
                            </Button>
                        </Box>
                    )}
                </Box>

                {/* Conteúdo das seções */}
                <Box
                    ref={sectionContainerRef}
                    sx={{
                        flex: 1,
                        padding: 3,
                    }}
                >
                    {children}
                </Box>
            </Box>
        </Box>
    );
};

export default StickySectionNavigator;