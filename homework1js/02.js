var get_current_age = function(date) {
    return new Date().getFullYear() - date;
};
let Years;
Years = prompt ("Вкажіть Ваш рік народження!");
alert(get_current_age(Years));
    