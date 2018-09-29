export default class Tweeber {
  constructor(id) { // id should probably be a key to DB
    this.id = id;
    this.fullName = null;
    this.firstName = null;
    this.lastName = null;
    this.offerMade = false;
    this.offer = null;
    this.accepts = [];
    this.avatarImgUrl = 'https://lh3.googleusercontent.com/MhA1pQNQVFvgV2XODgDL0z0AdR9nmVdz12Gxu7vzWkJu3ErZFrC3g6wOyjwhgUw99pkiIwilLjWjj8tIly6C5JiuqDJn3ZK2AU-CwqMtv7P-QJPYhJCd_bfIOSaYWC5c5ZvzjrAzAtzl8peX3juwqiz02l8Jv4bCvixKbQ6HayFTwM-lbVGO7ISdXfVsR_LAPyyo7zOYmb0-nObS8eoHd1m8Islqwq06xcO9kAUEgeeMwZjP5W6OlM6lCoO-ky2eZCkdQxUkyLq81vvKyX_5WxleMjo4n5A62OCcnhcahSjoVjDcww8m4R4gfxSSRtR5ezXz_FBQ3Yzw5cBeN7qmTa0X5Hd8eogU2UGcZXj-Wl460i2v9vZYoUoaa1WNQTronQQcVU7Y8QOwG06eyOM0ceFU0bakPXEYWBUYTmqcTc1ZhgkG7mA6LnPlueIddDpLdzNsGjoseoUXmXDZWiTRb_wz9eNGcEcKqJZhRPEBHt-UJ8VkBTlfXNbFbnVlPwG9Eaxkxyv55HPPlr2ExBE9V5FsfKdRgpXsUaQSwWFk2FEtKNo2Z9ZFcxRxMn1SSFKKOEEfoalo8iplXX7z4yepbTdInOJ8B3-mZim3jaJb1y4ixhFV9k7nBMTNh75OSWc=w1499-h1459-no';
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
  // methods to make DB calls in here? for example, a makeOffer method that updates the DB with who made the offer, to who, for what, and how much?
}
