/* eslint-disable @typescript-eslint/no-unused-vars */
import { WebPlugin } from '@capacitor/core';

import type { FileSyncPlugin } from './definitions';

export class FileSyncWeb extends WebPlugin implements FileSyncPlugin {
  fetchRemoteFiles(_options: {
    graphUUID: string;
    basePath: string;
    filePaths: string[];
    token: string;
  }): Promise<void> {
    throw new Error('Method not implemented.');
  }
  cancelAllRequests(_options: unknown): Promise<void> {
    throw new Error('Method not implemented.');
  }
  keygen(): Promise<{ secretKey: string; publicKey: string }> {
    throw new Error('Method not implemented.');
  }
  setEnv(_options: {
    graphUUID: string;
    env: string;
    secretKey: string;
    publicKey: string;
  }): Promise<void> {
    throw new Error('Method not implemented.');
  }
  encryptFnames(_options: {
    graphUUID: string;
    filePaths: string[];
  }): Promise<{ value: string[] }> {
    throw new Error('Method not implemented.');
  }
  decryptFnames(_options: {
    graphUUID: string;
    filePaths: string[];
  }): Promise<{ value: string[] }> {
    throw new Error('Method not implemented.');
  }
  getLocalFilesMeta(_options: {
    graphUUID: string;
    basePath: string;
    filePaths: string[];
  }): Promise<{ result: any[] }> {
    throw new Error('Method not implemented.');
  }
  getLocalAllFilesMeta(_options: {
    graphUUID: string;
    basePath: string;
  }): Promise<{ result: any[] }> {
    throw new Error('Method not implemented.');
  }
  deleteLocalFiles(_options: {
    graphUUID: string;
    basePath: string;
    filePaths: string[];
  }): Promise<void> {
    throw new Error('Method not implemented.');
  }
  updateLocalFiles(_options: {
    graphUUID: string;
    basePath: string;
    filePaths: string[];
    token: string;
  }): Promise<void> {
    throw new Error('Method not implemented.');
  }
  updateLocalVersionFiles(_options: {
    graphUUID: string;
    basePath: string;
    filePaths: string[];
    token: string;
  }): Promise<void> {
    throw new Error('Method not implemented.');
  }
  deleteRemoteFiles(_options: {
    graphUUID: string;
    filePaths: string[];
    token: string;
    txid: number;
  }): Promise<{ txid: number }> {
    throw new Error('Method not implemented.');
  }
  updateRemoteFiles(_options: {
    graphUUID: string;
    basePath: string;
    filePaths: string[];
    token: string;
    txid: number;
  }): Promise<{ txid: number }> {
    throw new Error('Method not implemented.');
  }
  encryptWithPassphrase(_options: {
    passphrase: string;
    content: string;
  }): Promise<{ data: string }> {
    throw new Error('Method not implemented.');
  }
  decryptWithPassphrase(_options: {
    passphrase: string;
    content: string;
  }): Promise<{ data: string }> {
    throw new Error('Method not implemented.');
  }
}
