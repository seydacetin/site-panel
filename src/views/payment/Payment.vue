<template>
  <div class="row">
    <div class="col-75">
      <div class="container">
        <form action="/action_page.php">
          <div class="col-50">
            <div class="col-50">
              <h3 style="margin-top: 20px;">Ödeme Ekranı</h3>
              <div class="icon-container">
                <i class="fa fa-cc-visa" style="color:navy;"></i>
                <i class="fa fa-cc-amex" style="color:blue;"></i>
                <i class="fa fa-cc-mastercard" style="color:red;"></i>
                <i class="fa fa-cc-discover" style="color:orange;"></i>
              </div>
              <label for="cname">Name on Card</label>
              <input id="cname" type="text" name="cardname" placeholder="John More Doe" />
              <label for="ccnum">Credit card number</label>
              <input id="ccnum" type="text" name="cardnumber" placeholder="1111-2222-3333-4444" />
              <label for="expmonth">Exp Month</label>
              <input id="expmonth" type="text" name="expmonth" placeholder="September" />

              <div class="row">
                <div class="col-50">
                  <label for="expyear">Exp Year</label>
                  <input id="expyear" type="text" name="expyear" placeholder="2018" />
                </div>
                <div class="col-50">
                  <label for="cvv">CVV</label>
                  <input id="cvv" type="text" name="cvv" placeholder="352" />
                </div>
              </div>
            </div>
          </div>
          <label> <input type="checkbox" checked="checked" name="sameadr" /> Save this card </label>
          <input type="submit" value="Continue to checkout" class="btn" />
        </form>
      </div>
    </div>
  </div>
</template>
<script></script>
<style>
.row {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  margin: 0 -16px;
}

.col-25 {
  -ms-flex: 25%; /* IE10 */
  flex: 25%;
}

.col-50 {
  -ms-flex: 50%; /* IE10 */
  flex: 50%;
}

.col-75 {
  -ms-flex: 55%; /* IE10 */
  flex: 75%;
}

.col-25,
.col-50,
.col-75 {
  padding: 0 16px;
}

.container {
  background-color: #ffffff;
  padding: 5px 20px 15px 20px;
  border: 1px solid rgb(255 255 255);
  border-radius: 6px;
  box-shadow: 0 2px 10px 0 #9f6afd;
}

input[type='text'] {
  width: 100%;
  margin-bottom: 20px;
  padding: 12px;
  border: 1.5px solid rgb(176 124 254);
  border-radius: 3px;
  border-bottom: inset;
}

label {
  margin-bottom: 10px;
  display: block;
}

.icon-container {
  margin-bottom: 20px;
  padding: 7px 0;
  font-size: 24px;
}

.btn {
  color: white;
  padding: 12px;
  margin: 2% 30%;
  border: none;
  width: 40%;
  border-radius: 50px;
  cursor: pointer;
  font-size: 17px;
  text-align: center;
  background-color: #34ac92;
}

.btn:hover {
  background-color: #34ac92e8;
}

span.price {
  float: right;
  color: grey;
}

/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other (and change the direction - make the "cart" column go on top) */
@media (max-width: 800px) {
  .row {
    flex-direction: column-reverse;
  }
  .col-25 {
    margin-bottom: 20px;
  }
}
</style>
