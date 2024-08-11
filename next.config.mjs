
import path from 'path'
import { fileURLToPath } from 'url';


/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(path.dirname(fileURLToPath(import.meta.url)), 'styles')],
    prependData: `@import "variables.scss";`,
  },
};

export default nextConfig;

