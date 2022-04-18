const dummyTextArray = [
    'Apple pie icing gingerbread lollipop fruitcake powder biscuit caramels halvah. Brownie icing shortbread donut bonbon cupcake pastry tootsie roll. Dragée oat cake gummi bears brownie marzipan cheesecake. Candy canes biscuit oat cake fruitcake jujubes jelly beans danish apple pie candy canes. Cookie soufflé candy tart fruitcake chocolate. Liquorice macaroon sugar plum pudding apple pie cake danish. Jelly beans jujubes topping tiramisu donut gingerbread dessert powder fruitcake. Muffin soufflé pie chocolate lemon drops. Cheesecake shortbread tootsie roll chocolate chocolate jelly-o. Jujubes chocolate marshmallow tiramisu pudding dragée pudding sugar plum.',
    'Brownie powder jelly beans cupcake chocolate jelly beans dragée. Gummies biscuit pudding bear claw apple pie caramels tootsie roll. Bear claw ice cream jelly-o soufflé caramels muffin jujubes toffee. Chocolate cake cookie bonbon lemon drops donut tiramisu. Chocolate chocolate cake chupa chups shortbread caramels. Cookie sweet tootsie roll carrot cake brownie icing pastry halvah. Tiramisu fruitcake pastry sweet roll apple pie soufflé. Cake halvah pie cookie danish chocolate biscuit. Chocolate donut cheesecake macaroon jelly. Tootsie roll bonbon jujubes halvah cake sweet cake jelly-o.',
    'Dragée muffin jujubes halvah sesame snaps gummies muffin gingerbread. Chocolate caramels tiramisu apple pie apple pie chocolate gummi bears. Chocolate cake biscuit bonbon powder cotton candy icing carrot cake jelly. Sweet muffin bear claw caramels cotton candy chupa chups brownie liquorice. Sesame snaps sugar plum brownie jujubes danish candy canes chocolate. Bonbon toffee brownie chocolate bar donut. Carrot cake cheesecake apple pie caramels toffee. Cupcake caramels croissant tootsie roll croissant gummi bears lemon drops cake. Bear claw ice cream fruitcake topping wafer lemon drops lemon drops candy canes dessert.',
    'Cheesecake cake sesame snaps cake apple pie. Jelly-o caramels macaroon sesame snaps danish candy sweet carrot cake. Bonbon marzipan muffin tiramisu wafer danish cake chupa chups. Toffee jujubes toffee tootsie roll jelly-o sesame snaps. Liquorice cupcake pie dragée chocolate cake icing jelly-o soufflé wafer. Cake ice cream cotton candy cupcake carrot cake sugar plum cotton candy marshmallow chocolate. Dessert macaroon jelly-o lollipop tart. Fruitcake candy pie wafer cupcake lemon drops gingerbread. Danish cheesecake pastry cotton candy topping sweet roll. Jelly beans donut oat cake halvah halvah jelly beans brownie.',
    'Dessert tootsie roll candy caramels marshmallow brownie gummies sesame snaps. Marshmallow oat cake carrot cake oat cake sugar plum marshmallow. Sweet roll chocolate cake croissant ice cream halvah lemon drops gummi bears. Sweet fruitcake jelly donut marzipan ice cream. Cupcake icing chocolate tiramisu shortbread. Marzipan soufflé cotton candy fruitcake ice cream soufflé. Dragée sugar plum cookie cake fruitcake cupcake halvah. Ice cream soufflé croissant apple pie danish chocolate bar bear claw. Icing cupcake chocolate cotton candy oat cake. Shortbread sweet roll halvah biscuit pudding chocolate cake.',
    'Biscuit danish cupcake powder wafer jujubes muffin lollipop. Cookie cotton candy jelly pie dessert cake shortbread donut cheesecake. Jelly topping jelly cake icing cotton candy. Chocolate soufflé soufflé soufflé topping wafer oat cake. Biscuit gingerbread sesame snaps jelly beans candy cookie lemon drops powder soufflé. Candy gummies soufflé cake biscuit oat cake bonbon dragée. Chocolate bar gingerbread gummies caramels jelly beans apple pie croissant. Tart soufflé lemon drops topping pastry icing dragée. Lemon drops gummies lemon drops cake icing marzipan gingerbread donut. Soufflé cake pastry tootsie roll biscuit bear claw jelly-o cake tiramisu.',
    'Sweet sesame snaps tiramisu danish powder croissant tart chocolate cake cookie. Tart jelly beans chupa chups jelly topping. Muffin danish gummies halvah sweet roll cookie wafer. Jelly-o powder brownie dessert shortbread gingerbread tiramisu gingerbread. Cake bonbon bonbon cotton candy cheesecake tootsie roll. Liquorice liquorice cotton candy cheesecake cake. Dessert carrot cake shortbread dragée shortbread marzipan jelly beans.',
    'Candy carrot cake jelly cake cake pudding marshmallow pie. Ice cream gummies donut gingerbread lollipop jelly-o chocolate bar gingerbread. Lemon drops jujubes sugar plum tiramisu macaroon. Muffin cookie fruitcake caramels powder. Halvah cotton candy sesame snaps apple pie lemon drops liquorice cupcake carrot cake topping. Tart marzipan oat cake tootsie roll marshmallow sweet roll. Cotton candy soufflé carrot cake brownie gummi bears pie muffin oat cake. Tootsie roll danish candy apple pie wafer shortbread jelly beans. Bear claw jujubes cotton candy cake bear claw cake dessert candy canes.',
    'Chupa chups fruitcake pie caramels cheesecake dragée chocolate cake. Bear claw cake bonbon cake candy canes bonbon topping. Biscuit pudding candy canes dragée pudding cake. Muffin lemon drops oat cake wafer jujubes apple pie lemon drops. Candy tootsie roll donut liquorice dragée oat cake. Chocolate oat cake gummies ice cream halvah apple pie. Cake candy canes danish gummies cookie donut pie. Soufflé sweet chocolate halvah cake topping bonbon.'
]

//selecting the id form html ar document
let form = document.getElementById('form');
let amount = document.getElementById('amount');
let result = document.getElementById('result');

//add event listener
form.addEventListener('submit', function (e) {
    e.preventDefault();
    let value = parseInt(amount.value);
    let random = Math.floor(Math.random() * dummyTextArray.length);
    console.log(random);

    if (isNaN(value) || value <= 0 || value > 9) {
        result.innerHTML = `<p>${dummyTextArray[random]}</p>`
    }
    else {
        const arraySliced = dummyTextArray.slice(0, value);
        const findArray = arraySliced.map(function (singleDummay) {
            return `<p>${singleDummay}</p>`
        }).join();

        //put the result 
        result.innerHTML = findArray
    }
})