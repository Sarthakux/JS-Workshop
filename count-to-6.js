console.log("HELLO ES6");

var inputs = process.argv.slice(2);
console.log((`Hello ${process.argv[2]}
 Your name lowercase is ${process.argv[2].toLowerCase()}.`));
var result = inputs.map(s=> s[0]).reduce((a,b)=> a+b);
console.log(`[${inputs}] becomes "${result}"`);
var foot = {
    kick: function () {
        this.yelp = "Ouch!";
        setImmediate( () => {
            console.log(this.yelp);
        });
    }
};
foot.kick();

/*let userArray =  [userId,
     username = John,
     email = johngmail.com,
     age = 21,
     firstName = J,
     lastName = ohn,
    ];
    let userArray = process.argv.slice(2);
    let {lastName: fff, age} = box;

console.log(lastName);
console.log(age);
*/
let userArray = process.argv.slice(2);
let a ={};
[ , a.usename, a.email ]= args;
console.log(result);

/* * */
var numbers = process.argv.slice(2);
var min = Math.min(...numbers);
console.log(`Minimum of the numbers is ${numbers} is ${min}`);



module.exports = ( x=0, y=1) => (x+y)/2;


module.exports = (string , a= String.length) => string + "!".repeat(a);


console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(pieces, ...substitutions) {
    var result = pieces[0];
    for (var i = 0; i < substitutions.length; ++i) {
        result += escape(substitutions[i]) + pieces[i + 1];
    }

    return result;
}

function escape(s) {
    return s.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/'/g, "&apos;")
            .replace(/"/g, "&quot;");
} 