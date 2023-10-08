import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export default function DateInput({ title, date, handleDate, editable }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        {editable ? (
          <DatePicker
            label={title}
            onChange={handleDate}
            sx={{ width: "100%" }}
            value={dayjs.tz(date)}
          />
        ) : (
          <DatePicker
            label={title}
            onChange={handleDate}
            sx={{ width: "100%" }}
          />
        )}
      </DemoContainer>
    </LocalizationProvider>
  );
}
