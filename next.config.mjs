/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: process.env.NODE_ENV === 'development' 
    ? ''  // Prefixo para developer
    : 'https://meu-dominio.com',  // Prefixo para produção
};

export default nextConfig;
