/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['127.0.0.1']
    },
    modularizeImports: {
        "@mui/material": {
            transform: "@mui/material/{{member}}",
            preventFullImport: true,

        },
        "@mui/icons-material": {
            transform: "@mui/icons-material/{{member}}",
            preventFullImport: true
        },
    },
}

module.exports = nextConfig
