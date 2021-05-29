const Rassmotr = () => {
   
    handlerBack  = (e) => {
        e.preventDefault()
    }

    handlerNext  = (e) => {
        e.preventDefault()
    }
  <!-- пояснение что делать на этой стр -->
    <div class="explanation pt-3">
     <h6 class=" text-center font-weight-lighter">«Отправьте заявку на проверку в банки и следуйте дальнейшим инструкциям»</h6>
    </div>

//   <!-- Клиент согласен на обработку персональных данных -->
  <div class="container-fluid row pt-3 d-flex justify-content-end">
      <h5 class="m-0 col-5">Клиент согласен на обработку персональных данных</h5> 
    <div class="form-switch m-0 p-0 col-6">
      <label class="switch">
        <input type="checkbox">
        <span class="slider round"></span>
      </label>
    </div>
  </div>

  {/* <!-- Распечатать согласие --> */}
  <div class="container-fluid row pt-5 d-flex justify-content-end">
      <h5 class="m-0 col-5 ">Распечатать согласие</h5> 
    <div class="col-6">
      <a> <img src="print.png" alt="Распечатать"></a>
    </div>
  </div>
   
  <div class="boarder pt-5"><hr></div>

    {/* <!-- Кнопки назад/вперед --> */}
    <div class="button-bottom row">
      <div class="col">
        <form action="Dopolnit.html" class=" w-25">
        <button class="btn-back success-back text-center" onClick = {this.handlerBack}>Назад</button>
        </form>
      </div>
      <div class="d-flex justify-content-end col">
        <form action="" class="w-25 text-right">
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