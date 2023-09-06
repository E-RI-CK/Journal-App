import { useState } from "react";
import { Box, Toolbar } from "@mui/material"
import { NavBar, SideBar } from "../components"

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {

    const [sideBarOpen, setSideBarOpen] = useState(false);

    const onToggleSideBar = () => {
        setSideBarOpen(true);
    }
    return (
        <Box sx={{ display: 'flex' }} >
            {/* Navbar */}

            <NavBar drawerWidth={drawerWidth} onToggleSideBar={onToggleSideBar} />
            {/* Sidebar */}
            <SideBar drawerWidth={drawerWidth} sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
            <Box
                component={'main'}
                sx={{ flexGrow: 1, p: 3 }}
            >
                {/* Toolbar */}
                <Toolbar />
                {children}
            </Box>
        </Box>
    )
}
