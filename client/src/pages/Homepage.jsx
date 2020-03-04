import React, { useState } from "react";
import Item from "../components/Item";
import DropWrapper from "../components/DropWrapper";
import Col from "../components/Col";
import { data, statusIcons } from "../data";

const Homepage = () => {
    const [items, setItems] = useState(data);

    const onDrop = (item, status) => {
        const mapping = statusIcons.find(si => si.status === status);

        setItems(prevState => {
            const newItems = prevState
                .filter(i => i.id !== item.id)
                .concat({ ...item, status, icon: mapping.icon });
            return [ ...newItems ];
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
                                    .map((i, idx) => <Item key={i.id} item={i} index={idx} />)
                                }
                            </Col>
                        </DropWrapper>
                    </div>
                );
            })}
        </div>
    );
};

export default Homepage;