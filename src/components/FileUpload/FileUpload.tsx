import React, { useState } from 'react';
import {
    Box,
    Button,
    Typography,
    styled,
} from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';
import { useDropzone } from 'react-dropzone';

import FileItem from './FileItem';

const DropContainer = styled(Box)(({ theme }) => ({
    border: '2px dashed #b0bec5',
    borderRadius: 8,
    padding: theme.spacing(4),
    textAlign: 'center',
    backgroundColor: '#fafafa',
    cursor: 'pointer',
}));

export default function FileUpload() {
    const [files,setFiles] = useState<any>([]);

    const simulateUpload = (fileId: string) => {
        let progress = 0;
        const interval = setInterval(() => {
            progress += 10;
            if (progress <= 100) {
                //dispatch(updateProgress({ id: fileId, progress }));
            }
            if (progress === 100) {
                clearInterval(interval);
                const isError = Math.random() < 0.2;
                // dispatch(
                //     setStatus({
                //         id: fileId,
                //         status: isError ? 'error' : 'success',
                //         error: isError ? 'Nome do erro' : undefined,
                //     })
                // );
            }
        }, 300);
    };

    const onDrop = (acceptedFiles: File[]) => {
        acceptedFiles.forEach((file) => {
            simulateUpload(Math.random().toString(36).substring(7));
        });
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <Box>
            <DropContainer {...getRootProps()}>
                <input {...getInputProps()} />
                <UploadIcon fontSize="large" color="primary" />
                <Typography variant="body1" mt={2}>
                    Arraste o(s) arquivo(s) aqui
                </Typography>
            </DropContainer>

            <Box display="flex" justifyContent="center" mt={2}>
                <Button variant="contained" component="label">
                    Selecionar arquivos
                    <input type="file" hidden multiple onChange={(e) => {
                        const files = Array.from(e.target.files || []);
                        onDrop(files);
                    }} />
                </Button>
            </Box>

            <Box mt={4}>
                {files.map((file:any) => (
                    <FileItem key={file} file={file} />
                ))}
            </Box>
        </Box>
    );
}