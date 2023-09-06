import { CircularProgress, Grid } from "@mui/material"

export const CheckingAuth = () => {
    return (
        <Grid
            container
            //spacing={0}
            direction={"column"}
            alignItems={"center"}
            alignSelf={"center"}
            justifyContent={"center"}
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', p: 4 }}
        >
            <Grid container
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                    width: { sm: 450, lg: 490 }
                }}
            >
                <CircularProgress color="warning" />
            </Grid>
        </Grid>
    )
}
