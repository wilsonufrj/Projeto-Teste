import React, { useMemo, useRef, useState, useEffect } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {
  Box,
  TextField,
  Popper,
  InputAdornment,
  IconButton,
  Typography,
  SxProps,
  Theme,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { isValid, isAfter } from "date-fns";

import {
  Container,
  ContainerCalendar,
  ButtonCalendar,
  StyledDateRangePicker,
  CancelButton,
  OkButton,
  textFieldStylesTooltip,
  textFieldStyles,
} from "./DatePickers.styles";
import { customLocale } from "./utils/customLocale";
import { formatDate, parseDate } from "./utils/formatDate";
import InfoPopover from "../InfoPopover/InfoPopover";
import InfoIcon from "@mui/icons-material/Info";
import { IMaskInput } from "react-imask";
import { assignRef } from "./utils/util";

export interface ButtonCalendarProps {
  id: number;
  label: string;
  disabled?: boolean;
  selected: boolean;
  handleClick: (id: number) => void;
}

type Props = {
  onDateChange: (startDate: Date | null, endDate: Date | null) => void;
  title: string;
  defaultValues: {
    startDate: string | null;
    endDate: string | null;
  };
  disabled?: boolean;
  tooltip?: string;
  buttons?: ButtonCalendarProps[];
  maxDate?: Date;
  minDate?: Date;
  tooltipDisabled?: string;
  titlePosition?: "top" | "side";
  message?: string;
  sx?: SxProps<Theme>;
};

const enum TypeInput {
  Start = "start",
  End = "end",
}

type DateMaskProps = {
  value?: string;
  onValueChange?: (value: string) => void;
  name?: string;
  onInputEl?: (el: HTMLInputElement | null) => void;
};
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

/** --- Hook simples para evitar loops ao trocar a ancora --- */
function useStableAnchor() {
  const store = useRef<HTMLElement | null>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const set = React.useCallback((el: HTMLElement | null) => {
    if (!el) return;
    if (store.current !== el) {
      store.current = el;
      setAnchorEl(el);
    }
  }, []);
  return { anchorEl, setAnchorEl: set };
}

export const DateRange: React.FC<Props> = ({
  onDateChange,
  title,
  defaultValues,
  disabled,
  tooltip,
  buttons,
  maxDate,
  minDate,
  tooltipDisabled,
  titlePosition = "side",
  message,
  sx
}) => {
  const [state, setState] = useState([
    {
      startDate: parseDate(defaultValues?.startDate),
      endDate: parseDate(defaultValues?.endDate) ?? new Date(""),
      key: "selection",
    },
  ]);
  const [tooltipOpen, setTooltipOpen] = useState<boolean>(false);
  const [startDate, setStartDate] = useState(defaultValues?.startDate || "");
  const [endDate, setEndDate] = useState(defaultValues?.endDate || "");
  const [open, setOpen] = useState(false);
  const [activeInput, setActiveInput] = useState<TypeInput | null>(null);

  // wrapper (fallback)
  const anchorRef = useRef<HTMLDivElement | null>(null);

  const firstAnchor = useStableAnchor();
  // memo do componente de máscara (evita recriação/ref reattach)
  const MaskComp = useMemo(() => DateMask, []);

  useEffect(() => {
    const { startDate, endDate } = defaultValues;
    setState([
      {
        startDate: parseDate(startDate),
        endDate: parseDate(endDate) ?? new Date(""),
        key: "selection",
      },
    ]);
    setStartDate(startDate || "");
    setEndDate(endDate || "");
  }, [defaultValues]);

  const handleOpen = (input: TypeInput) => {
    setOpen(true);
    setActiveInput(input);
  };

  const updateStatesDate = (start: Date | null, end: Date | null) => {
    setStartDate(formatDate(start));
    setEndDate(formatDate(end));
  };

  const updateDateRange = (start: Date | null, end: Date | null) => {
    setState([{ startDate: start, endDate: end ?? start, key: "selection" }]);
    updateStatesDate(start, end);
    onDateChange(start, end ?? null);
  };

  const handleInputChange = (value: string, isStartDate: boolean) => {
    isStartDate ? setStartDate(value) : setEndDate(value);
    const parsedDate = parseDate(value);
    if (parsedDate) {
      if (isStartDate) {
        updateDateRange(parsedDate, null);
      } else {
        updateDateRange(
          state[0].startDate,
          isAfter(parsedDate, state[0].startDate) ? parsedDate : null
        );
      }
      return;
    }

    if (isStartDate && (isValid(state[0]?.endDate) || state[0]?.startDate)) {
      setState([{ startDate: null, endDate: new Date(""), key: "selection" }]);
      setEndDate("");
      return;
    }

    if (!isStartDate && isValid(state[0]?.endDate))
      setState([
        {
          startDate: state[0].startDate || null,
          endDate: new Date(""),
          key: "selection",
        },
      ]);
  };

  const handleRangeChange = (ranges: any) => {
    const { startDate: newStartDate, endDate: newEndDate } = ranges.selection;
    updateDateRange(
      activeInput === TypeInput.End ? state[0].startDate : newStartDate,
      activeInput === TypeInput.Start ? null : newEndDate
    );
    setActiveInput(activeInput === TypeInput.Start ? TypeInput.End : TypeInput.Start);
  };

  const handleClear = () => {
    updateStatesDate(null, null);
    setState([{ startDate: null, endDate: new Date(""), key: "selection" }]);
    setOpen(false);
    setActiveInput(null);
    onDateChange(null, null);
  };

  const handleConfirmation = () => setOpen(false);

  const isDisabledConfirmation = useMemo(
    () => !(isValid(parseDate(startDate)) && isValid(parseDate(endDate))),
    [startDate, endDate]
  );

  const fixedAnchorEl = firstAnchor.anchorEl ?? anchorRef.current;

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
            <Typography variant="h6">{title}</Typography>
            {message && <InfoPopover message={message} IconComponent={InfoIcon} />}
          </Box>
        )}

        {title && titlePosition === "side" && (
          <Typography variant="h6" sx={{ minWidth: 100 }}>
            {title}
          </Typography>
        )}

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {[
            {
              value: startDate,
              placeholder: "De",
              disabled: disabled,
              type: TypeInput.Start,
              setAnchorEl: firstAnchor.setAnchorEl,
            },
            {
              value: endDate,
              placeholder: "Até",
              disabled: disabled || !parseDate(startDate),
              type: TypeInput.End,
              setAnchorEl: undefined,
            },
          ].map(({ value, placeholder, disabled: isDisabled, type, setAnchorEl }, index) => (
            <Box
              key={placeholder}
              sx={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                gap: 1,
                ...(tooltipDisabled && { pointerEvents: "none" }),
              }}
            >
              <TextField
                placeholder={placeholder}
                fullWidth
                disabled={isDisabled || Boolean(tooltipDisabled)}
                onFocus={() => !tooltipDisabled && handleOpen(type)}
                sx={{
                  ...textFieldStyles,
                  ...(tooltipDisabled && { ...textFieldStylesTooltip }),
                }}
                slotProps={{
                  input: {
                    inputComponent: MaskComp as any,
                    inputProps: {
                      value,
                      name: type,
                      onValueChange: (val: string) => {
                        if (val !== value) handleInputChange(val, type === TypeInput.Start);
                      },
                      ...(setAnchorEl && { onInputEl: setAnchorEl }),
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          disabled={isDisabled || Boolean(tooltipDisabled)}
                          edge="end"
                          sx={{ color: "rgba(0, 136, 204, 1)", p: 0 }}
                          onClick={() => !tooltipDisabled && handleOpen(type)}
                        >
                          <CalendarMonthIcon sx={{ fontSize: 16 }} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />

              {/* mensagem só após o último input quando titlePosition for "side" */}
              {index === 1 && titlePosition === "side" && message && (
                <InfoPopover message={message} IconComponent={InfoIcon} />
              )}
            </Box>
          ))}
        </Box>
      </Box>

      <Popper
        open={open}
        anchorEl={fixedAnchorEl}
        placement="bottom-start"
        sx={{ paddingTop: "10px", zIndex: 1300 }}
        disablePortal
      >
        <ContainerCalendar>
          <StyledDateRangePicker
            start={parseDate(startDate) && !parseDate(endDate)}
            locale={customLocale}
            ranges={state}
            onChange={handleRangeChange}
            months={2}
            direction="horizontal"
            editableDateInputs={false}
            showSelectionPreview={false}
            moveRangeOnFirstSelection={false}
            disabled={disabled}
            minDate={minDate}
            maxDate={maxDate}
          />

          <Box
            sx={{
              display: "flex",
              gap: 1,
              mt: 2,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
              {Boolean(buttons?.length) &&
                buttons.map(({ id, label, handleClick, ...rest }) => (
                  <ButtonCalendar
                    {...rest}
                    key={id}
                    variant="outlined"
                    onClick={() => handleClick(id)}
                  >
                    {label}
                  </ButtonCalendar>
                ))}
            </Box>

            <Box sx={{ display: "flex", gap: "1rem", justifyContent: "flex-end" }}>
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
          </Box>
        </ContainerCalendar>
      </Popper>
    </Container>
  );
};