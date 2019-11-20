import React from "react";
import Story from "./Story";

export default function NewsBar(props) {
    return (
        <div className="news-bar">
            <div className="header">
                <div className="header-left">
                    {props.headerStart}
                </div>
                <div className="horizontal-bar"></div>
                <div className="header-right">
                {props.headerEnd}
                </div>
            </div>
            <Story description={props.story1} picture={props.image1} />
            <Story description={props.story2} picture={props.image2} />
            <Story description={props.story3} picture={props.image3} />
            <Story description={props.story4} picture={props.image4} />
            <Story description={props.story5} picture={props.image5} />
        </div>
    )
}