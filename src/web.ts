/* eslint-disable @typescript-eslint/no-unused-vars */
import { WebPlugin } from '@capacitor/core';

import type { FileSyncPlugin } from './definitions';

export class FileSyncWeb extends WebPlugin implements FileSyncPlugin {
  keygen(): Promise<{ secretKey: string; publicKey: string }> {
    throw new Error('Method not implemented.');
  }
  setKey(_options: { secretKey: string; publicKey: string }): Promise<void> {
    throw new Error('Method not implemented.');
  }
  setEnv(_options: {
    env: string;
    secretKey: string;
    publicKey: string;
  }): Promise<void> {
    throw new Error('Method not implemented.');
  }
  encryptFnames(_options: {
    filePaths: string[];
  }): Promise<{ value: string[] }> {
    throw new Error('Method not implemented.');
  }
  decryptFnames(_options: {
    filePaths: string[];
  }): Promise<{ value: string[] }> {
    throw new Error('Method not implemented.');
  }
  getLocalFilesMeta(_options: {
    basePath: string;
    filePaths: string[];
  }): Promise<{ result: any[] }> {
    throw new Error('Method not implemented.');
  }
  getLocalAllFilesMeta(_options: {
    basePath: string;
  }): Promise<{ result: any[] }> {
    throw new Error('Method not implemented.');
  }
  deleteLocalFiles(_options: {
    basePath: string;
    filePaths: string[];
  }): Promise<void> {
    throw new Error('Method not implemented.');
  }
  updateLocalFiles(_options: {
    basePath: string;
    filePaths: string[];
    graphUUID: string;
    token: string;
  }): Promise<void> {
    throw new Error('Method not implemented.');
  }
  updateLocalVersionFiles(_options: {
    basePath: string;
    filePaths: string[];
    graphUUID: string;
    token: string;
  }): Promise<void> {
    throw new Error('Method not implemented.');
  }
  deleteRemoteFiles(_options: {
    filePaths: string[];
    graphUUID: string;
    token: string;
    txid: number;
  }): Promise<{ txid: number }> {
    throw new Error('Method not implemented.');
  }
  updateRemoteFiles(_options: {
    basePath: string;
    filePaths: string[];
    graphUUID: string;
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
