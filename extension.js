const vscode = require('vscode');
const path = require('path');
const fs = require('fs');

let builtInItems = [];

/**
 * Activate the extension
 * @param {vscode.ExtensionContext} context 
 */
function activate(context) {
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

    const constants = loadItemsFromDirectory(constantsPath, 'constant');
    const functions = loadItemsFromDirectory(functionsPath, 'function');
    builtInItems = [...constants, ...functions];

    console.log(`Loaded ${functions.length} functions and ${constants.length} constants.`);
    console.log('Functions:', functions.map(f => f.name));
    console.log('Constants:', constants.map(c => c.name));

    // register CompletionItemProvider for Pixilang
    const provider = vscode.languages.registerCompletionItemProvider(
        { language: 'pixilang', scheme: 'file' },
        {
            provideCompletionItems(document, position, token, context) {
                // map functions and constants to CompletionItems
                return builtInItems.map(item => {
                    const labelPrefix = item.type === 'function' ? 'fn' : 'cons';
                    const completionItemKind =
                        item.type === 'function'
                            ? vscode.CompletionItemKind.Function
                            : vscode.CompletionItemKind.Constant;

                    const completionItem = new vscode.CompletionItem(
                        `${labelPrefix} ${item.name}`,
                        completionItemKind
                    );

                    completionItem.detail = item.detail;
                    completionItem.documentation = new vscode.MarkdownString(item.documentation);
                    return completionItem;
                });
            },
        },
        '(', // Trigger IntelliSense for functions on open parenthesis
        '.', // Trigger IntelliSense for constants/properties
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
