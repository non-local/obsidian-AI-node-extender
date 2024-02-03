
import { PluginSettingTab, App, Setting } from "obsidian";
import {
    // @ts-ignore: Not sure why this fails, something with export default class...
    CanvasLLMExtendPlugin
} from "./main"

export interface CanvasLLMExtendPluginSettings {
    apiKey: string;
    model: string;
    temperature: number;
    defaultPrompt: string;
}

export const DEFAULT_SETTINGS: CanvasLLMExtendPluginSettings = {
    apiKey: 'sk-I0VQMCAgUGxlYXNlIERvbid0IFN0ZWFsIE15IFNlY3JldC4K',
    model: 'gpt-3.5-turbo',
    temperature: 1.0,
    defaultPrompt: 'I will present a part of a mindmap to you. I will present the text of the main node, its incoming nodes, its outgoing nodes and its siblings (that share one incoming node). I want you to suggest the text to a new outgoing node. The output will be used in a program so keep a similar tone and length to the other nodes and don\'t include anything else than the text of the new node in the response. Start your reply with "new outgoing node:"\n'
}

export class CanvasLLMExtendPluginSettingsTab extends PluginSettingTab {
    plugin: CanvasLLMExtendPlugin;

    constructor(app: App, plugin: CanvasLLMExtendPlugin) {
        super(app, plugin);
        this.plugin = plugin;
    }

    display(): void {
        const { containerEl } = this;

        containerEl.empty();

        new Setting(containerEl)
            .setName("OpenAI API key")
            .setDesc("API key for OpenAI")