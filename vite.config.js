import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

export default defineConfig({
  plugins: [react()],

  /* This repo lives inside a Dropbox-synced folder. Dropbox holds file locks
     on node_modules/.vite while it syncs, which makes Vite's dependency
     optimizer fail its temp-folder rename (EBUSY -> 504 "Outdated Optimize
     Dep" in the browser). Keeping the cache in the OS temp dir sidesteps the
     sync entirely. os.tmpdir() keeps this portable across machines. */
  cacheDir: join(tmpdir(), 'vite-stay-for-dinner'),
})
