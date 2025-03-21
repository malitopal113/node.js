const getData = (data) => {
    return new Promise((resolve, reject) => {
        console.log("requesting for datas");
        
        if (data) {
            resolve(console.log("datas has been taken"))
        } else {
            reject(console.log("datas has not been taken"))
        }
    });
}

const cleanData = (receivedData) => {  
    return new Promise((resolve, reject) => {
        console.log('datas are being edited');
        
        if (receivedData) {
            resolve(console.log("datas has been edited"))
        } else {
            reject(console.log("datas has not been editted"))
        }
    }); 
}


const processData = async () => { 
    try {
        const receivedData = await getData(true)
        console.log('receivedData:', receivedData);      
        const cleanDatas = await cleanData(false)
        console.log('cleanDatas:', cleanDatas);
    } catch (error) {
        console.log(error)
    }
}
processData()