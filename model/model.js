var userVarName = "Variable";
var homeContent = ` <section class="promo-tours">
<div class="promo israel">
  <h1>ISRAEL</h1>
  <h2>FROM $1000</h2>
  <div class="learnmore-button">
    <a href="israel.html" class="active">LEARN MORE</a>
  </div>
</div>
<div class="promo usa">
  <h1>U.S.A</h1>
  <h2>FROM $1500</h2>
  <div class="learnmore-button">
    <a href="usa.html" class="active">LEARN MORE</a>
  </div>
</div>
<div class="promo australia">
  <h1>AUSTRALIA</h1>
  <h2>FROM $1800</h2>
  <div class="learnmore-button">
    <a href="australia.html" class="active">LEARN MORE</a>
  </div>
</div>
</section>

<!-- =========BOOKING-FORM CONTENT================-->
<section class="booking-form">
<h1>Booking Form</h1>
<div class="info-fields">
  <div class="field-one-container">
    <input
      type="text"
      name="name..."
      id="field-one"
      placeholder="name..."
    />

    <input
      type="email"
      name="email"
      id="field-two"
      placeholder="email..."
    />
  </div>

  <div class="field-two-container">
    <input
      type="text"
      name="country"
      id="field-three"
      placeholder="country..."
    />

    <input
      type="text"
      name="hotel"
      id="field-four"
      placeholder="hotel..."
    />
  </div>
</div>
<!-- ==========CHECK IN FIELDS --==========-->

<div class="checkin-fields">
  <div class="check-in">
    <div class="text-one">Check-in</div>
    <!-- <div class="checkin-one"> -->
    <input
      type="text"
      name="05/10/2020"
      id="field-five"
      placeholder="05/10/2020"
    />
  </div>

  <div class="check-out">
    <div class="text-two">Check-out</div>

    <input
      type="text"
      name="05/20/2020"
      id="field-six"
      placeholder="05/20/2020"
    />
  </div>
</div>

<!-- ===========adult container ==========-->

<section class="people-fields">
  <div class="adult-container">
    <div class="adult-text">Adult</div>
    <div class="adult-field"></div>
  </div>
  <!-- ==========children container========= -->
  <div class="children-container">
    <div class="children-text">Children</div>
    <div class="children-field"></div>
  </div>
  <!-- ===========rooms container========== -->
  <div class="rooms-container">
    <div class="rooms-text">Rooms</div>
    <div class="rooms-field"></div>
  </div>
</section>
<!-- ========MESSAGE CONTAINER=========== -->

<!-- <input type="text" name="message" id="field-seven" placeholder="message..."/>
</section> -->

<div class="message-container">
  <input
    type="text"
    name="message"
    id="message"
    placeholder="message..."
  />
</div>

<!-- ============SUBMIT BUTTON========== -->

<div class="submit-button-container">
  <input type="button" name="submit-button" id="submit-button" />
  <div class="submit-button">SUBMIT</div>
</div>
</section>`;
var aboutContent = `<section class="about-content">
<div class="about-text">
  <h1>ABOUT:</h1>
  <p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
    ab illo inventore veritatis et quasi architecto beatae vitae dicta
    sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
    aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
    qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
    dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
    quia non numquam eius modi tempora incidunt ut labore et dolore magnam
    aliquam quaerat voluptatem.
  </p>
</div>
<div class="client-content">
  <h3>CLIENT QUOTES:</h3>
  <div class="client-one">
    <div class="client-image client1"></div>
    <div class="client-quote">
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo.
      </p>
      <div class="client-name">- Miranda Brown</div>
    </div>
  </div>
  <div class="client-two">
    <div class="client-image client2"></div>
    <div class="client-quote">
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo.
      </p>
      <div class="client-name">- Johnathan Wes</div>
    </div>
  </div>
</div>
</section>`;
var toursContent = ` <div class="tours-content">
<header>
  <span>tours:</span>
</header>
<div class="all-tours">
  <div class="promo israel">
    <h1>ISRAEL</h1>
    <h2>FROM $1000</h2>
    <div class="learnmore-button">
      <a href="israel.html" class="active">LEARN MORE</a>
    </div>
  </div>
  <div class="promo usa">
    <h1>U.S.A</h1>
    <h2>FROM $1500</h2>
    <div class="learnmore-button">
      <a href="usa.html" class="active">LEARN MORE</a>
    </div>
  </div>
  <div class="promo australia">
    <h1>AUSTRALIA</h1>
    <h2>FROM $1800</h2>
    <div class="learnmore-button">
      <a href="australia.html" class="active">LEARN MORE</a>
    </div>
  </div>

  <div class="promo newz">
    <h1>NEW ZEALAND</h1>
    <h2>FROM $1200</h2>
    <div class="learnmore-button">
      <a href="newz.html" class="active">LEARN MORE</a>
    </div>
  </div>

  <div class="promo france">
    <h1>FRANCE</h1>
    <h2>FROM $2500</h2>
    <div class="learnmore-button">
      <a href="france.html" class="active">LEARN MORE</a>
    </div>
  </div>

  <div class="promo egypt">
    <h1>EGYPT</h1>
    <h2>FROM $900</h2>
    <div class="learnmore-button">
      <a href="egypt.html" class="active">LEARN MORE</a>
    </div>
  </div>

  <div class="promo japan">
    <h1>JAPAN</h1>
    <h2>FROM $1300</h2>
    <div class="learnmore-button">
      <a href="japan.html" class="active">LEARN MORE</a>
    </div>
  </div>

  <div class="promo canada">
    <h1>CANADA</h1>
    <h2>FROM $2000</h2>
    <div class="learnmore-button">
      <a href="canada.html" class="active">LEARN MORE</a>
    </div>
  </div>

  <div class="promo uae">
    <h1>U.A.E</h1>
    <h2>FROM $3000</h2>
    <div class="learnmore-button">
      <a href="uae.html" class="active">LEARN MORE</a>
    </div>
  </div>
</div>
</div>`;
var specialContent = ` <section class="special-content">
<div class="title">
  <h1 class="offer">SPECIAL OFFER(S)</h1>
  <span> :</span>
</div>
<div class="special">
  <div class="image barcelona"></div>
  <div class="content">
    <div class="title">
      <h1>BARCELONA, SPAIN</h1>
      <div class="smaller-border"></div>
    </div>

    <span>(20% OFF!)</span>

    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo.
    </p>
    <div class="learnmore-button">LEARN MORE</div>
  </div>
</div>
<div class="special">
  <div class="image bangkok"></div>
  <div class="content">
    <div class="title">
      <h1 class="title-bangkok">BANGKOK, THAILAND</h1>
      <div class="smaller-border thailand"></div>
    </div>
    <span class="discount">(10% OFF!)</span>
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo.
    </p>
    <div class="learnmore-button">LEARN MORE</div>
  </div>
</div>
</section>
`;
var blogContent = `<section class="blog-content">
<h1>BLOG:</h1>
<div class="blog">
  <div class="date june"></div>
  <div class="blog-info">
    <div class="blog-image"></div>
    <div class="blog-text">
      <h5>Sed et persipiatis unde omnis iste natus</h5>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo.
      </p>
    </div>
  </div>
</div>
<div class="blog">
  <div class="date july"></div>
  <div class="blog-info">
    <div class="blog-image"></div>
    <div class="blog-text">
      <h5>Sed et persipiatis unde omnis iste natus</h5>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo.
      </p>
    </div>
  </div>
</div>
</section>`;
var contactContent = ` <section class="contact-content">
<div class="map">
  <h1>CONTACT US:</h1>
  <div class="image-map"></div>
  <div class="map-content">
    <p>travel-fly Inc.</p>
    <p>8901 Marmora Road,</p>
    <p>Glasgow, D04 89GR.</p>
    <p>Freephone:+1 800 559 6580</p>
    <p>Telephone:+1 800 603 6035</p>
    <p>FAX:+1 800 889 9898</p>
    <p>E-mail: mail@travelfly.org</p>
  </div>
</div>
<div class="form">
  <input
    type="text"
    name="name..."
    id="field-one"
    placeholder="Your name..."
  />

  <input
    type="email"
    name="email"
    id="field-two"
    placeholder="Email Address..."
  />

  <input
    type="text"
    name="country"
    id="field-three"
    placeholder="Company..."
  />

  <input
    class="message"
    type="text"
    name="message"
    id=""
    placeholder="message..."
  />

  <div class="readmore-button">SEND MESSAGE</div>
</div>
</section>`;

// =======EXPORT FUNCTION==========//

export function getPageContent(pageId) {
  $("#app").html(eval(pageId));
}
