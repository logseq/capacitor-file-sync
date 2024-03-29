export interface FileSyncPlugin {
  keygen(): Promise<{ secretKey: string; publicKey: string }>;

  setEnv(options: {
    graphUUID: string;
    env: string;
    secretKey: string;
    publicKey: string;
  }): Promise<void>;

  encryptFnames(options: {
    graphUUID: string;
    filePaths: string[];
  }): Promise<{ value: string[] }>;

  decryptFnames(options: {
    graphUUID: string;
    filePaths: string[];
  }): Promise<{ value: string[] }>;

  getLocalFilesMeta(options: {
    graphUUID: string;
    basePath: string;
    filePaths: string[];
  }): Promise<{ result: any[] }>;

  getLocalAllFilesMeta(options: {
    graphUUID: string;
    basePath: string;
  }): Promise<{ result: any[] }>;

  deleteLocalFiles(options: {
    graphUUID: string;
    basePath: string;
    filePaths: string[];
  }): Promise<void>;

  fetchRemoteFiles(options: {
    graphUUID: string;
    basePath: string;
    filePaths: string[];
    token: string;
  }): Promise<void>;

  updateLocalFiles(options: {
    graphUUID: string;
    basePath: string;
    filePaths: string[];
    token: string;
  }): Promise<void>;

  updateLocalVersionFiles(options: {
    graphUUID: string;
    basePath: string;
    filePaths: string[];
    token: string;
  }): Promise<void>;

  deleteRemoteFiles(options: {
    graphUUID: string;
    filePaths: string[];
    token: string;
    txid: number;
  }): Promise<{ txid: number }>;

  updateRemoteFiles(options: {
    graphUUID: string;
    basePath: string;
    filePaths: string[];
    token: string;
    txid: number;
  }): Promise<{ txid: number }>;

  encryptWithPassphrase(options: {
    passphrase: string;
    content: string;
  }): Promise<{ data: string }>;

  decryptWithPassphrase(options: {
    passphrase: string;
    content: string;
  }): Promise<{ data: string }>;

  cancelAllRequests(options: unknown): Promise<void>;
}
