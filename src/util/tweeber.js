export default class Tweeber {
  constructor(id) { // id should probably be a key to DB
    this.id = id;
    this.fullName = null;
    this.firstName = null;
    this.lastName = null;
    this.offerMade = false;
    this.offer = null;
    this.accepts = [];
    this.avatarImgUrl = '';
  }

  setName(first, last) {
    try {
      this.firstName = first;
      this.lastName = last;
      this.fullName = first + ' ' + last;
    } catch (error) {
      console.error(error);
    }
  }
}
