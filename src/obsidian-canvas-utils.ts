import { CanvasNodeData, CanvasData } from "obsidian/canvas";
import {
    notifyError
} from "./obsidian-helpers";

export function isCanvasNodeData(node: unknown): node is CanvasNodeData {
    return node !== null && typeof node === "object" && "canvas" in node;
}

interface Box {
    x: number;
    y: number;
    width: number;
    height: number;
  }

export function isBox(node: unknown): node is Box {
    return node !== null && 
          typeof node === "object" && 
          "x" in node && 
          "y" in node && 
          "width" in node && 
          "height" in node;
}

// Given node, return nodes with edges to this node
// {incoming: [nodes...], outgoing: [nodes...]}
export function getNodeNeighbours(node: CanvasNodeData) {
    const incoming = []
    const outgoing = []
    for (const edge of node.canvas