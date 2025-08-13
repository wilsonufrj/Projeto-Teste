// components/AddableRows.tsx
import React from 'react';
import {
  Stack, Paper, Typography, IconButton, Box,
  type ButtonProps,
  type PaperProps,
} from '@mui/material';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import AddIcon from '@mui/icons-material/Add';
import Button from '../Button/Button';

export type AddableRowContent<T> =
  | React.ReactNode
  | {
    header: React.ReactNode;
    body?: React.ReactNode;
  };

export type AddableRowsProps<T> = {
  addLabel?: string;
  value?: T[];
  defaultValue?: T[];
  onChange?: (items: T[]) => void;
  itemFactory: () => T;
  renderContent: (args: {
    item: T;
    index: number;
    update: (patch: Partial<T>) => void;
  }) => AddableRowContent<T>;
  getKey?: (item: T, index: number) => React.Key;
  maxItems?: number;
  addButtonProps?: ButtonProps;
  paperProps?: PaperProps;
  onDelete?: (item: T, index: number) => void;
};

export default function AddableRows<T>({
  addLabel = 'Adicionar',
  value,
  defaultValue = [],
  onChange,
  itemFactory,
  renderContent,
  getKey,
  maxItems,
  addButtonProps,
  paperProps,
  onDelete
}: AddableRowsProps<T>) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState<T[]>(defaultValue);
  const items = isControlled ? (value as T[]) : internal;

  const emit = (next: T[]) => {
    if (!isControlled) setInternal(next);
    onChange?.(next);
  };

  const add = () => {
    if (maxItems && items.length >= maxItems) return;
    emit([...items, itemFactory()]);
  };

  const updateAt = (index: number, patch: Partial<T>) => {
    const next = items.map((x, i) => (i === index ? { ...(x as any), ...patch } : x));
    emit(next);
  };

  const removeAt = (index: number) => {
    const itemToRemove = items[index];
    emit(items.filter((_, i) => i !== index));
    onDelete?.(itemToRemove, index);
  };

  return (
    <Stack spacing={2}>
      <Button
        variant="contained"
        size="large"
        endIcon={<Box component="span" className="add-icon-container">
          <AddIcon className="add-icon" />
        </Box>}
        onClick={add}
        sx={{ display: 'flex' }}
        disabled={!!maxItems && items.length >= maxItems}
        {...addButtonProps}
      >
        {addLabel}
      </Button>

      <Stack spacing={2}>
        {items.map((item, index) => {
          const update = (patch: Partial<T>) => updateAt(index, patch);

          const content = renderContent({ item, index, update });

          // Permite que renderContent retorne um objeto com { header, body }
          const headerContent = (content as any)?.header ?? content;
          const bodyContent = (content as any)?.body;

          return (
            <Paper
              key={getKey?.(item, index) ?? index}
              elevation={0}
              sx={{
                px: 2,
                py: 1.5,
                bgcolor: '#e9eff2',
                borderRadius: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
              {...paperProps}
            >
              {/* Header */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                {/* Número */}
                <Typography
                  variant="body2"
                  sx={{ color: 'text.secondary', whiteSpace: 'nowrap' }}
                >
                  #{index + 1}
                </Typography>

                {/* Conteúdo do header */}
                <Box sx={{ flex: 1, display: 'flex', gap: 2 }}>
                  {headerContent}
                </Box>

                {/* Lixeira */}
                <IconButton
                  aria-label="Remover"
                  onClick={() => removeAt(index)}
                  size="small"
                  sx={{
                    bgcolor: '#c6d3db',
                    '&:hover': { bgcolor: '#b8c7d0' },
                  }}
                >
                  <DeleteOutlineRoundedIcon fontSize="small" />
                </IconButton>
              </Box>

              {/* Body opcional */}
              {bodyContent && (
                <Box sx={{ width: '100%' }}>
                  {bodyContent}
                </Box>
              )}
            </Paper>
          );
        })}


      </Stack>
    </Stack>
  );
}