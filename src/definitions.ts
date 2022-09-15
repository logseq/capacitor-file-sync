export interface FileSyncPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
