/// <reference types="node" />
import { Operation, Encoding } from './impl';
export { Operation };
export declare function processBuffer(buffer: Buffer, operations: Operation[], encoding: Encoding, quality: number): Promise<Buffer>;
