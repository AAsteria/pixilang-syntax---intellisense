const vscode = require('vscode');
const path = require('path');
const fs = require('fs');

let builtInItems = [];

/**
 * Activate the extension
 * @param {vscode.ExtensionContext} context 
 */
function activate(context) {
    const globalsPath = path.join(__dirname, 'globals');
    const constantsPath = path.join(__dirname, 'constants');
    const functionsPath = path.join(__dirname, 'functions');
    const propertiesPath = path.join(__dirname, 'reserved_properties');
    const sunvoxPath = path.join(__dirname, 'sunvox');

    function loadItemsFromDirectory(directory, type) {
        if (!fs.existsSync(directory)) {
            console.error(`Directory does not exist: ${directory}`);
            return [];
        }

        let items = [];
        fs.readdirSync(directory).forEach(file => {
            const filePath = path.join(directory, file);
            if (fs.statSync(filePath).isDirectory()) {
                // If it's a directory, recursively load items
                items = items.concat(loadItemsFromDirectory(filePath, type));
            } else if (file.endsWith('.js')) {
                // If it's a file, require it and load its items
                const itemsFromFile = require(filePath);
                itemsFromFile.forEach(item => {
                    item.type = type;
                    items.push(item);
                });
            }
        });
        return items;
    }

    const globals = loadItemsFromDirectory(globalsPath, 'global');
    const constants = loadItemsFromDirectory(constantsPath, 'constant');
    const functions = loadItemsFromDirectory(functionsPath, 'function');
    const properties = loadItemsFromDirectory(propertiesPath, 'property');
    const sunvoxConstants = loadItemsFromDirectory(path.join(sunvoxPath, 'constants'), 'sunvox-constant');
    const sunvoxFunctions = loadItemsFromDirectory(path.join(sunvoxPath, 'functions'), 'sunvox-function');

    builtInItems = [...globals, ...constants, ...functions, ...properties, ...sunvoxConstants, ...sunvoxFunctions];

    // Register CompletionItemProvider for Pixilang
    const provider = vscode.languages.registerCompletionItemProvider(
        { language: 'pixilang', scheme: 'file' },
        {
            provideCompletionItems(document, position, token, context) {
                return builtInItems.map(item => {
                    let labelPrefix;
                    let completionItemKind;

                    switch (item.type) {
                        case 'global':
                            labelPrefix = 'global';
                            completionItemKind = vscode.CompletionItemKind.Variable;
                            break;
                        case 'constant':
                            labelPrefix = 'cons';
                            completionItemKind = vscode.CompletionItemKind.Constant;
                            break;
                        case 'function':
                            labelPrefix = 'fn';
                            completionItemKind = vscode.CompletionItemKind.Function;
                            break;
                        case 'property':
                            labelPrefix = 'prop';
                            completionItemKind = vscode.CompletionItemKind.Property;
                            break;
                        case 'sunvox-constant':
                            labelPrefix = 'sv-con';
                            completionItemKind = vscode.CompletionItemKind.Constant;
                            break;
                        case 'sunvox-function':
                            labelPrefix = 'sv-fn';
                            completionItemKind = vscode.CompletionItemKind.Function;
                            break;
                        default:
                            labelPrefix = '';
                            completionItemKind = vscode.CompletionItemKind.Text;
                    }

                    const completionItem = new vscode.CompletionItem(
                        item.name,
                        completionItemKind
                    );

                    completionItem.label = { label: `${labelPrefix} ${item.name}`, description: '' };
                    completionItem.insertText = item.name;
                    completionItem.detail = item.detail;
                    completionItem.documentation = new vscode.MarkdownString(item.documentation);

                    return completionItem;
                });
            },
        },
        '(', // Trigger IntelliSense for functions on open parenthesis
        '.', // Trigger IntelliSense for constants/properties/globals
        ' ', // Trigger IntelliSense after a space
        '='  // Trigger IntelliSense after an assignment
    );

    const hoverProvider = vscode.languages.registerHoverProvider(
        { language: 'pixilang', scheme: 'file' },
        {
            provideHover(document, position) {
                const wordRange = document.getWordRangeAtPosition(position);
                const word = document.getText(wordRange);
                const item = builtInItems.find((item) => item.name === word);

                if (item) {
                    const markdown = new vscode.MarkdownString();
                    markdown.appendCodeblock(`${item.name}(${item.parameters || ''})`, 'pixilang');
                    markdown.appendMarkdown(`\n\n${item.documentation || 'No documentation available.'}`);
                    return new vscode.Hover(markdown);
                }
                return null;
            },
        }
    );

    context.subscriptions.push(provider);
    context.subscriptions.push(hoverProvider);
}

/**
 * Deactivate the extension
 */
function deactivate() {}

module.exports = {
    activate,
    deactivate,
};
