const imgSrc = [
    './assets/img/windows.png',
    './assets/img/cent_os.png',
    './assets/img/debin.png',
    './assets/img/suse.png',
    './assets/img/ubuntu.png'
]

//0 building 1 idle
const generateDataByTotal = function(total) {
    const result = [];
    for (let index = 0; index < total; index++) {
        result.push({
            id: index,
            type: Math.random() > 0.5 ? 0 : 1,
            img: imgSrc[index],
            realAddress: `bjstdmngr${index}.alipay.com`,
            localAddress: `192.158.1.10${index}`,
            folderAddress: `/assets/dev/user-${index}`,
            list: getLists(index),
            deny: index % 2 ? true : false
        })
    }
    return result
}

function getLists(num) {
    const browers = ['IE', 'Chrome', 'Firefox', 'Opera']
    return browers.splice(0, num+1)
}

export const agentList = generateDataByTotal(5)