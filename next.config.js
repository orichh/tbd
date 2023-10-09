module.exports = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    domains: ["image.tmdb.org", "xvxusgxxvghujjuuccav.supabase.co"]
  },
  compiler: {
    // Enables the styled-components SWC transform
    // https://stackoverflow.com/questions/51791163/warning-prop-classname-did-not-match-when-using-styled-components-with-seman
    styledComponents: true
  }
};
