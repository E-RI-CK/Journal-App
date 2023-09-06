import { Box, Divider, Drawer, Hidden, List, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux";
import { SidebarItem } from "./";


export const SideBar = ({ drawerWidth, sideBarOpen, setSideBarOpen }) => {
    const { displayName } = useSelector(state => state.auth);
    const { notes } = useSelector(state => state.journal);
    return (
        <Box
            component={'nav'}
            sx={{
                width: { sm: `${drawerWidth}px` },
                flexShrink: { sm: 0 }
            }}
        >
            <Hidden smUp>
                <Drawer
                    variant='temporary'
                    open={sideBarOpen}
                    anchor="left"
                    onClose={() => setSideBarOpen(false)}
                    sx={{
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                    }}
                >
                    <Toolbar>
                        <Typography variant="h6" noWrap component='div'>
                            {localStorage.getItem("name")}
                        </Typography>
                    </Toolbar>
                    <Divider />
                    <List>
                        {
                            notes.map(note => (
                                <SidebarItem key={note.id} {...note} />
                            ))
                        }
                    </List>
                </Drawer>
            </Hidden>
            <Hidden smDown>
                <Drawer
                    variant="permanent"
                    sx={{
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                    }}
                >
                    <Toolbar>
                        <Typography variant="h6" noWrap component='div'>
                            {localStorage.getItem("name")}
                        </Typography>
                    </Toolbar>
                    <Divider />
                    <List>
                        {
                            notes.map(note => (
                                <SidebarItem key={note.id} {...note} />
                            ))
                        }
                    </List>
                </Drawer>
            </Hidden>
        </Box >
    )
}
