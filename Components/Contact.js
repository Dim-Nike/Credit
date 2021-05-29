
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
        <img src="krug.png" alt="не выполнено" class="col-4 ms-auto me-auto">
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
</header>

<div class="boarder"><hr></div> */}


const Contact = () => {
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
    
//   <!-- пояснение что делать на этой стр -->
    <div class="explanation conteiner pt-3">
     <h6 class=" text-center font-weight-lighter">«Укажите информацию о контактных лицах (родственники, знакомые) Клиента»</h6>
    </div>

    // <!-- Дополнительные контакты -->
<div>
  <div class="name-chapter conteiner pt-5">
     <h5 class="text-chapter m-0 text-center col font-weight-normal">Дополнительные контакты</h5> 
  </div>
</div>

// <!-- Рабочий телефон -->
  <div class="form conteiner row pt-4">
    <div class="col-4">
      <h5 class="m-0">Рабочий телефон</h5> 
    </div>
    <div class="col-6">
      <form action="URL" method="post" name="workPhone">
        <input type="text" type="text" value = {value} onChange = {this.handlerChange} class="form-control w-75">
      </form>
    </div>
  </div>

  {/* <!-- Домашний телефон --> */}
  <div class="form conteiner row pt-3">
    <div class="col-4">
      <h5 class="m-0">Домашний телефон</h5> 
    </div>
    <div class="col-6">
      <form action="URL" method="post" name="homePhone">
       <input type="text" type="text" value = {value} onChange = {this.handlerChange} class="form-control w-75">
     </form>
    </div>
  </div>

  {/* <!-- E-mail --> */}
  <div class="form conteiner row pt-3">
    <div class="col-4">
      <h5 class="m-0">E-mail</h5> 
    </div>
    <div class="col-6">
      <form action="URL" method="post" name="email">
        <input type="text" type="text" value = {value} onChange = {this.handlerChange} class="form-control w-75">
      </form>
    </div>
  </div>


 {/* <!-- Контактные лица --> */}
<div>
  <div class="name-chapter conteiner pt-5">
     <h5 class="text-chapter m-0 text-center col font-weight-normal">Контактные лица</h5> 
  </div>
</div>

 {/* <!-- ФИО --> */}
  <div class="form conteiner row pt-4">
    <div class="col-4">
      <h5 class="m-0">ФИО</h5> 
    </div>
    <div class="col-6">
      <form action="URL" method="post" name="form1">
        <input type="text" type="text" value = {value} onChange = {this.handlerChange} class="form-control w-75">
      </form>
    </div>
  </div>

 {/* <!-- Мобильный телефон --> */}
  <div class="form conteiner row pt-3">
    <div class="col-4">
      <h5 class="m-0">Мобильный телефон</h5> 
    </div>
    <div class="col-6">
      <form action="URL" method="post" name="form1">
        <input type="text" type="text" value = {value} onChange = {this.handlerChange} class="form-control w-75">
      </form>
    </div>
  </div>

{/* <!-- добавить контактные лица --> */}
  <div class="conteiner-fluid add-kontact pt-5">
		<h5 class="text-chapter m-0 font-weight-normal">Добавить</h5> 
         <a class="expand-kontact btn btn-primary" data-toggle="collapse" href="#collapseKontact" role="button" aria-expanded="false" aria-controls="collapseKontact">
          +
          </svg>
        </a>
  </div>

  {/* <!-- Контакт + --> */}
    <div class="collapse" id="collapseKontact">
      <div class="card card-body">
        <div class="conteiner  d-flex">
         
         <!-- ФИО -->
		  <div class="form conteiner row pt-4">
		    <div class="col-4">
		      <h5 class="m-0">ФИО</h5> 
		    </div>
		    <div class="col-6">
          <form action="URL" method="post" name="names">
		        <input type="text" type="text" value = {value} onChange = {this.handlerChange} class="form-control w-75">
          </form>
		    </div>
		  </div>
		</div>
		<div class="conteiner d-flex">
		 {/* <!-- Мобильный телефон --> */}
		  <div class="form conteiner row pt-3">
		    <div class="col-4">
		      <h5 class="m-0">Мобильный телефон</h5> 
		    </div>
		    <div class="col-6">
          <form action="URL" method="post" name="phone">
		        <input type="text" type="text" value = {value} onChange = {this.handlerChange} class="form-control w-75">
          </form>
		    </div>
		  </div>

        </div>
      </div>
   </div>

    
  <div class="boarder pt-3"><hr></div>

    {/* <!-- Кнопки назад/вперед --> */}
    <div class="button-bottom row">
      <div class="col">
        <form action="rabotaifinans.html" class=" w-25">
        <button class="btn-back success-back text-center" onClick = {this.handlerBack}>Назад</button>
        </form>
      </div>
      <div class="d-flex justify-content-end col">
        <form action="Dopolnit.html" class="w-25 text-right">
        <button class="btn-forward  success-forward text-center" onClick = {this.handlerNext}>Вперед</button>
        </form>
      </div>
    </div>
}

{/* 
<!-- JavaScript and dependencies --> */}
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js" integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/" crossorigin="anonymous"></script>
    
</body>
</html>