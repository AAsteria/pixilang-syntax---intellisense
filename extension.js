const vscode = require('vscode');
const path = require('path');
const fs = require('fs');

/**
 * Activate the extension
 * @param {vscode.ExtensionContext} context 
 */
function activate(context) {
    const functionsPath = path.join(__dirname, 'functions');
    const builtInFunctions = [];

    // Dynamically load all functions from files in the 'functions' directory
    fs.readdirSync(functionsPath).forEach(file => {
        const functions = require(path.join(functionsPath, file));
        builtInFunctions.push(...functions);
    });

    // Register CompletionItemProvider for Pixilang
    const provider = vscode.languages.registerCompletionItemProvider(
        { language: 'pixilang', scheme: 'file' },
        {
            provideCompletionItems(document, position) {
                // Map functions to CompletionItems
                return builtInFunctions.map(func => {
                    const item = new vscode.CompletionItem(func.name, vscode.CompletionItemKind.Function);
                    item.detail = func.detail;
                    item.documentation = new vscode.MarkdownString(func.documentation);
                    return item;
                });
            }
        },
        '(' // Trigger IntelliSense on open parenthesis
    );

    context.subscriptions.push(provider);
}

/**
 * Deactivate the extension
 */
function deactivate() {}

module.exports = {
    activate,
    deactivate
};
