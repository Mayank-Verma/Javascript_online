let data = [
  {
    name: "Eena",
    profession: "Singer",
  },
  {
    name: "Meena",
    profession: "Dance",
  },
];

const putData = (newData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.push(newData);
      let err = true;
      if (!err) resolve();
      else reject("kuch sahi nahi hai!");
    });
  });
};

let getData = () => {
  setTimeout(() => {
    data.forEach((d, i) => {
      console.log(d.name);
    }, 1000);
  });
};

putData({
  name: "Deeka",
  profession: "Dance",
})
  .then(getData)
  .catch((err)=>{console.log("Error occured!!",err)});
