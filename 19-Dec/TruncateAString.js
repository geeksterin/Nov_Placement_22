const truncateStr = (str, maxLength) => {
    return str.substring(0, maxLength) + "..."
}


console.log(truncateStr("hello world this is geekster",8)) //hello...