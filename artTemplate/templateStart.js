const template = require('art-template')
const path = require('path')
const dateFormat = require('dateformat')

const views = path.join(__dirname, 'views','config.art')
// 导入模板变量
template.defaults.imports.dateFormat = dateFormat

const html = template(views, {
    name: 'rico',
    age: 20,
    content: '<h1>welcome to my homepage</h1>',
    hobbies: ['basketball', 'football','pingpang'],
    time: new Date()
})

console.log(html);