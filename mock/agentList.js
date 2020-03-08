const imgSrc = [
    'icon-word',
    'icon-outlook',
    'icon-powerpoint',
    'icon-excel',
    'icon-bower'
]



export const generateDataByTotal = (total) => {
    const result = [];
    for (let index = 0; index < total; index++) {
      const generateMathRandom = Math.random()
        result.push({
            id: `${new Date().getTime()}__${index}`,
            type: generateMathRandom > 0.5 ? 0 : 1,
            badge: generateMathRandom > 0.5 ? 'idle' : 'building' ,
            img: imgSrc[index % 5],
            realAddress: `bjstdmngr${index}.alipay.com`,
            localAddress: `192.158.1.10${index}`,
            folderAddress: `/assets/dev/user-${index}`,
            list: getLists(index % 4),
            deny: index % 2 ? true : false
        })
    }
    return result
}

const getLists = (num) => {
    const browers = ['IE', 'Chrome', 'Firefox', 'Opera']
    return browers.splice(0, num+1)
}

export const agentList = generateDataByTotal(10)