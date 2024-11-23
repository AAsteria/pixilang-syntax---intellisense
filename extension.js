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

    function loadItemsFromDirectory(directory, type) {
        if (!fs.existsSync(directory)) {
            console.error(`Directory does not exist: ${directory}`);
            return [];
        }

        let items = [];
        fs.readdirSync(directory).forEach(file => {
            const itemsFromFile = require(path.join(directory, file));
            itemsFromFile.forEach(item => {
                item.type = type;
                items.push(item);
            });
        });
        return items;
    }

    const globals = loadItemsFromDirectory(globalsPath, 'global');
    const constants = loadItemsFromDirectory(constantsPath, 'constant');
    const functions = loadItemsFromDirectory(functionsPath, 'function');
    const properties = loadItemsFromDirectory(propertiesPath, 'property');

    builtInItems = [...globals, ...constants, ...functions, ...properties];

    console.log('Globals:', globals.map(g => g.name));
    console.log('Constants:', constants.map(c => c.name));
    console.log('Functions:', functions.map(f => f.name));
    console.log('Properties:', properties.map(p => p.name));

    // Register CompletionItemProvider for Pixilang
    const provider = vscode.languages.registerCompletionItemProvider(
        { language: 'pixilang', scheme: 'file' },
        {
            provideCompletionItems(document, position, token, context) {
                // Map functions, constants, and globals to CompletionItems
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

    context.subscriptions.push(provider);
}

/**
 * Deactivate the extension
 */
function deactivate() {}

module.exports = {
    activate,
    deactivate,
};
