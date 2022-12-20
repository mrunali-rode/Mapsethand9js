//Ques1
function set(){
    let str="abcadeecfb";
    let s=new Set();
    for(let i=0;i<str.length;i++)
    {
        s.add(str[i]);
    }
    let res=" ";
    for(let ch of s){
        res=res+ch;
    }
    console.log(res);
}
set();
//Answer 2.
let s="abcadeecfb";
let map=new Map();
for(let i=0;i<s.length;i++)
{
    if(map.has(s[i])){
        let value =map.get(s[i])
        map.set(s[i],value+1)
    }
    else{
        map.set(s[i],1)
    }
}
for(let [k,v] of map){
    console.log(k+"=> "+v);
}
