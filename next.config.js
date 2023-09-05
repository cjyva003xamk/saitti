/** @type {import('next').NextConfig} */
const nextConfig = {
    /* Tehdään static site out kansio build komennolla */
    output:'export',
    /* Tehdään static site asset tarkennus build komennolla ( ei tarvii) 
    assetPrefix:'./'*/
    /* Korjataan refresh clientillä build komennolla */
    trailingSlash: true 
}

module.exports = nextConfig
