// 按照课堂上的思路，封装一个 jQuery.ajax

// jQuery.ajax(url,method,body,success, fail)

// 满足这种 API。

window.jQuery = (nodesOrSelector)=>{
    let nodes = {}
    nodes.addClass = ()=>{}
    nodes.html = ()=>{}
    return nodes
}

window.jQuery.ajax = (url, method, body, success, fail)=>{
    let request = new XMLHttpRequest()
    request.open(method, url)
    request.send(body)
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status === 200){
                success.call(undefined,request.statusText)
            }else{
                fail.call(undefined,request.statusText)
            }
        }
    }

}

function success(e){
    console.log(e)
}

function fail(e){
    console.log(e)
}

myButton.addEventListener('click', ()=>{
    jQuery.ajax('/xxx','get',null,success,fail)
})