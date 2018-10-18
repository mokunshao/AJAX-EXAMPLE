// 升级你的 jQuery.ajax 满足 Promise 规则

// jQuery.ajax({
//     url: '/xxx',
//     method: 'get'
// }).then(success, fail)

window.jQuery = (nodesOrSelector)=>{
    let nodes = {}
    nodes.addClass = ()=>{}
    nodes.html = ()=>{}
    return nodes
}

window.jQuery.ajax = ({url, method, body})=>{
    return new Promise(function(resolve, reject){
        let request = new XMLHttpRequest()
        request.open(method, url)
        request.send(body)
        request.onreadystatechange = ()=>{
            if(request.readyState === 4){
                if(request.status === 200){
                    resolve.call(undefined,request.statusText)
                }else{
                    reject.call(undefined,request.statusText)
                }
            }
        }
    })
}

function success(e){
    console.log(e)
}

function fail(e){
    console.log(e)
}

myButton.addEventListener('click', ()=>{
    jQuery.ajax({
        url:'/xxx',
        method:'get'
    }).then(success,fail)
})