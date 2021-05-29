import React from 'react'

// <!-- Верхнее меню -->
{/* <header>
  <div class="menu-top w-100">
    <ul class="list-top row mb-0">
      <li class="row col-2">
        <img src="galochka.png" alt="выполнено" class="col-4 ms-auto me-auto">
        <h6 class="textTopMenu text-center col-8 ms-auto me-auto mb-auto mt-auto">Параметр кредита</h6>
      </li>
      <li class="row col-2">
        <img src="galochka.png" alt="выполнено" class="col-4 ms-auto me-auto">
        <h6 class="textTopMenu text-center col-8 ms-auto me-auto mb-auto mt-auto">Данные клиента</h6>
      </li>
      <li class="row col-2">
        <img src="galochka.png" alt="выполено" class="col-4 ms-auto me-auto">
        <h6 class="textTopMenu text-center col-8 ms-auto me-auto mb-auto mt-auto">Работа и финансы</h6>
      </li>
      <li class="row col-2">
        <img src="galochka.png" alt="выполнено" class="col-4 ms-auto me-auto">
        <h6 class="textTopMenu text-center col-8 ms-auto me-auto mb-auto mt-auto">Контакты</h6>
      </li>
      <li class="row col-2">
        <img src="krug.png" alt="не выполнено" class="col-4 ms-auto me-auto">
        <h6 class="textTopMenu5 text-center col-8 ms-auto me-auto mb-auto mt-auto">Дополнительно</h6>
      </li>
      <li class="row col-2">
        <img src="krug.png" alt="не выполнено" class="col-4 ms-auto me-auto">
        <h6 class="textTopMenu text-center col-8 ms-auto me-auto mb-auto mt-auto">Рассмотрение</h6>
      </li>
    </ul>
  </div>
</header> */}




const Dopolnit = () => {
    state = {
        valueInput: ''
    }
    handlerChange = (e) => {
        this.setState({value: e.target.value)
    }

    handlerScanPassport = (e) => {
        e.preventDefault()
    }

    handlerPhotoBuer = (e) => {
        e.preventDefault()
    }

    handlerBack  = (e) => {
        e.preventDefault()
    }

    handlerNext  = (e) => {
        e.preventDefault()
    }

  {/* <!-- пояснение что делать на этой стр --> */}
  <div class="explanation pt-3">
    <h6 class=" text-center font-weight-lighter">«Укажите дополнительную информацию о Клиенте»</h6>
  </div>

    {/* <!-- Семья --> */}
  <div>
    <div class="name-chapter pt-5">
      <h5 class="text-chapter m-0 text-center col font-weight-normal">Семья</h5> 
    </div>
  </div>

  <div class="family rov pt-3">
    <div class="col-2"> 
      <h5 class="m-0 text-center">Семейное положение</h5>
    </div>

    <div class="col-3">
      <div class="form conteiner row pt-3">
         <div class="col-9 d-flex justify-content-center">
            <form action="URL" method="post" name="maritalStatus">
              <select class="form form-select">
                <option></option>
                <option value="">Женат/Замужем</option>
                <option value="">Холост/Не замужем</option>
                <option value="">Вдовец/Вдова</option>
                <option value="">Разведен(а)</option>
                <option value="">Гражданский брак</option>
              </select>
            </form>
          </div>
      </div>
    </div>

    <div class="col-3">
        <h5 class="m-0 text-center">Количество детей до 18 лет</h5> 
    </div>

    <div class="col-3">
       <div class="form row pt-3">
         <div class="col-9 d-flex justify-content-center">
            <form action="URL" method="post" name="amountOfChildren">
              <select class="form form-select">
                <option></option>
                <option value="">Нет</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">Больше 3-х</option>
              </select>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

    {/* <!-- Информация о супруге --> */}
  <div>
    <div class="name-chapter pt-5">
      <h5 class="text-chapter m-0 text-center col font-weight-normal">Информация о супруге</h5> 
    </div>
  </div>

    {/* <!-- ФИО --> */}
    <div class="form row pt-4">
      <div class="col-4">
        <h5 class="m-0">ФИО</h5> 
      </div>
      <div class="col-6">
        <form action="URL" method="post" name="form1">
          <input type="text" value = {value} onChange = {this.handlerChange} class="form-control w-75">
        </form>
      </div>
    </div>

  {/* <!-- Дата рождения --> */}
  <div class="form row pt-3">
    <div class="col-4">
      <h5 class="m-0">Дата рождения</h5> 
    </div>
    <div class="col-6">
      <form action="URL" method="post" name="form1">
        <input type="text" value = {value} onChange = {this.handlerChange} class="form-control w-75">
      </form>
    </div>
  </div>

  {/* <!-- Род деятельности --> */}
  <div class="form row pt-3">
    <div class="col-4">
      <h5 class="m-0">Род деятельности</h5> 
    </div>
    <div class="col-6">
      <form action="URL" method="post" name="form1">
        <select class="form-select w-75">
          <option value=""> </option>
          <option value="">_</option>
          <option value="">_</option>
          <option value="">_</option>
          <option value="">_</option>
        </select>
      </form>
    </div>
  </div>

 {/* <!-- Дополнительный документ --> */}
<div>
  <div class="name-chapter pt-5">
     <h5 class="text-chapter m-0 text-center col font-weight-normal">Дополнительный документ</h5> 
  </div>
</div>

  <div class="form row pt-5">
    <div class="col-9 d-flex justify-content-center">
      <form action="URL" method="post" name="form1">
        <select class="form form-select w-75">
          <option>«Не предоставлен»</option>
          <option value="">Водительское удостоверение</option>
          <option value="">Свидетельство о государственной регистрации права собственности</option>
          <option value="">Свидетельство о постановке на учет в налоговом органе ИНН</option>
          <option value="">Действующий загран. паспорт</option>
        </select>
      </form>
    </div>
  </div>

 {/* <!-- Серия --> */}
  <div class="form row pt-5">
    <div class="col-4">
      <h5 class="m-0">Серия</h5> 
    </div>
    <div class="col-6">
      <form action="URL" method="post" name="form1">
        <input type="text" value = {value} onChange = {this.handlerChange} class="form-control w-75">
      </form>
    </div>
  </div>

 {/* <!-- Номер --> */}
  <div class="form row pt-3">
    <div class="col-4">
      <h5 class="m-0">Номер</h5> 
    </div>
    <div class="col-6">
      <form action="URL" method="post" name="form1">
        <input type="text" value = {value} onChange = {this.handlerChange} class="form-control w-75">
      </form>
    </div>
  </div>

  {/* <!-- Кем выдано --> */}
  <div class="form row pt-4">
    <div class="col-4">
      <h5 class="m-0">Кем выдано</h5> 
    </div>
    <div class="col-6">
      <form action="URL" method="post" name="form1">
       <input type="text" value = {value} onChange = {this.handlerChange} class="form-control w-75">
     </form>
    </div>
  </div>

 {/* <!-- Дата выдачи --> */}
  <div class="form row pt-3">
    <div class="col-4">
      <h5 class="m-0">Дата выдачи</h5> 
    </div>
    <div class="col-6">
      <form action="URL" method="post" name="form1">
        <input type="text" value = {value} onChange = {this.handlerChange} class="form-control w-75">
      </form>
    </div>
  </div>
    
  <div class="boarder pt-3"><hr></div>

    {/* <!-- Кнопки назад/вперед --> */}
    <div class="button-bottom row">
      <div class="col">
        <form action="Kontact.html" class=" w-25">
        <button class="btn-back success-back text-center" onClick = {this.handlerBack}>Назад</button>
        </form>
      </div>
      <div class="d-flex justify-content-end col">
        <form action="Rassmotr.html" class="w-25 text-right">
        <button class="btn-forward  success-forward text-center" onClick = {this.handlerNext}>Вперед</button>
        </form>
      </div>
    </div>

}

{/* <!-- JavaScript and dependencies --> */}
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js" integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/" crossorigin="anonymous"></script>
    
</body>
</html>