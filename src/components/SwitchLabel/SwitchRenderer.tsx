import React from "react";
import { createRoot } from "react-dom/client";
import Handsontable from "handsontable";
import { BaseRenderer } from "handsontable/renderers";
import IOSSwitch from "./IOSSwitch";

export const SwitchRenderer: BaseRenderer = (instance, td, row, col, prop, value, cellProperties) => {
    Handsontable.dom.empty(td);

    const switchElement = document.createElement("div");
    switchElement.style.display = "flex";
    switchElement.style.justifyContent = "center";

    const root = createRoot(switchElement);

    root.render(
        <IOSSwitch
            checked={Boolean(value)}
            onChange={(event) => {
                const isChecked = event.target.checked;
                instance.setDataAtCell(row, col, isChecked);
            }}
        />
    );

    td.appendChild(switchElement);
};