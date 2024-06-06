import { generateSW } from 'workbox-build';
import workboxConfig from './workbox-config.js';

generateSW(workboxConfig).then(({ count, size, warnings }) => {
  warnings.forEach(console.warn);
  console.log(`${count} files will be precached, totaling ${size} bytes.`);
}).catch(console.error);
