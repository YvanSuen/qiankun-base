// console.log('=> => => postcss.config.js start => => =>')
module.exports = (ctx) => {
    return {
      plugins: [
        require('postcss-plugin-namespace')('#lee_project', {
          ignore: [
            'html', /body/, 'span', 'el-form-item'
          ]
        }),
      ]
    }
  }
  // console.log('=> => => postcss.config.js end => => =>')