// import logo from "./img/omnifood-logo.png";
import "./css/general.css";
import "./css/style.css";

function Main() {
  return (
    <main>
      <section class="section-hero">
        <div class="hero">
          <div class="hero-text-box">
            <h1 class="heading-primary">
              A healthy meal delivered to your door, every single day
            </h1>
            <p class="hero-description">
              The smart 365-days-per-year food subscription that will make you
              eat healthy again. Tailored to your personal tastes and
              nutritional needs. We have delivered 250,000+ meals last year!
            </p>
            <a href="#" class="btn btn--full margin-right-sm">
              Start eating well
            </a>
            <a href="#" class="btn btn--outline">
              Lear more &darr;
            </a>
            <div class="delivered-meals">
              <div class="delivered-imgs">
                <img
                  src={require("./img/customers/customer-1.jpg")}
                  alt="Customer photo"
                />
                <img
                  src={require("./img/customers/customer-2.jpg")}
                  alt="Customer photo"
                />
                <img
                  src={require("./img/customers/customer-3.jpg")}
                  alt="Customer photo"
                />
                <img
                  src={require("./img/customers/customer-4.jpg")}
                  alt="Customer photo"
                />
                <img
                  src={require("./img/customers/customer-5.jpg")}
                  alt="Customer photo"
                />
                <img
                  src={require("./img/customers/customer-6.jpg")}
                  alt="Customer photo"
                />
              </div>
              <p class="delivered-text">
                <span>250,000+</span> meals delivered last year!
              </p>
            </div>
          </div>
          <div class="hero-img-box">
            <img
              src={require("./img/hero.png")}
              class="hero-img"
              alt="A woman enjoying food, meals in storage container, and food bowls on the table"
            />
          </div>
        </div>
      </section>
      <section class="section-featured">
        <div class="container">
          <h2 class="heading-feutured-in">As featured in</h2>
          <div class="logos">
            <img
              src={require("./img/logos/techcrunch.png")}
              alt="Techcrunch logo"
            />
            <img
              src={require("./img/logos/business-insider.png")}
              alt="Business Insider logo"
            />
            <img
              src={require("./img/logos/the-new-york-times.png")}
              alt="New York Times logo"
            />
            <img src={require("./img/logos/forbes.png")} alt="Forbes logo" />
            <img
              src={require("./img/logos/usa-today.png")}
              alt="USA Today logo"
            />
          </div>
        </div>
      </section>
      <section class="section-how">
        <div class="container">
          <spanc class="subheading"> How it works</spanc>
          <h2 class="heading-secondary">
            Your daily dose of health in 3 simple steps
          </h2>
        </div>
        <div class="container grid grid--2-cols grid--center-v">
          {/* <!-- step 01 --> */}
          <div class="step-text-box">
            <p class="step-number">01</p>
            <h3 class="heading-tertiary">
              Tell us what you like (and what not)
            </h3>
            <p class="step-description">
              Never again waste time thinking about what to eat! Omnifood AI
              will create a 100% personalized weekly meal plan just for you. It
              makes sure you get all the nutrients and vitamins you need, no
              matter what diet you follow!
            </p>
          </div>
          <div class="step-img-box">
            <img
              src={require("./img/app/app-screen-1.png")}
              class="step-img"
              alt="iPhone app preferences selection screen"
            />
          </div>
          {/* <!-- step 02 --> */}
          <div class="step-img-box">
            <img
              src={require("./img/app/app-screen-2.png")}
              class="step-img"
              alt="iPhone app preferences selection screen"
            />
          </div>
          <div class="step-text-box">
            <p class="step-number">02</p>
            <h3 class="heading-tertiary">Approve your weekly meal plan</h3>
            <p class="step-description">
              Once per week, approve the meal plan generated for you by Omnifood
              AI. You can change ingredients, swap entire meals, or even add
              your own recipes.
            </p>
          </div>
          {/* <!-- step 03 --> */}
          <div class="step-text-box">
            <p class="step-number">03</p>
            <h3 class="heading-tertiary">Receive meals at convenient time</h3>
            <p class="step-description">
              Best chefs in town will cook your selected meal every day, and we
              will deliver it to your door whenever works best for you. You can
              change delivery schedule and address daily!
            </p>
          </div>
          <div class="step-img-box">
            <img
              src={require("./img/app/app-screen-3.png")}
              class="step-img"
              alt="iPhone app delivery screen"
            />
          </div>
        </div>
      </section>
      <section class="section-meals">
        <div class="container center-text">
          <span class="subheading"> MEALS</span>
          <h2 class="heading-secondary">
            Omnifood AI chooses from 5,000+ recipes
          </h2>
        </div>
        <div class="container grid grid--3-cols margin-bottom-md">
          <div class="meal">
            <img
              src={require("./img/meals/meal-1.jpg")}
              class="meal-img"
              alt="Japanese Gyozas"
            />
            <div class="meal-content">
              <div class="meal-tags">
                <span class="tag tag--vegetarian">Vegetarian</span>
              </div>
              <p class="meal-title">Japanese Gyozas</p>
              <ul class="meal-attributes">
                {/* <!-- <li class="meal-attribute">Vegetarian</li> --> */}
                <li class="meal-attribute">
                  <ion-icon class="meal-icon" name="flame-outline"></ion-icon>
                  <span>
                    <strong> 650</strong> calories
                  </span>
                </li>
                <li class="meal-attribute">
                  <ion-icon
                    class="meal-icon"
                    name="restaurant-outline"
                  ></ion-icon>
                  <span>
                    {" "}
                    NutriScore &reg;<strong>74</strong>
                  </span>
                </li>
                <li class="meal-attribute">
                  <ion-icon class="meal-icon" name="star-outline"></ion-icon>
                  <span>
                    {" "}
                    <strong>4.9</strong> rating (537)
                  </span>
                </li>
                {/* <!-- <li class="meal-attribute"></li> --> */}
              </ul>
            </div>
          </div>
          <div class="meal">
            <img
              src={require("./img/meals/meal-2.jpg")}
              class="meal-img"
              alt="Avocado Salad "
            />
            <div class="meal-content">
              <div class="meal-tags">
                <span class="tag tag--vegan">Vegan</span>
                <span class="tag tag--paleo">Paleo</span>
              </div>
              <p class="meal-title">Avocado Salad</p>
              <ul class="meal-attributes">
                <li class="meal-attribute">
                  <ion-icon class="meal-icon" name="flame-outline"></ion-icon>
                  <span>
                    <strong> 400</strong> calories
                  </span>
                </li>
                <li class="meal-attribute">
                  <ion-icon
                    class="meal-icon"
                    name="restaurant-outline"
                  ></ion-icon>
                  <span>
                    {" "}
                    NutriScore &reg;<strong>92</strong>
                  </span>
                </li>
                <li class="meal-attribute">
                  <ion-icon class="meal-icon" name="star-outline"></ion-icon>
                  <span>
                    {" "}
                    <strong>4.8</strong> rating (441)
                  </span>
                </li>
                {/* <!-- <li class="meal-attribute"></li> --> */}
              </ul>
            </div>
          </div>
          {/* <!-- <div class="meal">Meal</div> --> */}
          <div class="list">
            <h3 class="heading-tertiary">Works with any diet</h3>
            <ul class="list">
              <li class="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>Vegetarian</span>
              </li>
              <li class="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>Vegan</span>
              </li>
              <li class="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>Pescatarian</span>
              </li>
              <li class="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>Gluten-free</span>
              </li>
              <li class="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>Lactose-free</span>
              </li>
              <li class="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>Keto</span>
              </li>
              <li class="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>Paleo</span>
              </li>
              <li class="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>Low FODMAP</span>
              </li>
              <li class="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>Kid-friendly</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="container all-recepies">
          <a href="#" class="link">
            See all recepies &rarr;
          </a>
        </div>
      </section>
      <section class="section-testimonials">
        <div class="testimomial-container">
          <span class="subheading"> TESTIMONIALS</span>
          <h class="heading-secondary">Once you try it you will go back</h>
          <div class="testimonials">
            <figure class="testimonial">
              <img
                class="testimonial-img"
                src={require("./img/customers/dave.jpg")}
                alt="Photo of customer Dave Bryson"
              />
              <blockquote class="testimonial-text">
                Inexpensive, healthy and great-tasting meals, without even
                having to order manually! It feels truly magical.
              </blockquote>
              <p class="testimonial-name">&mdash;Dave Bryson</p>
            </figure>
            <figure class="testimonial">
              <img
                class="testimonial-img"
                src={require("./img/customers/ben.jpg")}
                alt="Photo of customer Ben Hadley"
              />
              <blockquote class="testimonial-text">
                The AI algorithm is crazy good, it chooses the right meals for
                me every time. It's amazing not to worry about food anymore!
              </blockquote>
              <p class="testimonial-name">&mdash;Ben Hadley</p>
            </figure>
            <figure class="testimonial">
              <img
                class="testimonial-img"
                src={require("./img/customers/steve.jpg")}
                alt="Photo of customer Steve
              Miller"
              />
              <blockquote class="testimonial-text">
                Omnifood is a life saver! I just started a company, so there's
                no time for cooking. I couldn't live without my daily meals now!
              </blockquote>
              <p class="testimonial-name">&mdash;Steve Miller</p>
            </figure>
            <figure class="testimonial">
              <img
                class="testimonial-img"
                src={require("./img/customers/hannah.jpg")}
                alt="Photo of customer Hannah Smith"
              />
              <blockquote class="testimonial-text">
                I got Omnifood for the whole family, and it frees up so much
                time! Plus, everything is organic and vegan and without plastic.
              </blockquote>
              <p class="testimonial-name">&mdash;Hannah Smith</p>
            </figure>
          </div>
        </div>
        <div class="gallery">
          <figure class="gallery-item">
            <img
              src={require("./img/gallery/gallery-1.jpg")}
              alt="Photo of food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src={require("./img/gallery/gallery-2.jpg")}
              alt="Photo of food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src={require("./img/gallery/gallery-3.jpg")}
              alt="Photo of food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src={require("./img/gallery/gallery-4.jpg")}
              alt="Photo of food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src={require("./img/gallery/gallery-5.jpg")}
              alt="Photo of food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src={require("./img/gallery/gallery-6.jpg")}
              alt="Photo of food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src={require("./img/gallery/gallery-7.jpg")}
              alt="Photo of food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src={require("./img/gallery/gallery-8.jpg")}
              alt="Photo of food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src={require("./img/gallery/gallery-9.jpg")}
              alt="Photo of food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src={require("./img/gallery/gallery-10.jpg")}
              alt="Photo of food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src={require("./img/gallery/gallery-11.jpg")}
              alt="Photo of food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src={require("./img/gallery/gallery-12.jpg")}
              alt="Photo of food"
            />
          </figure>
        </div>
      </section>
      <section class="section-pricing">
        <div class="container">
          <span class="subheading"> PRICING</span>
          <h2 class="heading-secondary">
            Eating well without breaking the bank
          </h2>
        </div>
        <div class="grid grid--2-cols margin-bottom-md">
          <div class="pricing-plan pricing-plan--starter">
            <header class="plan-header">
              <p class="plan-name">Starter</p>
              <p class="plan-price">
                <span>$</span>399
              </p>
              <p class="plan-text">per month. That's just $13 per meal!</p>
            </header>
            <ul class="list">
              <li class="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>1 meal per day</span>
              </li>
              <li class="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>Order from 11am and 9pm</span>
              </li>
              <li class="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>Delivery is free</span>
              </li>
              <li class="list-item">
                <ion-icon class="list-icon" name="close-outline"></ion-icon>
                <span></span>
              </li>
            </ul>
            <div class="plan-sing-up">
              <a href="#" class="btn btn--full">
                Start eating well
              </a>
            </div>
          </div>
          <div class="pricing-plan pricing-plan-complete">
            <header class="plan-header">
              <p class="plan-name">Complete</p>
              <p class="plan-price">
                <span>$</span>649
              </p>
              <p class="plan-text">per month. That's just $11 per meal!</p>
            </header>
            <ul class="list">
              <li class="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>
                  <strong> 2 meals</strong> per day
                </span>
              </li>
              <li class="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>
                  {" "}
                  Order <strong>24/7</strong>
                </span>
              </li>
              <li class="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>Delivery is free</span>
              </li>
              <li class="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>Get access to latest recipes</span>
              </li>
            </ul>
            <div class="plan-sing-up">
              <a href="#" class="btn btn--full">
                Start eating well
              </a>
            </div>
          </div>
        </div>
        <div class="container grid">
          <aside class="plan-details">
            Prices include all applicable taxes. You can cancel at any time.
            Both plans also nclude next:
          </aside>
        </div>
        <div class="container grid grid--4-cols">
          <div class="feature">
            <ion-icon class="feature-icon" name="infinite-outline"></ion-icon>
            <p class="feature-title">Never cook again!</p>
            <p class="feature-text">
              Our subscriptions cover 365 days per year, even including major
              holidays.
            </p>
          </div>
          <div class="feature">
            <ion-icon class="feature-icon" name="nutrition-outline"></ion-icon>
            <p class="feature-title">Local and organic</p>
            <p class="feature-text">
              Our cooks only use local, fresh, and organic products to prepare
              your meals.
            </p>
          </div>
          <div class="feature">
            <ion-icon class="feature-icon" name="leaf-outline"></ion-icon>
            <p class="feature-title">No waste</p>
            <p class="feature-text">
              All our partners only use reusable containers to package all your
              meals.
            </p>
          </div>
          <div class="feature">
            <ion-icon class="feature-icon" name="pause-outline"></ion-icon>
            <p class="feature-title">Pause anytime</p>
            <p class="feature-text">
              Going on vacation? Just pause your subscription, and we refund
              unused days.
            </p>
          </div>
        </div>
      </section>
      <section class="section-cta">
        <div class="container">
          <div class="cta">
            <div class="cta-text-box">
              <h2 class="heading-secondary">Get your first meal for free</h2>
              <p class="cta-text">
                Healthy, tasty and hassle-free meals are waiting for you. Start
                eating well today. You can cancel or pause anytime. And the
                first meal is on us!
              </p>
              <form class="cta-form" action="#">
                <div>
                  <label for="full-name">Full Name</label>
                  <input
                    id="full-name"
                    type="text"
                    placeholder="Jonh Smith"
                    required
                  />
                </div>
                <div>
                  <label for="email">Email address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="me@email.com"
                    required
                  />
                </div>
                <div>
                  <label for="select-where">Where did you hear from us?</label>
                  <select name="" id="select-where" required>
                    <option value="">Please choose one option:</option>
                    <option value="friends">Friends and family</option>
                    <option value="youtube">YouTube video</option>
                    <option value="podcast">Podcast</option>
                    <option value="facebook">Facebook</option>
                  </select>
                </div>
                <button class="btn btn--form">Sign up now</button>
              </form>
            </div>
            <div
              class="cta-img-box"
              role="img"
              aria-label="Woman enjoying food"
            ></div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
