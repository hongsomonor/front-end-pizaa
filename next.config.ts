//      Older Version
// import {NextConfig} from "next";
// import createNextIntlPlugin from "next-intl/plugin";
//
// module.exports = {
//     images: {
//         domains: ['img.icons8.com'],
//     },
// };
// const nextConfig: NextConfig = {
//     // next.config.js
//
//
// };

// const withNextIntl = createNextIntlPlugin();
// export default withNextIntl(nextConfig);

//          New Version
import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

// Configure the Next.js Intl plugin
const withNextIntl = createNextIntlPlugin();

// Define your base Next.js config
const nextConfig: NextConfig = {
    images: {
        domains: ['localhost'],
    },
    // Add more options here if needed
};

// Wrap with next-intl plugin
export default withNextIntl(nextConfig);
