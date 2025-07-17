const trigger = document.getElementById("trigger");
const tooltip = document.getElementById("tooltip");

const updateTooltip = (newState) => tooltip?.togglePopover(newState);

trigger?.addEventListener("mouseover", () => updateTooltip(true));
trigger?.addEventListener("mouseleave", () => updateTooltip(false));
trigger?.addEventListener("focus", () => updateTooltip(true));
trigger?.addEventListener("blur", () => updateTooltip(false));
