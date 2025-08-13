import { styled, Button, Typography, Box } from "@mui/material";
import { Calendar, DateRangePicker } from "react-date-range";

export const StyledDateRangePicker = styled(DateRangePicker as unknown as React.ComponentType<any>) <{ start?: Date | null }>`
  .rdrCalendarWrapper {
    background: white;
    color: #1e293b;
    font-size: 14px;
  }

  .rdrMonthAndYearPickers {
    font-size: 16px;
    font-weight: 500;
  }

  .rdrMonthName {
    font-size: 1rem;
    font-weight: 500;
    color: #1e293b;
  }

  .rdrWeekDay {
    font-weight: 500;
    color: #64748b;
  }

  .rdrDay {
    color: #1e293b;
  }

  .rdrDayToday .rdrDayNumber span:after {
    background: rgba(33, 150, 243, 1);
  }

  .rdrDayToday:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span:after,
  .rdrDayToday:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span:after,
  .rdrDayToday:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span:after,
  .rdrDayToday:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span:after {
    background: rgba(33, 150, 243, 1);
  }

  .rdrDay:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span,
  .rdrDay:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span,
  .rdrDay:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span,
  .rdrDay:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span {
    color: rgba(48, 48, 54, 1);
  }

  .rdrStartEdge,
  .rdrEndEdge {
    background: ${({ start }) => (start ? "transparent" : "rgba(217, 242, 255, 1)")} !important;
   
  }
  .rdrStartEdge::after, .rdrEndEdge::after{
    content: '';
    border: 1px solid currentColor;
    border-radius: 1.333em;
    position: absolute;
    top: -2px;
    bottom: -2px;
    left: 0px;
    right: 0px;
    background: rgb(61, 145, 255);
  }

  .rdrInRange{
    background: rgba(217, 242, 255, 1) !important;
  }
  .rdrDayStartPreview{
    background: transparent;
    left: 2px;
   
  }
  .rdrDayInPreview,
  .rdrDayEndPreview {
    
    background: transparent;
  }

  .rdrDayStartPreview:after,
  .rdrDayInPreview:after,
  .rdrDayEndPreview:after {
    border: 0;
  }

  .rdrNextPrevButton {
    background: transparent;
    border: none;
    margin: 0 8px;

    &:hover {
      background: #f8fafc;
    }
  }

  .rdrMonthAndYearWrapper {
    padding-top: 10px;
    height: 40px;
  }

  .rdrMonth {
    padding: 0 0.833em;
  }

`;

export const StyledDatePicker = styled(Calendar as unknown as React.ComponentType<any>)`
  .rdrCalendarWrapper {
    background: white;
    color: #1e293b;
    font-size: 14px;
  }

  .rdrMonthAndYearPickers {
    font-size: 16px;
    font-weight: 500;
  }

  .rdrMonthName {
    display: none;
  }

  .rdrWeekDay {
    font-weight: 500;
    color: #64748b;
  }

  .rdrDay {
    color: #1e293b;
  }

  .rdrDayToday .rdrDayNumber span:after {
    background: #3d91ff;
  }

  .rdrDayStartPreview,
  .rdrDayInPreview,
  .rdrDayEndPreview {
    border: 0;
  }

  .rdrDayToday:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span:after,
  .rdrDayToday:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span:after,
  .rdrDayToday:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span:after,
  .rdrDayToday:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span:after {
    background: rgba(33, 150, 243, 1);
  }

  .rdrDay:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span,
  .rdrDay:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span,
  .rdrDay:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span,
  .rdrDay:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span {
    color: rgba(48, 48, 54, 1);
  }

  .rdrDayNumber {
    outline: 0;
    font-weight: 300;
    position: absolute;
    left: 0;
    right: 0;
    top: 5px;
    bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1px;
  }

  .rdrSelected {
    left: 2px;
    right: 2px;
    border-radius: 2.042em;
    top: 0px;
    bottom: 0px;
    height: 34px;
  }

  .rdrDayHovered .rdrDayNumber::after {
    top: -4px  !important;
    bottom: -2px !important;
    left: 2px  !important;
    right: 2px  !important;
    background: transparent;
    height: 32px;
  }

  .rdrNextPrevButton {
    background: transparent;
    border: none;
    margin: 0 8px;

    &:hover {
      background: #f8fafc;
    }
  }

  .rdrMonthAndYearWrapper {
    padding-top: 10px;
    height: 40px;
  }

  .rdrMonth {
    padding: 0 0.833em;
  }
`;

export const ButtonCalendar = styled(Button)<{ selected?: boolean }>(
  ({ selected }) => ({
    textTransform: "none",
    backgroundColor: selected ? "rgba(0, 166, 28, 1)" : "transparent",
    color: selected ? "white" : "rgba(48, 48, 54, 1)",
    border: "1px solid rgba(0, 166, 28, 1)",
    "&:hover": {
      backgroundColor: selected ? "rgba(0, 166, 28, 1)" : "rgb(224, 253, 230)",
      border: "1px solid #E5E7EB",
    },
    padding: '5px 10px',
    borderRadius: '30px',
    fontFamily: 'Prompt',
    fontWeight: '400',
    fontSize: '14px',
    height: "30px"
  })
);

export const TitleDate = styled(Typography)({
  fontFamily: "Prompt",
  color: "#303036",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
});

export const textFieldStyles = {
  "& .MuiOutlinedInput-root": {
    height: "58px",
    borderRadius: "10px",
    backgroundColor: "white",
    width: "100%",
    transition: "border-color 0.2s ease-in-out",

    "& fieldset": {
      borderColor: "#E5E7EB",
    },

    "&:hover fieldset": {
      borderColor: "#3b82f6",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#3b82f6",
      borderWidth: "2px",
    },

    "&.Mui-disabled .MuiOutlinedInput-notchedOutline, &.MuiOutlinedInput-root:hover fieldset": {
      borderColor: "#E5E7EB !important"
    }

  },

  "& .MuiInputAdornment-root": {
    marginRight: "8px",
  },
};

export const textFieldStylesTooltip = {
  "&.Mui-disabled": {
    color: 'rgba(0, 136, 204, 1)'
  }

}


export const Container = styled(Box)<{ disabled?: boolean }>(
  ({ disabled }) => ({
    gap: "5px",
    display: "flex",
    flexDirection: "column",
    ...(disabled && { opacity: 0.5 }),
  })
);

export const ContainerCalendar = styled(Box)<{ selected?: boolean }>({
  backgroundColor: "white",
  borderRadius: "12px",
  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  padding: "16px",
  outline: "auto rgba(141, 163, 174, 1)",
});


export const CancelButton = styled(Button)({
  color: "#0072E5",
  backgroundColor: "#fff",
  border: "1px solid #0072E5",
  borderRadius: "4px",
  padding: "6px 16px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "rgba(0, 114, 229, 0.04)",
    border: "1px solid #0072E5",
  },
  height: "30px"
})

export const OkButton = styled(Button)({
  color: "#fff",
  backgroundColor: "#0072E5",
  borderRadius: "4px",
  padding: "6px 16px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#0059B2",
  },
  height: "30px"
})