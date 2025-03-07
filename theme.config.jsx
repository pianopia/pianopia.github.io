export default {
  logo: (
    <>
      <img src="/images/pianopia_logo.png" alt="pianopia" width="30" height="30" style={{ marginRight: '10px' }} />
      <span style={{ fontWeight: 'bold' }}>pianopia</span>
    </>
  ),
  project: {
    link: 'https://github.com/pianopia/pianopia.github.io',
  },
  docsRepositoryBase: 'https://github.com/pianopia/pianopia.github.io',
  footer: {
    text: `© ${new Date().getFullYear()} pianopia. All rights reserved.`,
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="pianopia - Android/iOS, Web, Game Developer" />
      <meta name="og:title" content="pianopia" />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s – pianopia'
    }
  },
  navigation: {
    prev: true,
    next: true
  },
  darkMode: true,
  primaryHue: {
    dark: 200,
    light: 200
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  }
} 