// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <link rel="stylesheet" type="text/css" href="styleParametrKredita.css">
//   <!-- CSS only -->
// <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css" integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous">
//   <title>Параметр Кредита</title>
// </head>
// <body>

// <!-- Верхнее меню -->
// <header>
//   <div class="menu-top w-100">
//     <ul class="list-top row mb-0">
//       <li class="row col-2">
//         <img src="krug.png" alt="не выполнено" class="col-4 ms-auto me-auto">
//         <h6 class="textTopMenu text-center col-8 ms-auto me-auto mb-auto mt-auto">Параметр кредита</h6>
//       </li>
//       <li class="row col-2">
//         <img src="krug.png" alt="не выполнено" class="col-4 ms-auto me-auto">
//         <h6 class="textTopMenu text-center col-8 ms-auto me-auto mb-auto mt-auto">Данные клиента</h6>
//       </li>
//       <li class="row col-2">
//         <img src="krug.png" alt="не выполено" class="col-4 ms-auto me-auto">
//         <h6 class="textTopMenu text-center col-8 ms-auto me-auto mb-auto mt-auto">Работа и финансы</h6>
//       </li>
//       <li class="row col-2">
//         <img src="krug.png" alt="не выполнено" class="col-4 ms-auto me-auto">
//         <h6 class="textTopMenu text-center col-8 ms-auto me-auto mb-auto mt-auto">Контакты</h6>
//       </li>
//       <li class="row col-2">
//         <img src="krug.png" alt="не выполнено" class="col-4 ms-auto me-auto">
//         <h6 class="textTopMenu5 text-center col-8 ms-auto me-auto mb-auto mt-auto">Дополнительно</h6>
//       </li>
//       <li class="row col-2">
//         <img src="krug.png" alt="не выполнено" class="col-4 ms-auto me-auto">
//         <h6 class="textTopMenu text-center col-8 ms-auto me-auto mb-auto mt-auto">Рассмотрение</h6>
//       </li>
//     </ul>
//   </div>
// </header>

// <div class="boarder"><hr></div>

// <main>

//   <!-- пояснение что делать на этой стр -->
//     <div class="explanation pt-3">
//      <h6 class=" text-center font-weight-lighter">«Укажите информацию о товарах и параметрах кредита»</h6>
//     </div>

//     <!-- Товар -->
//     <div>
//       <div class="pt-3">
//          <h5 class="text-chapter m-0 text-center col font-weight-normal">Товар</h5> 
//       </div>
//     </div>

//     <div class="container-fluid d-flex pt-3 justify-content-around text-center">
//       <div>
//         <h5>Категория товара</h5>
//         <form action="URL" method="post" name="category">
//           <input type="text" class="form-control">
//         </form>
//       </div>
//       <div>
//         <h5>Марка</h5>
//         <form action="URL" method="post" name="mark">
//           <input type="text" class="form-control">
//         </form>
//       </div>
//       <div>
//         <h5>Модель</h5>
//         <form action="URL" method="post" name="model">
//           <input type="text" class="form-control">
//         </form>
//       </div>
//       <div>
//         <h5>Стоимость</h5>
//         <form action="URL" method="post" name="cost">
//           <input type="text" class="form-control">
//         </form>
//       </div>
//     </div>

//   <!-- Кнопка добавить -->
//     <div class="container-fluid  d-flex justify-content-center pt-4">
//       <button class="btn-add-product success-add-product text-center">Добавить</button>
//     </div>

// <!-- Страховка -->
//     <div class="insurance container d-flex pt-4 m-0">
//       <div class="form-check form-switch">
//          <form action="URL" method="post" name="insurance">
//           <label class="switch">
//            <input type="checkbox">
//             <span class="slider round"></span>
//           </label>
//         </form>
//       </div>
//       <h5 class="insurance-text">Страховка</h5>
//       <div class="form-insurance">
//         <form action="URL" method="post" name="typeInsurance">
//           <select class="form-select">
//             <option value=""></option>
//             <option value=""></option>
//             <option value=""></option>
//             <option value=""></option>
//           </select>
//         </form>
//     </div>
//     </div>

//     <!-- Дополнительные услуги -->
//       <div class="d-flex pt-3 justify-content-center">
//          <h5 class="text-chapter m-0 font-weight-normal">Дополнительные услуги</h5> 
//          <a class="expand-delivery btn btn-primary" data-toggle="collapse" href="#collapseDelivery" role="button" aria-expanded="false" aria-controls="collapseDelivery">
//           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
//             <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
//           </svg>
//         </a>
//       </div>  

//   <!-- Доставка -->
//     <div class="collapse" id="collapseDelivery">
//       <div class="card card-body">
//         <div class="delivery d-flex">
//         <div class="form-check form-switch">
//           <form action="URL" method="post" name="delivery">
//           <label class="switch">
//           <input type="checkbox">
//           <span class="slider round"></span>
//           </label>
//           </form>
//         </div>
//         <h5 class="insurance">Доставка</h5>     
//         </div>
//         <div class="explanation-delivery pt-1">
//            <h6 class="font-weight-lighter">Выберите доставку и пункт назанчения</h6>
//         </div>
//       </div>
//    </div>

//    <!-- Кредитный калькулятор -->
//     <div>
//       <div class="pt-5">
//          <h3 class="text-chapter m-0 text-center col font-weight-normal">Кредитный калькулятор</h3> 
//       </div>
//     </div>

//     <div class="container-fluid d-flex pt-5 justify-content-around text-center">
//       <div>
//         <h5>Стоимость товаров</h5>
//         <form action="URL" method="post" name="price">
//           <input type="text" class="form-control">
//         </form>
//       </div>
//       <div>
//         <h5>Первоначальный взнос</h5>
//         <form action="URL" method="post" name="firstInstallment">
//           <input type="text" class="form-control">
//         </form>
//       </div>
//       <div>
//         <h5>Срок</h5>
//         <form action="URL" method="post" name="period">
//           <input type="text" class="form-control">
//         </form>
//       </div>
//       <div>
//         <h5>Тип кредита</h5>

//           <div class="form_radio_group">
//             <form action="URL" method="post" name="typeCredit">
//             <div class="form_radio_group-item">
//               <input id="radio-credit" type="radio" name="radio" value="1" checked>
//               <label for="radio-credit">Кредит</label>
//             </div>
//             <div class="form_radio_group-item">
//               <input id="radio-installment" type="radio" name="radio" value="2">
//               <label for="radio-installment">Рассрочка</label>
//             </div>
//             </form>
//           </div>
//       </div>
//     </div>

//     <!-- иконки банков -->
//     <div class="d-flex pt-3 justify-content-center">
//       <a class="expand-sberbank btn btn-primary" data-toggle="collapse" href="#collapseSberbank" role="button" aria-expanded="false" aria-controls="collapseSberbank">
//           <img class="ikon-bank" src="sberbank.png" alt="">
//         </a>
//       </div>
//     </div>

//   <!-- Сбербанк -->
//     <div class="collapse" id="collapseSberbank">
//       <div class="card card-body">
//         <div class="container-fluid d-flex pt-3 justify-content-around text-center">
//           <div>
//             <h5>Кредитный продукт</h5>
//             <form action="URL" method="post" name="">
//               <input type="text" class="form-control">
//             </form>
//           </div>
//           <div>
//             <h5>Срок кредита</h5>
//             <form action="URL" method="post" name="">
//               <input type="text" class="form-control">
//             </form>
//           </div>
//           <div>
//             <h5>Сумма</h5>
//             <form action="URL" method="post" name="">
//               <input type="text" class="form-control">
//             </form>
//           </div>
//           <div>
//             <h5>Взнос</h5>
//             <form action="URL" method="post" name="">
//               <input type="text" class="form-control">
//             </form>
//           </div>
//           <div>
//             <h5>Ставка</h5>
//             <form action="URL" method="post" name="">
//               <input type="text" class="form-control">
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>

//  <!-- Кнопка рассчитать -->
//     <div class="container-fluid  d-flex justify-content-center pt-4">
//       <button class="btn-add-product success-add-product text-center">Рассчитать</button>
//     </div>

// <!-- таблица -->
// <div class="pt-4 ml-2 mr-2">
//   <table class="table ">
//     <thead>
//       <tr>
//         <th scope="col">Лого банка</th>
//         <th scope="col">Кредитный продукт</th>
//         <th scope="col">График платежей</th>
//         <th scope="col">Сумма кредита</th>
//         <th scope="col">Сумма платежей</th>
//         <th scope="col">Переплата</th>
//         <th scope="col">Срок</th>
//         <th scope="col">Ставка</th>
//         <th scope="col">Ежемесячный платёж</th>
//         <th scope="col">Страховая премия</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <td scope="row">1</td>
//         <td>Mark</td>
//         <td>Otto</td>
//         <td>@mdo</td>
//         <td>Mark</td>
//         <td>Otto</td>
//         <td>@mdo</td>
//       </tr>
//       <tr>
//         <td scope="row">2</td>
//         <td>Jacob</td>
//         <td>Thornton</td>
//         <td>@fat</td>
//       </tr>
//       <tr>
//         <td scope="row">3</td>
//         <td>Larry the Bird</td>
//         <td>Thornton</td>
//         <td>@twitter</td>
//       </tr>
//     </tbody>
//   </table>
// </div>
//   <div class="boarder"><hr></div>

//     <!-- Кнопки назад/вперед -->
//     <div class="button-bottom row">
//       <div class="col">
//         <div class="w-25">
//           <form action="URL" method="post" name="insurance">
//             <button type="submit" class="btn-back  success-back text-center">Назад</button>
//           </form>
//         </div>
//       </div>
//       <div class="d-flex justify-content-end col">
//         <form action="dataCustomers.html" class=" w-25 text-right">
//         <button class="btn-forward success-forward text-center">Вперед</button>
//         </form>
//       </div>
//     </div>

// </main>

// <!-- JavaScript and dependencies -->
// <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
//   <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js" integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/" crossorigin="anonymous"></script>
    
// </body>
// </html>