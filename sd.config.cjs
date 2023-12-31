module.exports = {
  source: ['sd-input/src/figma-tokens-output.json'],
  fileHeader: {
    autoGeneratedFileHeader: () => {
      return [`This will be generated, do not edit`];
    },
  },
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'tokens',
      prefix: 'figma',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
          options: {
            fileHeader: 'autoGeneratedFileHeader',
          },
        },
      ],
    },
  },
};
