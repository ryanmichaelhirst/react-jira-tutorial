import React from "react";

const data = [{
    id: 1,
    icon: "⭕️",
    status: "open",
    title: "Human Interest Form",
    content: "Fill out human interest distribution form",
    issueType: "gg-bookmark",
    priority: "gg-chevron-double-down",
    estimate: "30m"
}, {
    id: 2,
    icon: "⭕️",
    status: "open",
    title: "Purchase present",
    content: "Get an anniversary gift",
    issueType: "gg-copy",
    priority: "gg-chevron-down",
    estimate: "4h"
}, {
    id: 3,
    icon: "⭕️",
    status: "open",
    title: "Invest in investments",
    content: "Call the bank to talk about investments",
    issueType: "gg-pentagon-down",
    priority: "gg-chevron-double-up",
    estimate: "1d"
}, {
    id: 4,
    icon: "⭕️",
    status: "open",
    title: "Daily reading",
    content: "Finish reading Intro to UI/UX",
    priority: "gg-chevron-up",
    issueType: "gg-remove",
    estimate: "2w"
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