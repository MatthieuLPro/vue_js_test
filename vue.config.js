module.exports = {
  pages: {
    'index': {
      entry: './src/pages/Home/main.js',
      template: 'public/index.php',
      title: 'Home',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    'about': {
      entry: './src/pages/About/main.js',
      template: 'public/index.php',
      title: 'About',
      chunks: ['chunk-vendors', 'chunk-common', 'about']
    },
    'photos': {
      entry: './src/pages/Photos/index/main.js',
      template: 'public/index.php',
      title: 'Photos',
      chunks: ['chunk-vendors', 'chunk-common', 'photos']
    },
    'photos/show': {
      entry: './src/pages/Photos/show/main.js',
      template: 'public/index.php',
      title: 'Photos par filtres',
      chunks: ['chunk-vendors', 'chunk-common', 'photos/show']
    },
    'videos': {
      entry: './src/pages/Videos/index/main.js',
      template: 'public/index.php',
      title: 'Videos',
      chunks: ['chunk-vendors', 'chunk-common', 'videos']
    }
  }
}
