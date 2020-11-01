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
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ShareIcon from '@material-ui/icons/Share';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

import EventIcon from '@material-ui/icons/Event';
import MapIcon from '@material-ui/icons/Map';
import DescriptionIcon from '@material-ui/icons/Description';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Paper from '@material-ui/core/Paper';
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";


class Dashboard extends React.Component {
    state = {};

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
                        <Typography style={{marginLeft: '10px'}} variant="h6">Интерактивная карта благоустройства Москвы</Typography>
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
                            style={{backgroundColor: '#b3b3b3'}}
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
                            component={Link}
                            to={"/upload_xlsx"}
                            button
                        >
                            <ListItemIcon><DescriptionIcon/></ListItemIcon>
                            <ListItemText primary="Титульные листы" />
                        </ListItem>
                    </List>
                </SwipeableDrawer>

                <iframe style={{width: 'calc(100% - 40px)', maxWidth: '1000px', margin: '20px', border: '0', height: '800px', display: 'inline-block'}} src="/map"/>
                {/*<iframe style={{width: '100%', margin: '0', border: '1px red solid', height: '800px'}} src="/map"/>*/}

                <Paper style={{width: 'calc(100% - 80px)', maxWidth: '500px', margin: '20px', display: 'inline-block', verticalAlign: 'top', padding: '20px', textAlign: 'left'}}>
                    <Button variant="contained" color="primary" style={{marginRight: '20px', marginBottom: '20px'}}>Построить маршруты</Button>
                    <a href="/reset" style={{textDecoration: 'none'}}>
                        <Button variant="contained" color="primary" style={{textDecoration: 'none', marginBottom: '20px'}}>Очистить карту</Button>
                    </a>


                    <TableContainer component={Paper} style={{maxHeight: 'calc(100vh - 65px)'}}>
                        <Table stickyHeader>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Округа</TableCell>
                                    <TableCell align="right">Количество объектов</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                <TableRow style={{cursor: 'pointer'}} hover>
                                    <TableCell>ЦАО</TableCell>
                                    <TableCell align="right">128</TableCell>
                                </TableRow>
                                <TableRow style={{cursor: 'pointer'}} hover>
                                    <TableCell>ЦАО</TableCell>
                                    <TableCell align="right">234</TableCell>
                                </TableRow>
                                <TableRow style={{cursor: 'pointer'}} hover>
                                    <TableCell>ВАО</TableCell>
                                    <TableCell align="right">44</TableCell>
                                </TableRow>
                                <TableRow style={{cursor: 'pointer'}} hover>
                                    <TableCell>ЮАО</TableCell>
                                    <TableCell align="right">95</TableCell>
                                </TableRow>
                                <TableRow style={{cursor: 'pointer'}} hover>
                                    <TableCell>ЮЗАО</TableCell>
                                    <TableCell align="right">153</TableCell>
                                </TableRow>
                                <TableRow style={{cursor: 'pointer'}} hover>
                                    <TableCell>ЗАО</TableCell>
                                    <TableCell align="right">130</TableCell>
                                </TableRow>
                                <TableRow style={{cursor: 'pointer'}} hover>
                                    <TableCell>СЗАО</TableCell>
                                    <TableCell align="right">201</TableCell>
                                </TableRow>
                                <TableRow style={{cursor: 'pointer'}} hover>
                                    <TableCell>Троицкий</TableCell>
                                    <TableCell align="right">16</TableCell>
                                </TableRow>

                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </div>
        );
    }
}

export default Dashboard;
