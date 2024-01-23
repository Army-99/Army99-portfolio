import { DateTime } from "luxon";

export function getDateString(date: string) {
    const newDate = DateTime.fromFormat(date, "dd/MM/yyyy");
    return newDate.toFormat("MMMM yyyy");
}
