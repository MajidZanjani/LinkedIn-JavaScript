const deskArray = [
  'pen',
  'camera',
  'phone',
  'notebook',
  'headphones',
  'laptop',
  'light bulb',
  'USB drive',
  'elephant',
];

const processArray = (deskArray) => {
  let newDeskArr = [...deskArray];

  // Your code goes here
  newDeskArr.pop();
  newDeskArr.sort();
  newDeskArr.unshift(newDeskArr.pop());

  let index = newDeskArr.indexOf('USB drive');
  newDeskArr.push(newDeskArr[index]);
  newDeskArr.splice(index, 1);

  index = newDeskArr.findIndex((el) => el === 'laptop');
  newDeskArr.splice(index, 1);

  // Your code ends here

  return newDeskArr;
};

const result = processArray(deskArray);

console.log(result);
