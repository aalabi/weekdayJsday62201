class Person {
  static name;

  /**
   *
   * @param {string} gender
   * @param {integer} age
   */
  constructor(gender, age = 0) {
    this.gender = gender;
    this.age = age;
  }

  /**
   * gives the person a name
   *
   * @param {string} name the name of the person
   */
  namingCeremony(name) {
    this.name = name;
  }

  /**
   * increae the age by 1
   */
  celebrateBirthday() {
    this.age = this.age + 1;
  }

  /**
   *
   * @returns {string} a description of the person
   */
  tellMeAboutYourself() {
    let aboutMe = `My name is ${this.name} and I am a ${this.gender} and I am a ${this.age} old`;
    return aboutMe;
  }
}
