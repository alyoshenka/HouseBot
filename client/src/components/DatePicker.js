import React from 'react'
import { useState } from 'react'

// https://www.freakyjolly.com/react-material-ui-datepicker-and-timepicker-tutorial/

import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import {
    MuiPickersUtilsProvider,
    KeyboardDateTimePicker
} from '@material-ui/pickers'

const DatePicker = ({passDate}) => {
    const [selectedDate, setSelectedDate] = useState(new Date())

    const handleDateChange = (date) => {
        setSelectedDate(date)
        passDate(selectedDate)

    }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils} >
            <KeyboardDateTimePicker
                label='Select Date'
                value={selectedDate}
                onChange={handleDateChange}
                disablePast='true'
            />
        </MuiPickersUtilsProvider>
    )
}

export default DatePicker