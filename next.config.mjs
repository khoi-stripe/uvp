const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/upv' : '',
  assetPrefix: isProd ? '/upv/' : '',
};
export default nextConfig;
