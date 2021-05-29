// <!DOCTYPE html>
// <html lang="en">
// <head>
// 	<meta charset="UTF-8">
// 	<meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <link rel="stylesheet" type="text/css" href="stylerabotaifinans.css">
// 	<!-- CSS only -->
// <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css" integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous">
// 	<title>Работа и финасы</title>
// </head>
// <body>

// <!-- Верхнее меню -->
// <header>
//   <div class="menu-top w-100">
//     <ul class="list-top row mb-0">
//       <li class="row col-2">
//         <img src="galochka.png" alt="выполнено" class="col-4 ms-auto me-auto">
//         <h6 class="textTopMenu text-center col-8 ms-auto me-auto mb-auto mt-auto">Параметр кредита</h6>
//       </li>
//       <li class="row col-2">
//         <img src="galochka.png" alt="выполнено" class="col-4 ms-auto me-auto">
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
//     <div class="explanation conteiner pt-3">
//      <h6 class=" text-center font-weight-lighter">«Укажите информацию о работе и финансах Клиента»</h6>
//     </div>

//   <!-- тип занятости -->

// <div class="form-list conteiner row pt-3">
//     <div class="col-4">
//       <h5 class="m-0">Тип занятости</h5> 
//     </div>
//     <div class="col-6">
//       <form action="URL" method="post" name="form1">
//         <select class="form-select w-75" name="tip_zanyatosti">
//           <option> </option>
//           <option value="1">Наемный работник</option>
//           <option value="2">Владелец бизнеса/ИП</option>
//           <option value="3">Пенсионер</option>
//         </select>
//       </form>
//     </div>
//   </div>

// <!-- Данные о работе клиента -->
// <div>
//   <div class="name-chapter conteiner pt-3">
//      <h5 class="text-chapter m-0 text-center col font-weight-normal">Данные о работе клиента</h5> 
//   </div>
// </div>

// <!-- название организации -->
//   <div class="form conteiner row pt-3">
//     <div class="col-4">
//       <h5 class="m-0">Название организации</h5> 
//     </div>
//     <div class="col-6">
//       <form action="URL" method="post" name="form1">
//         <input type="text" required="required" class="form-control w-75" aria-label="">
//       </form>
//     </div>
//   </div>

//   <!-- адрес работы -->
//   <div class="form conteiner row pt-2">
//     <div class="col-4">
//       <h5 class="m-0">Адрес работы</h5> 
//     </div>
//     <div class="col-6">
//       <form action="URL" method="post" name="form1">
//         <input type="text" class="form-control w-75" placeholder="" aria-label="">
//       </form>
//     </div>
//   </div>

//   <!-- Индекс -->
//   <div class="form conteiner row pt-2">
//     <div class="col-4">
//       <h5 class="m-0">Индекс</h5> 
//     </div>
//     <div class="col-6">
//       <form action="URL" method="post" name="form1">
//         <input type="text" class="form-control w-75" placeholder="" aria-label="">
//       </form>
//     </div>
//   </div>

//   <!-- должность -->
//     <div class="form-list conteiner row pt-2">
//       <div class="col-4">
//         <h5 class="m-0">Должность</h5> 
//       </div>
//       <div class="col-6">
//         <form action="URL" method="post" name="form1">
//           <select class="form-select w-75">
//             <option value=""> </option>
//             <option value="">Руководитель</option>
//             <option value="">Зам. Руководителя</option>
//             <option value="">Не руководящй работник</option>
//             <option value="">Индивидуальный предпрениматель</option>
//           </select>
//         </form>
//       </div>
//     </div>

//   <!-- Собственность -->
//   <div>
//     <div class="name-chapter conteiner pt-3">
//        <h5 class="text-chapter m-0 text-center col font-weight-normal">Собственность</h5> 
//     </div>
//   </div>

//    <!-- Квартира -->
//   <div class="form conteiner row pt-3">
//     <div class="col-4">
//       <h5 class="m-0">Квартира</h5> 
//     </div>
//     <div class="form-check form-switch col-6">
//       <label class="switch">
//         <input type="checkbox">
//         <span class="slider round"></span>
//       </label>
//     </div>
//   </div>

//    <!-- Земельный участок/дом -->
//   <div class="form conteiner row pt-2">
//     <div class="col-4">
//       <h5 class="m-0">Земельный участок/дом</h5> 
//     </div>
//     <div class="form-check form-switch col-6">
//        <label class="switch">
//         <input type="checkbox">
//         <span class="slider round"></span>
//       </label>
//     </div>
//   </div>

//    <!-- Финансовое состояние -->
//   <div>
//     <div class="name-chapter conteiner pt-3">
//        <h5 class="text-chapter m-0 text-center col font-weight-normal">Финансовое состояние</h5> 
//     </div>
//   </div>

//   <!-- Постоянный месячный доход -->
//   <div class="form conteiner row pt-3">
//     <div class="col-4">
//      <h5 class="m-0">Постоянный месячный доход</h5> 
//     </div>
//     <div class="col-6">
//       <form action="URL" method="post" name="form1">
//         <input type="text" class="form-control w-75" placeholder="" aria-label="">
//       </form>
//     </div>
//   </div>

//   <!-- Дополнительный доход в месяц -->
//   <div class="form conteiner row pt-2">
//     <div class="col-4">
//       <h5 class="m-0">Дополнительный доход в месяц</h5> 
//     </div>
//     <div class="col-6">
//       <form action="URL" method="post" name="form1">
//         <input type="text" class="form-control w-75" placeholder="" aria-label="">
//       </form>
//     </div>
//   </div>

//   <!-- Тип дохода -->
//   <div>
//     <div class="name-chapter conteiner pt-3">
//        <h5 class="text-chapter m-0 text-center col font-weight-normal">Тип дохода</h5> 
//     </div>
//   </div>

//    <!-- Зарплата -->
//   <div class="form conteiner row pt-3">
//     <div class="col-4">
//     <h5 class="m-0">Зарплата</h5> 
//     </div>
//     <div class="form-check form-switch col-6">
//        <label class="switch">
//         <input type="checkbox">
//         <span class="slider round"></span>
//       </label>
//     </div>
//   </div>

//    <!-- Собственность/Рента -->
//   <div class="form conteiner row pt-2">
//     <div class="col-4">
//       <h5 class="m-0">Собственность/Рента</h5> 
//     </div>
//     <div class="form-check form-switch col-6">
//        <label class="switch">
//         <input type="checkbox">
//         <span class="slider round"></span>
//       </label>
//     </div>
//   </div>

//   <!-- Пенсия/Пособие -->
//     <div class="form conteiner row pt-2">
//     <div class="col-4">
//       <h5 class="m-0">Пенсия/Пособие</h5> 
//     </div>
//       <div class="form-check form-switch col-6">
//         <label class="switch">
//         <input type="checkbox">
//         <span class="slider round"></span>
//       </label>
//       </div>
//     </div>

//      <!-- Официальные документы -->
//   <div class="form conteiner row pt-2">
//     <div class="col-4">
//       <h5 class="m-0">Официальные документы</h5> 
//     </div>
//       <div class="form-file col-6">
//         <input type="file" class="form-file-input" id="customFile">
//         <label class="form-file-label w-75" for="customFile">
//         <span class="form-file-text">Выбрать фаил...</span>
//         <span class="form-file-button">Проверить</span>
//         </label>
//       </div>
//   </div>

//   <!-- пояснение что делать на этой стр в конце -->
//     <div class="explanation conteiner pt-3">
//      <h6 class=" text-center font-weight-lighter">Добавьте любой официальный документ подтверждающий ваш доход
// (например, справка 2 НДФЛ, выписка из банка, договор аренды).</h6>
//     </div>
// </main>
//     <div class="boarder pt-3"><hr></div>

//     <!-- Кнопки назад/вперед -->
//     <div class="button-bottom row">
//       <div class="col">
//         <form action="dataCustomers.html" class=" w-25">
//         <button class="btn-back success-back text-center">Назад</button>
//           <input type="submit">
//         </form>
//       </div>
//       <div class="d-flex justify-content-end col">
//         <form action="Kontact.html" class="w-25 text-right">
//         <button class="btn-forward  success-forward text-center">Вперед</button>
//         </form>
//       </div>
//     </div>

// <!-- JavaScript and dependencies -->
// <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
//   <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js" integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/" crossorigin="anonymous"></script>
  	
// </body>
// </html>