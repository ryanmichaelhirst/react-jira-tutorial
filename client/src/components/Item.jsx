import React, { Fragment, useState, useRef } from "react";
import Window from "./Window";

const Item = ({ item, index }) => {
    const [show, setShow] = useState(false);

    const onOpen = () => setShow(true);

    const onClose = () => setShow(false);

    const onDrag = e => {
        e.dataTransfer.setData("item", JSON.stringify(item));
    };

    return (
        <Fragment>
            <div
                className={"item"}
                onClick={onOpen}
                draggable="true"
                onDragStart={onDrag}
            >
                <p>{item.content}</p>
                <div className={"item-icons"}>
                    {/*{item.issueType}*/}
                    {/*{item.priority}*/}
                </div>
            </div>
            <Window
                item={item}
                onClose={onClose}
                show={show}
            />
        </Fragment>
    );
};

export default Item;