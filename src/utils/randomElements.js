
export default function getRandomElements(arr,count){

    const result=[];
    const arrCopy=[...arr];

    for(let i=0 ; i < count ; i++){
        if (arrCopy.length === 0) {
            break;
        }
        const randomIndex=Math.floor(Math.random()*arrCopy.length);

        result.push(arrCopy.splice(randomIndex,1)[0]);

    }

    return result
}