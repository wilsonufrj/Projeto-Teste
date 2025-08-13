import {
    Box,
    LinearProgress,
    styled,
    SvgIcon,
    Typography,
    useTheme,
    type BoxProps,
} from '@mui/material';
import { type UploadFile } from './fileUploadSlice';
import Button from '../Button/Button';

interface PropsItem {
    file: UploadFile;
    onRemove: () => void;
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

const CustomItem = styled(Box)<BoxProps>(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    border: `1px solid ${theme.palette.grey[100]}`,
    borderRadius: '10px',
    padding: '30px',
    gap: '30px',
    marginBottom: '10px',
    justifyContent: 'space-between',
}));

const FileSvg = (props: any) => {
    return (
        <SvgIcon sx={{ color: `${props.theme.palette.grey[100]}`, width: '40px', height: '40px' }}  {...props} viewBox="0 0 40 40">
            <path d="M22.6437 3.33337C23.4262 3.33357 24.1838 3.6091 24.7837 4.11171L25.0003 4.31004L32.357 11.6667C32.9104 12.2201 33.2514 12.9505 33.3203 13.73L33.3337 14.0234V33.3334C33.3339 34.1743 33.0163 34.9843 32.4445 35.601C31.8727 36.2176 31.0889 36.5953 30.2503 36.6584L30.0003 36.6667H10.0003C9.15936 36.667 8.34938 36.3494 7.73275 35.7775C7.11611 35.2057 6.7384 34.422 6.67533 33.5834L6.66699 33.3334V6.66671C6.66673 5.82575 6.98434 5.01576 7.55615 4.39913C8.12797 3.78249 8.91173 3.40478 9.75033 3.34171L10.0003 3.33337H22.6437ZM20.0003 6.66671H10.0003V33.3334H30.0003V16.6667H22.5003C21.8373 16.6667 21.2014 16.4033 20.7326 15.9345C20.2637 15.4656 20.0003 14.8297 20.0003 14.1667V6.66671ZM23.3337 7.35671V13.3334H29.3103L23.3337 7.35671Z" fill="#8DA3AE" />
        </SvgIcon>
    );
}

const TrashIcon = (props: any) => {
    return (
        <SvgIcon sx={{ color: `${props.theme.palette.primary.main}` }} {...props} viewBox="0 0 16 16">
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d="M5.26844 0.468629C5.56849 0.168571 5.97546 0 6.39981 0H9.59981C10.0242 0 10.4311 0.168571 10.7312 0.468629C11.0312 0.768687 11.1998 1.17565 11.1998 1.6V3.2H13.5905C13.5961 3.19994 13.6017 3.19994 13.6074 3.2H14.3998C14.8416 3.2 15.1998 3.55817 15.1998 4C15.1998 4.44183 14.8416 4.8 14.3998 4.8H14.3359L13.5995 13.6366C13.59 14.2599 13.3383 14.8556 12.8969 15.2971C12.4468 15.7471 11.8363 16 11.1998 16H4.79981C4.16329 16 3.55284 15.7471 3.10275 15.2971C2.6613 14.8556 2.40959 14.2599 2.40008 13.6366L1.6637 4.8H1.5998C1.15798 4.8 0.799805 4.44183 0.799805 4C0.799805 3.55817 1.15798 3.2 1.5998 3.2H2.39223C2.39789 3.19994 2.40353 3.19994 2.40916 3.2H4.79981V1.6C4.79981 1.17565 4.96838 0.768687 5.26844 0.468629ZM3.26924 4.8L3.99704 13.5336C3.99888 13.5557 3.99981 13.5778 3.99981 13.6C3.99981 13.8122 4.08409 14.0157 4.23412 14.1657C4.38415 14.3157 4.58763 14.4 4.79981 14.4H11.1998C11.412 14.4 11.6155 14.3157 11.7655 14.1657C11.9155 14.0157 11.9998 13.8122 11.9998 13.6C11.9998 13.5778 12.0007 13.5557 12.0026 13.5336L12.7304 4.8H3.26924ZM9.59981 3.2H6.39981V1.6H9.59981V3.2ZM6.39981 6.4C6.84163 6.4 7.19981 6.75817 7.19981 7.2V12C7.19981 12.4418 6.84163 12.8 6.39981 12.8C5.95798 12.8 5.59981 12.4418 5.59981 12V7.2C5.59981 6.75817 5.95798 6.4 6.39981 6.4ZM9.59981 6.4C10.0416 6.4 10.3998 6.75817 10.3998 7.2V12C10.3998 12.4418 10.0416 12.8 9.59981 12.8C9.15798 12.8 8.79981 12.4418 8.79981 12V7.2C8.79981 6.75817 9.15798 6.4 9.59981 6.4Z" />
        </SvgIcon>
    )
}

const getUploadStatusText = (file: any) => {
    if (file.status === 'error') return file.error;
    if (file.progress === 100) return '100% - Concluído';
    return `${file.progress}%`;
};

const FileItem: React.FC<PropsItem> = ({ file, onRemove }) => {
    const theme = useTheme();

    return (
        <CustomItem>
            <FileSvg theme={theme} fontSize="large" />
            <Box sx={{ flex: 1, flexDirection: 'column', gap: "10px", display: 'flex', justifyItems: 'start' }}>

                <Box sx={{ display: 'flex', justifyItems: 'start' }}>
                    <Typography sx={{ fontSize: 14, color: `${theme.palette.grey[500]}` }}>
                        {file.file.name} ({Math.round(file.file.size / 1024)}Kb)
                    </Typography>
                </Box>
                <Box>
                    <LinearProgress
                        variant="determinate"
                        value={file.progress}
                        color={getColor(file.status)}
                        sx={{
                            height: 8,
                            borderRadius: 5,
                            backgroundColor: `${theme.palette.primary.contrastText}`,
                        }}
                    />
                </Box>
                <Typography
                    sx={{
                        color: file.status === 'error' ? 'error.main' : `${theme.palette.grey[500]}`,
                    }}
                >
                    {getUploadStatusText(file)}
                </Typography>
            </Box>

            <Button
                variant="outlined"
                size="small"
                onClick={onRemove}
                endIcon={<TrashIcon theme={theme} fontSize="large" />}
            >
                Excluir
            </Button>
        </CustomItem>
    );
}

export default FileItem;