import React, { useState } from "react";
import Item from "../components/Item";
import DropWrapper from "../components/DropWrapper";
import Col from "../components/Col";
import { data, statusIcons } from "../data";

const Homepage = () => {
    const [items, setItems] = useState(data);
    const [dragEl, setDragEl] = useState(null);

    const onDrop = (item, status) => {
        if (item.status === status) {
            return;
        }

        const mapping = statusIcons.find(si => si.status === status);
        setItems(prevState => {
            const newItems = prevState
                .filter(i => i.id !== item.id)
                .concat({ ...item, status, icon: mapping.icon });
            return [ ...newItems ];
        });
    };

    const moveItem = el => {
        setItems(prevState => {
            const itemIndex = prevState.findIndex(i => i.content === dragEl.content);
            const hoverIndex = prevState.findIndex(i => i.content === el);
            const newState = [ ...prevState ];

            newState.splice(itemIndex, 1);
            newState.splice(hoverIndex, 0, dragEl);
            return [ ...newState ];
        });
    };

    const setDragElement = el => setDragEl(el);

    const onAddItem = col => {
        console.log("add item placeholder", col);
        const status = statusIcons.find(si => si.status === col);

        setItems(prevState => {
            const highestId = Math.max.apply(Math, prevState.map(i => i.id));

            return [
                ...prevState,
                {
                    id: highestId + 1,
                    icon: status.icon,
                    status: status.status,
                    title: `Placeholder item for id ${highestId + 1}`,
                    content: "Example",
                    issueType: "gg-bookmark",
                    priority: "gg-chevron-double-down",
                    estimate: "0m"
                }
            ];
        });
    };

    return (
        <div className={"row"}>
            {["open", "in progress", "in review", "done"].map(status => {
                return (
                    <div key={status} className={"col-wrapper"}>
                        <div className={"col-group"}>
                            <h5 className={"col-header"}>{status.toUpperCase()}</h5>
                            <p className={"col-count"}>{items.filter(i => i.status === status).length}</p>
                        </div>
                        <DropWrapper onDrop={onDrop} status={status}>
                            <Col>
                                {items
                                    .filter(i => i.status === status)
                                    .map(i => (
                                        <Item
                                            key={i.id}
                                            item={i}
                                            moveItem={moveItem}
                                            setDragElement={setDragElement}
                                        />
                                    ))
                                }
                                <button onClick={e => onAddItem(status)}>
                                    Add ticket
                                </button>
                            </Col>
                        </DropWrapper>
                    </div>
                );
            })}
        </div>
    );
};

export default Homepage;