import React, { useEffect, useState, useCallback } from "react";
import { fetchWrapper } from "../services/fetchWrapper";
import Stack from "@mui/material/Stack";
import { Typography, Link } from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { MdOutlineNavigateNext } from "react-icons/md";
import CustomIcon from './CustomIcon';
import Divider from '@mui/material/Divider';
import { getrgba } from "../utility/utilityFunction";
import { styled } from '@mui/material/styles';
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "../App.css";


const SubCriteria = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { index } = useParams();
    const [criteria, setCriteria] = useState([]);
    const [title, setTitle] = useState("");
    const [tag, setTag] = useState("");
    const [color, setColor] = useState("");

    // let title = location.state.selecteditem.name;
    // let tag = location.state.selecteditem.tag;
    // let color = location.state.selecteditem.color;
    // let criteria = location.state.selecteditem.criteria;

    useEffect(() => {
        let url = `/InputService/v1/data/${index}`;
        fetchWrapper(url, { method: "GET", payload: null, contentType: "application/json" })
            .then((data) => {
                setCriteria(data.data.criteria);
                setTitle(data.data.name);
                setTag(data.data.tag);
                setColor(data.data.color);
            })

    }, [])

    function getTextVar(text, variable) {
        // debugger
        let words = text.split(" ");
        return words.map((word) => {
            if (word.charAt(0) === "$")
                return <a style={{ cursor: "pointer", color: "blue" }}>
                    {`${variable[word].default_value ? variable[word].default_value : variable[word].values[0]} `}</a>
            else
                return <span>{`${word} `}</span>
        })

    }

    return (
        <Stack class="containerPaper" >
            <Box display="flex" alignItems="center" flexDirection="row" gap={1} sx={{ padding: "10px" }}><AiOutlineArrowLeft onClick={() => navigate(-1)} style={{ cursor: "pointer" }} />
                <Typography>Go Back</Typography>
            </Box>
            <Stack className="boxshadowprop" style={{ padding: "10px" }}>
                <Stack sx={{ padding: "5px" }} gap={1}>
                    <Typography variant="h2">{title}</Typography>
                    <Chip label={tag} sx={{ maxWidth: "10rem", bgcolor: getrgba(color), color: color }} size="small" />

                </Stack>
                <Divider />
                <List
                    sx={{ width: "30rem", minHeight: "15rem", overflowY: "overlay" }}
                >
                    {criteria && criteria.map((item, index) => (
                        <Stack>
                            <ListItem
                                key={index}
                                disablePadding
                            >
                                {item.type === "plain_text" ?
                                    <ListItemText sx={{ color: "#424242" }} primary={item.text} /> :
                                    <ListItemText>{getTextVar(item.text, item.variable)}</ListItemText>}

                            </ListItem>
                            <Divider />
                        </Stack>
                    ))}
                </List>
            </Stack>
        </Stack>

    )
}

export default SubCriteria;