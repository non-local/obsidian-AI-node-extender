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
    for (const edge of node.canvas.edges.values()) {
        if (edge.from.node.id == node.id) {
            outgoing.push(edge.to.node)
        } else if (edge.to.node.id == node.id) {
            incoming.push(edge.from.node)
        }
    }
    return {
        incoming: incoming, 
        outgoing: outgoing
    }
}

// Random (not secure!) 16 character id  
function generate_id(): string {
    const t = [];
    for (let n = 0; n < 16; n++) {
        t.push((16 * Math.random() | 0).toString(16));
    }
    return t.join("")
}

// Returns true if node1 and node2 overlap
function overlaps(node1: unknown, node2: unknown): boolean {
    if (!isBox(node1)) { 
        notifyError("overlaps received non-box argument: ${node1}");
        return false; 
    }

    if (!isBox(node2)) { 
        notifyError("overlaps received non-box argument: ${node2}");
        return false; 
    }
    if (node1.x > node2.x+node2.width) {
        return false;
    }

    if (node1.x+node1.width < node2