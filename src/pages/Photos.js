import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from "../components/Card";

const Photos = () => {

    const photos = useSelector(state => state.appreducer.photos);

    const isHovered = useSelector(state => state.appreducer.hovered);

    const dispatch = useDispatch();

    const photosApi = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

    useEffect(() => {
        let mounted = true;
        if (mounted) {
            axios.get(photosApi)
                .then((res) => {
                    const response = res.data;
                    dispatch({ type: "GET_PHOTOS", response });
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }, []);

    return (
        <div>
            <div className="pg-title"><h1>Photos</h1></div>
            <div className="row">
                {!!photos && photos.map((photo, index) => (
                    <div className="column" key={`${index}`} onMouseEnter={() => {
                        dispatch({ type: "SET_HOVERED", chnghoverd : !isHovered});
                        console.log("on Mouse Enter" ,!isHovered);
                    }} onMouseLeave={() => {
                        dispatch({ type: "SET_HOVERED", chnghoverd : !isHovered});
                        console.log("on Mouse Leave" ,!isHovered)
                    }}>
                        <Card photo={photo} index={index} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Photos;