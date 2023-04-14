
for(let c = 1; c <= 10; c++) { // виведе не парні, парні пропускаємо
    if (c % 2 == 0)
        continue;

    console.log(`C = ${c}`);
}