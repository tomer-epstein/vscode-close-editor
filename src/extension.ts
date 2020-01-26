// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    let cmd_closeActiveEditor = vscode.commands.registerCommand('extension.closeActiveEditor', () => {
        vscode.commands.executeCommand("workbench.action.closeActiveEditor");
    });

    let cmd_closeOtherEditors = vscode.commands.registerCommand('extension.closeOtherEditors', () => {
        vscode.commands.executeCommand("workbench.action.closeOtherEditors");
    });

    let cmd_closeEditorsInGroup = vscode.commands.registerCommand('extension.closeEditorsInGroup', () => {
        vscode.commands.executeCommand("workbench.action.closeEditorsInGroup");
    });

    let cmd_closeEditorsInOtherGroups = vscode.commands.registerCommand('extension.closeEditorsInOtherGroups', () => {
        vscode.commands.executeCommand("workbench.action.closeEditorsInOtherGroups");
    });

    let cmd_closeEditorsToTheLeft = vscode.commands.registerCommand('extension.closeEditorsToTheLeft', () => {
        vscode.commands.executeCommand("workbench.action.closeEditorsToTheLeft");
    });

    let cmd_closeEditorsToTheRight = vscode.commands.registerCommand('extension.closeEditorsToTheRight', () => {
        vscode.commands.executeCommand("workbench.action.closeEditorsToTheRight");
    });

    let cmd_closeAllEditors = vscode.commands.registerCommand('extension.closeAllEditors', () => {
        vscode.commands.executeCommand("workbench.action.closeAllEditors");
    });

    context.subscriptions.push(cmd_closeActiveEditor);
    context.subscriptions.push(cmd_closeOtherEditors);
    context.subscriptions.push(cmd_closeEditorsInGroup);
    context.subscriptions.push(cmd_closeEditorsInOtherGroups);
    context.subscriptions.push(cmd_closeEditorsToTheLeft);
    context.subscriptions.push(cmd_closeEditorsToTheRight);
    context.subscriptions.push(cmd_closeAllEditors);
}

// this method is called when your extension is deactivated
export function deactivate() {}
