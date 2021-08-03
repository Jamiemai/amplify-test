import moment from 'moment';
import React from 'react';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  // TableSortLabel,
  // Tooltip
} from '@material-ui/core';
// import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const orders = [
  {
    id: uuid(),
    ref: '2C:54:91:88:C9:E39',
    amount: 30.5,
    customer: {
      name: 'Ekaterina Tankova'
    },
    createdAt: 1555016400000,
    tag: 'tag'
  },
  {
    id: uuid(),
    ref: '2c-54-91-88-c9-e3',
    amount: 25.1,
    customer: {
      name: 'Cao Yu'
    },
    createdAt: 1555016400000,
    tag: 'tag'
  },
  {
    id: uuid(),
    ref: '00:00:00:a1:2b:cc',
    amount: 10.99,
    customer: {
      name: 'Alexa Richardson'
    },
    createdAt: 1554930000000,
    tag: 'tag'
  },
  {
    id: uuid(),
    ref: '06:54:66:d1:b4:c4',
    amount: 96.43,
    customer: {
      name: 'Anje Keizer'
    },
    createdAt: 1554757200000,
    tag: 'tag'
  },
  {
    id: uuid(),
    ref: '76:04:96:g1:b8:a4',
    amount: 32.54,
    customer: {
      name: 'Clarke Gillebert'
    },
    createdAt: 1554670800000,
    tag: 'tag'
  },
  {
    id: uuid(),
    ref: '76:b4:78:00:00:a4',
    amount: 16.76,
    customer: {
      name: 'Adam Denisov'
    },
    createdAt: 1554670800000,
    tag: 'tag'
  }
];

const LatestOrders = (props) => {
    const [openAdd, setOpenAdd] = React.useState(false);
const [openEdit, setOpenEdit] = React.useState(false);

const [state, setState] = React.useState({
  macAddress: "",
  lastName: ""
})

function handleChange(evt) {

  const value = evt.target.value;
  setState({
    ...state,
    [evt.target.name]: value
  });
}

const handleClickOpen = () => {
    setOpenAdd(true);
   // setOpenEdit(true);
};

const handleClickOpenEdit = () => {
    setOpenEdit(true);
};

const handleClose = () => {
    setOpenAdd(false);
    setOpenEdit(false);
};

// const classes = useStyles();

    return (
<React.Fragment>
  <Card {...props}>
    <CardHeader title="Device List" />
    <Divider />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Mac Address
              </TableCell>
              <TableCell>
                Name
              </TableCell>
              <TableCell>
                Tag
              </TableCell>
              <TableCell>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                hover
                key={order.id}
              >
                <TableCell>
                  {order.ref}
                </TableCell>
                <TableCell>
                  {order.customer.name}
                </TableCell>
                <TableCell>
                  {/* {moment(order.createdAt).format('DD/MM/YYYY')} */}
                  {order.tag}
                </TableCell>
                <TableCell>
                    <IconButton aria-label="add">
                        <AddIcon onClick={handleClickOpen} />
                    </IconButton>
                    <IconButton aria-label="edit">
                        <EditIcon  onClick={handleClickOpenEdit}/>
                    </IconButton>
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      {/* <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        View all
      </Button> */}
    </Box>
  </Card>

  <Dialog open={openAdd} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle >Add</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="MAC address"
            type="email"
            fullWidth
          />
            <InputLabel shrink htmlFor="age-native-label-placeholder">
            Name
            </InputLabel>
            <NativeSelect
            // value={state.age}
            // onChange={handleChange}
            // inputProps={{
            //     name: 'age',
            //     id: 'age-native-label-placeholder',
            // }}
            value={state.macAddress}
           
            >
            <option value="">None</option>
            <option value={10}>Name 1</option>
            <option value={20}>Name 2</option>
            <option value={30}>Name 3</option>
            </NativeSelect>

            <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Tags"
            type="tags"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleChange} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openEdit} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle >Edit</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="MAC address"
            type="email"
            fullWidth
            disabled
          />
            <InputLabel shrink htmlFor="age-native-label-placeholder">
            Name
            </InputLabel>
            <NativeSelect
            // value={state.age}
            // onChange={handleChange}
            // inputProps={{
            //     name: 'age',
            //     id: 'age-native-label-placeholder',
            // }}
            
            >
            <option value="">Name</option>
            <option value={10}>Name 1</option>
            <option value={20}>Name 2</option>
            <option value={30}>Name 3</option>
            </NativeSelect>

            <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Tags"
            type="tags"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

  </React.Fragment>
  )
};

export default LatestOrders;