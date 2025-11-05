"use client";
import dayjs from "dayjs";

export function isPassed(date, isToday = false) {
  if (isToday) {
    return false;
  }

  const dayDate = dayjs(date).endOf("day");

  const today = dayjs();

  if (today.isAfter(dayDate)) {
    return true;
  } else {
    return false;
  }
}
