import { Plugin, Menu, MenuItem } from "obsidian";
import {
    addNodeChild,
    getNodeNeighbours,
    isCanvasNodeData
} from "./obsidian-canvas-utils";

import {
    notifyError
} from "./obsidian-helpers";

import {
    openai_get_reply
} from "./openai-utils";

import {
    DEFAULT_SETTINGS,
    CanvasLLMExtendPluginSettings,
    CanvasLLMExtendPluginSettingsTab
} from "./settings";
export default class CanvasLLMExtendPlugin extends Plugin {
    settings: CanvasLLMExtendPluginSettings;

    async onload() {
        try {
            await this.loadSettings();
        } catch (error) {
            notifyError(`Error loading settings: ${error}`);
        }

          
        // Add a new menu item to the canvas node menu
        this.registerEvent(this.app.workspace.on("canvas:node-menu", (menu: Menu, node: unknown) => {
                menu.addItem((i: MenuItem) => {
                    i.setSection("canvasLLMExtend");
                    i.setTitle("LLM Extend");
                    i.onClick((_e: unknown) => {
                        this.extendNode(node);
                    });
                });
            }
        ));

        this.addSettingTab(new CanvasLLMExtendPluginSettingsTab(this.app, this));
    }

    async extendNode(node: unknown) {
        if (!isCanvasNodeData(node)) {
            notifyError("N