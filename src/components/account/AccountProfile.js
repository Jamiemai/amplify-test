import moment from 'moment';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@material-ui/core';
import React, { createRef, useState } from 'react';

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  city: 'Los Angeles',
  country: 'USA',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith',
  timezone: 'GTM-7'
};

// const Account = () => (
// const inputFileRef = createRef(null);
// const [image, _setImage] = useState(null);

// const cleanup = () => {
//   URL.revokeObjectURL(image);
//   inputFileRef.current.value = null;
// };

// const setImage = (newImage) => {
//   if (image) {
//     cleanup();
//   }
//   _setImage(newImage);
// };

// const handleOnChange = (event) => {
//   const newImage = event.target?.files?.[0];

//   if (newImage) {
//     setImage(URL.createObjectURL(newImage));
//   }
// };

//   /**
//    *
//    * @param {React.MouseEvent<HTMLButtonElement, MouseEvent>} event
//    */
//    const handleClick = (event) => {
//     if (image) {
//       event.preventDefault();
//       setImage(null);
//     }
//   };


const AccountProfile = (props) => {

  const inputFileRef = createRef(null);
  const [image, _setImage] = useState(null);

  const cleanup = () => {
    URL.revokeObjectURL(image);
    inputFileRef.current.value = null;
  };

  const setImage = (newImage) => {
    if (image) {
      cleanup();
    }
    _setImage(newImage);
  };

  const handleOnChange = (event) => {
  const newImage = event.target?.files?.[0];

  if (newImage) {
    setImage(URL.createObjectURL(newImage));
  }
  };

    /**
   *
   * @param {React.MouseEvent<HTMLButtonElement, MouseEvent>} event
   */
   const handleClick = (event) => {
    if (image) {
      event.preventDefault();
      setImage(null);
    }
  };


  return (
  <Card {...props}>
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Avatar
        
           src={user.avatar}
          sx={{
            height: 100,
            width: 100
          }}
        />
          {/* <input
            accept="image/*"
            style = {{ display: 'none'}}
            id="contained-button-file"
            multiple
            type="file"
            onChange={handleOnChange}
            /> */}
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h3"
        >
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body1"
        >
          {`${user.city} ${user.country}`}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body1"
        >
          {`${moment().format('hh:mm A')} ${user.timezone}`}
        </Typography>
      </Box>
    </CardContent>
    <Divider />
    <CardActions>
      <Button
        color="primary"
        fullWidth
        variant="text"
        onChange={handleOnChange}
      >
        Upload picture
      </Button>
    </CardActions>
  </Card>
  )
};

export default AccountProfile;
