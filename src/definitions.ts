export interface FileSyncPlugin {
  keygen(): Promise<{ secretKey: string; publicKey: string }>;

  setKey(options: { secretKey: string; publicKey: string }): Promise<void>;

  setEnv(options: {
    env: string;
    secretKey: string;
    publicKey: string;
  }): Promise<void>;

  encryptFnames(options: { filePaths: string[] }): Promise<{ value: string[] }>;

  decryptFnames(options: { filePaths: string[] }): Promise<{ value: string[] }>;

  getLocalFilesMeta(options: {
    basePath: string;
    filePaths: string[];
  }): Promise<{ result: any[] }>;

  getLocalAllFilesMeta(options: {
    basePath: string;
  }): Promise<{ result: any[] }>;

  deleteLocalFiles(options: {
    basePath: string;
    filePaths: string[];
  }): Promise<void>;

  updateLocalFiles(options: {
    basePath: string;
    filePaths: string[];
    graphUUID: string;
    token: string;
  }): Promise<void>;

  updateLocalVersionFiles(options: {
    basePath: string;
    filePaths: string[];
    graphUUID: string;
    token: string;
  }): Promise<void>;

  deleteRemoteFiles(options: {
    filePaths: string[];
    graphUUID: string;
    token: string;
    txid: number;
  }): Promise<{ txid: number }>;

  updateRemoteFiles(options: {
    basePath: string;
    filePaths: string[];
    graphUUID: string;
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
}
