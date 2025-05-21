
const Hash = (key,size) =>  {
    let hash = 5381; 
    for(let char of key){
        hash = (hash * 33) ^ char.charCodeAt(0);
    }

    console.log(Math.abs(hash) % size);
    return Math.abs(hash) % size;

}

Hash('Shakil', 10);
const obj = {
    name: 'Shakil',
    age: 20,
    nationality: 'Bangladeshi',
    hobby: 'Coding'
}


Hash(JSON.stringify(obj), 10);