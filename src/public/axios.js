const texto = document.querySelector("#txtregreso");
const siguiente = document.querySelector("#siguiente");
const tokens = require("../routes/tokens");
var separados = [];
var number = document.querySelector("#numero");
separacion();
var respuesta = tokens(separados[0], 1);
console.log(texto.value);

const url = "http://localhost:3000/automata";

var texto = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore cupiditate, accusamus necessitatibus vel sed dolore sint, unde expedita aperiam pariatur magni cum blanditiis voluptatibus perferendis at neque id consequatur velit consequuntur, quas deserunt qui voluptates. Saepe ex ad molestias fugit sint neque officiis natus sit hic, molestiae exercitationem incidunt dignissimos vel sequi soluta quasi minima nesciunt enim illum nulla dolorem numquam. Repellendus tempora a, deserunt, velit quaerat eius vero vitae vel officia qui, neque labore molestiae ducimus consequatur ipsum odio nobis! Illum odit sunt accusamus totam obcaecati labore rem, ut voluptate molestias architecto nam vero reiciendis ad hic accusantium tenetur ratione a ex atque provident nisi, quasi ipsum voluptas voluptates. Quas, laudantium adipisci? Nam magnam voluptatum fuga, id eius maiores odit facere aliquam ab! Commodi tempore modi nesciunt, eius assumenda sequi magnam voluptates necessitatibus nihil nulla fugit illo odit est itaque, vel, ducimus quisquam officiis. Neque ex magnam numquam unde ad corporis cupiditate, asperiores magni eius! Mollitia maiores magni ab dicta cumque tempora et fuga nulla a cupiditate consectetur animi voluptatum minus architecto deserunt totam dolorem possimus minima, temporibus ipsam assumenda obcaecati numquam veritatis veniam. Quidem alias beatae a modi maiores consectetur magni architecto sapiente fugit sint enim est voluptas itaque, reiciendis minus facere deleniti incidunt sunt odit. Nostrum sed minus accusantium. Aspernatur, assumenda sint. Ullam quidem quisquam quaerat est quis, veritatis ratione autem, harum totam illum laboriosam eos dignissimos enim accusantium tempora obcaecati, non sint quo dolorum minus cupiditate laudantium distinctio maiores reprehenderit. Veritatis nulla doloremque natus necessitatibus delectus mollitia corporis blanditiis, debitis totam impedit voluptatem facilis, in nihil laboriosam dolore autem porro ex dicta pariatur. Ut in deserunt ab nostrum fuga quaerat esse sint, repudiandae consectetur perferendis velit neque quas? Voluptates aperiam suscipit ratione. Explicabo dolore eos ipsa aut. Suscipit sed architecto a at labore quis eligendi aut non soluta impedit itaque, natus quasi nulla aliquid consequuntur! Cum veritatis, dicta eius corrupti mollitia exercitationem nobis eaque nemo doloremque corporis, hic doloribus. Qui, hic laboriosam quia voluptate excepturi quae non odit maiores, sequi odio repellat fuga? Autem ex, ipsam explicabo placeat perferendis exercitationem magni nam iste, rerum magnam reprehenderit asperiores obcaecati, deleniti dolore quos iusto nulla totam! Debitis commodi laborum velit animi accusantium tempora deserunt dolorem esse, optio voluptates vitae beatae sint voluptas aliquid, alias tempore? Repellendus deserunt asperiores numquam cupiditate sint quaerat veritatis, qui distinctio et, accusantium ducimus libero! A velit deserunt libero non ab. Odit fuga aliquam cumque accusantium debitis, velit tenetur explicabo quibusdam assumenda ex necessitatibus commodi hic nostrum fugit corrupti sapiente vitae quas? Sed quam ratione sapiente accusantium non soluta quis eaque nostrum ut optio consectetur vero tenetur aspernatur dignissimos inventore dolorem, accusamus reprehenderit numquam! Consequatur aliquam beatae excepturi dignissimos iure itaque unde earum numquam qui perferendis, culpa voluptate voluptates repellendus ratione nobis vero doloribus laborum eveniet suscipit! Tempora magni maxime rem illo nihil, ad possimus, cupiditate sed ut eligendi reiciendis harum voluptas tempore id temporibus laboriosam sapiente sit. Nisi consequuntur, fugiat, odio minus maxime explicabo cumque commodi id ducimus laudantium, pariatur minima velit laborum!';


const getData = () => {
  console.log('hola');
  axios
    .get(url)
    .then(response => {
        console.log(texto);
        numbermas = number - 1;
      respuesta = tokens(separados[numbermas], number);
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
};

function separacion() {
  separados = texto.split(/,/);
}

siguiente.addEventListener("click", getData);
