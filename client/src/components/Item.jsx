import React, { Fragment, useState } from "react";
import Window from "./Window";

const Item = ({ item, moveItem, setDragElement }) => {
    const [show, setShow] = useState(false);

    const onOpen = () => setShow(true);

    const onClose = () => setShow(false);

    const onDragStart = ({ dataTransfer, target }) => {
        dataTransfer.setData("item", JSON.stringify(item));
        setDragElement(item);
        setTimeout(function() {
            target.style.visibility = "hidden";
        }, 0);
    };

    const onDragOver = e => {
        moveItem(e.target.innerText);
        e.preventDefault();
    };

    const onDragEnd = e => e.target.style.visibility = "visible";

    return (
        <Fragment>
            <div
                className={"item"}
                onClick={onOpen}
                draggable="true"
                onDragStart={onDragStart}
                onDragOver={onDragOver}
                onDragEnd={onDragEnd}
            >
                <p>{item.content}</p>
                <div className={"item-icons"}>
                    <i className={item.issueType} />
                    <i className={item.priority} />
                    <span className={"est-tag"}>{item.estimate}</span>
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