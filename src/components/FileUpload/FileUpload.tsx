import React, { useState } from 'react';
import {
    Box,
    Stack,
    SvgIcon,
    Typography,
    styled,
    useTheme,
} from '@mui/material';
import { useDropzone } from 'react-dropzone';

import FileItem from './FileItem';
import type { UploadFile } from './fileUploadSlice';
import Button from '../Button/Button';

const DropContainer = styled(Box)(({ theme }) => ({
    border: `2px dashed ${theme.palette.neutrals[600]}`,
    borderRadius: '10px',
    padding: '30px 80px',
    display: 'flex',
    gap: '31px',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `${theme.palette.base.white}`,
    cursor: 'pointer',
}));

const MyUploadIcon = (props: any) => {
    return (
        <SvgIcon sx={{ color: `${props.theme.palette.primary.main}` }} {...props} viewBox="0 0 27 28">
            <path d="M11.875 20.75V6.99687L7.65 11.3844L5.375 8.9375L13.5 0.5L21.625 8.9375L19.35 11.3844L15.125 6.99687V20.75H11.875ZM3.75 27.5C2.85625 27.5 2.09142 27.1698 1.4555 26.5094C0.819583 25.8491 0.501083 25.0542 0.5 24.125V19.0625H3.75V24.125H23.25V19.0625H26.5V24.125C26.5 25.0531 26.182 25.8479 25.5461 26.5094C24.9102 27.1709 24.1448 27.5011 23.25 27.5H3.75Z" />
        </SvgIcon>
    );
};

export type OptionsDirections = 'right' | 'bottom';

declare interface FileUploadProps {
    direction?: OptionsDirections;
    multiple?: boolean;
    maxFiles?: number;
    acceptedFileTypes?: string[];
    maxFileSize?: number;
}

const FileUpload: React.FC<FileUploadProps> = ({
    direction = 'right',
    multiple = true,
    maxFiles = 5,
    acceptedFileTypes = ['image/*', 'application/pdf'],
    maxFileSize = 5 * 1024 * 1024, // 5MB
}) => {
    const theme = useTheme();
    const [files, setFiles] = useState<UploadFile[]>([]);

    const simulateUpload = (fileId: string) => {
        let progress = 0;
        const interval = setInterval(() => {
            progress += 10;
            if (progress <= 100) {
                setFiles(prevFiles =>
                    prevFiles.map(file =>
                        file.id === fileId ? { ...file, progress } : file
                    )
                );
            }
            if (progress === 100) {
                clearInterval(interval);
                const isError = Math.random() < 0.2;
                setFiles(prevFiles =>
                    prevFiles.map(file =>
                        file.id === fileId
                            ? {
                                ...file,
                                status: isError ? 'error' : 'success',
                                error: isError ? 'Erro ao carregar arquivo' : undefined
                            }
                            : file
                    )
                );
            }
        }, 300);
    };

    const handleRemoveFile = (fileId: string) => {
        setFiles(prevFiles => prevFiles.filter(file => file.id !== fileId));
    };

    const onDrop = (acceptedFiles: File[], fileRejections: any) => {
        if (fileRejections.length > 0) {
            console.error('Alguns arquivos foram rejeitados:', fileRejections);
            return;
        }

        if (!multiple && acceptedFiles.length > 1) {
            console.error('Apenas um arquivo é permitido');
            return;
        }

        if (files.length + acceptedFiles.length > maxFiles) {
            console.error(`Número máximo de arquivos (${maxFiles}) excedido`);
            return;
        }

        const newFiles = acceptedFiles.map(file => ({
            id: `${file.name}-${Date.now()}`,
            file,
            progress: 0,
            status: 'uploading' as const,
        }));

        setFiles(prevFiles => [...prevFiles, ...newFiles]);

        newFiles.forEach(newFile => {
            simulateUpload(newFile.id);
        });
    };

    const { getRootProps, getInputProps, open } = useDropzone({
        onDrop,
        noClick: true,
        noKeyboard: true,
        multiple,
        accept: acceptedFileTypes.reduce((acc, type) => ({ ...acc, [type]: [] }), {}),
        maxSize: maxFileSize,
    });

    return (
        <Box>
            {direction === 'right' ? (
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '30px',
                    width: '100%'
                }}>
                    <DropContainer {...getRootProps()} sx={{ flex: 1, backgroundColor: `${theme.palette.background.default}` }}>
                        <input {...getInputProps()} />
                        <MyUploadIcon theme={theme} fontSize="medium" />
                        <Typography variant="body1">
                            {multiple
                                ? 'Arraste o(s) arquivo(s) aqui'
                                : 'Arraste um arquivo aqui'}
                        </Typography>
                    </DropContainer>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Button onClick={open} variant='contained'>
                            {multiple ? 'Selecionar arquivos' : 'Selecionar arquivo'}
                        </Button>
                    </Box>
                </Box>
            ) : (
                <Stack>
                    <DropContainer {...getRootProps()} sx={{ flex: 1 }}>
                        <input {...getInputProps()} />
                        <MyUploadIcon theme={theme} fontSize="medium" />
                        <Typography variant="body1">
                            {multiple
                                ? 'Arraste o(s) arquivo(s) aqui'
                                : 'Arraste um arquivo aqui'}
                        </Typography>
                    </DropContainer>

                    <Box sx={{ justifyContent: 'center', marginTop: '1rem' }}>
                        <Button onClick={open} variant='contained'>
                            {multiple ? 'Selecionar arquivos' : 'Selecionar arquivo'}
                        </Button>
                    </Box>
                </Stack>
            )}

            <Box mt={4}>
                {files.map((file) => (
                    <FileItem
                        key={file.id}
                        file={file}
                        onRemove={() => handleRemoveFile(file.id)}
                    />
                ))}
            </Box>
        </Box>
    );
}

export default FileUpload;