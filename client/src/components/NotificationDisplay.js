import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box/Box";
import Typography from "@mui/material/Typography";

import NotificationItem from "./NotificationItem";

const NotificationDisplay = () => {
  const [notifications, setNotifications] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/notifications")
      .then((response) => {
        const data = response.data;
        setNotifications(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setErrors(err);
      });

    console.log(notifications);
  }, []);

  // item, index, items
  const mapItems = (item, index, items) => {
    return <NotificationItem key={index} data={item} />;
  };

  if (errors) {
    return <span>Errors!</span>;
  } else if (loading) {
    return <span>Loading...</span>;
  } else {
    return (
      <Box>
        <Typography variant="h5">Saved Notifications</Typography>
        <React.Fragment>{notifications.map(mapItems)}</React.Fragment>
      </Box>
    );
  }
};

export default NotificationDisplay;
