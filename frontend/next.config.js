/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{appDir: true}
}


module.exports = nextConfig

// module.exports = {
//     images: {
//       domains: ['h'],

//     },
//   };
  // };
  

  module.exports = {
    images: {
      domains: ['localhost'],
    },
    // other configurations...
  };