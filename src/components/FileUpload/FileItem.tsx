import {
    Box,
    Button,
    LinearProgress,
    Typography,
} from '@mui/material';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { type UploadFile } from './fileUploadSlice';

interface Props {
    file: UploadFile;
}

const getColor = (status: string) => {
    switch (status) {
        case 'success':
            return 'success';
        case 'error':
            return 'error';
        default:
            return 'primary';
    }
};

export default function FileItem({ file }: Props) {

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid #cfd8dc',
                borderRadius: '8px',
                padding: '16px',
                marginBottom: '10px',
                justifyContent: 'space-between',
            }}
        >
            {/* Ícone + Nome do arquivo */}
            <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                <InsertDriveFileOutlinedIcon sx={{ fontSize: 35, color: '#90a4ae', mr: 2 }} />
                <Box sx={{ flex: 1 }}>
                    <Typography sx={{ fontSize: 14, color: '#637883' }}>
                        {file.file.name} ({Math.round(file.file.size / 1024)}Kb)
                    </Typography>

                    <Box sx={{ position: 'relative', mt: 1, mb: 4 }}>
                        <LinearProgress
                            variant="determinate"
                            value={file.progress}
                            color={getColor(file.status)}
                            sx={{
                                height: 8,
                                borderRadius: 5,
                                backgroundColor: '#eceff1',
                            }}
                        />
                        <Typography
                            sx={{
                                position: 'absolute',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                fontSize: 14,
                                top: '2px',
                                color: file.status === 'error' ? 'error.main' : '#637883',
                            }}
                            mt={2}
                        >
                            {file.status === 'error'
                                ? file.error
                                : `${file.progress}%`}
                        </Typography>
                    </Box>
                </Box>
            </Box>

            {/* Botão de excluir */}
            <Button
                variant="outlined"
                size="small"
                onClick={() => console.log('Excluir arquivo', file.id)}
                endIcon={<DeleteOutlineIcon />}
                sx={{
                    marginLeft: 2,
                    color: '#0288d1',
                    borderColor: '#0288d1',
                    textTransform: 'none',
                    fontWeight: 500,
                    fontSize: 14,
                    paddingX: 2,
                    paddingY: 0.5,
                    '&:hover': {
                        borderColor: '#0288d1',
                        backgroundColor: 'rgba(2, 136, 209, 0.04)',
                    },
                }}
            >
                Excluir
            </Button>
        </Box>
    );
}