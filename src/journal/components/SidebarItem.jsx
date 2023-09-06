import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { TurnedInNot } from "@mui/icons-material"
import { setActiveNote } from "../../store/journal";

export const SidebarItem = ({ id, title = '', body, date, imgUrls = [] }) => {

    const dispatch = useDispatch();

    const newTitle = useMemo(() => {
        return title?.length > 17
            ? title.substring(0, 17) + '...'
            : title;
    }, [title]);

    const onActivateNote = () => {
        dispatch(setActiveNote({
            id,
            date,
            title,
            body,
            imgUrls
        }))
    }

    return (
        <ListItem key={id} disablePadding>
            <ListItemButton
                onClick={onActivateNote}
            >
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={newTitle} />
                    <ListItemText secondary={body} />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
