// Question m#4
function CheckPopulation(name, gender, address, education, profession) {
      this.name = name;
      this.gender = gender;
      this.address = address;
      this.education = education;
      this.profession = profession;
    }   
    const Peoples = new CheckPopulation(
      "syed milad",
      "Male",
      "B1 area",
      "web dev",
      "developer"
    );
     console.log(Peoples);