import React, { useState, useRef, useEffect, useMemo } from "react";
import { parse, isValid } from "date-fns";
import {
  Box,
  TextField,
  Popper,
  InputAdornment,
  IconButton,
  Typography,
  type SxProps,
  type Theme,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import {
  CancelButton,
  Container,
  ContainerCalendar,
  OkButton,
  StyledDatePicker,
  textFieldStyles,
} from "./DatePickers.styles";
import { customLocale } from "./utils/customLocale";
import { formatDate, parseDate } from "./utils/formatDate";
import InfoPopover from "../InfoPopover/InfoPopover";
import InfoIcon from '@mui/icons-material/Info';
import { IMaskInput } from 'react-imask';
import { assignRef } from "./utils/util";

type Props = {
  onDateChange: (date: Date) => void;
  title: string;
  disabled?: boolean;
  tooltip?: string;
  dateDefault?: string;
  maxDate?: Date;
  minDate?: Date;
  titlePosition?: "top" | "side";
  message?: string;
  sx?: SxProps<Theme>;
};

type DateMaskProps = {
  value?: string;
  onValueChange?: (value: string) => void;
  name?: string;
  onInputEl?: (el: HTMLInputElement | null) => void;
};

export const DatePicker: React.FC<Props> = ({
  onDateChange,
  title,
  disabled,
  tooltip,
  dateDefault,
  maxDate,
  minDate,
  titlePosition = "side",
  message,
  sx
}) => {
  const [selectedDate, setSelectedDate] = useState(
    dateDefault ? parseDate(dateDefault) : null
  );
  const [formattedDate, setFormattedDate] = useState(formatDate(selectedDate));
  const [open, setOpen] = useState(false);

  const anchorRef = useRef(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const calendarRef = useRef<HTMLDivElement | null>(null);
  // fora do JSX
  const anchorStore = React.useRef<HTMLElement | null>(null);
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handleInputEl = React.useCallback((el: HTMLInputElement | null) => {
    // ignore chamadas com null (detach) e repetições com o mesmo elemento
    if (!el) return;
    if (anchorStore.current !== el) {
      anchorStore.current = el;
      setAnchorEl(el);
    }
  }, []);



  useEffect(() => {
    const date = parseDate(dateDefault);
    setFormattedDate(formatDate(date));
    setSelectedDate(date);
  }, [dateDefault]);

  const handleOpen = () => setOpen(true);

  const updateDate = (date: Date) => {
    setSelectedDate(date);
    setFormattedDate(formatDate(date));
    onDateChange(date);
  };

  const handleInputChange = (value: string) => {
    setFormattedDate(value);

    const parsedDate = parse(value, "dd/MM/yyyy", new Date());
    if (isValid(parsedDate)) {
      updateDate(parsedDate);
      return;
    }

    if (selectedDate) {
      setSelectedDate(null);
    }
  };

  const handleClear = () => {
    setSelectedDate(null);
    setFormattedDate(null);
    setOpen(false);
    onDateChange(null);
  };

  const handleConfirmation = () => {
    setOpen(false);
  };

  const isDisabledConfirmation = useMemo(
    () => !isValid(parseDate(formattedDate)),
    [formattedDate]
  );

  const DateMask = React.forwardRef<HTMLInputElement, DateMaskProps>(
    function DateMask({ value, onValueChange, onInputEl, ...other }, ref) {
      return (
        <IMaskInput
          {...other}
          mask="00/00/0000"
          overwrite
          value={value}
          inputRef={(el) => {
            assignRef(ref, el);
            onInputEl?.(el);
          }}
          onAccept={(val: string) => {
            if (onValueChange && val !== value) onValueChange(val);
          }}
        />
      );
    }
  );

  const MaskComp = React.useMemo(() => DateMask, []);

  return (
    <Container sx={{ pt: 2, ...sx }} disabled={disabled}>
      <Box
        ref={anchorRef}
        sx={{
          display: "flex",
          flexDirection: titlePosition === "top" ? "column" : "row",
          alignItems: titlePosition === "top" ? "flex-start" : "center",
          gap: titlePosition === "top" ? 1 : 2,
          width: "100%",
        }}
      >
        {title && titlePosition === "top" && (
          <Box display="flex" alignItems="center" gap={1}>
            <Typography variant="h6">
              {title}
            </Typography>
            {message && <InfoPopover message={message} IconComponent={InfoIcon} />}
          </Box>
        )}

        {title && titlePosition === "side" && (
          <Typography
            variant="h6"
            sx={{
              justifyContent: 'center',
            }}
          >
            {title}
          </Typography>
        )}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <TextField
            placeholder="Formato dd/mm/aaaa"
            disabled={disabled}
            onFocus={handleOpen}
            sx={{ ...textFieldStyles }}
            slotProps={{
              input: {
                inputComponent: MaskComp as any,
                inputProps: {
                  value: formattedDate,
                  name: 'date',
                  onValueChange: (val: string) => {
                    if (val !== formattedDate) handleInputChange(val);
                  },
                  onInputEl: handleInputEl,
                },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      disabled={disabled}
                      edge="end"
                      onClick={handleOpen}
                      sx={{ color: 'rgba(0, 136, 204, 1)', p: 0 }}
                    >
                      <CalendarMonthIcon sx={{ fontSize: 16 }} />
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />
          {titlePosition === "side" && message && (
            <Box sx={{ marginTop: '3px' }}>
              <InfoPopover message={message} IconComponent={InfoIcon} />
            </Box>
          )}
        </Box>
      </Box>

      <Popper
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
        sx={{ paddingTop: "10px", zIndex: 1300 }}
        disablePortal>

        <ContainerCalendar ref={calendarRef}>
          <StyledDatePicker
            maxDate={maxDate}
            minDate={minDate}
            locale={customLocale}
            date={selectedDate}
            onChange={updateDate}
            direction="horizontal"
            editableDateInputs={false}
            showSelectionPreview={true}
            disabled={disabled}
          />
          <Box
            sx={{
              display: "flex",
              gap: 1,
              mt: 2,
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <CancelButton variant="outlined" onClick={handleClear}>
              Cancelar
            </CancelButton>
            <OkButton
              variant="contained"
              disabled={isDisabledConfirmation}
              onClick={handleConfirmation}
            >
              OK
            </OkButton>
          </Box>
        </ContainerCalendar>
      </Popper>
    </Container >
  );
};