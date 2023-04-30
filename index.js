
module.exports = {
  // Convert gregorian to hijri
  toHijri: function (yyyy) {
    // Year Muslim = (Year Gregorian– 622) × 1.03.
    let hijri = Math.floor((yyyy - 622) * (33 / 32));
    return `${hijri} Hijri`;
  },

  // Convert hijri to gregorian
  toGregorian: function (yyyy) {
    // Year Gregorian = Year Muslim × 0.97 + 622.
    let gregorian = Math.floor(yyyy * 0.97 + 622);
    return `${gregorian} Year`;
  }
};