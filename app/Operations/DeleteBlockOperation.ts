import {CompoundOperation} from '../Core/Operations/CompoundOperation';
import {IApp} from '../IApp';
import {IBlock} from '../Blocks/IBlock';
import {ICompoundOperation} from '../Core/Operations/ICompoundOperation';
import {IDisplayObject} from '../IDisplayObject';
import {IUndoableOperation} from '../Core/Operations/IUndoableOperation';
import {MoveBlockOperation} from './MoveBlockOperation';
import {RemoveItemFromArrayOperation} from '../Core/Operations/RemoveItemFromArrayOperation';
import {RemoveDisplayObjectOperation} from './RemoveDisplayObjectOperation';

declare var App: IApp;

export class DeleteBlockOperation<IBlock> extends CompoundOperation<IBlock> implements IUndoableOperation, ICompoundOperation {

    private _Block: IBlock;

    // todo: why is it necessary to cast block as 'any'??

    constructor(block: IBlock) {
        super();
        this._Block = block;

        this.Operations.push(new MoveBlockOperation(block));
        this.Operations.push(new RemoveDisplayObjectOperation(<any>block, App.MainScene.DisplayList));
        this.Operations.push(new RemoveItemFromArrayOperation(<any>block, App.Blocks));
        (<any>this._Block).Stop(); // TODO: await Remove ItemFromArrayOperation to finish first?
        console.log(App.Blocks);
        setTimeout(function() {console.log(App.Blocks)}, 1000);
    }

    Do(): Promise<IBlock> {
        return super.Do();
    }

    Undo(): Promise<IBlock> {
        return super.Undo();
    }

    Dispose(): void {
        (<any>this._Block).Dispose();
        this._Block = null;
    }
}