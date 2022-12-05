import { Plugin, Menu, MenuItem } from "obsidian";
import {
    addNodeChild,
    getNodeNeighbours,
    isCanvasNodeData
} from "./obsidian-canvas-utils";

import {
    notifyError
} from "./obsidian-helpers";

im