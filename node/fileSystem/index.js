const fs = require('fs').promises;
const path = require('path')
// Ler o diretório, devemos passar um path pois o ./ ser refere à root do projeto
// fs.readdir(path.resolve(__dirname))
//   .then(files => console.log(files))
//   .catch(e => console.log(e))


async function readdir(rootDir) {
  rootDir = rootDir || path.resolve(__dirname)

  const files = await fs.readdir(path.resolve(rootDir))
  walk(files, rootDir)
}

async function walk(files, rootDir) {
  for (let file of files) {
    const fileFullPath = path.resolve(rootDir, file)
    const stats = await fs.stat(fileFullPath)

    if (/\.git/g.test(fileFullPath)) continue
    if (/\.node_modules/g.test(fileFullPath)) continue

    if (stats.isDirectory()) {
      readdir(fileFullPath)
      continue // Continua para a próxima iteração
    }

    console.log(fileFullPath, stats.isDirectory())
  }
}

readdir('/home/jvsl/Documentos/JS&TS_Advanced')
