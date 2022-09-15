import { registerPlugin } from '@capacitor/core';

import type { FileSyncPlugin } from './definitions';

const FileSync = registerPlugin<FileSyncPlugin>('FileSync', {
  web: () => import('./web').then(m => new m.FileSyncWeb()),
});

export * from './definitions';
export { FileSync };
