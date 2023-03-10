import React, { useEffect, useState, useCallback } from "react";
import { fetchWrapper } from "../services/fetchWrapper";
import Stack from "@mui/material/Stack";
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { MdOutlineNavigateNext } from "react-icons/md";
import Divider from '@mui/material/Divider';
import { getrgba } from "../utility/utilityFunction";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import "../App.css";

const Stocks = (props) => {

    const [AllStocks, setAllStocks] = useState([]);
    const [count, setCount] = useState(0);
    const navigate = useNavigate();


    useEffect(() => {
        let url = "/InputService/v1/data";
        fetchWrapper(url, { method: "GET", payload: null, contentType: "application/json" })
            .then((data) => {
                setAllStocks(data.data)
            })

    }, [])


    return (
        <Box className="containerPaper boxshadowprop">
            <List
                sx={{ width: '100%', maxHeight: "30rem", maxWidth: "30rem", overflowY: "overlay", bgcolor: 'background.paper', borderRadius: "15px" }}
            >
                {AllStocks && AllStocks.map((item, index) => (
                    <Stack>
                        <ListItem
                            key={item.id}
                            secondaryAction={
                                <MdOutlineNavigateNext />
                            }
                            disablePadding
                            onClick={() => navigate(`/subcriteria/${item.id}`, {
                                state: {
                                    selecteditem: item
                                }
                            })}
                        >
                            <ListItemButton>
                                <ListItemText sx={{ color: "#4F46E5" }} primary={item.name} />

                                <Chip label={item.tag} sx={{ bgcolor: getrgba(item.color), color: item.color, marginLeft: "1rem" }} size="small" />
                            </ListItemButton>

                        </ListItem>
                        <Divider />
                    </Stack>
                ))}
            </List>
        </Box>
    )
}

export default Stocks;