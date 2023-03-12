import React, { useEffect, useState, useCallback } from "react";
import { fetchWrapper } from "../services/fetchWrapper";
import Stack from "@mui/material/Stack";
import { Typography, Link } from "@mui/material";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "../App.css";


const Variables = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { index, param1, varIndex } = useParams();
    const [variables, setVariables] = useState(null);

    // let title = location.state.selecteditem.name;
    // let tag = location.state.selecteditem.tag;
    // let color = location.state.selecteditem.color;
    // let criteria = location.state.selecteditem.criteria;

    useEffect(() => {
        let url = `/InputService/v1/data/variable/${index}/${param1}/${varIndex}`;
        fetchWrapper(url, { method: "GET", payload: null, contentType: "application/json" })
            .then((data) => {
                setVariables(data.data)
            })

    }, [])



    return (
        <Stack class="containerPaper" >
            <Box display="flex" alignItems="center" flexDirection="row" gap={1} sx={{ padding: "10px" }}><AiOutlineArrowLeft onClick={() => navigate(-1)} style={{ cursor: "pointer" }} />
                <Typography>Go Back</Typography>
            </Box>
            <Stack className="boxshadowprop" style={{ padding: "10px" }}  sx={{minWidth:"30rem"}}>
                <Stack sx={{ padding: "5px" }} gap={1}>
                    <Typography variant="h2">variable params</Typography>

                </Stack>
                <Divider />
                { variables && variables.type === "indicator" ? <>
                    <Stack justifyContent="start" gap={2}>
                        <Typography variant="h3">
                            {variables.study_type.toUpperCase()}
                        </Typography>
                        <TextField label={variables.parameter_name} variant="outlined" value={variables.default_value} />
                    </Stack>
                </> :
                    <List
                        sx={{ width: "30rem", minHeight: "15rem", overflowY: "overlay" }}
                    >
                        {variables && variables.values && variables.values.map((item, index) => (
                            <Stack>
                                <ListItem
                                    key={index}
                                    disablePadding
                                >
                                    <ListItemText sx={{ color: "#424242" }} primary={item} />
                                </ListItem>
                                <Divider />
                            </Stack>
                        ))}
                    </List>
                }
            </Stack>
        </Stack>

    )
}

export default Variables;