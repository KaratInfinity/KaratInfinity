const DEV_PHASE = 'phase-development-server';

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default (phase) => ({
  ...nextConfig,
  ...(phase === DEV_PHASE ? {} : { output: 'export' }),
});
