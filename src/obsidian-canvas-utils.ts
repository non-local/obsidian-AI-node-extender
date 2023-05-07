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
         