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

    builtInItems = [...globals, ...constants, ...functions];
    console.log(`Loaded ${functions.length} functions, ${constants.length} constants, and ${globals.length} globals.`);
    console.log('Functions:', functions.map(f => f.name));
    console.log('Constants:', constants.map(c => c.name));
    console.log('Globals:', globals.map(g => g.name));

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
                        default:
                            labelPrefix = '';
                            completionItemKind = vscode.CompletionItemKind.Text;
                    }

                    const completionItem = new vscode.CompletionItem(
                        item.name, // Only the name will be inserted
                        completionItemKind
                    );

                    completionItem.label = { label: `${labelPrefix} ${item.name}`, description: '' }; // Prefix visible in IntelliSense dropdown
                    completionItem.insertText = item.name; // Only insert the actual name
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
