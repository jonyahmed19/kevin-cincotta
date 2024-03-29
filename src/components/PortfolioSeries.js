import React from "react";
//import React, { useEffect } from "react";
import { navigate } from "@reach/router";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { AppContainer, GlobalStyles } from "../styles";
import "../styles.css";
import Gallery from "react-photo-album";
import PortfolioImage from "../ImageGallery/components/ImageMosaic/components/PortfolioImage";
import Page from "./Page";

const GalleryContainer = styled.div`
  overflow-y: auto;
  height: 100%;
  max-height: calc(100% - 4em);
  padding: 0;
`;

const ImageMosaic = (props) => {
    return (<Page>
        <GalleryContainer>
            <h1 className={props.isNamedSeries ? "series" : ""} onClick={() => navigate(-1)}>{props.series}</h1>
            {props.header ? props.header() : ""}
            <Gallery
                layout="masonry"
                columns={(containerWidth) => {
                    let columns = 1;
                    if (containerWidth >= 500) columns = 2;
                    if (containerWidth >= 900) columns = 3;
                    if (containerWidth >= 1200) columns = Math.floor(containerWidth / 400);
                    return columns;
                }}
                onClick={props.handleClick}
                photos={props.images}
                spacing={64}
                renderPhoto={PortfolioImage}
            />
        </GalleryContainer>
        {props.footer ? props.footer() : ""}
    </Page>
    );
};

function PortfolioSeries(props) {
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);

    return <ThemeProvider
        theme={{
            pageBackgroundColor: "#f0f0f0",
            pageContentFontColor: "#0f0f0f0",
            pageContentLinkHoverColor: "#036f71",
            pageContentSelectionColor: "#ff0000",
            headerNavFontColor: "#036f71",
            accentColor: "#f0f0f000"
        }}
    >
        <AppContainer>
            <GlobalStyles />
            <ImageMosaic
                {...props}
                images={props.images}
                handleClick={(event, photo, index) => {
                    navigate(props.images[index].page);

                }}
                series={props.series}
            />
        </AppContainer>
    </ThemeProvider>;
}
export default PortfolioSeries;
