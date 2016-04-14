import Canvas = etch.drawing.Canvas;
import IDisplayObject = etch.drawing.IDisplayObject;
import Point = minerva.Point;
import {AnimationsLayer} from './UI/AnimationsLayer';
import {BlockCreator} from './BlockCreator';
import {BlockSprites} from './Blocks/BlockSprites';
import {ColorManager} from './Core/Visual/ColorManager';
import {CommandManager} from './Core/Commands/CommandManager';
import {CommandsInputManager} from './Core/Inputs/CommandsInputManager';
import {IAudio} from './Core/Audio/IAudio';
import {IBlock} from './Blocks/IBlock';
import {IConfig} from './IConfig';
import {IEffect} from './Blocks/IEffect';
import {IPowerEffect} from './Blocks/Power/IPowerEffect';
import {IPowerSource} from './Blocks/Power/IPowerSource';
import {ISource} from './Blocks/ISource';
import {MainScene} from './MainScene';
import {Metrics} from './Metrics';
import {OperationManager} from './Core/Operations/OperationManager';
import {Particle} from './Particle';
import {PianoKeyboardManager} from './Core/Inputs/PianoKeyboardManager';
import {PointerInputManager} from './Core/Inputs/PointerInputManager';
import {PooledFactoryResource} from './Core/Resources/PooledFactoryResource';
import {ResourceManager} from './Core/Resources/ResourceManager';
import {Stage} from './Stage';
import {ThemeManager} from './Core/Visual/ThemeManager';
import {TypingManager} from './Core/Inputs/TypingManager';
import {IL10n} from './IL10n';

export interface IApp {
    AnimationsLayer: AnimationsLayer;
    Audio: IAudio;
    Blocks: IBlock[];
    BlockCreator: BlockCreator;
    BlockSprites: BlockSprites;
    Canvas: Canvas;
    ColorManager: ColorManager;
    CommandManager: CommandManager;
    CommandsInputManager: CommandsInputManager;
    CompositionId: string;
    CompositionLoaded: nullstone.Event<nullstone.IEventArgs>;
    Config: IConfig;
    //DragFileInputManager: DragFileInputManager;
    DragOffset: Point;
    Effects: IEffect[];
    GridSize: number;
    Height: number;
    IsLoadingComposition: boolean;
    L10n: IL10n;
    MainScene: MainScene;
    Metrics: Metrics;
    OperationManager: OperationManager;
    Palette: string[];
    Particles: Particle[];
    ParticlesPool: PooledFactoryResource<Particle>;
    PianoKeyboardManager: PianoKeyboardManager;
    PointerInputManager: PointerInputManager;
    PowerEffects: IPowerEffect[];
    PowerSources: IPowerSource[];
    ResourceManager: ResourceManager;
    ScaledDragOffset: Point;
    ScaledGridSize: number;
    ScaledUnit: number;
    SessionId: string;
    SkipTutorial: boolean;
    Sources: ISource[];
    Stage: Stage;
    SubCanvas: HTMLCanvasElement[];
    ThemeManager: ThemeManager;
    TrackEvent(category: string, action: string, label?: string): void;
    TrackVariable(name: string, value: string): void;
    TypingManager: TypingManager;
    ThemeNo: number;
    Unit: number;
    Width: number;
    ZoomLevel: number;

    Deserialize(json: string): any;
    GetBlockId(): number;
    IsLocalhost(): boolean;
    LoadReady(): void;
    Message(message?: string, options?: any): void;
    Serialize(): string;
    Setup(): void;

    FillColor(ctx,col): void;
    FillRGBA(ctx,r,g,b,a): void;
    StrokeColor(ctx,col): void;
    StrokeRGBA(ctx,r,g,b,a): void;
}
