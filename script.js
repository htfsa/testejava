const ageText = prompt('type your age:');
const age = Number(ageText);
const ageString = String(age);

if(age>18){
    document.write('então você e adulto')
}else if(age > 12){
    document.write('entao você e adolecente');
}else {
    document.write('então você é crianca')
}
document.write('<br>');
switch(age){
case 16:
    document.write('ja pode votar');
    case 18:
        document.write('ja pode dirigir e beber, não ao mesmo tempo')
        break;
        case 65:
            document.write('ja pode pegar o onibus de graça');
            break;
            default:
                document.write('se lascou')
                break
}


