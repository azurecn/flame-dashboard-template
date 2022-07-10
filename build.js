const fs = require("fs");
const dayjs = require("dayjs");

const version = `1.0.${dayjs().format('YYYYMMDDHHmm')}`

// 读取文件
function writeBuildFile(fileName) {
  fs.readFile(fileName, 'utf-8', (error, data) => {
    if (error) {
      throw error
    } else {
      // 修改版本号
      fs.writeFile(
        fileName,
        data
          .split('\n')
          .map(line => line.startsWith('VUE_APP_VERSION') ? `VUE_APP_VERSION=${version}` : line)
          .join('\n'),
        (error) => { if (error) throw error }
      )
    }
  })
}

writeBuildFile('.env')
writeBuildFile('build.sh')