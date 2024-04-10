# Observe: You need your personal OpenAI API key!!

![Sample Image](https://github.com/non-local/obsidian-AI-node-extender/assets/592433/02eb0c85-510a-40d1-a930-e83ad29468da)

# AI Node Extender for Obsidian
This extension lets the OpenAI LLM add nodes to your Obsidian canvas. For now, it's limited to text nodes only and other node types might cause issues.

You can configure your API key in the settings. To use the extension, right-click a node in your canvas, choose AI Node Extender, and the plugin will generate a new outgoing edge to a newly created node. The text in the new node is determined by OpenAI using input from nearby nodes.

## Contribution Suggestions
- Build support for other types of nodes
- Integrate support for different AI services
- Make sure sibling nodes can also be used to generate prompts
- Add the capability for multiple actions based on prompts
- Limit the number of tokens in the output
- Make the code more adherent to JavaScript standards
- Address 'ts-ignore' issues in the code
- Improve error handling
- Enhance installation instructions, README file, and create a demo video

## Current Project State
The project is in a pre-alpha stage - I've de