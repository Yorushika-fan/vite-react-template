import { ESLint } from 'eslint';

const removeIgnoredFiles = async (files) => {
  const eslint = new ESLint();
  const ignoredFiles = await Promise.all(files.map((f) => eslint.isPathIgnored(f)));
  const filteredFiles = files.filter((_, i) => !ignoredFiles[i]);
  return filteredFiles.join(' ');
};
export default {
  '*': async (files) => {
    const filesToLint = await removeIgnoredFiles(files);
    return [`eslint ${filesToLint} --max-warnings=0`];
  },
};
