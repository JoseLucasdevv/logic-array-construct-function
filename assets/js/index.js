function FullName(name) {
  this.name = name;
  this.surname;

  this.totalName = () => {
    const surname = surName();
    const primaryname = primaryName();
    return `${primaryname} ${surname}`;
  };

  const stringToArray = () => {
    return this.name.split(" ");
  };

  const primaryName = () => {
    const name = stringToArray().slice(0, 2);
    this.name = name.join(" ");

    return this.name;
  };

  const surName = () => {
    const surname = stringToArray().slice(2, 4);
    this.surname = surname.join(" ");
    return this.surname;
  };
}

const person = new FullName("Maria Gabriela da Silva");

console.log(person.totalName());
