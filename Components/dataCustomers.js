import React from 'react'

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <link rel="stylesheet" type="text/css" href="styleDataCustomers.css">
//   <!-- CSS only -->
// <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css" integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous">
//   <title>Данные клиента</title>
// </head>
// <body>

{/* <!-- Верхнее меню --> */}


        // <header>
        // <div class="menu-top w-100">
        //     <ul class="list-top row mb-0">
        //     <li class="row col-2">
        //         <img src="galochka.png" alt="выполнено" class="col-4 ms-auto me-auto">
        //         <h6 class="textTopMenu text-center col-8 ms-auto me-auto mb-auto mt-auto">Параметр кредита</h6>
        //     </li>
        //     <li class="row col-2">
        //         <img src="krug.png" alt="не выполнено" class="col-4 ms-auto me-auto">
        //         <h6 class="textTopMenu text-center col-8 ms-auto me-auto mb-auto mt-auto">Данные клиента</h6>
        //     </li>
        //     <li class="row col-2">
        //         <img src="krug.png" alt="не выполено" class="col-4 ms-auto me-auto">
        //         <h6 class="textTopMenu text-center col-8 ms-auto me-auto mb-auto mt-auto">Работа и финансы</h6>
        //     </li>
        //     <li class="row col-2">
        //         <img src="krug.png" alt="не выполнено" class="col-4 ms-auto me-auto">
        //         <h6 class="textTopMenu text-center col-8 ms-auto me-auto mb-auto mt-auto">Контакты</h6>
        //     </li>
        //     <li class="row col-2">
        //         <img src="krug.png" alt="не выполнено" class="col-4 ms-auto me-auto">
        //         <h6 class="textTopMenu5 text-center col-8 ms-auto me-auto mb-auto mt-auto">Дополнительно</h6>
        //     </li>
        //     <li class="row col-2">
        //         <img src="krug.png" alt="не выполнено" class="col-4 ms-auto me-auto">
        //         <h6 class="textTopMenu text-center col-8 ms-auto me-auto mb-auto mt-auto">Рассмотрение</h6>
        //     </li>
        //     </ul>
        // </div>
        // </header>

        // <div class="boarder"><hr></div>
        const dataCustomers = () => {
            const {value} = this.state
            
            state = {
                valueInput: ''
            }
            handlerChange = (e) => {
                this.setState({value: e.target.value)
            }

            handlerBack  = (e) => {
                e.preventDefault()
            }

            handlerNext  = (e) => {
                e.preventDefault()
            }
            
            
            
    return (
        {/* <!-- пояснение что делать на этой стр --> */}
            <div class="explanation conteiner pt-3">
            <h6 class=" text-center font-weight-lighter">«Укажите личные данные клиента»</h6>
            </div>

        {/* <!-- Кнопка Загрузить фото/скан паспорта --> */}
            <div class="container-fluid  d-flex justify-content-center pt-4">
            <button class="btn-add success-add text-center" onSubmit = {this.handlerPhotoBuer}>Загрузить фото/скан паспорта</button>
            </div>

            {/* <!-- Кнопка Загрузить фото покупателя --> */}
            <div class="container-fluid  d-flex justify-content-center pt-4">
            <button class="btn-add success-add text-center" onSubmit = {this.handlerScanPassport}>Загрузить фото покупателя</button>
            </div>

            {/* <!-- Паспортные данные --> */}
        <div>
        <div class="name-chapter conteiner pt-5">
            <h5 class="text-chapter m-0 text-center col font-weight-normal">Паспортные данные</h5> 
        </div>
        </div>

        {/* <!-- Фамилия --> */}
        <div class="form conteiner row pt-4">
            <div class="col-4">
            <h5 class="m-0">Фамилия</h5> 
            </div>
            <div class="col-6">
            <form action="URL" method="post" name="passportLastName">
                <input  type="text" value = {value} onChange = {this.handlerChange} class="form-control w-75">
            </form>
            </div>
        </div>

        {/* <!-- Имя --> */}
        <div class="form conteiner row pt-3">
            <div class="col-4">
            <h5 class="m-0">Имя</h5> 
            </div>
            <div class="col-6">
            <form action="URL" method="post" name="passportFirstName">
                <input type="text" value = {value} onChange = {this.handlerChange} class="form-control w-75">
            </form>
            </div>
        </div>

        {/* <!-- Отчество --> */}
        <div class="form conteiner row pt-3">
            <div class="col-4">
            <h5 class="m-0">Отчество</h5> 
            </div>
            <div class="col-6">
            <form action="URL" method="post" name="passportMiddleName">
                <input type="text" value = {value} onChange = {this.handlerChange} class="form-control w-75">
            </form>
            </div>
        </div>

        {/* <!-- нет отчетства --> */}
        <div class="net-otchestva container-fluid d-flex pt-2">
            <div class="form conteiner pt-3">
            <div class="form-check form-switch">
            <form action="URL" method="post" name="notPassportMiddleName">
                <label class="switch">
                <input type="checkbox">
                <span class="slider round"></span>
                </label>
            </form>
            </div>
            <div class="conteiner text-right-button text-center">
            <h6 >нет отчества</h6> 
            </div>
        </div>
        </div>


        {/* <!-- Дата рождения --> */}
        <div class="form conteiner row pt-3">
            <div class="col-4">
            <h5 class="m-0">Дата рождения</h5> 
            </div>
            <div class="col-6">
            <form action="URL" method="post" name="birthday">
                <input type="text" value = {value} onChange = {this.handlerChange} class="form-control w-75">
            </form>
            </div>
        </div>

        {/* <!-- Серия и номер --> */}
        <div class="form conteiner row pt-3">
            <div class="col-4">
            <h5 class="m-0">Серия и номер</h5> 
            </div>
            <div class="col-6">
            <form action="URL" method="post" name="form1">
                <input type="text" value = {value} onChange = {this.handlerChange} class="form-control w-75">
            </form>
            </div>
        </div>

        {/* <!-- Дата выдачи --> */}
        <div class="form conteiner row pt-3">
            <div class="col-4">
            <h5 class="m-0">Дата выдачи</h5> 
            </div>
            <div class="col-6">
            <form action="URL" method="post" name="passportDateOfBirth">
                <input type="text" value = {value} onChange = {this.handlerChange} class="form-control w-75">
            </form>
            </div>
        </div>

        {/* <!-- Прописка --> */}
        <div>
        <div class="name-chapter conteiner pt-5">
            <h5 class="text-chapter m-0 text-center col font-weight-normal">Прописка</h5> 
        </div>
        </div>

        {/* <!-- Место прописки --> */}
        <div class="form conteiner row pt-4">
            <div class="col-4">
            <h5 class="m-0">Место прописки</h5> 
            </div>
            <div class="col-6">
            <form action="URL"  method="post" name="form1">
                <input type="text" value = {value} onChange = {this.handlerChange} class="form-control w-75">
            </form>
            </div>
        </div>

        {/* <!-- Место прописки совпадает с фактическим --> */}
        <div class="net-otchestva container-fluid d-flex pt-2">
            <div class="form conteiner pt-3">
            <div class="form-check form-switch">
            <label class="switch">
                <input type="checkbox">
                <span class="slider round"></span>
            </label>
            </div>
            <div class="conteiner text-right-button text-center">
            <h6 >Место прописки совпадает с фактическим</h6> 
            </div>
        </div>
        </div>

        {/* <!-- Адрес фактический --> */}
        <div class="form conteiner row pt-3">
            <div class="col-4">
            <h5 class="m-0">Адрес фактический</h5> 
            </div>
            <div class="col-6">
            <form action="URL" method="post" name="form1">
                <input type="text" value = {value} onChange = {this.handlerChange} class="form-control w-75">
            </form>
            </div>
        </div>

        {/* <!-- Образование --> */}
        <div>
        <div class="name-chapter conteiner pt-5">
            <h5 class="text-chapter m-0 text-center col font-weight-normal">Образование</h5> 
        </div>
        </div>


        {/* <!-- Тип образования --> */}
        <div class="form-list conteiner row pt-4">
            <div class="col-4">
            <h5 class="m-0">Тип образования</h5> 
            </div>
            <div class="col-6">
            <form action="URL" method="post" name="form1">
                <select class="form-select w-75">
                <option value=""> </option>
                <option value="">Основное общее</option>
                <option value="">Среднее (полное) общее</option>
                <option value="">Высшее (бакалавриат)</option>
                <option value="">Высшее (магистратура)</option>
                </select>
            </form>
            </div>
        </div>


            
        {/* <div class="boarder pt-3"><hr></div> */}

            {/* <!-- Кнопки назад/вперед --> */}
            <div class="button-bottom row">
            <div class="col">
                <form action="parmetpKredita.html" class=" w-25">
                <button onClick = {this.handlerBack} class="btn-back success-back text-center">Назад</button>
                </form>
            </div>
            <div class="d-flex justify-content-end col">
                <form action="rabotaifinans.html" class="w-25 text-right">
                <button class="btn-forward  success-forward text-center" onSClick = {this.handlerNext}>Вперед</button>
                </form>
            </div>
        </div> 
    )
}

{/* <!-- JavaScript and dependencies --> */}
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js" integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/" crossorigin="anonymous"></script>
    
</body>
</html>