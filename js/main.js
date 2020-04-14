console.log('Sample JavaScript #7 HW #21');

/*
 * #1
 *
 * replaceCSSComments() {...}
 * Найдите и удалите все комментарии CSS.
 * Функция получает строку, возвращает преобразованную строку, конечные пробелы должны быть удалены.
 */
console.log('------------------------------');

function replaceCSSComments(text) {
    return text.replace(/\/.*?\/\s*/g, '');
};

console.log(replaceCSSComments('код без /*комментарий*/ комментов')); // код без комментов
console.log(replaceCSSComments('код бе/*коммент1*/з ком/* коммент2 */ментов')); // код без комментов
console.log(replaceCSSComments('код /*к1*/ без /* к2 */ коммент/*к3*/ов')); // код без комментов

/*
 * #2
 *
 * replaceHTMLComments() {...}
 * Найдите и удалите все комментарии HTML.
 * Функция получает строку, возвращает преобразованную строку.
 */
console.log('------------------------------');

function replaceHTMLComments(text) {
    return text.replace(/\<\!\-\-.*?\-\-\>\s*/g, '').trim();
};

console.log(replaceHTMLComments('<!--коммент1--> код без комментов <!--коммент2-->')); // код без комментов
console.log(replaceHTMLComments('<!--к1--> код <!-- к2 --><!-- к3 --> без <!-- к4 --> комментов')); // код без комментов
console.log(replaceHTMLComments('код <!--к1--> без <!-- к2 --> комментов')); // код без комментов

/*
 * #3
 *
 * validateFileType() {...}
 * С помощью test определите, что переданная строка заканчивается расширениями: jpg, jpeg, png.
 * Функция получает строку – имя файла, возвращает true или false.
 */
console.log('------------------------------');

function validateFileType(text) {
    return (/\.(png|jpeg|jpg)$/).test(text);
};

console.log(validateFileType('image.png')); // true
console.log(validateFileType('image.html')); // false
console.log(validateFileType('image.file.jpg')); // true
console.log(validateFileType('image.png.file')); // false
console.log(validateFileType('image.png.jpeg')); // true
console.log(validateFileType('image.pngjpeg')); // true

/*
 * #4
 *
 * checkYear() {...}
 * Определите, что год находится в интервале от 1900 до 2100 с помощью одного только (единственного) регулярного выражения.
 * Функция получает строку – год, возвращает true или false.
 */
console.log('------------------------------');

function checkYear(text) {
    return (/^(19\d{2}|20\d{2}|2100)$/).test(text);
};

console.log(checkYear(1900)); // true
console.log(checkYear(2001)); // true
console.log(checkYear(2100)); // true
console.log(checkYear(1899)); // false
console.log(checkYear(20)); // false
console.log(checkYear(200)); // false
console.log(checkYear(20000)); // false
console.log(checkYear('20000')); // false
console.log(checkYear(19)); // false
console.log(checkYear('19')); // false
console.log(checkYear(2101)); // false

/*
 * #5
 *
 * checkEmail() {...}
 * С помощью метода test определите, что переданная строка является имейлом. Примеры имейлов для тестирования: mymail@mail.ru, my.mail@mail.ua, my-mail@yahoo.com, mail@gmail.com
 * Функция получает строку – имейл, возвращает true или false.
 */
console.log('------------------------------');

function checkEmail(text) {
    return (/^[a-zA-Z]+\W?[a-zA-Z]+@[a-z\.]+\.[a-z]{2,3}$/).test(text);
};

console.log(checkEmail('mail@gmail.com')); // true
console.log(checkEmail('mail.name@mail.ua')); // true
console.log(checkEmail('mail-name@mail.ua')); // true
console.log(checkEmail('mail-name@mail.com.ua')); // true
console.log(checkEmail('mail@gmail')); // false
console.log(checkEmail('mail@gmail-com')); // false
console.log(checkEmail(' mail-name@mail.com.ua')); // false
console.log(checkEmail('mail-name@mail.com.ua ')); // false

/*
 * #6
 *
 * checkDomainUrl() {...}
 * С помощью test определите, что переданная строка является доменом.
 *     Протокол может быть как http, так и https.
 *     Примеры доменов:
 *     http://site.ua, https://my-site.com, https://site.com.ua, https://subdomain.site.com.ua
 *         Функция получает строку – доменное имя, возвращает true или false.
 */
console.log('------------------------------');

function checkDomainUrl(text) {
    return (/^(http:|https:)\/\/([a-zA-Z0-9-_]+.)*[a-zA-Z0-9][a-zA-Z0-9-_]+\.[a-z]{2,4}$/).test(text);
};

console.log(checkDomainUrl('http://external.asd1230-123.asd_internal.asd.gm-_ail.com')); // true
console.log(checkDomainUrl('http://domain.com')); // true
console.log(checkDomainUrl('https://example.domain.com')); // true
console.log(checkDomainUrl('https://example.domain-hyphen.com')); // true
console.log(checkDomainUrl('http://example.domain-hyphen.com')); // true
console.log(checkDomainUrl('http://www.domain.com')); // true
console.log(checkDomainUrl('http://www.domain.info')); // true
console.log(checkDomainUrl('http://www')); // false
console.log(checkDomainUrl('https://domain')); // false
console.log(checkDomainUrl(' https://domain')); // false
console.log(checkDomainUrl('https://domain.com ')); // false
console.log(checkDomainUrl('example.museum')); // false
console.log(checkDomainUrl('example.domain-hyphen.com')); // false
console.log(checkDomainUrl('www.domain.com')); // false
console.log(checkDomainUrl('www.example.domain-hyphen.com')); // false

/*
 * #7
 *
 * createLinksFromDomains() {...}
 * С помощью replace замените в строке домены вида http://site.ua, https://site.com на <a href="http://site.ua" target="_blank">site.ua</a>.
 * Протокол может быть как http, так и https.
 * Функция получает произвольную строку текста с доменами (один и более), возвращает результат преобразования.
 */
console.log('------------------------------');

function createLinksFromDomains(text) {

    // https://learn.javascript.ru/es-string

    let siteName = new RegExp('(http:|https:)\\/\\/([a-zA-Z0-9-_]+\\.)*[a-zA-Z0-9][a-zA-Z0-9-_]+\\.[a-z]{2,3}', 'g');

    // https://ru.stackoverflow.com/questions/500234/js-Подстановка-переменной-в-строку

    text.match(siteName).forEach(i => text = text.replace(i, `<a href="${i}" target="_blank">${i.replace(/^(http:|https:)\/\//g, '')}</a>`));
    return text;
};

/* <a href="http://site.ua">site.ua</a> text1 <a href="https://site.com">site.com</a> text2 <a href="https://site.com.ua">site.com.ua</a> text3 <a href="https://subdomain.my-site.com.ua">subdomain.my-site.com.ua</a> text4 */
console.log(createLinksFromDomains('http://site.ua text1 https://site.com text2 https://site.com.ua text3 https://subdomain.my-site.com.ua text4'));
// site.ua text1 <a href="https://site.com">site.com</a> text2 <a href="https://site.com.ua">site.com.ua</a> text3 subdomain.my-site.com.ua text4
console.log(createLinksFromDomains('site.ua text1 https://site.com text2 https://site.com.ua text3 subdomain.my-site.com.ua text4'));