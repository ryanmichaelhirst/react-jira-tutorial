import React from "react";

const data = [{
    id: 1,
    icon: "⭕️",
    status: "open",
    title: "Human Interest Form",
    content: "Fill out human interest distribution form",
    issueType: <i className="gg-bookmark" />,
    priority: <i className="gg-chevron-double-down" />
}, {
    id: 2,
    icon: "⭕️",
    status: "open",
    title: "Purchase present",
    content: "Get an anniversary gift",
    issueType: <i className="gg-copy" />,
    priority: <i className="gg-chevron-down" />
}, {
    id: 3,
    icon: "⭕️",
    status: "open",
    title: "Invest in investments",
    content: "Call the bank to talk about investments",
    issueType: <i className="gg-pentagon-down" />,
    priority: <i className="gg-chevron-double-up" />
}, {
    id: 4,
    icon: "⭕️",
    status: "open",
    title: "Daily reading",
    content: "Finish reading Intro to UI/UX",
    priority: <i className="gg-chevron-up" />,
    issueType: <i className="gg-remove" />
}];

const statusIcons = [{
    status: "open",
    icon: "⭕️"
}, {
    status: "in progress",
    icon: "🔆️"
}, {
    status: "in review",
    icon: "📝"
}, {
    status: "done",
    icon: "✅"
}];


export { data, statusIcons };