//将用户输入内容转换为对象
function serializeToJson(form){
    let result = {}
    let data = form.serializeArray()
    data.forEach(function(item){
        result[item.name]=item.value
    })
    return result;
}

