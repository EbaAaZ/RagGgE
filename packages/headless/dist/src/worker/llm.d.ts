import { Conversation } from "@/types/chat";
import { GenerateTextCallback } from "@/types/worker_message";
import { InitProgressCallback } from "./lib/tvm/runtime";
import { Config } from "./worker";
export declare class LLMInstance {
    config: Config;
    tvm: any;
    tokenizer: any;
    model: any;
    spp: any;
    constructor(config: Config, sentencePieceProcessor: any);
    isInitialized(): boolean;
    init(cb: InitProgressCallback): Promise<any>;
    generate(conversation: Conversation, stopTexts: string[], maxTokens: number, callback: GenerateTextCallback): Promise<void>;
}
export declare class LLMInstanceScope {
    tvm: any;
    tokenizer: any;
    maxWindowSize: number;
    device: any;
    vm: any;
    encoding: any;
    decoding: any;
    params: any;
    bosTokenId: number;
    eosTokenId: number;
    fclearKVCaches: any;
    kvCache: any;
    fcreateCache: any;
    logitsOnCPU: any;
    kvCacheLength: number;
    lastMessageId: string;
    constructor(tvm: any, tokenizer: any, maxWindowSize?: number);
    init(): Promise<void>;
    getTokensFromStart(conversation: Conversation, maxTokens: number): Promise<any[]>;
    getTokens(conversation: Conversation, maxTokens: number): Promise<any[]>;
    generate(conversation: Conversation, stopTexts: string[], maxTokens: number, cb: GenerateTextCallback): Promise<void>;
    reset(): void;
    dispose(): void;
    clearKVCache(): void;
    forward(inputs: any, curPos: number): any;
    updateLogitsOnCPU(logits: any): void;
    sampleTokenFromLogits(logits: any, temperature?: number, top_p?: number): Promise<any>;
}
