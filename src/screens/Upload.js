import React from 'react';
import {Link} from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import BusinessIcon from '@material-ui/icons/Business';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble'; //FIXME add ReviewsQR logo and add Avatar component
import ShareIcon from '@material-ui/icons/Share';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import SettingsIcon from '@material-ui/icons/Settings';
import AssignmentIcon from '@material-ui/icons/Assignment';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Fab from '@material-ui/core/Fab';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';


import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';


import EventIcon from '@material-ui/icons/Event';
import MapIcon from '@material-ui/icons/Map';
import DescriptionIcon from '@material-ui/icons/Description';

class Upload extends React.Component {
    state = {
        open: false,
    };

    render () {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={() => this.setState({showDrawer: true})}
                        >
                            <MenuIcon />
                        </IconButton>
                        <img style={{height: '40px'}} src="https://www.mos.ru/upload/structure/institutions/icon/glavkontrol2x.png"/>
                        <Typography style={{marginLeft: '10px'}} variant="h6">Титульные листы</Typography>
                        <Typography variant="h6" style={{flexGrow: '1'}}/>
                        {this.props.children}
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="primary-search-account-menu"
                            aria-haspopup="true"
                            color="inherit"
                            onClick={() => this.setState({showAccountMenu: true})}
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            anchorEl={'primary-search-account-menu'}
                            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                            id={1}
                            keepMounted
                            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                            open={this.state.showAccountMenu}
                            onClose={() => this.setState({showAccountMenu: false})}
                        >
                            <MenuItem component={Link} to={"/"}>Profile</MenuItem>
                            <MenuItem>Logout</MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>

                <SwipeableDrawer
                    open={this.state.showDrawer}
                    onClose={() => this.setState({showDrawer: false})}
                    onOpen={() => this.setState({showDrawer: true})}
                >
                    <div>
                        <ListItem button key={'close'} onClick={() => this.setState({showDrawer: false})}>
                            <ListItemIcon><img style={{height: '40px'}} src="https://www.mos.ru/upload/structure/institutions/icon/glavkontrol2x.png"/></ListItemIcon>
                            <ListItemText style={{maxWidth: '220px'}} primary={"Главное контрольное управление города Москвы"} />
                            <ChevronLeftIcon />
                        </ListItem>
                    </div>
                    <Divider />
                    <List>
                        <ListItem
                            component={Link}
                            to={"/"}
                            button
                        >
                            <ListItemIcon><MapIcon/></ListItemIcon>
                            <ListItemText primary="Карта" />
                        </ListItem>

                        <ListItem
                            component={Link}
                            to={"/"}
                            button
                        >
                            <ListItemIcon><AssignmentIcon/></ListItemIcon>
                            <ListItemText primary="Коллизии" />
                        </ListItem>
                        <ListItem
                            component={Link}
                            to={"/"}
                            button
                        >
                            <ListItemIcon><AccountCircle/></ListItemIcon>
                            <ListItemText primary="Руководители подразделений" />
                        </ListItem>
                        <ListItem
                            component={Link}
                            to={"/"}
                            button
                        >
                            <ListItemIcon><EventIcon/></ListItemIcon>
                            <ListItemText primary="Календарь" />
                        </ListItem>

                        <ListItem
                            style={{backgroundColor: '#b3b3b3'}}
                            component={Link}
                            to={"/upload_xlsx"}
                            button
                        >
                            <ListItemIcon><DescriptionIcon/></ListItemIcon>
                            <ListItemText primary="Титульные листы" />
                        </ListItem>
                    </List>
                </SwipeableDrawer>

                <TableContainer component={Paper} style={{maxHeight: 'calc(100vh - 65px)'}}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell>Титульный лист</TableCell>
                                <TableCell align="right">Год</TableCell>
                                <TableCell align="right">Количество объектов</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            <TableRow style={{cursor: 'pointer'}} hover>
                                <TableCell>Свод по замене асфальтового покрытия-2019.xlsx (удален)</TableCell>
                                <TableCell align="right">2019</TableCell>
                                <TableCell align="right">871</TableCell>
                            </TableRow>

                            <TableRow style={{cursor: 'pointer'}} hover>
                                <TableCell>Свод по замене асфальтового покрытия.xlsx (удален)</TableCell>
                                <TableCell align="right">2020</TableCell>
                                <TableCell align="right">1155</TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>
                </TableContainer>

                <Dialog open={this.state.open} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Загрузить титульный лист</DialogTitle>
                    <DialogContent>
                        <form action="/upload" method="post" encType="multipart/form-data">
                            <Button variant="contained" color="primary">
                                <input style={{border: '0', backgroundColor: 'rgba(0, 0, 0, 0)', color: 'white', width: '100%', height: '100%'}} type="file" name="filedata"/>
                            </Button>

                            <br/>
                            <br/>

                            <Button variant="contained" color="primary">
                                <input style={{border: '0', backgroundColor: 'rgba(0, 0, 0, 0)', color: 'white', width: '100%', height: '100%'}} type="submit" value="Загрузить файл"/>
                            </Button>
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.setState({open: false})} color="primary">
                            Отмена
                        </Button>
                    </DialogActions>
                </Dialog>

                <Fab style={{position: "absolute", bottom: '40px', right: '40px', backgroundColor: '#3f51b5', color: 'white'}} onClick={() => this.setState({open: true})}>
                    <AddIcon/>
                </Fab>
            </div>
        );
    }
}

export default Upload;
