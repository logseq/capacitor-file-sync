import { WebPlugin } from '@capacitor/core';

import type { FileSyncPlugin } from './definitions';

export class FileSyncWeb extends WebPlugin implements FileSyncPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
