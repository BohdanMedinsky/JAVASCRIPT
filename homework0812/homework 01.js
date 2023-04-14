                                                    //завдання 1
 /*
class PrintMaсhine {
  size;
  color;
  family;
  constructor(size = "16px", color = "black", family = "Times New Roman") {
      this.size = size;
      this.color = color;
      this.family = family;
  }
  print(text) {
      document.write(`<span style="font-size:${this.size}; color:${this.color}; font-family:${this.family};">${text}</span>`);
  }

}

let m = new PrintMaсhine("20px", "green", "verdana");
m.print("Hello,");
m.print("world!");*/


                                                      // завдання 2

/*
 class PrintMaсhine {
  size;
  color;
  family;
 
  constructor(size = "16px", color = "black", family = "Times New Roman") {
      this.size = size;
      this.color = color;
      this.family = family;
     
  }
  print(text) {
      document.write(`<span style="font-size:${this.size}; color:${this.color}; font-family:${this.family};">${text}</span>`);
  }

}

let m = new PrintMaсhine("30px", "black", "verdana" );
m.print("What ");
m.print("is");
m.print(" Lorem ");
m.print("Ipsum ?");
m.print("<br/>");

const date = new Date();
const monthes = ['Січеня', 'Лютого', 'Березня', 'Квітня', 'Травня', 'Червня', 'Липня', 'Серпня', 'Вересня', 'Жовтня', 'Листопада', 'Грудня'];
const day = date.getDate(),
    month = monthes[date.getMonth()],
    year = date.getFullYear(),
    hours = date.getHours(),
    minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
document.write('Сьогодні : ' + day + ' ' + month + ' ' + year + ' ' + hours + ':' + minutes);


m.print("<br/>");

let n = new PrintMaсhine("20px", "black", "sans-serif" );
n.print("Lorem ipsum simply dummy text of the printing and typesetting industry. ");
m.print("<br/>");
n.print("Lorem ipsum simply dummy text of the printing and typesetting industry.");
m.print("<br/>");
n.print(" Lorem ipsum simply dummy text of the printing and typesetting industry. ");
m.print("<br/>");
n.print("Lorem ipsum simply dummy text");
m.print("<br/>");

let lorem = ["#lorem", "#ipsum","#text"];
m.print("<br/>");
document.write(lorem.join( '' ));
*/

                                            //завдання 3 


class News { 
    #news = []; 
    constructor(news) {
        this.#news = news;
    };
    get length() {
        return this.#news.length;
    }
    print() {
        const divContainer = document.createElement("div");
        divContainer.className = 'container';
        for (const element of this.#news) {
            const div = document.createElement('div');
            div.className = "article"
            div.innerHTML = `
                <h1>${element.title}</h1>
                <p>${element.body}</p>
            `;    
            divContainer.append(div)
        }
        document.body.prepend(divContainer);
    }
    set news(item) {
       
        this.#news.push(item);
    }
    delete(index) {
     
    }
    find(index) {
        for (const element of this.#news) {
            if (element.id === index) {
                return element; 
            }
        }
    }
    addNewsTag(index, tag) {
        if (0 == tag.length) {
            return 0;
        }
        for (const element of this.#news) {
            if (element.id === index) {
                element.tags.push(tag);
            }
        }
    }
}
const nm = new News([
    
    {
       
        id: 1,
        title: "Австралія",
        body: "Австралія передала Державній прикордонній службі України обладнання, яке пришвидшить проведення паспортного контролю.",
        tags: ["Australia", "DPSU"],
    },{
      
        id: 2,
        title: "Ваканції IT",
        body: "Кількість вакансій для українських ІТ-спеціалістів зросланайпопулярнішими категоріями стали Game Development, .NET, Analytics, Java, PHP та Python.",
        tags: ["java", "PHP"],
    },
]);
nm.print();




