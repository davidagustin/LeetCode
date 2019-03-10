/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  const domainHolder = [];
  const userName = [];
  let uniqueEmails = new Set;

  for (let i = 0; i < emails.length; i++) {
    userName
      .push(emails[i]
        .slice(0, emails[i]
          .indexOf('@'))
        .slice(0, emails[i]
          .indexOf('+'))
        .split('.')
        .join(''));
    domainHolder.push(emails[i].slice(emails[i].indexOf('@')));
    uniqueEmails.add(userName[i].concat(domainHolder[i]));
  }
  return [...uniqueEmails].length;
};

/*
const numUniqueEmails = emails =>
  new Set(emails.map(mail =>
    `${mail.split('@')[0]
      .replace(/\+.*$|\./g, '')}
    @${mail.split('@')[1]}`))
    .size;
*/
