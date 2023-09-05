/** @type {import('next').NextConfig} */
const nextConfig = {
    /* Static output */
    output:'export',
    /* Asset fix (not needed) 
    assetPrefix:'./'*/
    /* Trailing slash fix */
    trailingSlash: true 
}

module.exports = nextConfig
