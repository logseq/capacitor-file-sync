# @logseq/capacitor-file-sync

File sync for Logseq

## Install

```bash
npm install @logseq/capacitor-file-sync
npx cap sync
```

## API

<docgen-index>

* [`keygen()`](#keygen)
* [`setKey(...)`](#setkey)
* [`setEnv(...)`](#setenv)
* [`encryptFnames(...)`](#encryptfnames)
* [`decryptFnames(...)`](#decryptfnames)
* [`getLocalFilesMeta(...)`](#getlocalfilesmeta)
* [`getLocalAllFilesMeta(...)`](#getlocalallfilesmeta)
* [`deleteLocalFiles(...)`](#deletelocalfiles)
* [`updateLocalFiles(...)`](#updatelocalfiles)
* [`updateLocalVersionFiles(...)`](#updatelocalversionfiles)
* [`deleteRemoteFiles(...)`](#deleteremotefiles)
* [`updateRemoteFiles(...)`](#updateremotefiles)
* [`encryptWithPassphrase(...)`](#encryptwithpassphrase)
* [`decryptWithPassphrase(...)`](#decryptwithpassphrase)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### keygen()

```typescript
keygen() => Promise<{ secretKey: string; publicKey: string; }>
```

**Returns:** <code>Promise&lt;{ secretKey: string; publicKey: string; }&gt;</code>

--------------------


### setKey(...)

```typescript
setKey(options: { secretKey: string; publicKey: string; }) => Promise<void>
```

| Param         | Type                                                   |
| ------------- | ------------------------------------------------------ |
| **`options`** | <code>{ secretKey: string; publicKey: string; }</code> |

--------------------


### setEnv(...)

```typescript
setEnv(options: { env: string; secretKey: string; publicKey: string; }) => Promise<void>
```

| Param         | Type                                                                |
| ------------- | ------------------------------------------------------------------- |
| **`options`** | <code>{ env: string; secretKey: string; publicKey: string; }</code> |

--------------------


### encryptFnames(...)

```typescript
encryptFnames(options: { filePaths: string[]; }) => Promise<{ value: string[]; }>
```

| Param         | Type                                  |
| ------------- | ------------------------------------- |
| **`options`** | <code>{ filePaths: string[]; }</code> |

**Returns:** <code>Promise&lt;{ value: string[]; }&gt;</code>

--------------------


### decryptFnames(...)

```typescript
decryptFnames(options: { filePaths: string[]; }) => Promise<{ value: string[]; }>
```

| Param         | Type                                  |
| ------------- | ------------------------------------- |
| **`options`** | <code>{ filePaths: string[]; }</code> |

**Returns:** <code>Promise&lt;{ value: string[]; }&gt;</code>

--------------------


### getLocalFilesMeta(...)

```typescript
getLocalFilesMeta(options: { basePath: string; filePaths: string[]; }) => Promise<{ result: any[]; }>
```

| Param         | Type                                                    |
| ------------- | ------------------------------------------------------- |
| **`options`** | <code>{ basePath: string; filePaths: string[]; }</code> |

**Returns:** <code>Promise&lt;{ result: any[]; }&gt;</code>

--------------------


### getLocalAllFilesMeta(...)

```typescript
getLocalAllFilesMeta(options: { basePath: string; }) => Promise<{ result: any[]; }>
```

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ basePath: string; }</code> |

**Returns:** <code>Promise&lt;{ result: any[]; }&gt;</code>

--------------------


### deleteLocalFiles(...)

```typescript
deleteLocalFiles(options: { basePath: string; filePaths: string[]; }) => Promise<void>
```

| Param         | Type                                                    |
| ------------- | ------------------------------------------------------- |
| **`options`** | <code>{ basePath: string; filePaths: string[]; }</code> |

--------------------


### updateLocalFiles(...)

```typescript
updateLocalFiles(options: { basePath: string; filePaths: string[]; graphUUID: string; token: string; }) => Promise<void>
```

| Param         | Type                                                                                      |
| ------------- | ----------------------------------------------------------------------------------------- |
| **`options`** | <code>{ basePath: string; filePaths: string[]; graphUUID: string; token: string; }</code> |

--------------------


### updateLocalVersionFiles(...)

```typescript
updateLocalVersionFiles(options: { basePath: string; filePaths: string[]; graphUUID: string; token: string; }) => Promise<void>
```

| Param         | Type                                                                                      |
| ------------- | ----------------------------------------------------------------------------------------- |
| **`options`** | <code>{ basePath: string; filePaths: string[]; graphUUID: string; token: string; }</code> |

--------------------


### deleteRemoteFiles(...)

```typescript
deleteRemoteFiles(options: { filePaths: string[]; graphUUID: string; token: string; txid: number; }) => Promise<{ txid: number; }>
```

| Param         | Type                                                                                  |
| ------------- | ------------------------------------------------------------------------------------- |
| **`options`** | <code>{ filePaths: string[]; graphUUID: string; token: string; txid: number; }</code> |

**Returns:** <code>Promise&lt;{ txid: number; }&gt;</code>

--------------------


### updateRemoteFiles(...)

```typescript
updateRemoteFiles(options: { basePath: string; filePaths: string[]; graphUUID: string; token: string; txid: number; }) => Promise<{ txid: number; }>
```

| Param         | Type                                                                                                    |
| ------------- | ------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ basePath: string; filePaths: string[]; graphUUID: string; token: string; txid: number; }</code> |

**Returns:** <code>Promise&lt;{ txid: number; }&gt;</code>

--------------------


### encryptWithPassphrase(...)

```typescript
encryptWithPassphrase(options: { passphrase: string; content: string; }) => Promise<{ data: string; }>
```

| Param         | Type                                                  |
| ------------- | ----------------------------------------------------- |
| **`options`** | <code>{ passphrase: string; content: string; }</code> |

**Returns:** <code>Promise&lt;{ data: string; }&gt;</code>

--------------------


### decryptWithPassphrase(...)

```typescript
decryptWithPassphrase(options: { passphrase: string; content: string; }) => Promise<{ data: string; }>
```

| Param         | Type                                                  |
| ------------- | ----------------------------------------------------- |
| **`options`** | <code>{ passphrase: string; content: string; }</code> |

**Returns:** <code>Promise&lt;{ data: string; }&gt;</code>

--------------------

</docgen-api>
