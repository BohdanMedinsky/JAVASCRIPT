const rectangle = {
    left_up:['1','7'],
    right_down:['9','2'],
    
    points: function () {
        console.log(`1. Функція приймає об’єкт-прямокутник і виводить інформацію про нього (де яка точка розташована).`);
        console.log(`нижня ліва точка розташована по координатах: ${rectangle.left_up[0]} ${rectangle.right_down[1]}`);
        console.log(`верхня ліва точка розташована по координатах: ${rectangle.left_up[0]} ${rectangle.left_up_point[1]}`);
        console.log(`нижня права точка розташована по координатах:${rectangle.right_down[0]} ${rectangle.right_down[1]}`);
        console.log(`верхня права точка розташована по координатах: ${rectangle.right_down[0]} ${rectangle.left_up[1]}`);
    },
    width: function () {
        console.log(`2. Функція приймає об’єкт-прямокутник і повертає його ширину.`);
        let width = Number(rectangle.right_down[0]-rectangle.left_up[0]);
        console.log(`ширина прямокутника: ${width}`);
    },
    height: function () {
        console.log(`3. Функція приймає об’єкт-прямокутник і повертає його висоту.`);
        let height = Number(rectangle.left_up[1]-rectangle.right_down[1]);
        console.log(`висота прямокутника: ${height}`);
    },
    S_of_rectangle: function () {
        console.log(`4. Функція приймає об’єкт-прямокутник і повертає його площу.`);
        let S_of_rectangle = Number((rectangle.left_up[1]-rectangle.right_down[1])*(rectangle.right_down[0]-rectangle.left_up[0]));
        console.log(`площа прямокутника: ${S_of_rectangle}`);
    },
    P_of_rectangle: function () {
        console.log(`5. Функція приймає об’єкт-прямокутник і повертає його периметр.`);
        let P_of_rectangle = Number(2*((rectangle.left_up[1]-rectangle.right_down[1])+(rectangle.right_down[0]-rectangle.left_up[0])));
        console.log(`переметр прямокутника: ${P_of_rectangle}`);
    },
    new_width: function () {
        console.log(`6. Функція зміни ширини прямокутника. Вона приймає об’єкт-прямокутник і на скільки одиниць змінити ширину.`);
        let width_change = Number(prompt(`на скільки одиниць змінити ширину?`));
        console.log(`ширину змінено на ${width_change} одиниць`);
        let new_width = Number(rectangle.right_down[0]-rectangle.left_up[0] + width_change);
        console.log(`нова ширина: ${new_width}`);
    },
    new_height: function () {
        console.log(`7. Функція зміни висоти прямокутника. Вона приймає об’єкт-прямокутник і на скільки одиниць змінити висоту.`);
        let height_change = Number(prompt(`на скільки одиниць змінити висоту?`));
        console.log(`висоту змінено на ${height_change} одиниць`);
        let new_height = Number(rectangle.left_up[1]-rectangle.right_down[1] + height_change);
        console.log(`нова висота: ${new_height}`);
    },
    new_h_w: function (h,w) {
        console.log(`8. Функція зміни ширини та висоти прямокутника. Вона приймає об’єкт-прямокутник та два значення для зміни ширини та висоти.`);
        let h_change = Number(prompt(`на скільки одиниць змінити висоту?`));
        console.log(`висоту змінено на ${h_change} одиниць`);
        let w_change = Number(prompt(`на скільки одиниць змінити ширину?`));
        console.log(`ширину змінено на ${w_change} одиниць`);
        let new_h = Number(rectangle.left_up[1]-rectangle.right_down[1] + h_change);
        let new_w = Number(rectangle.right_down_point[0]-rectangle.left_up[0] + w_change);
        console.log(`нова висота: ${new_h}`);
        console.log(`нова ширина: ${new_w}`);
    },
    move_X: function () {
        console.log(`9. Функція зміщення прямокутника по осі X. Вона приймає об’єкт-прямокутник і на скільки одиниць його зрушити.`);
        let move_X = Number(prompt(`на скільки одиниць змісти прямокутник по осі Х?`));
        console.log(`прямокутник змістили по осі X на ${move_X} одиниць`);
        console.log(`нові координати точок прямокутника:`);
        let X1 = Number(move_X) + Number(rectangle.left_up[0]);
        let X2 = Number(move_X) + Number(rectangle.right_down[0]);
        console.log(`нижня ліва точка розташована по координатах: ${X1} ${rectangle.right_down[1]}`);
        console.log(`верхня ліва точка розташована по координатах: ${X1} ${rectangle.left_up[1]}`);
        console.log(`нижня права точка розташована по координатах:${X2} ${rectangle.right_down[1]}`);
        console.log(`верхня права точка розташована по координатах: ${X2} ${rectangle.left_up[1]}`);
    },
    move_Y: function () {
        console.log(`10. Функція зміщення прямокутника по осі Y. Вона приймає об’єкт-прямокутник і на скільки одиниць його зрушити.`);
        let move_Y = Number(prompt(`на скільки одиниць змісти прямокутник по осі Y?`));
        console.log(`прямокутник змістили по осі Y на ${move_Y} одиниць`);
        console.log(`нові координати точок прямокутника:`);
        let Y1 = Number(move_Y) + Number(rectangle.left_up[1]);
        let Y2 = Number(move_Y) + Number(rectangle.right_down[1]);
        console.log(`нижня ліва точка розташована по координатах: ${rectangle.left_up[0]} ${Y2}`);
        console.log(`верхня ліва точка розташована по координатах: ${rectangle.left_up[0]} ${Y1}`);
        console.log(`нижня права точка розташована по координатах:${rectangle.right_down[0]} ${Y2}`);
        console.log(`верхня права точка розташована по координатах: ${rectangle.right_down[0]} ${Y1}`);
    },
    move_X_Y: function(X,Y) {
        console.log(`11. Функція зміщення прямокутника по осі X та Y. Вона приймає об’єкт-прямокутник і два значення: зсув по осі X і зсув по осі Y.`);
        let X_change = Number(prompt(`на скільки одиниць зсув по осі X?`));
        let Y_change = Number(prompt(`на скільки одиниць зсув по осі Y?`));
        console.log(`прямокутник змістили по осі Y на ${Y_change} одиниць`);
        console.log(`прямокутник змістили по осі X на ${X_change} одиниць`);
        console.log(`нові координати точок прямокутника:`);
        let X1 = Number(X_change) + Number(rectangle.left_up[0]);
        let X2 = Number(X_change) + Number(rectangle.right_down[0]);
        let Y1 = Number(Y_change) + Number(rectangle.left_up[1]);
        let Y2 = Number(Y_change) + Number(rectangle.right_down[1]);
        console.log(`нижня ліва точка розташована по координатах: ${X1} ${Y2}`);
        console.log(`верхня ліва точка розташована по координатах: ${X1} ${Y1}`);
        console.log(`нижня права точка розташована по координатах:${X2} ${Y2}`);
        console.log(`верхня права точка розташована по координатах: ${X2} ${Y1}`);
    },
}