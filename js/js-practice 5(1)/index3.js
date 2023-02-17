// Зробит так,
// щоб була змога викликати метод
// getName на company2

const company1 = {
    name: "Romeo",
    getName: function()  {
        return this.name;
    }
    
};

const company2 = {
    name: "Hamlet",
};
  
  console.log(company1.getName());
  console.log(company1.getName.bind(company2)());