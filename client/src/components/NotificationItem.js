import React from "react";
import { format } from "date-fns";

const NotificationItem = ({ data }) => {
  var dateDisplay = "bad date value";
  try {
    const date = new Date(data.date);
    dateDisplay =
      date.toLocaleString("default", { weekday: "short" }) +
      "\t" +
      date.toLocaleString();
  } catch (err) {
    console.log(err);
  }

  return (
    <p>
      {dateDisplay}: {data.message}
    </p>
  );
};

export default NotificationItem;
