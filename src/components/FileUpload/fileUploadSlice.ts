export type FileStatus = 'uploading' | 'success' | 'error';

export interface UploadFile {
    id: string;
    file: File;
    progress: number;
    status: FileStatus;
    error?: string;
}

interface UploadState {
    files: UploadFile[];
}